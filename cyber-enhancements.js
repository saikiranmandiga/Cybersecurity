/* ============================================================
   CYBER ENHANCEMENTS — Boot Screen | Skills Marquee
   ============================================================ */
(function() {

/* ── 1. BOOT SCREEN ────────────────────────────────────────── */
const HAS_BOOTED = localStorage.getItem('cyberops_booted');

if (!HAS_BOOTED) {
  document.body.insertAdjacentHTML('afterbegin', `
  <!-- BOOT SCREEN -->
  <div id="boot-screen">
    <div class="boot-grid"></div>
    <div class="boot-vignette"></div>
    <div class="boot-content">
      <div class="boot-badge">
        <span><span class="boot-pulse"></span>SK CYBEROPS // SECURE ACCESS PROTOCOL<span class="boot-pulse"></span></span>
      </div>
      <div class="boot-ip-card">
        <p class="boot-ip-label">// Remote Host Identification</p>
        <div class="boot-ip-grid">
          <div class="boot-ip-item"><p>IPv4 Address</p><p id="boot-ip-val">RESOLVING...</p></div>
          <div class="boot-ip-item"><p>Origin</p><p id="boot-country-val">---</p></div>
          <div class="boot-ip-item"><p>Network</p><p id="boot-org-val">---</p></div>
        </div>
      </div>
      <div class="boot-terminal">
        <div class="boot-term-bar">
          <span class="btn-dot" style="background:#ff003c"></span>
          <span class="btn-dot" style="background:#eab308"></span>
          <span class="btn-dot" style="background:#00ffcc"></span>
          <span class="boot-term-title">cyberops@saikiran:~ SecureConnect</span>
        </div>
        <div id="boot-log"></div>
      </div>
      <div class="boot-progress-row"><span>Security Protocol</span><span id="boot-pct">0%</span></div>
      <div class="boot-bar-track"><div id="boot-bar"></div></div>
    </div>
  </div>
  `);

  /* ── 2. BOOT SEQUENCE ─────────────────────────────────────── */
  const STEPS = [
    { label: 'INITIALIZING SECURE CHANNEL',   detail: 'Establishing TLS 1.3 handshake...' },
    { label: 'VALIDATING ORIGIN CERTIFICATE', detail: 'Checking X.509 chain integrity...' },
    { label: 'GEOLOCATING REMOTE HOST',       detail: 'Querying GeoIP database...' },
    { label: 'RUNNING FIREWALL INSPECTION',   detail: 'Deep packet inspection — zero threats detected' },
    { label: 'ANALYZING NETWORK TOPOLOGY',    detail: 'BGP route trace complete — 3 hops secured' },
    { label: 'SCANNING FOR ACTIVE THREATS',   detail: 'CVE lookup finished — environment clean' },
    { label: 'AUTHENTICATING OPERATIVE',      detail: 'Biometric + behavioral token issued' },
    { label: 'ACCESS GRANTED',                detail: 'Clearance level: PRIORITY_ALPHA' },
  ];
  const DURATIONS = [700, 800, 950, 850, 800, 900, 700, 600];

  const bootLog    = document.getElementById('boot-log');
  const bootBar    = document.getElementById('boot-bar');
  const bootPct    = document.getElementById('boot-pct');
  const bootScreen = document.getElementById('boot-screen');

  // Fetch IP
  fetch('/api/visitor-ip')
    .then(r => r.json())
    .then(d => {
      document.getElementById('boot-ip-val').textContent      = d.ip      || 'CLASSIFIED';
      document.getElementById('boot-country-val').textContent = d.country  || '---';
      document.getElementById('boot-org-val').textContent     = (d.org     || '---').slice(0,28);
    })
    .catch(() => {
      fetch('https://api.ipify.org?format=json')
        .then(r => r.json())
        .then(d => {
          document.getElementById('boot-ip-val').textContent = d.ip || 'CLASSIFIED';
          return fetch(`https://ipapi.co/${d.ip}/json/`);
        })
        .then(r => r.json())
        .then(d => {
          document.getElementById('boot-country-val').textContent = d.country_name || '---';
          document.getElementById('boot-org-val').textContent     = (d.org || '---').slice(0,28);
        })
        .catch(() => {
          document.getElementById('boot-ip-val').textContent = 'CLASSIFIED';
        });
    });

  let stepIdx = 0;
  let typeInt  = null;
  let activeDiv = null;

  function typeDetail(text, el) {
    let i = 0;
    if (typeInt) clearInterval(typeInt);
    el.innerHTML = '';
    typeInt = setInterval(() => {
      i++;
      el.innerHTML = text.slice(0, i) + '<span class="blink">_</span>';
      if (i >= text.length) clearInterval(typeInt);
    }, 22);
  }

  function runStep(idx) {
    if (idx >= STEPS.length) {
      bootLog.insertAdjacentHTML('beforeend',
        `<div class="boot-step"><span class="boot-step-ok">✓</span><span class="boot-step-label" style="color:#00ffcc">ACCESS GRANTED — LOADING OPERATIVE PROFILE...</span></div>`);
      setTimeout(() => {
        bootScreen.classList.add('hidden');
        localStorage.setItem('cyberops_booted', 'true');
        setTimeout(() => bootScreen.remove(), 800);
      }, 400);
      return;
    }
    const step = STEPS[idx];
    bootBar.style.width = Math.round((idx / STEPS.length) * 100) + '%';
    bootPct.textContent  = Math.round((idx / STEPS.length) * 100) + '%';

    if (activeDiv && idx > 0) {
      const prev = STEPS[idx-1];
      activeDiv.innerHTML = `<span class="boot-step-ok">✓</span><div><span class="boot-step-text">${prev.label}</span> <span class="boot-step-detail">${prev.detail}</span></div><span style="color:#00ffcc;font-size:10px;margin-left:auto">OK</span>`;
    }
    activeDiv = document.createElement('div');
    activeDiv.className = 'boot-step';
    activeDiv.innerHTML = `<span class="boot-step-act" style="animation:bPulse .5s infinite">›</span><div><span class="boot-step-label">${step.label}</span><br><span id="boot-typing" class="boot-step-detail"></span></div>`;
    bootLog.appendChild(activeDiv);
    bootLog.scrollTop = bootLog.scrollHeight;
    typeDetail(step.detail, document.getElementById('boot-typing'));

    setTimeout(() => { stepIdx++; runStep(stepIdx); }, DURATIONS[idx]);
  }

  setTimeout(() => runStep(stepIdx), 300);

  const totalDur = DURATIONS.reduce((a,b) => a+b, 0) + 300;
  setTimeout(() => { bootBar.style.width='100%'; bootPct.textContent='100%'; }, totalDur);
}


/* ── 3. SKILLS DATA ───────────────────────────────────────── */
const SKILLS = {
  'NGFW': [
    { name:'Palo Alto PA-5250', brandDomain:'paloaltonetworks.com', pct:95 },
    { name:'Panorama M-500',    brandDomain:'paloaltonetworks.com', pct:92 },
    { name:'Cisco FTD',         brandDomain:'cisco.com', simpleicon:'cisco', color:'1BA0D7', bg:'rgba(27,160,215,.1)', pct:88 },
    { name:'Cisco ASA',         brandDomain:'cisco.com', simpleicon:'cisco', color:'1BA0D7', bg:'rgba(27,160,215,.1)', pct:85 },
    { name:'FortiGate NGFW',    brandDomain:'fortinet.com', simpleicon:'fortinet', color:'EE3124', bg:'rgba(238,49,36,.1)', pct:82 },
    { name:'Check Point QSG',   brandDomain:'checkpoint.com', simpleicon:'checkpoint', color:'D40000', bg:'rgba(212,0,0,.1)', pct:80 },
    { name:'Zscaler',           brandDomain:'zscaler.com', pct:85 },
    { name:'Prisma Access',     brandDomain:'paloaltonetworks.com', pct:83 },
    { name:'AWS Network FW',    brandDomain:'amazon.com', icon:'devicon-amazonwebservices-plain', bg:'rgba(255,153,0,.15)', pct:80 },
  ],
  'EDR': [
    { name:'Cortex XDR',          brandDomain:'paloaltonetworks.com', pct:92 },
    { name:'CrowdStrike Falcon',  brandDomain:'crowdstrike.com', pct:90 },
    { name:'MS Defender / MDE',   brandDomain:'microsoft.com', icon:'devicon-windows8-original', bg:'rgba(0,114,198,.15)', pct:88 },
    { name:'McAfee ePO',          brandDomain:'mcafee.com', simpleicon:'mcafee', color:'C0001A', bg:'rgba(192,0,26,.1)', pct:80 },
  ],
  'DLP': [
    { name:'Forcepoint DLP',  brandDomain:'forcepoint.com', pct:90 },
    { name:'Symantec DLP',    brandDomain:'broadcom.com', pct:85 },
    { name:'McAfee Total DLP',brandDomain:'mcafee.com', simpleicon:'mcafee', color:'C0001A', bg:'rgba(192,0,26,.1)', pct:82 },
    { name:'MS Purview',      brandDomain:'microsoft.com', icon:'devicon-azure-plain', bg:'rgba(0,114,198,.15)', pct:83 },
  ],
  'CLOUD': [
    { name:'AWS IAM / KMS', brandDomain:'amazon.com', icon:'devicon-amazonwebservices-plain', bg:'rgba(255,153,0,.15)', pct:92 },
    { name:'Wiz',           brandDomain:'wiz.io', pct:88 },
    { name:'Prisma Cloud',  brandDomain:'paloaltonetworks.com', pct:87 },
    { name:'Orca Security', brandDomain:'orcasecurity.io', simpleicon:'orcasecurity', color:'6E45E2', bg:'rgba(110,69,226,.1)', pct:83 },
  ],
  'SOC': [
    { name:'Splunk ES',    brandDomain:'splunk.com', simpleicon:'splunk',  color:'F70000', bg:'rgba(247,0,0,.1)', pct:95 },
    { name:'Cortex XSOAR', brandDomain:'paloaltonetworks.com', pct:90 },
    { name:'Datadog',      brandDomain:'datadoghq.com', icon:'devicon-datadog-plain',  bg:'rgba(110,66,193,.15)', pct:83 },
    { name:'Grafana',      brandDomain:'grafana.com', icon:'devicon-grafana-original',bg:'rgba(240,120,30,.15)', pct:80 },
  ],
  'VULN': [
    { name:'Tenable / Nessus', brandDomain:'tenable.com', pct:92 },
    { name:'Rapid7 Nexpose',   brandDomain:'rapid7.com', simpleicon:'rapid7',  color:'E8272A', bg:'rgba(232,39,42,.1)', pct:88 },
    { name:'QualysGuard',      brandDomain:'qualys.com', pct:85 },
    { name:'ForeScout',        brandDomain:'forescout.com', simpleicon:'forescout', color:'0A6DB1', bg:'rgba(10,109,177,.1)', pct:80 },
  ],
  'DEVSEC': [
    { name:'Checkmarx',      brandDomain:'checkmarx.com', pct:88 },
    { name:'Veracode',       brandDomain:'veracode.com', pct:85 },
    { name:'BurpSuite Pro',  brandDomain:'portswigger.net', pct:90 },
    { name:'Snyk',           brandDomain:'snyk.io', icon:'devicon-snyk-plain',   bg:'rgba(74,128,255,.15)', pct:87 },
    { name:'Checkov',        brandDomain:'bridgecrew.io', simpleicon:'bridgecrew', color:'7C3AED', bg:'rgba(124,58,237,.1)', pct:82 },
    { name:'GitHub Actions', brandDomain:'github.com', icon:'devicon-github-original', bg:'rgba(255,255,255,.08)', pct:85 },
    { name:'GitLab CI/CD',   brandDomain:'gitlab.com', icon:'devicon-gitlab-plain',   bg:'rgba(252,109,38,.15)', pct:83 },
  ],
  'INFRA': [
    { name:'Kubernetes', brandDomain:'kubernetes.io', icon:'devicon-kubernetes-plain', bg:'rgba(50,108,229,.15)', pct:88 },
    { name:'Terraform',  brandDomain:'hashicorp.com', icon:'devicon-terraform-plain',  bg:'rgba(94,52,189,.15)',  pct:87 },
    { name:'Docker',     brandDomain:'docker.com', icon:'devicon-docker-plain',     bg:'rgba(30,155,215,.15)', pct:90 },
    { name:'RHEL 8/9',   brandDomain:'redhat.com', icon:'devicon-redhat-plain',     bg:'rgba(204,0,0,.15)',    pct:85 },
    { name:'Windows Server', brandDomain:'microsoft.com', icon:'devicon-windows8-original', bg:'rgba(0,114,198,.15)', pct:82 },
    { name:'PostgreSQL', brandDomain:'postgresql.org', icon:'devicon-postgresql-plain', bg:'rgba(51,103,145,.15)', pct:78 },
  ],
  'LANG': [
    { name:'Python',  brandDomain:'python.org', icon:'devicon-python-plain',    bg:'rgba(55,118,171,.15)', pct:90 },
    { name:'Go',      brandDomain:'go.dev', icon:'devicon-go-plain',         bg:'rgba(0,173,216,.15)',  pct:78 },
    { name:'Java',    brandDomain:'oracle.com', icon:'devicon-java-plain',       bg:'rgba(237,82,0,.15)',   pct:75 },
    { name:'C++',     brandDomain:'isocpp.org', icon:'devicon-cplusplus-plain',  bg:'rgba(0,89,157,.15)',   pct:72 },
    { name:'REST APIs', brandDomain:'insomnia.rest', simpleicon:'insomnia', color:'5849BE', bg:'rgba(88,73,190,.1)', pct:92 },
    { name:'GraphQL', brandDomain:'graphql.org', icon:'devicon-graphql-plain',   bg:'rgba(229,53,172,.15)', pct:75 },
  ],
};

/* ── 4. RENDER SKILLS AS MARQUEE ──────────────────────────── */
function makePill(s) {
  let iconContent = '';
  // Prioritize Brandfetch Domain Logos
  if (s.brandDomain) {
    iconContent = `<img src="https://cdn.brandfetch.io/domain/${s.brandDomain}?c=1idACOz1x5eksqnaYUr" style="width:28px;height:28px;object-fit:contain;filter:drop-shadow(0 0 5px rgba(255,255,255,0.2))" />`;
  } else if (s.url) {
    iconContent = `<img src="${s.url}" style="width:28px;height:28px;object-fit:contain;filter:drop-shadow(0 0 5px rgba(255,255,255,0.2))" />`;
  } else if (s.simpleicon) {
    iconContent = `<img src="https://cdn.simpleicons.org/${s.simpleicon}/${s.color || 'white'}" style="width:22px;height:22px;filter:drop-shadow(0 0 5px rgba(255,255,255,0.2))" />`;
  } else if (s.icon) {
    iconContent = `<i class="${s.icon}" style="color:white;font-size:20px"></i>`;
  } else {
    iconContent = `<div class="skill-pill-badge" style="background:${s.color}">${s.badge}</div>`;
  }

  const iconPart = (s.brandDomain || s.url || s.simpleicon || s.icon)
    ? `<div class="skill-pill-icon" style="background:${s.bg||'rgba(255,255,255,.06)'}">${iconContent}</div>`
    : iconContent;

  return `<div class="skill-pill">${iconPart}<div><div class="skill-pill-name">${s.name}</div><div class="skill-pill-pct">${s.pct}%</div></div></div>`;
}

function renderMarquee(cat) {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  const items = SKILLS[cat] || [];
  const pillsHtml = items.map(makePill).join('');
  // Duplicate for seamless looping
  container.innerHTML = `
    <div class="skill-marquee-wrap">
      <div class="skill-marquee-inner">${pillsHtml}${pillsHtml}</div>
    </div>`;

  // Adjust speed based on number of items
  const speed = Math.max(14, items.length * 3.5);
  container.querySelector('.skill-marquee-inner').style.animationDuration = speed + 's';
}

function initSkillsSection() {
  const section = document.getElementById('cfg-skills-section');
  if (!section) return;

  const cats = Object.keys(SKILLS);
  section.innerHTML = `
    <div class="skill-tabs">
      ${cats.map((k, i) => `<button class="skill-tab${i===0?' active':''}" data-cat="${k}">${k}</button>`).join('')}
    </div>
    <div id="skills-grid"></div>`;

  section.querySelectorAll('.skill-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      section.querySelectorAll('.skill-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMarquee(btn.dataset.cat);
    });
  });

  renderMarquee(cats[0]);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSkillsSection);
} else {
  setTimeout(initSkillsSection, 100);
}

})();
