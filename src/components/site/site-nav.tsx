import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site-data";
import { ThemeToggle } from "./theme-toggle";
import { ctaStyles } from "./primitives";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "glass-panel border-x-0 border-t-0" : "border-transparent bg-transparent",
        )}
      >
        <div className="container-page flex h-18 items-center gap-4 py-4">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Duma Labs home">
            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">
              D
            </span>
            <span className="truncate font-display text-base font-semibold tracking-tight">
              Duma Labs
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <ThemeToggle />
            <Link to="/contact" className={cn(ctaStyles.primary, "hidden sm:inline-flex")}>
              Start a Project
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-full border border-border lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="glass-panel border-x-0 lg:hidden">
          <nav className="container-page grid gap-1 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={cn(ctaStyles.primary, "mt-2")}
            >
              Start a Project
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
