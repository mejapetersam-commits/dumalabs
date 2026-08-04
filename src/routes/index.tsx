import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroMesh from "@/assets/hero-mesh.jpg";
import { Reveal } from "@/components/site/reveal";
import { CTALink, Panel, Section, SectionHead, Eyebrow } from "@/components/site/primitives";
import { services, projects, processSteps, testimonials, techStack } from "@/lib/site-data";

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

const trusted = ["MoreLifeOS", "Between the Climbs", "Kazi Retail", "Tumaini Health", "Shamba Data"];

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
          className="pointer-events-none absolute -right-40 top-0 h-full w-[70%] object-cover opacity-30 mix-blend-screen dark:opacity-40"
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

          <Reveal delay={320}>
            <dl className="mt-20 grid max-w-3xl gap-8 border-t border-border pt-10 sm:grid-cols-3">
              {[
                { k: "Products shipped end to end", v: "3 in-house" },
                { k: "Typical web build window", v: "2 — 4 weeks" },
                { k: "Accounts owned by the client", v: "100%" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="text-sm text-muted-foreground">{s.k}</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold">{s.v}</dd>
                </div>
              ))}
            </dl>
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

      <Section>
        <Reveal>
          <SectionHead
            eyebrow="Services"
            title="Eight disciplines, one delivery team."
            body="Strategy, design and engineering under one roof — so nothing gets lost in a handover between agencies."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 50}>
              <Link to="/services" className="block h-full">
                <Panel className="h-full p-6">
                  <h3 className="font-display text-base font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                </Panel>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <Reveal>
          <SectionHead
            eyebrow="Selected work"
            title="Real projects, real decisions, measurable outcomes."
            body="No filler case studies. These are products we designed, built and still maintain."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: project.slug }}
                className="block h-full"
              >
                <Panel className="flex h-full flex-col">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.blurb}
                  </p>
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="font-display text-lg font-semibold text-primary">
                      {project.metrics[0]?.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{project.metrics[0]?.label}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                    Read the case study
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Panel>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHead eyebrow="Testimonials" title="What working with us feels like." />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.quote} delay={i * 80}>
              <Panel className="h-full">
                <p className="text-base leading-relaxed">"{t.quote}"</p>
                <footer className="mt-6 text-sm text-muted-foreground">
                  {t.name} · {t.org}
                </footer>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionHead
              eyebrow="Our process"
              title="Seven steps from a first conversation to a supported product."
              body="Every engagement follows the same spine, sized to the project."
            />
            <div className="mt-8">
              <CTALink to="/process" variant="ghost">
                See the full process
              </CTALink>
            </div>
          </Reveal>
          <div className="grid gap-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 40}>
                <div className="flex gap-5 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                  <span className="font-display text-sm font-semibold text-primary">{step.step}</span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHead eyebrow="Technology" title="A stack chosen for speed and longevity." />
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {techStack.map((tech, i) => (
            <Reveal key={tech} delay={i * 25}>
              <span className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-primary/50 hover:text-primary">
                {tech}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

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
