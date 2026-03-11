# Cyber Operations Center - Interactive Portfolio

Welcome to my interactive Cybersecurity engineering portfolio. This project is designed as a fully functional "Cyber Operations Center" to demonstrate my skills in network security, threat intelligence, and systems engineering.

## 🚀 Live Modules

This portfolio is divided into several highly interactive, custom-built modules:

### 1. Main Dashboard (`index.html`)
The central hub showcasing my experience and technical arsenal. It features:
- **Interactive Physics Engine:** Click `[ System Override ]` to turn the UI into draggable physics objects (powered by Matter.js).
- **Live Threat Intel Feed:** A scrolling, real-time feed intercepting cybersecurity news from top sources.
- **Dynamic Stock Tickers:** Live scrolling widgets for previous employers (e.g., Academy Sports, JP Morgan).

### 2. Global Threat Dashboard (`dashboard.html`)
A dedicated threat intelligence aggregator.
- Fetches live RSS feeds from BleepingComputer, Dark Reading, Krebs, and The Hacker News.
- **Vulnerability Color Coding:** Automatically parses articles and color-codes them (Red = Critical/0-day, Orange = High, Yellow = Medium).

### 3. Outbreak Threat Map (`threat-map.html`)
A fullscreen, 3D interactive threat map inspired by Fortinet's FortiGuard labs.
- **3D Interactive Globe:** A fully draggable WebGL globe (powered by Globe.gl).
- **Live Attack Telemetry:** Simulated attack packets traversing global coordinates by protocol (DDoS, SQLi, SSH Brute Force).

### 4. Interactive SOC Simulator (`soc-simulator.html`)
A functional demonstration of SOC capabilities and infrastructure.
- **Homelab Architecture Map:** An interactive SVG/Canvas topology map. Clicking nodes reveals sanitized proxy and firewall topologies.
- **Functional Terminal Emulator:** A stylized web terminal accepting standard bash commands (`help`, `ping`, `whoami`, `cat`).
- **Embedded CTF Challenge:** Three flags are hidden across the DOM, DevTools Console, and Terminal Emulator for recruiters to find.

## 🛠️ Technology Stack
- **Frontend / Structure:** HTML5
- **Styling:** Tailwind CSS (Utility-First, responsive), Custom CSS for Glassmorphism
- **3D Rendering:** `Globe.gl`
- **2D Physics:** `Matter.js`
- **Icons:** FontAwesome
- **Data:** Public RSS-to-JSON endpoints

## 🏃 Getting Started
Because this site runs entirely on client-side browser Javascript and standard HTML/CSS, **no backend server or complex build tools are required**.

1. Clone the repository:
   ```bash
   git clone https://github.com/saikiranmandiga/[Repository-Name].git
   ```
2. Open `index.html` directly in any modern browser (Chrome, Firefox, Edge, Safari).
3. (Optional) Run a local development server for testing:
   ```bash
   python -m http.server 8000
   ```
   Navigate to `http://localhost:8000/index.html`.

## 🛡️ Security Posture
- XSS mitigations and input sanitization applied to external RSS feed data.
- Tabnabbing mitigations (`rel="noopener noreferrer"`) implemented across all external targets.

---
*Developed by Sahasra Saikiran Mandiga | Sr. Cybersecurity Consultant*
