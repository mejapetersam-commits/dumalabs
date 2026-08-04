import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { CTALink, PageHero, Panel, Section, SectionHead } from "@/components/site/primitives";
import { roles, site } from "@/lib/site-data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Duma Labs" },
      {
        name: "description",
        content:
          "Join Duma Labs in Nairobi or remotely. Open and future roles in product engineering, design and AI.",
      },
      { property: "og:title", content: "Careers at Duma Labs" },
      {
        property: "og:description",
        content: "A small senior team, real ownership, and products used across the continent.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join Duma Labs."
        body="We hire few people and give them a lot of room. If you would rather own an outcome than a ticket queue, we should talk."
      >
        <CTALink to="/contact">Introduce yourself</CTALink>
      </PageHero>

      <Section>
        <Reveal>
          <SectionHead
            eyebrow="Culture"
            title="How we work together."
            body="Small team, written decisions, weekly shipping, and no heroics required to hit a deadline."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 70}>
              <Panel className="h-full p-8">
                <h2 className="font-display text-xl font-semibold">{role.title}</h2>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-primary">{role.type}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{role.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 text-sm text-muted-foreground">
            Nothing matching your skills? Send your work to{" "}
            <a href={`mailto:${site.email}`} className="text-primary underline">
              {site.email}
            </a>{" "}
            — we keep strong applications on file for future openings.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
