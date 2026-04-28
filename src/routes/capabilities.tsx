import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Motion";
import { BRANDS } from "@/lib/brands";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — Seven Verticals, One Group | OWS Holdings" },
      { name: "description", content: "Discover the seven core capabilities of OWS Holdings — automotive, defence, insurance, media, events, wellness and facility management." },
      { property: "og:title", content: "Capabilities — OWS Holdings" },
      { property: "og:description", content: "Cross-vertical synergy across seven specialised businesses." },
    ],
  }),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Capabilities"
        title={<>One conversation.<br /> Seven specialisms.</>}
        subtitle="Every OWS business is a category leader on its own. Together, they form a network that compounds value for our partners across MENA."
      />

      <section className="relative bg-[var(--ows-panel)] py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Stagger className="space-y-px">
            {BRANDS.map((brand, i) => (
              <StaggerItem key={brand.slug}>
                <Link
                  to="/our-group/$brand"
                  params={{ brand: brand.slug }}
                  className="group grid grid-cols-[60px_1fr_auto] items-center gap-6 border-b border-white/5 py-8 transition-all hover:bg-black/40 md:grid-cols-[80px_1fr_2fr_auto] md:gap-10 md:py-10"
                >
                  <span className="font-display text-2xl font-black text-foreground/30 md:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.25em]"
                      style={{ color: brand.color }}
                    >
                      {brand.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-black uppercase tracking-tight text-foreground md:text-4xl">
                      {brand.name}
                    </h3>
                  </div>
                  <p className="hidden text-foreground/70 md:block">{brand.description}</p>
                  <ArrowUpRight
                    size={28}
                    className="text-foreground/40 transition-all group-hover:rotate-45 group-hover:text-foreground"
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-black py-24">
        <div className="absolute inset-0 bg-radial-red opacity-30" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">— Cross-Vertical Synergy</p>
            <h2 className="mt-4 max-w-4xl font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl">
              The whole is exponentially greater than the sum of its parts.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-foreground/70">
              A single fleet contract can unlock motor insurance, performance marketing, corporate wellness packages and on-site facility management — all from one trusted partner.
            </p>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
