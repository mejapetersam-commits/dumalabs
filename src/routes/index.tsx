import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroMesh from "@/assets/hero-mesh.jpg";
import { Reveal } from "@/components/site/reveal";
import { CTALink, Section, Eyebrow } from "@/components/site/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Duma Labs — African Digital Product Studio" },
      {
        name: "description",
        content:
          "We design, develop and scale websites, mobile apps, AI tools and business systems for ambitious African organisations.",
      },
      { property: "og:title", content: "Duma Labs — African Digital Product Studio" },
      {
        property: "og:description",
        content:
          "We design, develop and scale websites, mobile apps, AI tools and business systems for ambitious African organisations.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const trusted = [
  "MoreLifeOS",
  "Between the Climbs",
  "Young Tots Edventures",
  "The Big Voice Limited",
  "Stanna Orchards",
  "Kidsnook",
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hairline-grid opacity-60" aria-hidden="true" />
        <img
          src={heroMesh}
          alt=""
          width={1600}
          height={1200}
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-full w-[70%] object-cover opacity-20 mix-blend-normal dark:opacity-40 dark:mix-blend-screen"
        />
        <div className="glow-orb -left-32 top-24 size-[30rem] animate-float-slow" aria-hidden="true" />

        <div className="container-page relative pb-24 pt-36 lg:pb-32 lg:pt-44">
          <Reveal>
            <Eyebrow>Digital product studio · Nairobi</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 max-w-4xl text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
              Building Africa's next generation of{" "}
              <span className="text-gradient">digital products</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              We design, develop and scale websites, mobile apps, AI tools and business systems that
              help ambitious organisations grow.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTALink to="/contact">
                Start a Project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </CTALink>
              <CTALink to="/portfolio" variant="ghost">
                View Our Work
              </CTALink>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-y border-border bg-surface py-8">
        <p className="container-page text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Products and teams we build for
        </p>
        <div className="mt-5 overflow-hidden">
          <div className="flex w-max animate-marquee gap-14 pr-14">
            {[...trusted, ...trusted].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display text-lg font-medium text-muted-foreground/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Section className="border-t border-border">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-border bg-card px-7 py-16 text-center lg:px-16">
            <div className="glow-orb left-1/2 top-full size-[28rem] -translate-x-1/2" aria-hidden="true" />
            <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-5xl">
              Tell us what you're building.
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              A 30-minute discovery call, an honest read on scope, and a plan you can act on whether
              or not you work with us.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <CTALink to="/contact">
                Start a Project
                <ArrowRight className="size-4" />
              </CTALink>
              <CTALink to="/services" variant="ghost">
                Explore services
              </CTALink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
