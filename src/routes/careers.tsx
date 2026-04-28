import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Motion";

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

const PERKS = [
  { title: "Cross-vertical mobility", body: "Move between automotive, media, wellness and more — all under one roof." },
  { title: "Government-grade impact", body: "Work on contracts that touch militaries, transport authorities and major brands." },
  { title: "MENA reach", body: "Operations across 14 countries with HQ in Sharjah and offices across the GCC." },
  { title: "Innovation budget", body: "Dedicated time and tooling for AI, data and creative experimentation." },
];

const ROLES = [
  { dept: "OWS Automotive", title: "Senior Fleet Engineer", location: "Sharjah, UAE" },
  { dept: "AJ Industries", title: "Defence Programme Manager", location: "Abu Dhabi, UAE" },
  { dept: "AJ Insurance", title: "Motor Lines Underwriter", location: "Dubai, UAE" },
  { dept: "Melt Live", title: "Senior Producer — Festivals", location: "Dubai, UAE" },
  { dept: "Melt Media", title: "Performance Marketing Lead", location: "Dubai, UAE" },
  { dept: "Platform Health Club", title: "General Manager — Flagship", location: "Sharjah, UAE" },
  { dept: "Handy Bunch", title: "Operations Supervisor — FM", location: "Sharjah, UAE" },
];

function CareersPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Careers"
        title={<>Seven careers.<br /> One employer.</>}
        subtitle="Join a group where your next role can take you from a fleet workshop to a festival production to a flagship gym — without changing your employer."
      />

      <section className="bg-[var(--ows-panel)] py-24 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">— Why OWS</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-black uppercase leading-tight text-foreground md:text-5xl">
              Build a career, not just a job.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full bg-[var(--ows-panel)] p-8">
                  <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm text-foreground/70">{p.body}</p>
                  <div className="mt-6 h-px w-8 bg-[var(--ows-red)]" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-black py-24 border-b border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">— Open Roles</p>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-foreground md:text-5xl">
              Currently hiring.
            </h2>
          </Reveal>
          <Stagger className="mt-12 space-y-px">
            {ROLES.map((r) => (
              <StaggerItem key={r.title}>
                <Link
                  to="/contact"
                  className="group grid grid-cols-1 items-center gap-3 border-b border-white/5 py-6 transition-colors hover:bg-[var(--ows-panel)] md:grid-cols-[2fr_1fr_1fr_auto] md:gap-6"
                >
                  <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">{r.title}</h3>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--ows-red)]">{r.dept}</p>
                  <p className="text-sm text-foreground/60">{r.location}</p>
                  <ArrowRight size={20} className="text-foreground/40 transition-all group-hover:translate-x-2 group-hover:text-foreground" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2}>
            <p className="mt-12 text-sm text-foreground/60">
              Don't see your role? <Link to="/contact" className="text-[var(--ows-red)] underline">Send us your CV</Link> and we'll be in touch when something matches.
            </p>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
