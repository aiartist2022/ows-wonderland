import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Users, Layers, Handshake, Globe, ChevronRight, Link as LinkIcon, Puzzle, BarChart3, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Motion";
import { BRANDS } from "@/lib/brands";
import { RedesignHero, StatRow } from "@/components/site/Redesign";
import capabilitiesHeroImg from "@/assets/capabilities-hero.png";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — Nine Verticals, One Group | OWS Holdings" },
      { name: "description", content: "Discover the nine core capabilities of OWS Holdings — automotive, defence, insurance, media, events, wellness and facility management." },
      { property: "og:title", content: "Capabilities — OWS Holdings" },
      { property: "og:description", content: "Cross-vertical synergy across nine specialised businesses." },
    ],
  }),
  component: CapabilitiesPage,
});

const HERO_STATS = [
  { icon: <Briefcase size={32} strokeWidth={1.5} />, value: "7", label: "BUSINESSES" },
  { icon: <Users size={32} strokeWidth={1.5} />, value: "1000+", label: "EXPERTS" },
  { icon: <Layers size={32} strokeWidth={1.5} />, value: "100+", label: "MAJOR PROJECTS DELIVERED" },
  { icon: <Handshake size={32} strokeWidth={1.5} />, value: "10,000+", label: "ACTIVE CLIENTS" },
  { icon: <Globe size={32} strokeWidth={1.5} />, value: "UAE & MENA", label: "PRIMARY GEOGRAPHY" },
];

const INTEGRATED_ADVANTAGE = [
  { icon: <LinkIcon size={32} strokeWidth={1.5} />, title: "ONE TRUSTED PARTNER", desc: "One relationship across all your business needs." },
  { icon: <Puzzle size={32} strokeWidth={1.5} />, title: "CROSS-VERTICAL SYNERGY", desc: "Every capability creates value for the others." },
  { icon: <BarChart3 size={32} strokeWidth={1.5} />, title: "EFFICIENCY & COST SAVINGS", desc: "Streamlined operations, better outcomes." },
  { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: "GOVERNMENT-GRADE TRUST", desc: "Proven track record with UAE government entities." },
  { icon: <Globe size={32} strokeWidth={1.5} />, title: "REGIONAL REACH", desc: "Deep presence across UAE, MENA & beyond." },
];

function CapabilitiesPage() {
  return (
    <SiteShell>
      <RedesignHero
        title={<>OUR CAPABILITIES.<br /></>}
        highlight="INFINITE IMPACT."
        image={capabilitiesHeroImg}
      >
        <p className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
          Nine industry-leading capabilities working in synergy to deliver integrated solutions that drive
          efficiency, growth and long-term value across the UAE, MENA and beyond.
        </p>
      </RedesignHero>

      <StatRow stats={HERO_STATS} />

      {/* Nine Capabilities Grid */}
      <section className="bg-black py-24 border-b border-white/5">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-black uppercase tracking-[0.2em] text-white">
              THE NINE CAPABILITIES
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-[var(--ows-red)]" />
          </Reveal>

          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BRANDS.map((brand, i) => (
              <StaggerItem key={brand.slug} className={i >= 4 ? "lg:col-span-1" : ""}>
                <div className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-black transition-all hover:border-[var(--ows-red)]">
                  {/* Image Section */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img 
                      src={brand.image} 
                      alt={brand.name} 
                      className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    
                    {/* Number Badge */}
                    <div className="absolute top-4 left-4 font-display text-sm font-bold text-[var(--ows-red)] opacity-100 drop-shadow-md bg-black/40 px-2 rounded">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    
                    {/* Logo/Name overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-center bg-black/40 p-4 rounded backdrop-blur-sm">
                        {brand.logo ? (
                          <div className="flex h-12 w-32 items-center justify-center mx-auto">
                            <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
                          </div>
                        ) : (
                          <>
                            <h3 className="font-display text-2xl font-black uppercase tracking-widest drop-shadow-lg" style={{ color: brand.color }}>
                              {brand.name.split(" ")[0]}
                            </h3>
                            {brand.name.split(" ").length > 1 && (
                              <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white drop-shadow-md">
                                {brand.name.split(" ").slice(1).join(" ")}
                              </h4>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-grow p-6">
                    <h4 className="font-display text-sm font-bold text-white mb-4">
                      {brand.tagline}
                    </h4>
                    
                    <ul className="mb-8 space-y-2 flex-grow">
                      {brand.services.slice(0, 5).map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11px] text-foreground/70">
                          <span className="mt-1 h-1 w-1 rounded-full bg-[var(--ows-red)] flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/our-group/$brand"
                      params={{ brand: brand.slug }}
                      className="mt-auto inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--ows-red)] hover:underline"
                    >
                      LEARN MORE <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Integrated Advantage */}
      <section className="bg-[var(--ows-panel)] py-24 border-b border-white/5 overflow-hidden">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-black uppercase tracking-[0.2em] text-white">
              OUR INTEGRATED ADVANTAGE
            </h2>
            <div className="mx-auto mt-4 mb-16 h-px w-24 bg-[var(--ows-red)]" />
          </Reveal>

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
            {INTEGRATED_ADVANTAGE.map((item, i) => (
              <Reveal key={i} delay={i * 0.15} className="flex-1 flex flex-col items-center text-center relative z-10 w-full">
                <div className="mb-6 text-[var(--ows-red)] opacity-80">
                  {item.icon}
                </div>
                <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[10px] text-foreground/60 px-4">
                  {item.desc}
                </p>
                {/* Chevrons connecting them (hide on last item, and hide on mobile) */}
                {i < INTEGRATED_ADVANTAGE.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-6 text-[var(--ows-red)]/30">
                    <ChevronRight size={24} />
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-black py-16">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <div className="border border-[var(--ows-red)]/30 bg-[var(--ows-panel)] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase leading-tight text-white">
                ONE GROUP.<br />
                NINE CAPABILITIES.<br />
                <span className="text-[var(--ows-red)]">INFINITE VALUE.</span>
              </h2>
            </div>
            <div className="max-w-md text-sm text-foreground/60 md:text-center">
              When our capabilities come together, your business moves further, faster.
            </div>
            <button className="border border-[var(--ows-red)] px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-[var(--ows-red)] transition-all hover:bg-[var(--ows-red)] hover:text-white">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
