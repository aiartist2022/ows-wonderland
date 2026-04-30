import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, TrendingUp, Award, Handshake, LineChart, GraduationCap, HeartPulse, Globe, Medal, MapPin, Briefcase, Clock } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Motion";
import { motion } from "framer-motion";
import { RedesignHero, StatRow, IconCard } from "@/components/site/Redesign";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Build Your Career at OWS Holdings" },
      { name: "description", content: "Join one of MENA's most integrated multi-vertical groups. Open roles across automotive, defence, insurance, media, events, wellness and facilities." },
      { property: "og:title", content: "Careers at OWS Holdings" },
      { property: "og:description", content: "Build a career across seven world-class businesses." },
    ],
  }),
  component: CareersPage,
});

const HERO_STATS = [
  { icon: <Users size={32} strokeWidth={1.5} />, value: "DIVERSE", label: "OPPORTUNITIES" },
  { icon: <TrendingUp size={32} strokeWidth={1.5} />, value: "GROWTH &", label: "DEVELOPMENT" },
  { icon: <Award size={32} strokeWidth={1.5} />, value: "IMPACTFUL", label: "CAREERS" },
  { icon: <Handshake size={32} strokeWidth={1.5} />, value: "INCLUSIVE", label: "CULTURE" },
];

const WHY_JOIN = [
  { icon: <LineChart size={32} strokeWidth={1.5} />, title: "CAREER GROWTH", body: "Clear paths, continuous learning, and opportunities to grow across businesses." },
  { icon: <GraduationCap size={32} strokeWidth={1.5} />, title: "LEARNING & DEVELOPMENT", body: "Access world-class training, mentorship and leadership programs." },
  { icon: <Users size={32} strokeWidth={1.5} />, title: "DIVERSE & INCLUSIVE CULTURE", body: "A respectful, collaborative environment where every voice matters." },
  { icon: <HeartPulse size={32} strokeWidth={1.5} />, title: "WELLNESS & WELLBEING", body: "We invest in your wellbeing with fitness, mental health and wellness initiatives." },
  { icon: <Globe size={32} strokeWidth={1.5} />, title: "MAKE AN IMPACT", body: "Work on meaningful projects that drive real value for our clients and communities." },
  { icon: <Medal size={32} strokeWidth={1.5} />, title: "RECOGNITION & REWARDS", body: "We celebrate performance and reward excellence at every level." },
];

const ROLES = [
  { dept: "OWS Automotive", title: "Fleet Workshop Manager", location: "Sharjah, UAE", type: "Operations", time: "Full-time" },
  { dept: "AJ Industries", title: "Spare Parts Procurement Specialist", location: "Sharjah, UAE", type: "Supply Chain", time: "Full-time" },
  { dept: "AJ Insurance Broker", title: "Insurance Account Executive", location: "Dubai, UAE", type: "Sales", time: "Full-time" },
  { dept: "Melt Media", title: "Digital Campaign Manager", location: "Dubai, UAE", type: "Marketing", time: "Full-time" },
  { dept: "Melt Live", title: "Events Operations Executive", location: "Abu Dhabi, UAE", type: "Operations", time: "Full-time" },
  { dept: "Platform Health Club", title: "Fitness Coach", location: "Sharjah, UAE", type: "Fitness", time: "Full-time" },
  { dept: "Handy Bunch", title: "Facilities Technician", location: "UAE Wide", type: "Technical Services", time: "Full-time" },
];

