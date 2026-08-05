import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { CTALink, PageHero, Panel, Section, SectionHead } from "@/components/site/primitives";
import { values, timeline } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Duma Labs — Why we build" },
      {
        name: "description",
        content:
          "Duma Labs is an African digital product studio in Nairobi. Our mission, values and the reason the studio exists.",
      },
      { property: "og:title", content: "About Duma Labs — Why we build" },
      {
        property: "og:description",
        content: "Mission, vision, values and the growth of an African product studio.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A studio built for the way African teams actually ship."
        body="Duma Labs is a small, senior team in Nairobi designing and building software for startups, businesses, NGOs and creators across the continent."
      >
        <CTALink to="/contact">Work with us</CTALink>
        <CTALink to="/portfolio" variant="ghost">
          See our work
        </CTALink>
      </PageHero>

      <Section className="border-b border-border">
        <dl className="grid gap-8 sm:grid-cols-3">
          {[
            { k: "Products shipped end to end", v: "3 in-house" },
            { k: "Typical web build window", v: "2 — 4 weeks" },
            { k: "Accounts owned by the client", v: "100%" },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 80}>
              <div>
                <dt className="text-sm text-muted-foreground">{s.k}</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">{s.v}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              h: "Mission",
              b: "Put enterprise-grade digital products within reach of organisations solving real African problems.",
            },
            {
              h: "Vision",
              b: "A continent where the best software serving African users is designed and built here.",
            },
            {
              h: "Why we exist",
              b: "Too many teams pay twice: once for a build they cannot maintain, and again to replace it. We end that cycle.",
            },
          ].map((item, i) => (
            <Reveal key={item.h} delay={i * 80}>
              <Panel className="h-full">
                <h2 className="font-display text-xl font-semibold">{item.h}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.b}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <Reveal>
          <SectionHead
            eyebrow="Values"
            title="Four commitments we hold to on every project."
            body="These are not posters on a wall — they are the arguments we are willing to have with clients."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <Panel className="h-full">
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHead eyebrow="Timeline" title="How the studio grew." />
        </Reveal>
        <ol className="mt-12 grid gap-0 border-l border-border pl-6">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 70}>
              <li className="relative pb-10">
                <span
                  className="absolute -left-[1.9rem] top-1.5 size-2.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <p className="font-display text-sm font-semibold text-primary">{t.year}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{t.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
