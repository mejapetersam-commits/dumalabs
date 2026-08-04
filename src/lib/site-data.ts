export const site = {
  name: "Duma Labs",
  tagline: "Building Digital Products That Move Africa Forward.",
  email: "hello@dumalabs.co",
  whatsapp: "+254700000000",
  whatsappLink: "https://wa.me/254700000000",
  location: "Nairobi, Kenya — working with teams across Africa and beyond",
  linkedin: "https://www.linkedin.com/company/dumalabs",
  github: "https://github.com/dumalabs",
};

export const nav = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/industries", label: "Industries" },
  { to: "/technology", label: "Stack" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
] as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  process: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "web",
    title: "Website Design & Development",
    summary: "Marketing sites and web platforms that load fast and convert.",
    problem:
      "Most business sites are slow, hard to update, and say nothing specific about the value on offer.",
    solution:
      "We design a clear narrative, then build it as a fast, accessible, SEO-ready site your team can edit without a developer.",
    process: ["Content and narrative audit", "Design system", "Build and integrate", "Measure and iterate"],
    deliverables: ["Design system in Figma", "Production site", "CMS wiring", "Analytics + SEO baseline"],
  },
  {
    slug: "mobile",
    title: "Mobile App Development",
    summary: "iOS and Android products from first prototype to store release.",
    problem: "Mobile projects stall between prototype and store release, and offline reality is ignored.",
    solution:
      "We ship a testable build in weeks, design for patchy connectivity, and handle release engineering end to end.",
    process: ["Flow mapping", "Interactive prototype", "Staged builds", "Store submission and monitoring"],
    deliverables: ["Prototype", "Release builds", "Crash + usage telemetry", "Release playbook"],
  },
  {
    slug: "ai",
    title: "AI Solutions",
    summary: "Assistants, retrieval and document intelligence wired to real data.",
    problem: "AI pilots demo well and then fail on real data, cost, and accuracy requirements.",
    solution:
      "We scope one high-value workflow, ground the model in your own data, and put evaluation and cost limits in place before launch.",
    process: ["Use-case scoring", "Data grounding", "Evaluation harness", "Guardrails and rollout"],
    deliverables: ["Working assistant or pipeline", "Eval suite", "Cost dashboard", "Prompt + model docs"],
  },
  {
    slug: "automation",
    title: "Business Automation",
    summary: "Removing the manual copy-paste between your tools.",
    problem: "Teams lose whole days to spreadsheets, re-typing, and chasing approvals across systems.",
    solution:
      "We map the workflow, automate the repetitive path, and keep humans in the loop where judgement matters.",
    process: ["Workflow mapping", "Integration design", "Pilot with one team", "Rollout and training"],
    deliverables: ["Automation workflows", "Integration layer", "Ops dashboard", "Team training"],
  },
  {
    slug: "strategy",
    title: "Product Strategy",
    summary: "Deciding what to build before spending a budget on it.",
    problem: "Roadmaps get written from opinions, so teams build features nobody asked for.",
    solution:
      "We run structured discovery, size opportunities against effort, and hand back a sequenced plan with success metrics.",
    process: ["Stakeholder interviews", "Opportunity sizing", "Prioritisation", "Roadmap and metrics"],
    deliverables: ["Discovery report", "Prioritised roadmap", "Success metrics", "Budget model"],
  },
  {
    slug: "design",
    title: "UI/UX Design",
    summary: "Interfaces that are obvious to use on a mid-range phone.",
    problem: "Interfaces get designed for wide screens and fast networks that most users do not have.",
    solution:
      "We design mobile-first, test with real users, and deliver a documented system engineers can build from directly.",
    process: ["Research", "Wireframes", "High-fidelity design", "Usability testing"],
    deliverables: ["Component library", "Screen designs", "Prototype", "Handoff docs"],
  },
  {
    slug: "branding",
    title: "Branding",
    summary: "Verbal and visual identity that holds up across every surface.",
    problem: "A logo alone leaves teams guessing how to write, present, and post.",
    solution:
      "We build positioning, voice, and a visual system with real applications so the brand survives contact with production.",
    process: ["Positioning", "Identity design", "Applications", "Guidelines"],
    deliverables: ["Logo suite", "Type + colour system", "Voice guide", "Brand guidelines"],
  },
  {
    slug: "api",
    title: "API Integrations",
    summary: "Payments, messaging and third-party systems that stay connected.",
    problem: "Integrations are built once, then break silently when a provider changes something.",
    solution:
      "We build resilient integrations with retries, idempotency, and alerting so failures surface immediately.",
    process: ["Contract review", "Sandbox build", "Failure testing", "Monitoring"],
    deliverables: ["Integration service", "Webhook handling", "Runbook", "Alerting"],
  },
];

