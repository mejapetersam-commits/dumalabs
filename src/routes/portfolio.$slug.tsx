import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { CTALink, Panel, Section, Eyebrow } from "@/components/site/primitives";
import { projects, type Project } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable — Duma Labs" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.name} — Case study | Duma Labs` },
        { name: "description", content: project.blurb },
        { property: "og:title", content: `${project.name} — Duma Labs case study` },
        { property: "og:description", content: project.blurb },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/portfolio/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.name,
            description: project.blurb,
            dateCreated: project.year,
            creator: { "@type": "Organization", name: "Duma Labs" },
          }),
        },
      ],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="glow-orb -left-24 -top-40 size-[26rem] animate-float-slow" aria-hidden="true" />
        <div className="container-page relative pb-16 pt-32 lg:pb-20 lg:pt-40">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            All work
          </Link>
          <div className="mt-8">
            <Eyebrow>
              {project.category} · {project.year}
            </Eyebrow>
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] sm:text-5xl lg:text-6xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.blurb}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="text-foreground">Our role:</span> {project.role}
          </p>
        </div>
      </header>

      <Section>
        <dl className="grid gap-8 border-b border-border pb-12 sm:grid-cols-3">
          {project.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 60}>
              <dd className="font-display text-3xl font-semibold text-primary">{m.value}</dd>
              <dt className="mt-1 text-sm text-muted-foreground">{m.label}</dt>
            </Reveal>
          ))}
        </dl>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold">The problem</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold">How we approached it</h2>
              <ol className="mt-5 space-y-4">
                {project.approach.map((a, i) => (
                  <li key={a} className="flex gap-4">
                    <span className="shrink-0 font-display text-sm font-semibold text-primary">
                      0{i + 1}
                    </span>
                    <p className="text-base leading-relaxed text-muted-foreground">{a}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold">The outcome</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.outcome}
              </p>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold">Key screens</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {project.screens.map((s) => (
                  <Panel key={s.title} className="p-6" interactive={false}>
                    <div
                      className="aspect-video rounded-xl border border-border bg-surface hairline-grid"
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 font-display text-base font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
                  </Panel>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="space-y-6">
            <Panel interactive={false}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Panel>
            <Panel interactive={false}>
              <h2 className="font-display text-lg font-semibold">Something similar in mind?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tell us the outcome you need and we will tell you the smallest version that gets you
                there.
              </p>
              <div className="mt-6">
                <CTALink to="/contact">Start a Project</CTALink>
              </div>
            </Panel>
          </aside>
        </div>
      </Section>
    </>
  );
}
