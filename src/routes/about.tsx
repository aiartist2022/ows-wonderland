import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Motion";

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

const MILESTONES = [
  { year: "1995", text: "OWS Automotive founded — fleet maintenance roots in the UAE." },
  { year: "2018", text: "AJ Industries JV launches to serve UAE Armed Forces and government entities." },
  { year: "2020", text: "AJ Insurance Broker established to serve fleet and corporate motor lines." },
  { year: "2021", text: "Melt Live JV with Steve Harvey Global brings global IP to MENA." },
  { year: "2023", text: "Platform Health Club opens — Sharjah's first integrated premium health club." },
  { year: "2024", text: "Handy Bunch absorbs facility services across the group's owned operations." },
  { year: "2026", text: "Melt Media launches — bringing performance marketing in-house at scale." },
];

const VALUES = [
  { title: "Trust", body: "Earned over decades through delivery to governments, militaries and global brands." },
  { title: "Integration", body: "Every vertical exists to make the others more valuable to our partners." },
  { title: "Innovation", body: "Technology, talent and creativity driving smarter, future-ready solutions." },
  { title: "Excellence", body: "World-class operations across every business unit — no exceptions." },
];

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About OWS Holdings"
        title={<>Built on trust.<br /> Engineered for scale.</>}
        subtitle="From fleet workshops in Sharjah to award-winning festivals across MENA, OWS Holdings has grown into a multi-vertical group serving governments, militaries and global brands."
      />

      <section className="relative border-b border-white/5 bg-[var(--ows-panel)] py-24">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">— Our Vision</p>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-foreground md:text-5xl">
              To be the most integrated multi-vertical group in MENA — where every capability strengthens the next.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">— Our Mission</p>
            <p className="mt-4 text-lg text-foreground/80">
              We exist to simplify how organisations procure trust. By bringing automotive, defence, insurance, media,
              events, wellness and facilities under a single relationship, we remove friction and unlock compounding value
              for our partners.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative border-b border-white/5 bg-black py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">— Core Values</p>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-foreground md:text-5xl">
              What we stand for.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <StaggerItem key={v.title}>
                <div className="group h-full bg-black p-8 transition-colors hover:bg-[var(--ows-red)]/5">
                  <h3 className="font-display text-2xl font-bold text-foreground">{v.title}</h3>
                  <p className="mt-3 text-sm text-foreground/70">{v.body}</p>
                  <div className="mt-6 h-px w-8 bg-[var(--ows-red)]" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative bg-[var(--ows-panel)] py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">— Milestones</p>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-foreground md:text-5xl">
              Three decades.<br /> Seven verticals.
            </h2>
          </Reveal>
          <Stagger className="mt-14 space-y-px">
            {MILESTONES.map((m) => (
              <StaggerItem key={m.year}>
                <div className="group grid grid-cols-[100px_1fr] items-baseline gap-6 border-b border-white/5 py-6 transition-colors hover:bg-black/40 md:grid-cols-[160px_1fr]">
                  <span className="font-display text-3xl font-black text-[var(--ows-red)] md:text-5xl">{m.year}</span>
                  <p className="text-base text-foreground/80 md:text-lg">{m.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </SiteShell>
  );
}
