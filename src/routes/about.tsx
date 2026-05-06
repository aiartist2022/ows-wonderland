import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Motion";
import { RedesignHero, StatRow, IconCard } from "@/components/site/Redesign";
import { Briefcase, Users, Layers, Handshake, Globe, ShieldCheck, Share2, Lightbulb, Target } from "lucide-react";
import oweisZahranImg from "@/assets/oweis-zahran.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About OWS Holdings — Vision, Mission & Leadership" },
      { name: "description", content: "Learn about OWS Holdings — a Sharjah-headquartered, multi-vertical group built on trust, innovation and integrated value across the MENA region." },
      { property: "og:title", content: "About OWS Holdings" },
      { property: "og:description", content: "Vision, mission, leadership and milestones of OWS Holdings." },
    ],
  }),
  component: AboutPage,
});

const ABOUT_STATS = [
  { icon: <Briefcase size={32} strokeWidth={1.5} />, value: "7", label: "Business Verticals" },
  { icon: <Users size={32} strokeWidth={1.5} />, value: "1000+", label: "Experts & Professionals" },
  { icon: <Layers size={32} strokeWidth={1.5} />, value: "100+", label: "Major Projects Delivered" },
  { icon: <Handshake size={32} strokeWidth={1.5} />, value: "10,000+", label: "Active Clients" },
  { icon: <Globe size={32} strokeWidth={1.5} />, value: "UAE & MENA", label: "Primary Geography" },
];

const PILLARS = [
  { icon: <Users size={32} strokeWidth={1.5} />, title: "Single-Relationship Simplicity", body: "One trusted group partner across multiple services, reducing complexity and saving time." },
  { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: "Government-Grade Trust", body: "Proven track record with leading UAE government entities and public institutions." },
  { icon: <Share2 size={32} strokeWidth={1.5} />, title: "Integrated Cross-Vertical Value", body: "Every vertical creates introductions and opportunities for the others." },
  { icon: <Globe size={32} strokeWidth={1.5} />, title: "Regional MENA Reach", body: "Deep presence across the UAE with strategic expansion in Qatar, Bahrain and beyond." },
  { icon: <Lightbulb size={32} strokeWidth={1.5} />, title: "Innovation-Led Delivery", body: "AI, smart technology, proprietary IP and a culture of innovation at the core of everything we do." },
];

const JOURNEY = [
  { year: "1990+", title: "THE BEGINNING", body: "OWS Automotive is founded in the USA, starting a legacy of trust and performance." },
  { year: "2010+", title: "EXPANSION", body: "Regional growth across the Middle East with key government partnerships." },
  { year: "2020", title: "DIVERSIFICATION", body: "Launch of OWS Capital and expansion into new verticals that drive national impact." },
  { year: "TODAY & BEYOND", title: "NINE CAPABILITIES", body: "Seven capabilities. Infinite value. Building the future, together." },
];

