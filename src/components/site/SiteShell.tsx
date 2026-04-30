import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--ows-ink)] text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  accent = "var(--ows-red)",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  accent?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${accent}33 0%, transparent 60%)`,
        }}
      />
      <div className="relative mx-auto w-full max-w-[1920px] px-6 lg:px-10">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.35em]"
          style={{ color: accent }}
        >
          — {eyebrow}
        </p>
        <h1 className="mt-5 max-w-5xl font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-[7rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base text-foreground/70 md:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
