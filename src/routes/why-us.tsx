import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { CTALink, PageHero, Panel, Section } from "@/components/site/primitives";
import { whyUs } from "@/lib/site-data";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why choose Duma Labs" },
      {
        name: "description",
        content:
          "Fast delivery, scalable architecture, clean code, SEO, accessibility, performance budgets, transparent communication and long-term support.",
      },
      { property: "og:title", content: "Why choose Duma Labs" },
      {
        property: "og:description",
        content: "Eight commitments we hold ourselves to on every engagement.",
      },
      { property: "og:url", content: "/why-us" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyUs,
});

function WhyUs() {
  return (
    <>
      <PageHero
        eyebrow="Why Duma Labs"
        title="Standards you can hold us to."
        body="Each of these is measurable. If we miss one, you will see it before we tell you."
      >
        <CTALink to="/contact">Start a Project</CTALink>
        <CTALink to="/process" variant="ghost">
          How we work
        </CTALink>
      </PageHero>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 45}>
              <Panel className="h-full p-6">
                <h2 className="font-display text-base font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
