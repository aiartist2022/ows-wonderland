import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe, TrendingUp, Users, Building } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Motion";
import { motion } from "framer-motion";
import { BRANDS } from "@/lib/brands";
import { RedesignHero, StatRow } from "@/components/site/Redesign";
import groupHeroImg from "@/assets/group-hero.png";

export const Route = createFileRoute("/our-group/")({
  head: () => ({
    meta: [
      { title: "Our Group — Nine Businesses, One Vision | OWS Holdings" },
      { name: "description", content: "Explore the nine businesses of OWS Holdings: OWS Automotive, AJ Industries, AJ Insurance, Melt Live, Melt Media, Platform Health Club and Handy Bunch." },
      { property: "og:title", content: "Our Group — OWS Holdings" },
      { property: "og:description", content: "Nine specialised businesses operating as one integrated group." },
    ],
  }),
  component: OurGroupPage,
});

const HERO_STATS = [
  { icon: <Building size={32} strokeWidth={1.5} />, value: "7", label: "INDUSTRY LEADERS" },
  { icon: <Globe size={32} strokeWidth={1.5} />, value: "14+", label: "COUNTRIES" },
  { icon: <Users size={32} strokeWidth={1.5} />, value: "1000+", label: "PROFESSIONALS" },
  { icon: <TrendingUp size={32} strokeWidth={1.5} />, value: "1", label: "UNIFIED VISION" },
];

function OurGroupPage() {
  return (
    <SiteShell>
      <RedesignHero
        title={<>NINE BUSINESSES.<br /></>}
        highlight="ONE VISION."
        image={groupHeroImg}
      >
        <p className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
          Each business is a category leader. Together they form an ecosystem that delivers
          compounding value across the MENA region — and beyond.
        </p>
      </RedesignHero>

      <StatRow stats={HERO_STATS} />

      <section className="relative bg-black py-24 border-b border-white/5">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-black uppercase tracking-[0.2em] text-white">
              OUR PORTFOLIO
            </h2>
            <div className="mx-auto mt-4 mb-16 h-px w-24 bg-[var(--ows-red)]" />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BRANDS.map((brand, i) => (
              <motion.div
                key={brand.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={i === BRANDS.length - 1 && BRANDS.length % 2 !== 0 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Link
                  to="/our-group/$brand"
                  params={{ brand: brand.slug }}
                  className="group relative block aspect-[4/5] overflow-hidden bg-black border border-white/10 hover:border-white/30 transition-all duration-500"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Decorative corner lines */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 transition-all duration-500 group-hover:border-white/50 group-hover:scale-110" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 transition-all duration-500 group-hover:border-white/50 group-hover:scale-110" />
                  
                  {/* Bottom Accent line */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1 transition-all duration-500 group-hover:h-2"
                    style={{ backgroundColor: brand.color }}
                  />
                  
                  <div className="relative flex h-full flex-col justify-between p-8 md:p-12">
                    <div className="flex items-start justify-between">
                      {brand.logo ? (
                        <div className="flex h-20 w-40 md:h-24 md:w-64 items-start justify-start opacity-80 drop-shadow-2xl transition-opacity group-hover:opacity-100">
                          <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain object-left" />
                        </div>
                      ) : (
                        <span
                          className="font-display text-5xl md:text-7xl font-black drop-shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity"
                          style={{ color: brand.color }}
                        >
                          {brand.short}
                        </span>
                      )}
                      <ArrowUpRight
                        size={32}
                        className="text-foreground/40 transition-all group-hover:rotate-45 group-hover:text-white group-hover:scale-110"
                      />
                    </div>
                    <div className="bg-black/40 p-4 rounded backdrop-blur-sm self-start inline-block">
                      <p
                        className="text-[10px] font-bold uppercase tracking-[0.25em] drop-shadow-md"
                        style={{ color: brand.color }}
                      >
                        {brand.category}
                      </p>
                      <h3 className="mt-1 font-display text-3xl font-black uppercase tracking-tight text-white md:text-4xl drop-shadow-lg">
                        {brand.name}
                      </h3>
                      <p className="mt-1 text-sm uppercase tracking-[0.15em] text-foreground/80 drop-shadow-md font-medium">
                        {brand.tagline}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-[var(--ows-panel)] py-16">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <div className="border border-white/10 bg-white/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase leading-tight text-white">
                DISCOVER OUR<br />
                <span className="text-[var(--ows-red)]">FULL CAPABILITIES</span>
              </h2>
            </div>
            <div className="max-w-md text-sm text-foreground/60 md:text-center">
              Learn how our nine businesses work together to provide end-to-end solutions for our partners.
            </div>
            <Link to="/capabilities" className="border border-[var(--ows-red)] px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-[var(--ows-red)] transition-all hover:bg-[var(--ows-red)] hover:text-white">
              VIEW CAPABILITIES →
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