export type Project = {
  slug: string;
  name: string;
  category: "Product" | "Web" | "AI";
  year: string;
  blurb: string;
  role: string;
  stack: string[];
  problem: string;
  approach: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  screens: { title: string; note: string }[];
  real: boolean;
};

export const projects: Project[] = [
  {
    slug: "morelifeos",
    name: "MoreLifeOS",
    category: "Product",
    year: "2025",
    blurb:
      "A personal operating system for habits, focus and reflection — designed and built end to end.",
    role: "Product strategy, design system, full-stack build",
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    problem:
      "Habit and productivity tools either track everything shallowly or demand so much setup that people abandon them in week two. The brief was a system that stays useful when motivation dips.",
    approach: [
      "Cut the first release to three loops: daily intent, tracked action, weekly reflection.",
      "Designed a data model where every entry is cheap to write and easy to review later.",
      "Built offline-tolerant writes so a lost connection never loses a day of input.",
      "Shipped weekly to a small group of daily users and cut anything they stopped touching.",
    ],
    outcome:
      "The product now runs as a daily-use tool with a retained core group, and the reflection loop — not the tracking — is what users cite as the reason they stay.",
    metrics: [
      { label: "Time to first usable build", value: "6 weeks" },
      { label: "Core loops in v1", value: "3" },
      { label: "Features cut before launch", value: "11" },
    ],
    screens: [
      { title: "Daily intent", note: "One screen to set the day, built for a thumb on a phone." },
      { title: "Streak + review", note: "Weekly reflection surfaces patterns instead of raw numbers." },
    ],
    real: true,
  },
  {
    slug: "between-the-climbs",
    name: "Between the Climbs",
    category: "Web",
    year: "2025",
    blurb:
      "An editorial publishing experience where the writing, not the interface, carries the weight.",
    role: "Narrative structure, editorial design, build",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    problem:
      "Long-form writing gets buried in template blogs: heavy chrome, slow pages, and no sense of a body of work.",
    approach: [
      "Built the type scale first and set every layout decision against reading comfort.",
      "Kept the page weight low enough to open instantly on mobile data.",
      "Structured pieces into series so readers arrive at one essay and leave with three.",
      "Wired metadata and share previews per piece so links look intentional wherever they land.",
    ],
    outcome:
      "Readers move deeper into the archive instead of bouncing after one piece, and publishing a new essay is now a single-step action.",
    metrics: [
      { label: "Largest Contentful Paint", value: "under 1.2s" },
      { label: "Reading-focused layout width", value: "68ch" },
      { label: "Publish steps", value: "1" },
    ],
    screens: [
      { title: "Essay view", note: "Measured line length, generous leading, no sidebar noise." },
      { title: "Series index", note: "Related pieces surfaced at the end of every read." },
    ],
    real: true,
  },
  {
    slug: "client-web-builds",
    name: "Client Web Builds",
    category: "Web",
    year: "2024 — 2026",
    blurb:
      "A running body of business sites and landing pages built for small teams across East Africa.",
    role: "Design, build, handover and support",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"],
    problem:
      "Small teams inherit sites they cannot edit, hosted somewhere nobody remembers, loading in five seconds on mobile.",
    approach: [
      "Standardised a component kit so each build starts at 60% complete and stays consistent.",
      "Made every page editable by a non-technical owner before handover.",
      "Set a performance and accessibility budget that has to pass before launch.",
      "Left each client with hosting, analytics and a written runbook in their own accounts.",
    ],
    outcome:
      "Builds now ship in a fraction of the original timeline, and clients update their own content without coming back for a developer.",
    metrics: [
      { label: "Typical build window", value: "2 — 4 weeks" },
      { label: "Client-editable pages", value: "100%" },
      { label: "Accounts owned by client", value: "All" },
    ],
    screens: [
      { title: "Component kit", note: "Shared primitives keep every build fast and coherent." },
      { title: "Handover runbook", note: "Hosting, domains and analytics documented in plain language." },
    ],
    real: true,
  },
];

export const industries = [
  { name: "Healthcare", note: "Patient records, triage tooling, clinic operations." },
  { name: "Education", note: "Learning platforms, assessment, school administration." },
  { name: "Finance", note: "Payments, lending workflows, reconciliation." },
  { name: "Retail", note: "Commerce, inventory, loyalty and fulfilment." },
  { name: "Agriculture", note: "Field data capture, traceability, market access." },
  { name: "Media", note: "Publishing, subscriptions, audience analytics." },
  { name: "Government", note: "Citizen services, records, internal automation." },
  { name: "NGOs", note: "Programme monitoring, reporting, donor dashboards." },
  { name: "Hospitality", note: "Bookings, guest experience, operations." },
  { name: "Professional Services", note: "Client portals, billing, case management." },
];

