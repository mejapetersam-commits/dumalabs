import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { CTALink, PageHero, Panel, Section } from "@/components/site/primitives";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries we build for | Duma Labs" },
      {
        name: "description",
        content:
          "Healthcare, education, finance, retail, agriculture, media, government, NGOs, hospitality and professional services.",
      },
      { property: "og:title", content: "Industries we build for — Duma Labs" },
      {
        property: "og:description",
        content: "Ten sectors, and the specific software problems we solve in each.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Context matters more than templates."
        body="We work across ten sectors. In each one, the constraints — connectivity, compliance, literacy, cost — shape the product before the design does."
      >
        <CTALink to="/contact">Discuss your sector</CTALink>
      </PageHero>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.name} delay={i * 40}>
              <Panel className="h-full p-6">
                <h2 className="font-display text-lg font-semibold">{industry.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{industry.note}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
