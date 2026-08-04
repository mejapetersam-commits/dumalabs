import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 lg:py-28", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      {body ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{body}</p> : null}
    </div>
  );
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11 px-6";

export const ctaStyles = {
  primary: cn(
    base,
    "bg-primary text-primary-foreground shadow-[0_10px_40px_-14px_var(--emerald-glow)] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-14px_var(--emerald-glow)]",
  ),
  ghost: cn(base, "border border-border bg-transparent text-foreground hover:bg-surface hover:-translate-y-0.5"),
};

export function CTALink({
  to,
  variant = "primary",
  children,
  className,
}: {
  to: string;
  variant?: keyof typeof ctaStyles;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} className={cn(ctaStyles[variant], className)}>
      {children}
    </Link>
  );
}

export function Panel({
  children,
  className,
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card p-7",
        interactive &&
          "transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_60px_-30px_var(--emerald-glow)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  body: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="glow-orb -left-24 -top-40 size-[26rem] animate-float-slow" aria-hidden="true" />
      <div className="container-page relative pb-16 pt-32 lg:pb-24 lg:pt-40">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{body}</p>
        {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </header>
  );
}
