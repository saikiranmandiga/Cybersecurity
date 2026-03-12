// Portfolio Configuration File
// Edit the strings below to update your website content without touching HTML.

const portfolioConfig = {
    // Identity & Branding
    name: "Sahasra Saikiran Mandiga",
    title: "Cybersecurity Engineer",
    subtitle: "Sr. Cybersecurity Consultant",
    tagline: "Vigilant Defense. Resilient Operations.",

    // Contact Information
    contact: {
        location: "Houston, TX",
        email: "saikiranmandiga@skcyberops.com",
        phone: "6303283679"
    },

    // Certifications (Format: array of strings)
    certifications: [
        "CISM",
        "CEH",
        "Security+",
        "AWS SysOps Admin"
    ],

    // Core Tech Stack (Format: array of strings)
    coreTech: [
        "Palo Alto",
        "AWS Cloud Security",
        "Splunk",
        "Tenable",
        "CyberArk"
    ],

    // Homelab & Infrastructure Projects
    projects: [
        {
            title: "Enterprise Architecture Simulation",
            description: "Engineered comprehensive homelab environments to deploy, test, and validate security postures against advanced persistent threats.",
            icon: "fa-shield-halved" // FontAwesome icon class
        },
        {
            title: "PKI & Firewall Management",
            description: "Automated SSL certificate renewals across domains and practiced centralized firewall policy management replicating enterprise Panorama setups.",
            icon: "fa-certificate"
        }
    ],

    // Professional Experience (Mission Logs)
    experience: [
        {
            company: "Academy Sports & Outdoors",
            role: "Cybersecurity Engineer",
            ticker: "NASDAQ: ASO",
            stockSymbol: "ASO",
            basePrice: 54.32,
            icon: "fa-fire-extinguisher",
            color: "#00ffcc",
            description: "Configured and managed <strong class='text-white'>Palo Alto firewalls</strong> centrally through <strong class='text-white'>Panorama M-500</strong>. Implemented Global Protect VPNs ensuring secure remote access. Administered privileged access management (PAM) utilizing <strong class='text-white'>CyberArk</strong>, significantly reducing insider threat vectors."
        },
        {
            company: "JP Morgan Chase",
            role: "Sr. Cybersecurity Consultant",
            ticker: "NYSE: JPM",
            stockSymbol: "JPM",
            basePrice: 196.48,
            icon: "fa-building-columns",
            color: "#0088ff",
            description: "Automated vulnerability detection workflows and compliance reporting by integrating <strong class='text-white'>Splunk</strong> analytics with <strong class='text-white'>Qualys</strong> vulnerability management suites, enhancing incident detection speeds across financial perimeters."
        }
    ],

    // Knowledge Base Articles Registry
    knowledgeBase: [
        {
            id: "cert-formats",
            title: "Understanding Certificate File Formats",
            category: "Cryptography",
            readTime: "10 min read",
            date: "Oct 24, 2023",
            file: "articles/cert-formats.html",
            icon: "fa-certificate"
        },
        {
            id: "pcap-analysis",
            title: "PCAP Analysis Basics",
            category: "Network Forensics",
            readTime: "15 min read",
            date: "Nov 02, 2023",
            file: "articles/pcap-analysis.html",
            icon: "fa-network-wired"
        },
        {
            id: "firewall-syntax",
            title: "Firewall Rule Syntax",
            category: "SecOps",
            readTime: "8 min read",
            date: "Nov 15, 2023",
            file: "articles/firewall-syntax.html",
            icon: "fa-shield-halved"
        },
        {
            id: "palo-alto-packet-flow",
            title: "Palo Alto Architecture & Packet Flow",
            category: "Network Security",
            readTime: "8 min read",
            date: "March 11, 2026",
            file: "articles/Paloalto-packet-flow.html",
            icon: "fa-server"
        },
        {
            id: "what-is-adcs",
            title: "what is ADCS",
            category: "Cryptography",
            readTime: "6 min read",
            date: "Mar 11, 2026",
            file: "articles/what-is-adcs.html",
            icon: "fa-microchip"
        },
        {
            id: "47-day-cert-timeline",
            title: "The 47-Day Certificate Timeline: Understanding SC-081v3",
            category: "PKI & Security",
            readTime: "6 min read",
            date: "Mar 11, 2026",
            file: "articles/47-day-cert-timeline.html",
            icon: "fa-clock-rotate-left"
        },
        {
            id: "devsecops-in-2026",
            title: "DevSecops in 2026",
            category: "SecOps",
            readTime: "6 min read",
            date: "Mar 12, 2026",
            file: "articles/devsecops-in-2026.html",
            icon: "fa-network-wired"
        },
        {
            id: "fortigate-architecture-packet-flow",
            title: "Fortigate Architecture & Packet FLow",
            category: "Network Security",
            readTime: "8 min read",
            date: "Mar 12, 2026",
            file: "articles/fortigate-architecture-packet-flow.html",
            icon: "fa-network-wired"
        },
        {
            id: "how-paloalo-firewall-are-next-gen-firewalls-using-user-id-content-id-app-id-technology-compared-to-other-competitors",
            title: "How Paloalo firewall are next gen firewalls using user-id content-id app-id technology compared to other competitors?",
            category: "Network Security",
            readTime: "8 min read",
            date: "Mar 12, 2026",
            file: "articles/how-paloalo-firewall-are-next-gen-firewalls-using-user-id-content-id-app-id-technology-compared-to-other-competitors.html",
            icon: "fa-network-wired"
        }
    ]
};

