const logOutput = document.getElementById('terminal-output');
const btnGenerate = document.getElementById('btn-generate');

function logAction(msg, status = "info") {
    const div = document.createElement('div');
    const color = status === "error" ? "text-red-500" : (status === "success" ? "text-green-400" : "text-gray-400");
    const prefix = status === "error" ? "[ERROR]" : (status === "success" ? "[SUCCESS]" : "[INFO]");
    div.className = color;
    div.innerText = `> ${prefix} ${new Date().toLocaleTimeString()} - ${msg}`;
    logOutput.appendChild(div);
    logOutput.scrollTop = logOutput.scrollHeight;
}

// Generates the filename (e.g. "Memory Forensics" -> "memory-forensics")
function generateSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

// Calculates estimated read time based on word count
function getReadTime(text) {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
}

// Encode to Base64 (Unicode Safe for GitHub API)
function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

// Decode from Base64 (Unicode Safe for GitHub API)
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

btnGenerate.addEventListener('click', async () => {
    const geminiKey = document.getElementById('gemini-key').value.trim();
    const githubToken = document.getElementById('github-token').value.trim();
    const topic = document.getElementById('article-topic').value.trim();
    const category = document.getElementById('article-category').value;
    const icon = document.getElementById('article-icon').value;

    if (!geminiKey || !githubToken || !topic) {
        logAction("Missing required credentials or topic.", "error");
        return;
    }

    const slug = generateSlug(topic);
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    
    btnGenerate.disabled = true;
    btnGenerate.innerText = "Processing Sequence...";

    try {
        // --- 1. CALL GEMINI API ---
        logAction(`Initiating Gemini API prompt for topic: ${topic}`);
        const geminiPrompt = `
        Act as a Senior Cybersecurity Engineer writing an operational knowledge base article for a portfolio website.
        Write a detailed operational article about "${topic}".
        Format the output using purely raw HTML meant to be injected into a <div>. Do not use Markdown backticks.
        Use standard HTML tags: <h2>, <h3>, <p>, <ul>, <li>.
        For code blocks or CLI commands, format them exactly like this:
        <div class="tech-block">
            <h4 class="text-[#0088ff] mb-2">Command Title</h4>
            <pre><code class="language-bash">the command here</code></pre>
        </div>
        Do NOT write the <html>, <head>, or <body> tags. Only the pure content. Do not include a Main Title h1. Start directly with an h2 or p.
        `;

        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${geminiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: geminiPrompt }] }]
            })
        });

        if (!geminiRes.ok) {
            const errorData = await geminiRes.text();
            throw new Error(`Gemini API Failed: HTTP ${geminiRes.status} - ${errorData}`);
        }
        const geminiData = await geminiRes.json();
        let generatedHtml = geminiData.candidates[0].content.parts[0].text;
        
        // Strip markdown backticks if Gemini accidentally included them
        generatedHtml = generatedHtml.replace(/^```html/gm, '').replace(/^```/gm, '').trim();
        const readTime = getReadTime(generatedHtml);

        logAction(`Gemini successfully generated ${generatedHtml.length} bytes of content.`, "success");

        // --- 2. FETCH TEMPLATE ---
        logAction(`Fetching _template.html from Github directly...`);
        const templateRes = await fetch(`https://raw.githubusercontent.com/saikiranmandiga/Cybersecurity/main/articles/_template.html`);
        if (!templateRes.ok) throw new Error("Failed to load template from github main branch.");
        let templateData = await templateRes.text();

        // Inject dynamic values into template
        templateData = templateData.replace(/<title>.*?<\/title>/, `<title>${topic} - SK Cyberops KB</title>`);
        templateData = templateData.replace(/<span id="tpl-category">.*?<\/span>/, `<span id="tpl-category" class="bg-[#0088ff]\/20 text-[#0088ff] border border-[#0088ff]\/30 px-2 py-1 rounded uppercase">${category}</span>`);
        templateData = templateData.replace(/<span id="tpl-readtime">.*?<\/span>/, `<span id="tpl-readtime" class="text-gray-500"><i class="fa-regular fa-clock mr-1"></i> ${readTime}</span>`);
        templateData = templateData.replace(/<span id="tpl-date">.*?<\/span>/, `<span id="tpl-date" class="text-gray-500"><i class="fa-regular fa-calendar mr-1"></i> ${dateStr}</span>`);
        templateData = templateData.replace(/<h1 id="tpl-title">.*?<\/h1>/, `<h1 id="tpl-title" class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">${topic}</h1>`);
        
        // Remove Subtitle for simplicity, or inject a placeholder
        templateData = templateData.replace(/<p id="tpl-subtitle">.*?<\/p>/, "");

        // Find the injection point via regex to replace the comment placeholder
        templateData = templateData.replace(/<!-- GEMINI INJECTION POINT -->[\s\S]*?<!-- END GEMINI INJECTION POINT -->/, generatedHtml);

        logAction(`Article assembled successfully.`);

        // --- 3. COMMIT NEW ARTICLE TO GITHUB ---
        const ghHeaders = {
            'Authorization': `Bearer ${githubToken}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        };

        logAction(`Connecting to GitHub API to create articles/${slug}.html...`);
        const articlePutRes = await fetch(`https://api.github.com/repos/saikiranmandiga/Cybersecurity/contents/articles/${slug}.html`, {
            method: 'PUT',
            headers: ghHeaders,
            body: JSON.stringify({
                message: `feat(kb): auto-generate article ${slug}`,
                content: b64EncodeUnicode(templateData),
                branch: 'main'
            })
        });

        if (!articlePutRes.ok) {
            const errDetails = await articlePutRes.text();
            throw new Error(`GitHub Article Commit Failed: ${errDetails}`);
        }
        logAction(`File pushed directly to repository main branch.`, "success");

        // --- 4. UPDATE CONFIG.JS PORTFOLIO REGISTRY ---
        logAction(`Fetching current config.js to update registry...`);
        const configGetRes = await fetch(`https://api.github.com/repos/saikiranmandiga/Cybersecurity/contents/config.js`, { headers: ghHeaders });
        if (!configGetRes.ok) throw new Error("Could not fetch config.js from repo.");
        
        const configFileData = await configGetRes.json();
        let configText = b64DecodeUnicode(configFileData.content);
        const configSha = configFileData.sha;

        // Build the new object string manually
        const newEntry = `
        {
            id: "${slug}",
            title: "${topic}",
            category: "${category}",
            readTime: "${readTime}",
            date: "${dateStr}",
            file: "articles/${slug}.html",
            icon: "${icon}"
        }`;

        // Regex append the new entry to the end of the knowledgeBase array
        configText = configText.replace(/(knowledgeBase:\s*\[[\s\S]*?)(\s*\]\s*};)/, `$1,${newEntry}$2`);

        logAction(`Updating remote config.js with new article registry...`);
        const configPutRes = await fetch(`https://api.github.com/repos/saikiranmandiga/Cybersecurity/contents/config.js`, {
            method: 'PUT',
            headers: ghHeaders,
            body: JSON.stringify({
                message: `feat(kb): registry updated with ${slug}`,
                content: b64EncodeUnicode(configText),
                sha: configSha,
                branch: 'main'
            })
        });

        if (!configPutRes.ok) throw new Error("Failed to update config.js array on GitHub.");

        logAction(`All operations completed successfully! GitHub Actions is now building the site.`, "success");
        
        // Reset button
        btnGenerate.innerHTML = `<i class="fa-solid fa-check mr-2"></i> Injection Complete`;
        btnGenerate.className = "w-full mt-4 bg-green-900/40 text-green-400 border border-green-500/50 py-3 rounded font-mono font-bold";

    } catch (err) {
        logAction(err.message, "error");
        btnGenerate.disabled = false;
        btnGenerate.innerText = "Retry Failed Sequence";
    }
});