function AboutPage() {
  return (
    <SiteShell>
      <RedesignHero
        title={<>ABOUT <br />OWS HOLDINGS</>}
        subtitle="One Group. Nine Capabilities. Infinite Value."
      >
        <p className="mt-4 max-w-2xl text-base text-foreground/70 md:text-lg">
          OWS Holdings is a UAE-based diversified group united by a single purpose — to deliver integrated
          solutions that create real impact, drive national value and power progress across industries.
        </p>
      </RedesignHero>

      <StatRow stats={ABOUT_STATS} />

      {/* Founder Section */}
      <section className="relative border-b border-white/5 bg-black py-24">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal className="relative">
              <div className="absolute -inset-4 rounded-full bg-radial-red opacity-30 mix-blend-screen blur-3xl" />
              <div className="relative aspect-[3/4] overflow-hidden border border-white/10 bg-white/5 grayscale">
                <img src={oweisZahranImg} alt="Oweis Zahran" className="h-full w-full object-cover object-top opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={0.2} className="flex flex-col justify-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">Founder & Chairman</p>
              <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                OWEIS ZAHRAN
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-foreground/60">
                Founder & Chairman (OWS Automotive) <br /> Managing Director (OWS Capital)
              </p>
              
              <div className="mt-8 space-y-5 text-sm text-foreground/70 md:text-base leading-relaxed">
                <p>
                  Oweis Zahran built OWS Automotive from the ground up into a global business with ~US$800 million in revenue,
                  3,000 employees, and a footprint in 14 countries.
                </p>
                <p>
                  In 2020, he launched OWS Capital as the investment and innovation arm, expanding into fitness, entertainment,
                  media, live events, and insurance.
                </p>
                <p>
                  He co-founded MELT Global with global entertainer Steve Harvey — merging vision, influence and impact.
                </p>
              </div>

              <div className="mt-12 border-l-2 border-[var(--ows-red)] pl-8">
                <p className="font-display text-2xl font-bold italic leading-tight text-white md:text-3xl">
                  "Our mission is simple: create value, empower people, and build businesses that outlive us."
                </p>
                <p className="mt-6 font-display text-xl text-foreground/40">Oweis Zahran</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative border-b border-white/5 bg-[var(--ows-panel)] py-24">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <Reveal className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">
            <div className="flex-shrink-0 text-[var(--ows-red)] text-glow-red">
              <Target size={120} strokeWidth={1} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">Our Story</p>
              <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                From automotive excellence to defence readiness, from digital innovation to live experiences — OWS Holdings was built on trust, performance, and a commitment to the UAE's future. Today, we are a multi-vertical ecosystem that grows stronger together, delivering infinite value for our partners, communities, and the region.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Five Pillars */}
      <section className="relative border-b border-white/5 bg-black py-24">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-black uppercase tracking-[0.2em] text-white">
              OUR FIVE PILLARS OF VALUE
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-[var(--ows-red)]" />
          </Reveal>

          <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {PILLARS.map((p, i) => (
              <StaggerItem key={i}>
                <IconCard icon={p.icon} title={p.title} body={p.body} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="relative bg-[var(--ows-panel)] py-24 overflow-hidden">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-black uppercase tracking-[0.2em] text-white">
              OUR JOURNEY
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-[var(--ows-red)]" />
          </Reveal>

          <div className="relative mt-24">
            {/* Horizontal Line */}
            <div className="absolute top-[30px] left-0 right-0 h-0.5 bg-[var(--ows-red)]/20 md:block hidden" />
            
            <div className="grid gap-12 md:grid-cols-4 md:gap-6">
              {JOURNEY.map((item, i) => (
                <Reveal key={i} delay={i * 0.15} className="relative flex flex-col items-start md:items-center md:text-center">
                  <div className="z-10 mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-[var(--ows-red)] bg-black shadow-[0_0_20px_var(--ows-red-glow)]">
                    {i === 0 && <span className="text-[var(--ows-red)]">🚀</span>}
                    {i === 1 && <Globe className="text-[var(--ows-red)]" size={24} />}
                    {i === 2 && <Handshake className="text-[var(--ows-red)]" size={24} />}
                    {i === 3 && <Target className="text-[var(--ows-red)]" size={24} />}
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-widest text-[var(--ows-red)]">
                    {item.year}
                  </h3>
                  <h4 className="mt-4 text-sm font-bold uppercase tracking-wider text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-foreground/60 max-w-[250px]">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Banner */}
      <section className="border-t border-white/5 bg-black py-16">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-10">
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight text-white md:text-4xl">
              ONE GROUP.<br /> INFINITE VALUE.
            </h2>
          </div>
          <div className="max-w-md text-sm text-foreground/60 md:text-right">
            Partner with OWS Holdings for integrated solutions that drive efficiency, growth and long-term impact.
          </div>
          <button className="border border-[var(--ows-red)] px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[var(--ows-red)] hover:shadow-[0_0_30px_var(--ows-red-glow)]">
            GET IN TOUCH
          </button>
        </div>
      </section>
    </SiteShell>
  );
}
