import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site-data";

const columns = [
  {
    heading: "Studio",
    links: [
      { to: "/about", label: "About" },
      { to: "/process", label: "Process" },
      { to: "/why-us", label: "Why Duma Labs" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { to: "/services", label: "All services" },
      { to: "/industries", label: "Industries" },
      { to: "/technology", label: "Technology" },
      { to: "/portfolio", label: "Work" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { to: "/blog", label: "Blog" },
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">
                D
              </span>
              <span className="font-display text-base font-semibold">Duma Labs</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{site.tagline}</p>
            <p className="mt-4 text-sm text-muted-foreground">{site.location}</p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <a href={site.linkedin} className="text-muted-foreground hover:text-primary">
                LinkedIn
              </a>
              <a href={site.github} className="text-muted-foreground hover:text-primary">
                GitHub
              </a>
              <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-primary">
                {site.email}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-sm text-foreground/80 hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Duma Labs. All rights reserved.</p>
          <p>Designed and built in Nairobi.</p>
        </div>
      </div>
    </footer>
  );
}
