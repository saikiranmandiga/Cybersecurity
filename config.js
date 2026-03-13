// Portfolio Configuration File
// Edit the strings below to update your website content without touching HTML.

const portfolioConfig = {
    // Identity & Branding
    name: "Sahasra Saikiran Mandiga",
    title: "Cybersecurity Engineer",
    subtitle: " ",
    tagline: "Vigilant Defense. Resilient Operations.",

    // Contact Information
    contact: {
        location: "Houston, TX",
        email: "saikiranmandiga@skcyberops.com",
        phone: "4702107747"
    },

    // Certifications (Format: array of objects with name and brandDomain)
    certifications: [
        { name: "CISM", brandDomain: "isaca.org" },
        { name: "CEH", brandDomain: "eccouncil.org" },
        { name: "Security+", brandDomain: "comptia.org" },
        { name: "AWS SysOps Admin", brandDomain: "aws.amazon.com" }
    ],

    // Core Tech Stack (Format: array of items with name and brandDomain)
    coreTech: [
        { name: "Palo Alto Networks", brandDomain: "paloaltonetworks.com" },
        { name: "Cisco Systems", brandDomain: "cisco.com" },
        { name: "Fortinet", brandDomain: "fortinet.com" },
        { name: "Check Point", brandDomain: "checkpoint.com" },
        { name: "Zscaler", brandDomain: "zscaler.com" },
        { name: "Splunk", brandDomain: "splunk.com" },
        { name: "CrowdStrike", brandDomain: "crowdstrike.com" },
        { name: "Tenable", brandDomain: "tenable.com" },
        { name: "CyberArk", brandDomain: "cyberark.com" },
        { name: "Microsoft Defender", brandDomain: "microsoft.com" },
        { name: "AWS Security", brandDomain: "aws.amazon.com" }
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
            brandDomain: "academy.com",
            role: "Cybersecurity Engineer",
            ticker: "NASDAQ: ASO",
            stockSymbol: "ASO",
            basePrice: 54.32,
            icon: "fa-fire-extinguisher",
            color: "#00ffcc",
            period: "Present (Houston, TX)",
            description: "Configured and managed <strong class='text-white'>Palo Alto firewalls</strong> centrally through <strong class='text-white'>Panorama M-500</strong>. Implemented Global Protect VPNs ensuring secure remote access. Administered privileged access management (PAM) utilizing <strong class='text-white'>CyberArk</strong>, significantly reducing insider threat vectors.",
            bullets: []
        },
        {
            company: "JP Morgan Chase",
            brandDomain: "jpmorganchase.com",
            role: "Sr. Cybersecurity Consultant",
            ticker: "NYSE: JPM",
            stockSymbol: "JPM",
            basePrice: 196.48,
            icon: "fa-building-columns",
            color: "#0088ff",
            period: "(Houston, TX)",
            description: "Automated vulnerability detection workflows and compliance reporting by integrating <strong class='text-white'>Splunk</strong> analytics with <strong class='text-white'>Qualys</strong> vulnerability management suites, enhancing incident detection speeds across financial perimeters.",
            bullets: []
        },
        {
            company: "BNP Paribas",
            brandDomain: "bnpparibas.com",
            role: "IT Risk Management Consultant",
            ticker: "EPA: BNP",
            stockSymbol: "BNP.PA",
            basePrice: 65.80,
            icon: "fa-landmark",
            color: "#00a651",
            period: "May 2021 – Sep 2021 · Mumbai, India",
            description: "Led IT risk management initiatives across application and infrastructure security for new IT projects at one of Europe's largest financial institutions.",
            bullets: [
                "Application and infrastructure security risk assessment for new IT Projects.",
                "Assessment for a major change in the application and infrastructure.",
                "Register and track security recommendations & security exceptions.",
                "Second-level review on security exceptions raised by business units.",
                "Support product teams by conducting design reviews, threat modeling, security testing, and code reviews.",
                "Monitoring compliance with NIST SP 800-53, ISO 27001, NERC, and other security frameworks.",
                "Communicate effectively with both technical and non-technical individuals at all levels of the organization.",
                "Assess risk of proposed changes to infrastructure, code, and connectivity.",
                "Determine security violations and inefficiencies by conducting periodic audits.",
                "Act as technical information security reviewer of performance reports, operating procedures and other documents."
            ]
        },
        {
            company: "IDFC First Bank",
            brandDomain: "idfcfirstbank.com",
            role: "Cybersecurity Analyst",
            ticker: "NSE: IDFCFIRSTB",
            stockSymbol: "IDFCFIRSTB.NS",
            basePrice: 72.50,
            icon: "fa-shield-halved",
            color: "#ef4444",
            period: "Dec 2019 – May 2021 · Mumbai, India",
            description: "Secured enterprise banking infrastructure, managing firewall architectures and endpoint security across one of India's fastest-growing private sector banks.",
            bullets: [
                "Collaborate with network architects and security teams to develop firewall architecture and design solutions based on business requirements.",
                "Analyze network traffic patterns and security needs to determine firewall placement and rule configuration.",
                "Configure firewall policies, including interfaces, zones, security policies, NAT rules, and VPN tunnels.",
                "Implement and maintain high availability and redundancy configurations.",
                "Implementing McAfee Active Response (EDR Solution) across Workstation and test servers.",
                "Investigate and troubleshoot firewall-related issues including connectivity, access control, and VPN problems.",
                "Monitored client network with McAfee Threat Analyzer; used Tripwire IP 360 for vulnerability scanning.",
                "Worked on log management using Tripwire Console and Tripwire Enterprise file integrity solutions.",
                "Configured ArcSight connectors and loggers to add missing assets in ArcSight.",
                "Worked with SIEM solutions: Rapid7 Nexpose, Forcepoint, and Splunk.",
                "Direct experience monitoring, configuring, and maintaining enterprise-level proxy: McAfee Web Gateway, Cisco Iron Port WSA-S690."
            ]
        },
        {
            company: "Capital First Bank",
            brandDomain: "capitalfirst.com",
            role: "Jr. Information Security Analyst",
            ticker: "NSE: CAPF",
            stockSymbol: null,
            basePrice: null,
            icon: "fa-shield",
            color: "#f59e0b",
            period: "Aug 2018 – Dec 2019 · Mumbai, India",
            description: "Launched career in information security at Capital First (now merged into IDFC First Bank), managing endpoint security and vulnerability programs across enterprise environments.",
            bullets: [
                "Configure vulnerability scans tailored to specific client requirements.",
                "Produce vulnerability assessment reports and distribute to IT Support teams for remediation.",
                "Produce weekly and monthly security reporting for threat and vulnerability management services.",
                "Perform policy compliance scans and deliver reports to technology owners.",
                "Contributed to vulnerability management by identifying technical risks: SAST/DAST scans, container security, and SCAP baselines.",
                "Identify and resolve false-positive findings in assessment results.",
                "Central tracking and management of enterprise vulnerabilities.",
                "Centralized management of anti-virus software (McAfee ePO) and the entire McAfee endpoint suite.",
                "Installation and maintenance of host-based security systems (Endpoint security) on McAfee ePO Server.",
                "Disk/File Encryption, Data Loss Prevention Management, Endpoint Detection Response.",
                "Detect security issues, create customer tickets, and manage problems until closure."
            ]
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
            const logoUrl = `https://cdn.brandfetch.io/domain/${cert.brandDomain}?c=1idACOz1x5eksqnaYUr`;
            certContainer.innerHTML += `
                <div class="skill-pill" style="border-radius: 8px; padding: 6px 12px; border: 1px solid rgba(0,255,204,0.3);">
                    <div class="skill-pill-icon" style="background: rgba(0,255,204,0.1); width: 28px; height: 28px; border-radius: 6px;">
                        <img src="${logoUrl}" alt="${cert.name}" style="width:20px; height:20px; object-fit:contain; filter:drop-shadow(0 0 5px rgba(255,255,255,0.1))">
                    </div>
                    <span class="text-[#00ffcc] text-[11px] font-bold uppercase tracking-wider">${cert.name}</span>
                </div>`;
        });
    }

    // 4. Core Tech binding
    const techContainer = document.getElementById('cfg-coretech');
    if (techContainer) {
        techContainer.innerHTML = '';
        portfolioConfig.coreTech.forEach(tech => {
            const logoUrl = `https://cdn.brandfetch.io/domain/${tech.brandDomain}?c=1idACOz1x5eksqnaYUr`;
            techContainer.innerHTML += `
                <div class="skill-pill" style="border-radius: 6px; padding: 4px 10px; opacity: 0.8;">
                    <div class="skill-pill-icon" style="width: 24px; height: 24px;">
                        <img src="${logoUrl}" alt="${tech.name}" style="width:18px; height:18px; object-fit:contain;">
                    </div>
                    <span class="text-gray-300 text-xs">${tech.name}</span>
                </div>`;
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

            const brandLogo = exp.brandDomain ? `<img src="https://cdn.brandfetch.io/domain/${exp.brandDomain}/w/128/h/128?c=1idACOz1x5eksqnaYUr" class="w-12 h-12 object-contain bg-white/5 p-1 rounded-lg border border-white/10" alt="${exp.company}">` : `<i class="fa-solid ${exp.icon} text-6xl"></i>`;


            const bulletsHtml = (exp.bullets && exp.bullets.length > 0)
                ? `<ul class="mt-3 space-y-1.5 relative z-10">${exp.bullets.map(b => `<li class="flex items-start gap-2 text-gray-300 text-sm"><i class="fa-solid fa-chevron-right text-[10px] mt-1 shrink-0" style="color: ${exp.color}"></i>${b}</li>`).join('')}</ul>`
                : '';

            const stockHtml = exp.stockSymbol
                ? `<div id="${priceId}-container" class="text-xs font-bold font-mono text-green-400 flex items-center mt-0.5">
                       <span id="${priceId}">${exp.basePrice ? '$' + exp.basePrice.toFixed(2) : '---'}</span>
                       <i id="${priceId}-icon" class="fa-solid fa-caret-up ml-1 text-[10px]"></i>
                   </div>`
                : `<div class="text-xs font-mono text-gray-500 mt-0.5">Acquired · IDFC First</div>`;

            expContainer.innerHTML += `
                <article class="physics-item p-5 glass-panel border-l-4 hover:bg-white/5 transition-colors relative overflow-hidden" style="border-left-color: ${exp.color}">
                    <div class="absolute top-0 right-0 p-2 opacity-10"><i class="fa-solid ${exp.icon} text-6xl"></i></div>
                    <div class="flex justify-between items-start mb-1 relative z-10">
                        <div class="flex items-center gap-4">
                            ${brandLogo}
                            <div>
                                <h4 class="text-xl font-bold text-white">${exp.company}</h4>
                                ${exp.period ? `<p class="text-gray-500 text-xs mono">${exp.period}</p>` : ''}
                            </div>
                        </div>
                        <div class="bg-black/60 border border-gray-700 px-2 py-1 rounded flex flex-col items-end shrink-0">
                            <span class="text-[10px] text-gray-400 mono leading-none uppercase">${exp.ticker.split(':')[0]}: <strong class="text-white">${exp.stockSymbol || exp.ticker.split(': ')[1]}</strong></span>
                            ${stockHtml}
                        </div>
                    </div>
                    <p class="mono text-sm uppercase tracking-wider mb-3 relative z-10" style="color: ${exp.color}">${exp.role}</p>
                    <p class="text-gray-300 text-sm leading-relaxed relative z-10">${exp.description}</p>
                    ${bulletsHtml}
                </article>
            `;

            // Fetch live price from Yahoo Finance (no API key needed)
            if (exp.stockSymbol) {
                (function(symbol, pid, base) {
                    function updatePrice(price, prev) {
                        const el = document.getElementById(pid);
                        const ci = document.getElementById(pid + '-container');
                        const ic = document.getElementById(pid + '-icon');
                        if (!el || !ci || !ic) return;
                        const isUp = price >= prev;
                        el.textContent = '$' + price.toFixed(2);
                        ci.className = 'text-xs font-bold font-mono flex items-center mt-0.5 ' + (isUp ? 'text-green-400' : 'text-red-500');
                        ic.className = 'fa-solid ml-1 text-[10px] ' + (isUp ? 'fa-caret-up' : 'fa-caret-down');
                    }
                    let lastPrice = base || 100;
                    function fetchPrice() {
                        fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`)
                            .then(r => r.json())
                            .then(d => {
                                const p = d?.chart?.result?.[0]?.meta?.regularMarketPrice;
                                if (p) { updatePrice(p, lastPrice); lastPrice = p; }
                            })
                            .catch(() => {
                                // Fallback: simulate small fluctuation on the base price
                                const delta = (Math.random() * 0.8) - 0.35;
                                lastPrice = parseFloat((lastPrice + delta).toFixed(2));
                                updatePrice(lastPrice, lastPrice - delta);
                            });
                    }
                    fetchPrice();
                    setInterval(fetchPrice, 60000); // refresh every 60s
                })(exp.stockSymbol, priceId, exp.basePrice);
            }
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
