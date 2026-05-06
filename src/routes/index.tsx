import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Motion";
import { CircularGallery } from "@/components/ui/circular-gallery";
import { BRANDS, PILLARS, INDUSTRIES, TRUSTED_BY, HEADLINE_METRICS } from "@/lib/brands";
import skylineImg from "@/assets/hero-skyline.jpg";
import umbrellaImg from "@/assets/hero-umbrella.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OWS Holdings — One Group. Nine Capabilities. Infinite Value." },
      {
        name: "description",
        content:
          "Global multi-vertical group across automotive, defence, aerospace, insurance, media, events, education, wellness and facility management. Headquartered in Sharjah, UAE.",
      },
      { property: "og:title", content: "OWS Holdings — One Group. Nine Capabilities." },
      { property: "og:description", content: "Trusted partner to UAE government and global brands across nine verticals." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <CapabilityRail />
      <Pillars />
      <ByTheNumbers />
      <Industries />
      <TrustedBy />
      <ClosingCTA />
    </SiteShell>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const umbY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-black">
      {/* Skyline */}
      <motion.div
        style={reduce ? undefined : { y: skyY }}
        className="absolute inset-0"
      >
        <img
          src={skylineImg}
          alt="Dubai skyline at night"
          className="h-full w-full object-cover object-center opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
      </motion.div>

      {/* Red glow */}
      <motion.div
        style={reduce ? undefined : { scale: glowScale }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-radial-red"
      />

      {/* Umbrella */}
      <motion.div
        style={reduce ? undefined : { y: umbY }}
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 w-[min(720px,90vw)] -translate-x-1/2 -translate-y-1/2 lg:left-auto lg:right-[5%] lg:translate-x-0"
      >
        <img
          src={umbrellaImg}
          alt="OWS Holdings umbrella mark"
          className="h-auto w-full drop-shadow-[0_0_120px_rgba(225,29,46,0.6)]"
          width={1024}
          height={1024}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={reduce ? undefined : { y: titleY }}
        className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1920px] flex-col justify-end px-6 pb-24 pt-40 lg:px-10 lg:pb-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[11px] font-bold uppercase tracking-[0.4em] text-[var(--ows-red)]"
        >
          — OWS Holdings
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-6xl font-display text-6xl font-black uppercase leading-[0.9] tracking-tight text-foreground md:text-8xl lg:text-[9.5rem]"
        >
          One Group.
          <br />
          Nine Capabilities.
          <br />
          <span className="text-[var(--ows-red)] text-glow-red">Infinite Value.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl"
        >
          A global, multi-vertical group headquartered in Sharjah — spanning automotive, defence,
          aerospace, insurance, media, events, education, wellness and facility management.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/our-group"
            className="group inline-flex items-center gap-3 bg-[var(--ows-red)] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.25em] text-foreground transition-all hover:shadow-[0_0_50px_var(--ows-red-glow)]"
          >
            Explore Our Group
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.25em] text-foreground transition-all hover:border-foreground"
          >
            Get In Touch
            <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
          </Link>
        </motion.div>

        <div className="mt-16 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/40 scroll-cue">
          <span className="h-px w-8 bg-foreground/40" />
          Scroll to explore
        </div>
      </motion.div>
    </section>
  );
}

function CapabilityRail() {
  return (
    <section className="relative border-t border-white/5 bg-black py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">— Our Capabilities</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl">
              Nine businesses.<br /> One unstoppable group.
            </h2>
          </div>
          <Link to="/our-group" className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground/70 hover:text-[var(--ows-red)]">
            View all <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="mt-14">
          <CircularGallery items={BRANDS} radius={520} autoRotateSpeed={0.05} />
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[var(--ows-panel)] py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto w-full max-w-[1920px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">— Why OWS</p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl">
              Five reasons<br /> the world's most<br /> trusted brands<br /> choose us.
            </h2>
            <p className="mt-6 max-w-md text-foreground/70">
              Cross-vertical synergy, government-grade trust, and integrated execution at MENA scale.
            </p>
          </Reveal>

          <Stagger className="space-y-5 lg:col-span-7">
            {PILLARS.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="group flex gap-6 border-l-2 border-white/10 bg-black/30 p-6 transition-all hover:border-[var(--ows-red)] hover:bg-black/50 md:p-8">
                  <span className="font-display text-3xl font-black text-[var(--ows-red)]/40 group-hover:text-[var(--ows-red)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">{p.title}</h3>
                    <p className="mt-2 text-foreground/70">{p.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function ByTheNumbers() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-black py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--ows-red)] to-transparent" />
      <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">— OWS by the Numbers</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl">
            Scale you can <span className="text-[var(--ows-red)]">measure</span>.
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid grid-cols-2 gap-px bg-white/5 lg:grid-cols-4">
          {HEADLINE_METRICS.map((m) => (
            <StaggerItem key={m.label}>
              <div className="group relative h-full bg-black p-8 transition-colors hover:bg-[var(--ows-red)]/5 lg:p-12">
                <p className="font-display text-6xl font-black tracking-tighter text-foreground md:text-8xl">
                  {m.value}
                </p>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/60">
                  {m.label}
                </p>
                <Sparkles
                  size={18}
                  className="absolute right-6 top-6 text-[var(--ows-red)]/0 transition-colors group-hover:text-[var(--ows-red)]"
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[var(--ows-panel)] py-24">
      <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">— Industries We Serve</p>
        </Reveal>
        <Stagger className="mt-12 flex flex-wrap gap-3">
          {INDUSTRIES.map((label) => (
            <StaggerItem key={label}>
              <span className="inline-flex border border-white/10 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80 transition-all hover:border-[var(--ows-red)] hover:text-[var(--ows-red)]">
                {label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function TrustedBy() {
  const items = [...TRUSTED_BY, ...TRUSTED_BY];
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-black py-20">
      <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.35em] text-foreground/40">
          Trusted by Government & Industry Leaders
        </p>
      </div>
      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />
        <div className="marquee flex gap-12 whitespace-nowrap">
          {items.map((c, i) => (
            <span
              key={i}
              className="font-display text-2xl font-bold uppercase tracking-tight text-foreground/40 md:text-3xl"
            >
              {c} <span className="ml-12 text-[var(--ows-red)]">×</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-black py-32">
      <div className="absolute inset-0 bg-radial-red opacity-40" />
      <div className="relative mx-auto w-full max-w-[1920px] px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-7xl">
            Ready to build with <span className="text-[var(--ows-red)]">OWS</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-foreground/70">
            One conversation can unlock automotive, insurance, media, wellness, events and facilities — all from a single trusted partner.
          </p>
          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center gap-3 bg-[var(--ows-red)] px-10 py-5 text-[12px] font-bold uppercase tracking-[0.25em] text-foreground transition-all hover:shadow-[0_0_60px_var(--ows-red-glow)]"
          >
            Start the Conversation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
