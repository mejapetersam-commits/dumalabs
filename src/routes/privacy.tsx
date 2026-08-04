import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/primitives";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Duma Labs" },
      {
        name: "description",
        content: "How Duma Labs collects, uses and protects information submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy — Duma Labs" },
      { property: "og:description", content: "Our approach to data collected via this website." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        body="This page is maintained by Duma Labs and describes how we handle information you send us through this website."
      />
      <Section>
        <div className="max-w-2xl space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">What we collect</h2>
            <p className="mt-3">
              Only what you submit in our contact form — your name, email, organisation and project
              brief — plus basic, aggregated analytics about page visits.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">How we use it</h2>
            <p className="mt-3">
              To reply to your enquiry and scope potential work. We do not sell your information and
              we do not send marketing you did not ask for.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Retention</h2>
            <p className="mt-3">
              Enquiry details are kept while a conversation is active and removed on request at any
              time.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Your requests</h2>
            <p className="mt-3">
              To access, correct or delete anything you have sent us, email{" "}
              <a href={`mailto:${site.email}`} className="text-primary underline">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
