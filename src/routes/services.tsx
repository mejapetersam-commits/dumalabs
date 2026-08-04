import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { CTALink, PageHero, Panel, Section } from "@/components/site/primitives";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web, mobile, AI and automation | Duma Labs" },
      {
        name: "description",
        content:
          "Website and app development, AI solutions, business automation, product strategy, UI/UX, branding and API integrations.",
      },
      { property: "og:title", content: "Services — Duma Labs" },
      {
        property: "og:description",
        content: "Eight disciplines delivered by one senior team, with clear deliverables per service.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            description: s.summary,
          })),
        }),
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we do, and exactly what you get."
        body="Every service below states the problem it solves, how we approach it, and the deliverables that land in your hands."
      >
        <CTALink to="/contact">Start a Project</CTALink>
      </PageHero>

      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <Panel className="h-full p-8">
                <h2 className="font-display text-2xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>

                <dl className="mt-7 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Problem
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                      {service.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Solution
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                      {service.solution}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Process
                    </dt>
                    <dd className="mt-2">
                      <ol className="space-y-1.5">
                        {service.process.map((step, idx) => (
                          <li key={step} className="flex gap-2.5 text-sm text-muted-foreground">
                            <span className="shrink-0 font-display text-xs text-primary">
                              0{idx + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Deliverables
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {service.deliverables.map((d) => (
                        <span
                          key={d}
                          className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                        >
                          {d}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
