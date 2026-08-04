import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { CTALink, PageHero, Panel, Section, SectionHead } from "@/components/site/primitives";
import { techStack } from "@/lib/site-data";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology stack | Duma Labs" },
      {
        name: "description",
        content:
          "React, Next.js, TypeScript, Tailwind CSS, Node.js, Supabase, PostgreSQL, OpenAI, Anthropic, Stripe, Vercel and GitHub.",
      },
      { property: "og:title", content: "Technology stack — Duma Labs" },
      {
        property: "og:description",
        content: "The tools we standardise on, and why each one earns its place.",
      },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: Technology,
});

const groups = [
  {
    title: "Product & interface",
    body: "React, Next.js, TypeScript and Tailwind CSS — typed, fast, and boring in the best way.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Data & backend",
    body: "Managed Postgres and serverless functions so small teams are not paying for infrastructure work.",
    items: ["Node.js", "Supabase", "PostgreSQL", "Firebase"],
  },
  {
    title: "AI",
    body: "Frontier models behind an abstraction layer, with evaluation and cost limits from day one.",
    items: ["OpenAI", "Anthropic"],
  },
  {
    title: "Payments & platform",
    body: "Proven rails for money, deployment and source control — owned by your accounts, not ours.",
    items: ["Stripe", "Vercel", "GitHub"],
  },
];

function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="A deliberately small, deeply known stack."
        body="We choose tools we can support for years, not whatever launched last month. That is what keeps delivery fast and handovers clean."
      >
        <CTALink to="/contact">Talk architecture with us</CTALink>
      </PageHero>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <Panel className="h-full p-8">
                <h2 className="font-display text-xl font-semibold">{group.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-foreground/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <Reveal>
          <SectionHead
            eyebrow="Everything we use"
            title="One stack, standardised across every build."
            body="Standardising is why a new project starts at roughly 60% complete."
          />
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {techStack.map((tech, i) => (
            <Reveal key={tech} delay={i * 25}>
              <span className="rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary">
                {tech}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
