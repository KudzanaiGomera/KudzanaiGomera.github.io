// ─────────────────────────────────────────────────────────────
// Edit this file. Everything on the site is rendered from it.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Your Name",
  headline: "I find the bugs before attackers do.",
  summary:
    "Security researcher focused on web application and API security. I report vulnerabilities, write up how they work, and build tools that make testing faster.",
  location: "Pretoria, South Africa",
  availability: "Open to security roles and responsible-disclosure collaborations",
  cv: "cv.pdf", // put your PDF at public/cv.pdf
};

// status: "Fixed" | "Reported" | "Disclosed"   severity: "Critical" | "High" | "Medium" | "Low"
export const research = [
  {
    title: "Authentication bypass in ExampleCorp SSO callback",
    severity: "Critical",
    id: "CVE-2026-00000",
    date: "2026-08",
    status: "Fixed",
    link: "https://example.com/advisory-1",
  },
  {
    title: "Stored XSS in a widely used CMS plugin",
    severity: "High",
    id: "CVE-2026-00001",
    date: "2026-05",
    status: "Fixed",
    link: "https://example.com/advisory-2",
  },
  {
    title: "IDOR exposing invoices through a mobile API",
    severity: "Medium",
    id: "Bug bounty",
    date: "2026-02",
    status: "Disclosed",
    link: "https://example.com/advisory-3",
  },
];

export const writeups = [
  {
    title: "From open redirect to account takeover",
    date: "2026-09-14",
    tags: ["Web", "OAuth"],
    summary: "How a harmless-looking redirect parameter chained into a full takeover.",
    link: "https://example.com/writeup-1",
  },
  {
    title: "HTB: Machine name, full walkthrough",
    date: "2026-07-02",
    tags: ["CTF", "Linux", "Privesc"],
    summary: "Enumeration, foothold and privilege escalation, step by step.",
    link: "https://example.com/writeup-2",
  },
  {
    title: "Fuzzing a GraphQL API without a schema",
    date: "2026-04-20",
    tags: ["API", "GraphQL"],
    summary: "Recovering types from error messages and finding broken authorization.",
    link: "https://example.com/writeup-3",
  },
];

export const projects = [
  {
    name: "recon-kit",
    description: "Command-line tool that chains subdomain discovery, HTTP probing and screenshotting into one report.",
    stack: ["Python", "Docker"],
    repo: "https://github.com/yourhandle/recon-kit",
    demo: "",
  },
  {
    name: "jwt-lens",
    description: "Browser extension that decodes JWTs in traffic and flags weak algorithms and missing claims.",
    stack: ["TypeScript", "WebExtension"],
    repo: "https://github.com/yourhandle/jwt-lens",
    demo: "https://example.com/jwt-lens",
  },
  {
    name: "home-lab",
    description: "Documented Active Directory lab with detection rules, used for attack and defence practice.",
    stack: ["Proxmox", "Sigma", "Splunk"],
    repo: "https://github.com/yourhandle/home-lab",
    demo: "",
  },
];

export const certs = [
  { name: "OSCP", issuer: "OffSec", year: "2026", link: "https://example.com/verify-oscp" },
  { name: "eJPT", issuer: "INE Security", year: "2025", link: "https://example.com/verify-ejpt" },
  { name: "Security+", issuer: "CompTIA", year: "2024", link: "https://example.com/verify-sec" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/yourhandle" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" },
  { label: "X", href: "https://x.com/yourhandle" },
  { label: "Hack The Box", href: "https://app.hackthebox.com/profile/0000" },
  { label: "HackerOne", href: "https://hackerone.com/yourhandle" },
  { label: "Email", href: "mailto:you@example.com" },
];