export const processSteps = [
  { step: "01", title: "Discovery", body: "Interviews, constraints and success metrics. We write down what winning looks like." },
  { step: "02", title: "Strategy", body: "Scope, sequence and budget. The smallest version that proves the value." },
  { step: "03", title: "Design", body: "Mobile-first flows and a documented system engineers build from directly." },
  { step: "04", title: "Development", body: "Weekly shippable increments in a staging environment you can use." },
  { step: "05", title: "Testing", body: "Functional, performance, accessibility and real-device checks against a budget." },
  { step: "06", title: "Launch", body: "Release engineering, monitoring, and a handover you actually own." },
  { step: "07", title: "Support", body: "Ongoing iteration, uptime watching, and a roadmap that keeps moving." },
];

export const techStack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
  "Supabase", "PostgreSQL", "Firebase", "OpenAI", "Anthropic",
  "Stripe", "Vercel", "GitHub",
];

export const whyUs = [
  { title: "Fast delivery", body: "Weekly shippable increments, not quarterly reveals." },
  { title: "Scalable architecture", body: "Built for the traffic after launch, not just launch day." },
  { title: "Clean code", body: "Reviewed, typed and documented so any team can pick it up." },
  { title: "SEO optimised", body: "Metadata, structured data and semantic markup on every page." },
  { title: "Accessibility", body: "Keyboard paths, contrast and screen-reader support as a requirement." },
  { title: "Performance first", body: "A Core Web Vitals budget that has to pass before we launch." },
  { title: "Transparent communication", body: "One shared board, weekly notes, no status theatre." },
  { title: "Long-term support", body: "We stay after launch, because that is when products get real." },
];

export const values = [
  { title: "Ship, then sharpen", body: "Working software in front of real users beats another round of slides." },
  { title: "Built here, on purpose", body: "African context is the design brief, not an afterthought." },
  { title: "Own your stack", body: "Every account, repo and domain ends up in the client's name." },
  { title: "Say the hard thing", body: "If a feature will not earn its cost, we tell you before you pay for it." },
];

export const timeline = [
  { year: "2024", title: "First builds", body: "Duma Labs starts as a small team taking on web work for local businesses." },
  { year: "2025", title: "Own products", body: "MoreLifeOS and Between the Climbs ship, sharpening how we design and release." },
  { year: "2026", title: "Studio practice", body: "A repeatable process across strategy, design, engineering and AI work." },
  { year: "Next", title: "Deeper partnerships", body: "Fewer, longer engagements with teams building for the continent." },
];

export const testimonials = [
  {
    quote:
      "They cut our scope in half in the first week and we still launched with everything that mattered. That conversation saved us a quarter.",
    name: "Programme lead",
    org: "Education non-profit, Nairobi",
  },
  {
    quote:
      "The handover was the surprise. Hosting, analytics and domains in our own accounts, with a document our office manager could follow.",
    name: "Operations manager",
    org: "Professional services firm",
  },
  {
    quote:
      "Our site went from five seconds on mobile to instant. Enquiries through the contact form went up without us spending on ads.",
    name: "Founder",
    org: "Retail business, Mombasa",
  },
];

export const posts = [
  {
    slug: "ai-pilots-that-survive-contact-with-data",
    title: "AI pilots that survive contact with real data",
    category: "AI",
    date: "2026-06-18",
    excerpt:
      "Most AI demos fail on the second week of real inputs. What we check before a model touches production data.",
  },
  {
    slug: "performance-budgets-for-african-networks",
    title: "Performance budgets for African networks",
    category: "Engineering",
    date: "2026-05-02",
    excerpt:
      "A page that feels fast in Nairobi on fibre can be unusable on 3G in Kisumu. Here is the budget we hold builds to.",
  },
  {
    slug: "cutting-scope-without-cutting-value",
    title: "Cutting scope without cutting value",
    category: "Product",
    date: "2026-03-27",
    excerpt:
      "How we decide which eleven features to remove before launch — and why clients thank us for it later.",
  },
  {
    slug: "design-systems-for-small-teams",
    title: "Design systems for teams of three",
    category: "Design",
    date: "2026-02-11",
    excerpt:
      "You do not need a hundred components. You need the twelve you actually use, documented properly.",
  },
];

export const roles = [
  { title: "Product Engineer", type: "Full-time · Nairobi / Remote", body: "TypeScript, React, and a bias for shipping. You will own features end to end." },
  { title: "Product Designer", type: "Contract · Remote", body: "Mobile-first interface work with real usability testing, not just pretty screens." },
  { title: "AI Engineer", type: "Full-time · Nairobi / Remote", body: "Retrieval, evaluation and cost control for assistants in production." },
];
