/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit everything about the profile here.
 *  Leave any `href` as an empty string "" until a real URL is
 *  supplied; the Contact section will render the button as
 *  "pending" until then. No private data lives in this file.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Stephen Chijioke Okoronkwo",
  shortName: "Stephen Okoronkwo",
  role: "AI Systems Architect · Full-Stack Developer · Founder",
  tagline:
    "I build AI automation, backend platforms, agentic systems, and practical products for African businesses.",
  status: "Building ShadowSpark Technologies",
  location: "Based in Nigeria",
  currentYear: new Date().getFullYear(),
};

export const about = [
  "I'm a Nigerian AI engineer and the founder of ShadowSpark Technologies. My work sits at the intersection of systems architecture and product execution: designing backend platforms that stay reliable under real load, and wiring AI agents into workflows where they actually earn their keep.",
  "Day to day I build agentic systems, automation pipelines, and multi-tenant SaaS backends — authentication, payments, queues, retrieval, and the security hardening that keeps tenant data isolated. I care about shipping things that work in production, not demos that fall apart on Monday.",
  "Working from Nigeria gives me a front-row seat to the problems African fintechs and businesses face — fragmented tooling, manual operations, unreliable integrations — and that context shapes every product decision I make.",
];

export const skills = [
  { name: "AI Agents & Automation", detail: "Agentic workflows, tool use, orchestration" },
  { name: "Next.js / TypeScript", detail: "Full-stack product surfaces" },
  { name: "Node.js", detail: "Services, APIs, real-time workloads" },
  { name: "Python", detail: "AI tooling, data pipelines, scripting" },
  { name: "PostgreSQL / Prisma", detail: "Schema design, migrations, data integrity" },
  { name: "Redis / Queues", detail: "Caching, background jobs, rate limiting" },
  { name: "APIs & Backend Architecture", detail: "Design-first, versioned, observable" },
  { name: "Vercel / Render / Railway / GCP", detail: "Deploys, environments, infra" },
  { name: "Multi-tenant SaaS", detail: "Tenant isolation, billing, onboarding" },
  { name: "Security-minded Engineering", detail: "Auth, least privilege, hardening" },
];

export type ProjectStatus = "Active" | "In Development" | "Demo";

export const projects: {
  name: string;
  focus: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
}[] = [
  {
    name: "ShadowSpark Technologies",
    focus: "AI operating system for African business workflows",
    description:
      "WhatsApp AI and automation for African fintech and business workflows — agent-driven conversations, automated operations, and integrations that replace manual processes.",
    tags: ["AI Agents", "WhatsApp API", "Automation", "Fintech"],
    status: "Active",
  },
  {
    name: "ShadowSpark Production",
    focus: "Multi-tenant backend & API platform",
    description:
      "The production backbone: multi-tenant architecture, authentication, payments, job queues, RAG pipelines, and security hardening built to run real workloads.",
    tags: ["Node.js", "PostgreSQL", "Redis", "RAG", "Security"],
    status: "Active",
  },
  {
    name: "Lodgist",
    focus: "Hospitality & property management product",
    description:
      "A hospitality and property product currently in development — bookings, operations, and guest-facing tooling for African hospitality businesses.",
    tags: ["SaaS", "Multi-tenant", "Next.js"],
    status: "In Development",
  },
  {
    name: "SpringBank Website",
    focus: "Banking product demo",
    description:
      "A banking demo built with Next.js, Prisma, and authentication — customer and admin flows that model real product journeys end to end.",
    tags: ["Next.js", "Prisma", "Auth", "Demo"],
    status: "Demo",
  },
];

export const focus = [
  {
    title: "WhatsApp AI Product",
    detail: "Turning WhatsApp into a serious business channel with reliable, agent-driven automation.",
  },
  {
    title: "Production Backend Reliability",
    detail: "Observability, queues, and fail-safe design for platforms that can't afford downtime.",
  },
  {
    title: "Agentic Developer Workflows",
    detail: "Using AI agents to compress build-test-ship cycles without sacrificing quality.",
  },
  {
    title: "Revenue-ready SaaS",
    detail: "Shipping products with billing, onboarding, and support baked in from day one.",
  },
];

export const principles = [
  { title: "Evidence before assumptions", detail: "Measure first; opinions are hypotheses." },
  { title: "Build, test, verify", detail: "Nothing ships on vibes — every path gets exercised." },
  { title: "Automate repeatable work", detail: "If I've done it twice manually, it becomes a script." },
  { title: "Security & tenant isolation by design", detail: "Isolation is architecture, not a patch." },
];

/**
 * Contact destinations. Add a `href` when the URL is confirmed;
 * empty strings render as clearly-marked "link pending" buttons.
 */
export const contacts = [
  { label: "GitHub", href: "", hint: "GitHub profile URL pending" },
  { label: "LinkedIn", href: "", hint: "LinkedIn profile URL pending" },
  { label: "Email", href: "", hint: "Email address pending" },
  { label: "ShadowSpark Website", href: "", hint: "Website URL pending" },
];

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Current Focus", id: "focus" },
  { label: "Contact", id: "contact" },
];
