import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { PageHero, Panel, Section, ctaStyles } from "@/components/site/primitives";
import { site, services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Duma Labs — book a discovery call" },
      {
        name: "description",
        content:
          "Start a project with Duma Labs. Book a discovery call, message us on WhatsApp, or email hello@dumalabs.co.",
      },
      { property: "og:title", content: "Contact Duma Labs" },
      {
        property: "og:description",
        content: "Tell us what you are building and we will reply within one working day.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're building."
        body="Share a few details and we will come back within one working day with questions, a rough scope and next steps."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <Panel className="p-8" interactive={false}>
              <form
                className="grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  toast.success("Thanks — we'll reply within one working day.");
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Work email" name="email" type="email" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Organisation" name="org" />
                  <div className="grid gap-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      What do you need?
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="min-h-11 rounded-xl border border-input bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                      <option value="other">Something else</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="brief" className="text-sm font-medium">
                    Project brief
                  </label>
                  <textarea
                    id="brief"
                    name="brief"
                    rows={6}
                    required
                    placeholder="What are you building, who is it for, and what does success look like?"
                    className="rounded-xl border border-input bg-background p-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button type="submit" className={ctaStyles.primary}>
                  {sent ? "Message sent" : "Send project brief"}
                </button>
                <p className="text-xs text-muted-foreground">
                  Prefer to talk first? Book a 30-minute discovery call by mentioning it in your
                  brief and we will send times.
                </p>
              </form>
            </Panel>
          </Reveal>

          <Reveal delay={80}>
            <div className="grid gap-4">
              <Panel interactive={false}>
                <h2 className="font-display text-lg font-semibold">Direct lines</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                    <a href={`mailto:${site.email}`} className="hover:text-primary">
                      {site.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <a href={site.whatsappLink} className="hover:text-primary">
                      WhatsApp us
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{site.whatsapp}</span>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{site.location}</span>
                  </li>
                </ul>
              </Panel>
              <Panel interactive={false}>
                <h2 className="font-display text-lg font-semibold">Elsewhere</h2>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <a href={site.linkedin} className="text-muted-foreground hover:text-primary">
                    LinkedIn
                  </a>
                  <a href={site.github} className="text-muted-foreground hover:text-primary">
                    GitHub
                  </a>
                </div>
              </Panel>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="min-h-11 rounded-xl border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
