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
        location: "Katy, TX",
        email: "saikiranmandiga85@gmail.com",
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
        "Wireshark"
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
                if(!priceEl) return;
                
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
});