function CareersPage() {
  return (
    <SiteShell>
      <RedesignHero
        title={<>BUILD YOUR CAREER.<br /></>}
        highlight="BUILD THE FUTURE."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
      >
        <p className="mt-4 max-w-2xl text-base text-foreground/80 md:text-xl font-bold">
          At OWS Holdings, we don't just offer jobs.<br />
          We build journeys that create impact.
        </p>
        <p className="mt-6 max-w-2xl text-sm text-foreground/70 md:text-base">
          Join a dynamic group of companies that are shaping industries, delivering value, and
          driving progress across the UAE, MENA and beyond.
        </p>
      </RedesignHero>

      {/* 4 Stats */}
      <section className="relative border-b border-white/5 bg-[var(--ows-panel)]">
        <div className="mx-auto w-full max-w-[1920px]">
          <div className="grid grid-cols-2 divide-x divide-y divide-white/5 md:grid-cols-4 md:divide-y-0">
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="text-[var(--ows-red)] mb-4">{stat.icon}</div>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  {stat.value} <br /> {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Rail in Careers */}
      <section className="relative border-b border-white/5 bg-black py-16">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between border border-white/10 p-6 md:p-8 rounded-sm bg-white/5">
            <div className="max-w-md">
              <h2 className="font-display text-xl font-black uppercase text-white tracking-tight">
                ONE GROUP. SEVEN CAPABILITIES.<br />
                <span className="text-[var(--ows-red)]">INFINITE POSSIBILITIES.</span>
              </h2>
              <p className="mt-3 text-sm text-foreground/70">
                From automotive to events, media to wellness, insurance to defence — explore exciting career paths
                across our seven business verticals.
              </p>
            </div>
            
            <div className="flex gap-6 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              {/* Mocking the capability icons simply for now */}
              {[
                { name: "OWS Automotive", color: "#E11D2E" },
                { name: "AJ Industries", color: "#C9A24A" },
                { name: "AJ Insurance", color: "#4A7BD8" },
                { name: "Melt Live", color: "#B14CFF" },
                { name: "Melt Media", color: "#2DD4D4" },
                { name: "Platform", color: "#4ADE80" },
                { name: "Handy Bunch", color: "#F5A524" },
              ].map((brand, i) => (
                <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
                  <div className="h-12 w-12 rounded bg-white/10 flex items-center justify-center" style={{ color: brand.color }}>
                    <Briefcase size={20} />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-center" style={{ color: brand.color }}>
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join OWS */}
      <section className="relative border-b border-white/5 bg-[var(--ows-panel)] py-24">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-black uppercase tracking-[0.2em] text-white">
              WHY JOIN OWS HOLDINGS?
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-[var(--ows-red)]" />
          </Reveal>

          <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {WHY_JOIN.map((p, i) => (
              <StaggerItem key={i}>
                <IconCard icon={p.icon} title={p.title} body={p.body} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="bg-black py-24 border-b border-white/5">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <Reveal className="flex justify-between items-end border-b border-white/10 pb-6 mb-8">
            <div>
              <h2 className="font-display text-2xl font-black uppercase tracking-[0.2em] text-white">
                CURRENT OPPORTUNITIES
              </h2>
            </div>
            <Link to="/contact" className="text-[11px] font-bold uppercase tracking-widest text-[var(--ows-red)] hover:underline flex items-center gap-2">
              VIEW ALL JOBS <ArrowRight size={14} />
            </Link>
          </Reveal>

          <Stagger className="flex flex-col">
            {ROLES.map((r, i) => (
              <StaggerItem key={i}>
                <div className="group grid grid-cols-1 items-center gap-4 border-b border-white/5 py-6 transition-colors hover:bg-[var(--ows-panel)] md:grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] md:gap-6 px-4">
                  <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">{r.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--ows-red)] bg-[var(--ows-red)]/10 px-2 py-1 rounded">
                      {r.dept}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <MapPin size={14} /> {r.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <Briefcase size={14} /> {r.type}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <Clock size={14} /> {r.time}
                  </div>
                  <button className="border border-[var(--ows-red)] px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-[var(--ows-red)] transition-all hover:bg-[var(--ows-red)] hover:text-white">
                    APPLY NOW
                  </button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Life at OWS */}
      <section className="bg-[var(--ows-panel)] py-24 border-b border-white/5">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-black uppercase tracking-[0.2em] text-white">
              LIFE AT OWS
            </h2>
            <div className="mx-auto mt-4 h-px w-24 bg-[var(--ows-red)]" />
          </Reveal>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "COLLABORATIVE TEAMS",
              "INNOVATIVE ENVIRONMENT",
              "WELLNESS FIRST",
              "RECOGNITION & CELEBRATION",
              "BEYOND WORK"
            ].map((label, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group relative aspect-[4/5] overflow-hidden bg-white/5">
                  <img src={`https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop&sig=${i}`} alt={label} className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white text-center">
                      {label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="border-t border-white/5 bg-black py-16">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <div className="border border-white/10 bg-white/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase leading-tight text-white">
                YOUR JOURNEY.<br />
                YOUR PURPOSE.<br />
                <span className="text-[var(--ows-red)]">INFINITE IMPACT.</span>
              </h2>
            </div>
            <div className="max-w-md text-sm text-foreground/60 md:text-center">
              Be part of a group that values your talent, invests in your growth, and empowers you to build the future.
            </div>
            <button className="border border-[var(--ows-red)] px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-[var(--ows-red)] transition-all hover:bg-[var(--ows-red)] hover:text-white">
              EXPLORE OPPORTUNITIES →
            </button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
