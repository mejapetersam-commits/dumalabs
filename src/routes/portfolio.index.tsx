import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { PageHero, Panel, Section } from "@/components/site/primitives";
import { projects } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Work — Case studies from Duma Labs" },
      {
        name: "description",
        content:
          "Case studies from Duma Labs: MoreLifeOS, Between the Climbs, and client builds for Kids' Nook, Young Tots Edventures, Stanna Orchards and The Big Voice Limited.",
      },
      { property: "og:title", content: "Work — Case studies from Duma Labs" },
      {
        property: "og:description",
        content: "Products we designed, built and still maintain — with real decisions and outcomes.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const filters = ["All", "Product", "Web", "AI"] as const;

function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Fewer projects, told properly."
        body="Each case study covers the problem, the decisions we made, and what actually changed after launch."
      />

      <Section>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={cn(
                "min-h-11 rounded-full border px-5 text-sm transition-colors",
                active === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:bg-surface hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {visible.map((project, i) => (
            <Reveal key={project.slug} delay={i * 70}>
              <Panel className="flex h-full flex-col p-8" interactive={false}>
                {project.image ? (
                  <div className="-mx-8 -mt-8 mb-2 aspect-video overflow-hidden rounded-t-3xl">
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : null}
                <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <Link to="/portfolio/$slug" params={{ slug: project.slug }}>
                  <h2 className="mt-6 font-display text-3xl font-semibold hover:text-primary">
                    {project.name}
                  </h2>
                </Link>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.blurb}</p>
                <dl className="mt-7 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <dd className="font-display text-lg font-semibold text-primary">{m.value}</dd>
                      <dt className="mt-0.5 text-xs text-muted-foreground">{m.label}</dt>
                    </div>
                  ))}
                </dl>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: project.slug }}
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary"
                  >
                    Read the case study
                    <ArrowUpRight className="size-4" />
                  </Link>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
                    >
                      Visit live site
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : null}
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-10 text-sm text-muted-foreground">
            No published case studies in this category yet — {" "}
            <Link to="/contact" className="text-primary underline">
              ask us about current AI work
            </Link>
            .
          </p>
        ) : null}
      </Section>
    </>
  );
}
