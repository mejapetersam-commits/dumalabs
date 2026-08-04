import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { CTALink, PageHero, Section } from "@/components/site/primitives";
import { processSteps } from "@/lib/site-data";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our process — discovery to long-term support | Duma Labs" },
      {
        name: "description",
        content:
          "Discovery, strategy, design, development, testing, launch and support — the seven steps behind every Duma Labs engagement.",
      },
      { property: "og:title", content: "Our process — Duma Labs" },
      {
        property: "og:description",
        content: "A seven-step delivery spine, sized to the project and visible the whole way.",
      },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

function Process() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="No mystery between kick-off and launch."
        body="You see working software every week, and you know exactly which step we are on."
      >
        <CTALink to="/contact">Book a discovery call</CTALink>
      </PageHero>

      <Section>
        <ol className="grid gap-0 border-l border-border pl-7 lg:pl-10">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 60}>
              <li className="relative pb-12">
                <span
                  className="absolute -left-[2.15rem] top-2 size-3 rounded-full border-2 border-primary bg-background lg:-left-[2.9rem]"
                  aria-hidden="true"
                />
                <p className="font-display text-sm font-semibold text-primary">{step.step}</p>
                <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{step.title}</h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