// --- DATA BINDING LOGIC --- //
// This function maps the config above to the HTML elements on the page.
document.addEventListener('DOMContentLoaded', () => {

    // Helper to safely set text content
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    // 1. Identity binding
    setText('cfg-name', portfolioConfig.name);
    setText('cfg-title', portfolioConfig.title);
    setText('cfg-subtitle', portfolioConfig.subtitle);
    setText('cfg-tagline', portfolioConfig.tagline);

    // 2. Contact binding
    setText('cfg-location', portfolioConfig.contact.location);
    setText('cfg-email', portfolioConfig.contact.email);
    setText('cfg-phone', portfolioConfig.contact.phone);

    // 3. Certifications binding
    const certContainer = document.getElementById('cfg-certifications');
    if (certContainer) {
        certContainer.innerHTML = '';
        portfolioConfig.certifications.forEach(cert => {
            certContainer.innerHTML += `<span class="px-3 py-1 bg-black/50 border border-[#00ffcc] text-[#00ffcc] text-xs font-bold rounded-sm uppercase tracking-wider">${cert}</span>`;
        });
    }

    // 4. Core Tech binding
    const techContainer = document.getElementById('cfg-coretech');
    if (techContainer) {
        techContainer.innerHTML = '';
        portfolioConfig.coreTech.forEach(tech => {
            techContainer.innerHTML += `<span class="px-3 py-1 bg-[#0f172a] border border-gray-600 text-gray-300 text-xs rounded-sm">${tech}</span>`;
        });
    }

    // 5. Projects binding
    const projectsContainer = document.getElementById('cfg-projects');
    if (projectsContainer) {
        projectsContainer.innerHTML = '';
        portfolioConfig.projects.forEach(proj => {
            projectsContainer.innerHTML += `
                <div class="flex items-start gap-3 bg-black/40 p-3 rounded border border-gray-800 hover:border-[#00ffcc]/50 transition-colors">
                    <i class="fa-solid ${proj.icon} mt-1 text-[#0088ff]"></i>
                    <div>
                        <strong class="text-white block mb-1">${proj.title}</strong>
                        <p>${proj.description}</p>
                    </div>
                </div>
            `;
        });
    }

    // 6. Experience binding
    const expContainer = document.getElementById('cfg-experience');
    if (expContainer) {
        expContainer.innerHTML = '';
        portfolioConfig.experience.forEach((exp, idx) => {
            // Setup dynamic ID for stock ticker
            const priceId = `stock-price-${idx}`;

            expContainer.innerHTML += `
                <article class="physics-item p-5 glass-panel border-l-4 hover:bg-white/5 transition-colors relative overflow-hidden" style="border-left-color: ${exp.color}">
                    <div class="absolute top-0 right-0 p-2 opacity-10"><i class="fa-solid ${exp.icon} text-6xl"></i></div>
                    <div class="flex justify-between items-start mb-1">
                        <h4 class="text-xl font-bold text-white relative z-10">${exp.company}</h4>
                        <div class="bg-black/60 border border-gray-700 px-2 py-1 rounded flex flex-col items-end shrink-0 relative z-10">
                            <span class="text-[10px] text-gray-400 mono leading-none uppercase">${exp.ticker.split(':')[0]}: <strong class="text-white">${exp.stockSymbol}</strong></span>
                            <div id="${priceId}-container" class="text-xs font-bold font-mono text-green-400 flex items-center mt-0.5">
                                <span id="${priceId}">${exp.basePrice}</span> <i id="${priceId}-icon" class="fa-solid fa-caret-up ml-1 text-[10px]"></i>
                            </div>
                        </div>
                    </div>
                    <p class="mono text-sm uppercase tracking-wider mb-3 relative z-10" style="color: ${exp.color}">${exp.role}</p>
                    <p class="text-gray-300 text-sm leading-relaxed relative z-10">
                        ${exp.description}
                    </p>
                </article>
            `;

            // Initialize Stock Ticker simulation for this item
            setInterval(() => {
                const priceEl = document.getElementById(priceId);
                if (!priceEl) return;

                let current = parseFloat(priceEl.innerText);
                let change = (Math.random() * 0.8) - 0.35; // slight upward bias
                let newPrice = (current + change).toFixed(2);
                priceEl.innerText = newPrice;

                const containerEl = document.getElementById(`${priceId}-container`);
                const iconEl = document.getElementById(`${priceId}-icon`);

                if (change >= 0) {
                    containerEl.className = 'text-xs font-bold font-mono text-green-400 flex items-center mt-0.5';
                    iconEl.className = 'fa-solid fa-caret-up ml-1 text-[10px]';
                } else {
                    containerEl.className = 'text-xs font-bold font-mono text-red-500 flex items-center mt-0.5';
                    iconEl.className = 'fa-solid fa-caret-down ml-1 text-[10px]';
                }
            }, 3000 + (Math.random() * 1000));
        });
    }

    // 7. Knowledge Base Grid (Index Page)
    const kbGrid = document.getElementById('kb-grid');
    if (kbGrid && portfolioConfig.knowledgeBase) {
        kbGrid.innerHTML = '';
        portfolioConfig.knowledgeBase.forEach(article => {
            // If on the index page, we need 'articles/' prefix. If already in articles/, we need just the filename.
            const isIndexPage = window.location.pathname.endsWith('knowledge-base.html');
            const linkTarget = isIndexPage ? article.file : "../" + article.file;

            kbGrid.innerHTML += `
                <a href="${linkTarget}" class="glass-panel p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 border-t border-[#0088ff]/30 hover:border-[#00ffcc] group block">
                    <div class="flex justify-between items-start mb-4">
                        <div class="w-12 h-12 rounded-full bg-black/50 border border-gray-700 flex items-center justify-center text-xl text-[#0088ff] group-hover:text-[#00ffcc] transition-colors">
                            <i class="fa-solid ${article.icon}"></i>
                        </div>
                        <span class="text-xs font-mono text-gray-500">${article.date}</span>
                    </div>
                    <span class="inline-block px-2 py-1 bg-white/5 border border-gray-700 rounded text-[10px] uppercase tracking-wider mono text-gray-400 mb-3">${article.category}</span>
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-[#00ffcc] transition-colors">${article.title}</h3>
                    <div class="flex items-center text-xs text-gray-500 mono mt-4">
                        <i class="fa-regular fa-clock mr-1"></i> ${article.readTime}
                        <span class="ml-auto text-[#0088ff] group-hover:text-[#00ffcc]">Read Article <i class="fa-solid fa-arrow-right ml-1"></i></span>
                    </div>
                </a>
            `;
        });
    }

    // 8. Knowledge Base Sidebar Directory (Article Pages)
    const sidebarDir = document.getElementById('sidebar-directory');
    if (sidebarDir && portfolioConfig.knowledgeBase) {
        sidebarDir.innerHTML = '';
        const currentFile = window.location.pathname.split('/').pop();

        portfolioConfig.knowledgeBase.forEach(article => {
            const linkTarget = "../" + article.file;
            const isCurrent = article.file.endsWith(currentFile);
            const activeClass = isCurrent ? "text-[#00ffcc] bg-white/5" : "text-gray-400 hover:text-white hover:bg-white/5";

            sidebarDir.innerHTML += `
                <li>
                    <a href="${linkTarget}" class="block w-full text-left py-2 px-3 rounded transition-colors ${activeClass}">
                        <i class="fa-solid ${article.icon} mr-2 opacity-70"></i> ${article.title}
                    </a>
                </li>
            `;
        });
    }

});
