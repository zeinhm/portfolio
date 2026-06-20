/**
 * Site content + config. Outstanding owner inputs (real X / GitHub URLs) are
 * left as "#" placeholders, matching the design handoff.
 */

export const SITE = {
  name: "Zein Hammad Marhabah",
  wordmark: "ZM",
  github: "https://github.com/zeinhm",
  linkedin: "https://linkedin.com/in/zeinhm",
  zenith: "https://zenithbot.org",
  cv: "/assets/Frontend-Engineer-Zein-Hammad-Marhabah.pdf",
} as const;

const dv = (p: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${p}.svg`;

export const SKILLS: { name: string; icon: string }[] = [
  { name: "React", icon: dv("react/react-original") },
  { name: "Next.js", icon: dv("nextjs/nextjs-original") },
  { name: "TypeScript", icon: dv("typescript/typescript-original") },
  { name: "JavaScript", icon: dv("javascript/javascript-original") },
  { name: "Redux", icon: dv("redux/redux-original") },
  { name: "Tailwind CSS", icon: dv("tailwindcss/tailwindcss-original") },
  { name: "Sass", icon: dv("sass/sass-original") },
  { name: "Node.js", icon: dv("nodejs/nodejs-original") },
  { name: "Express", icon: dv("express/express-original") },
  { name: "GraphQL", icon: dv("graphql/graphql-plain") },
  { name: "Firebase", icon: dv("firebase/firebase-plain") },
  { name: "MongoDB", icon: dv("mongodb/mongodb-original") },
  { name: "PostgreSQL", icon: dv("postgresql/postgresql-original") },
  { name: "Jest", icon: dv("jest/jest-plain") },
  { name: "Playwright", icon: dv("playwright/playwright-original") },
  { name: "Storybook", icon: dv("storybook/storybook-original") },
  { name: "Material UI", icon: dv("materialui/materialui-original") },
  { name: "Ant Design", icon: dv("antdesign/antdesign-original") },
  { name: "Git", icon: dv("git/git-original") },
  { name: "Figma", icon: dv("figma/figma-original") },
  { name: "Remix", icon: dv("remix/remix-original") },
  { name: "Jira", icon: dv("jira/jira-original") },
];

export type Job = {
  role: string;
  company: string;
  meta: string; // "Country · Type"
  dates: string;
  bullets: string[];
};

export const WORK_HISTORY: Job[] = [
  {
    role: "Senior Web Engineer",
    company: "Ajaib Sekuritas",
    meta: "Indonesia · Contract",
    dates: "Mar 2026 – Jun 2026",
    bullets: [
      "Delivered 5+ operator-facing features across Primary Bonds, US Stocks and Mutual Funds (SID generation, Alpaca money movement, MF processing).",
      "Built customer-facing US Stocks UI inside the mobile app webview.",
      "Cut ops landing-page load time via render-strategy refactor and Next.js tuning.",
    ],
  },
  {
    role: "Squad Lead, Frontend",
    company: "Hyperscal",
    meta: "Indonesia · Contract",
    dates: "Jul 2025 – Mar 2026",
    bullets: [
      "Led front-end architecture for a multi-tenant B2B SaaS platform.",
      "Drove the Remix + React Router v7 (SSR) migration and flat-routes restructure.",
      "Built an in-house schema-first DataView and form-generator engine, plus OpenAPI typed-client codegen and an RBAC model.",
      "Established the Playwright BDD end-to-end testing strategy; reported to the CTO.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "SERA — Astra International",
    meta: "Indonesia · Full-Time",
    dates: "Nov 2023 – Jul 2025",
    bullets: [
      "Built TRAC to Go, a car-rental web product, from scratch in Next.js.",
      "Delivered browsing, booking and payment flows from complex business rules.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Tokenomy",
    meta: "Indonesia · Full-Time",
    dates: "Apr 2021 – Nov 2023",
    bullets: [
      "Built investment, crypto-loan and exchange flows; TradingView + WebSocket markets.",
      "Built an in-house Storybook design system and improved Core Web Vitals.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "CODEX — Telkom Indonesia",
    meta: "Indonesia · Full-Time",
    dates: "Jun 2020 – Apr 2021",
    bullets: [
      "Built POS dashboards (stock, cashier, staff), an internal CRM and a blog CMS.",
      "Wrote unit tests and improved web performance.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Sama Satu Jalan (Tebengan)",
    meta: "Indonesia · Full-Time",
    dates: "Nov 2019 – May 2020",
    bullets: [
      "Built the internal tools dashboard for a ride-sharing app.",
      "Integrated user/driver tracking history with Leaflet (GraphQL).",
    ],
  },
  {
    role: "Web Developer",
    company: "Garena Indonesia",
    meta: "Indonesia · Full-Time",
    dates: "Aug 2019 – Nov 2019",
    bullets: [
      "Built in-game event webs (Free Fire, Arena of Valor, CoD Mobile).",
      "Built tournament/voting apps and per-game landing pages.",
    ],
  },
];

export type UsesCard = {
  title: string;
  rows: { label: string; value: string }[];
};

export const USES: {
  hardware: UsesCard;
  workspace: UsesCard;
  devTools: UsesCard;
} = {
  hardware: {
    title: "Hardware",
    rows: [
      { label: "Computer", value: "Mac mini M4" },
      { label: "Monitor", value: "Dell UltraSharp U2419H" },
      { label: "Keyboard", value: "Keychron K3" },
      { label: "Mouse", value: "Logitech G304" },
      { label: "Headphones", value: "Apple EarPods" },
      { label: "Audio", value: "Soundtech 2.1 Condenser" },
      { label: "Webcam", value: "NYK Nemesis 196" },
    ],
  },
  workspace: {
    title: "Workspace",
    rows: [
      { label: "Chair", value: "Fantech OCA259 Pro Ergonomic Chair" },
      { label: "Desk", value: "Rexus Rise-126 Standing Desk" },
    ],
  },
  devTools: {
    title: "Dev Tools",
    rows: [
      { label: "IDE", value: "VS Code" },
      { label: "Shell", value: "Zsh" },
      { label: "Browser", value: "Chrome" },
      { label: "Design", value: "Figma / Claude Design" },
      { label: "AI Assisted Coding", value: "Claude Code / Cursor" },
    ],
  },
};
