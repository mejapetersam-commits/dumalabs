import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { PageHero, Panel, Section, SectionHead } from "@/components/site/primitives";
import { posts, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights on product, engineering and AI | Duma Labs" },
      {
        name: "description",
        content:
          "Notes from the Duma Labs team on AI in production, performance budgets, scope decisions and design systems.",
      },
      { property: "og:title", content: "Insights — Duma Labs" },
      {
        property: "og:description",
        content: "Writing on engineering, AI, product, startups and design from our studio in Nairobi.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="What we learn while shipping."
        body="Short, specific notes from real projects — no thought-leadership filler."
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <Panel className="h-full p-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <span className="text-primary">{post.category}</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <p className="mt-6 text-xs text-muted-foreground">Full piece publishing soon.</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
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
    </>
  );
}
