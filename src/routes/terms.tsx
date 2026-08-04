import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/primitives";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Duma Labs" },
      {
        name: "description",
        content: "The terms that apply to using the Duma Labs website and enquiring about our services.",
      },
      { property: "og:title", content: "Terms of Use — Duma Labs" },
      { property: "og:description", content: "Terms covering this website and enquiries made through it." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        body="These terms cover the use of this website. Project work is governed by a separate signed agreement."
      />
      <Section>
        <div className="max-w-2xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Website content</h2>
            <p className="mt-3">
              Content here is provided for information about our services. Case study figures
              describe specific engagements and are not a promise of identical results.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Enquiries</h2>
            <p className="mt-3">
              Submitting a brief does not create a contract. Scope, timelines, payment and
              intellectual property are agreed in writing before work starts.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Intellectual property</h2>
            <p className="mt-3">
              Branding, copy and design on this site belong to Duma Labs. Client work shown remains
              the property of the respective clients.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Questions</h2>
            <p className="mt-3">
              Contact{" "}
              <a href={`mailto:${site.email}`} className="text-primary underline">
                {site.email}
              </a>{" "}
              about anything on this page.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
