import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Motion";
import { BRANDS, type Brand, type BrandSlug } from "@/lib/brands";

export const Route = createFileRoute("/our-group/$brand")({
  loader: ({ params }) => {
    const brand = BRANDS.find((b) => b.slug === params.brand);
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ loaderData }) => {
    const b = loaderData?.brand;
    if (!b) return { meta: [{ title: "Brand — OWS Holdings" }] };
    return {
      meta: [
        { title: `${b.name} — ${b.tagline} | OWS Holdings` },
        { name: "description", content: b.description },
        { property: "og:title", content: `${b.name} — OWS Holdings` },
        { property: "og:description", content: b.description },
        { property: "og:image", content: b.image },
        { name: "twitter:image", content: b.image },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteShell>
      <div className="grid min-h-[60vh] place-items-center px-6 pt-32 text-center">
        <div>
          <h1 className="font-display text-6xl font-black text-foreground">Brand not found</h1>
          <Link to="/our-group" className="mt-6 inline-block text-[var(--ows-red)] underline">Back to Our Group</Link>
        </div>
      </div>
    </SiteShell>
  ),
  component: BrandPage,
});

function BrandPage() {
  const { brand } = Route.useLoaderData() as { brand: Brand };
  const params = Route.useParams();
  const idx = BRANDS.findIndex((b) => b.slug === (params.brand as BrandSlug));
  const next = BRANDS[(idx + 1) % BRANDS.length];

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pt-32 pb-20 md:pt-40 md:pb-28">
        <img
          src={brand.image}
          alt={brand.name}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${brand.color}33 0%, transparent 60%)`,
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.35em]"
            style={{ color: brand.color }}
          >
            — {brand.category}
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-5xl font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-8xl lg:text-[8rem]"
          >
            {brand.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-xl uppercase tracking-[0.15em] md:text-2xl"
            style={{ color: brand.color }}
          >
            {brand.tagline}
          </motion.p>
        </div>
      </section>

      {/* Description */}
      <section className="border-b border-white/5 bg-[var(--ows-panel)] py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-foreground/40">— Overview</p>
          </Reveal>
          <Reveal className="lg:col-span-8">
            <p className="font-display text-2xl font-medium leading-snug text-foreground md:text-3xl">
              {brand.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-b border-white/5 bg-black py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Stagger className="grid grid-cols-2 gap-px bg-white/5 lg:grid-cols-4">
            {brand.metrics.map((m) => (
              <StaggerItem key={m.label}>
                <div className="bg-black p-8 lg:p-10">
                  <p
                    className="font-display text-5xl font-black tracking-tighter md:text-6xl"
                    style={{ color: brand.color }}
                  >
                    {m.value}
                  </p>
                  <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/60">
                    {m.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-white/5 bg-[var(--ows-panel)] py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.35em]"
              style={{ color: brand.color }}
            >
              — What We Do
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl">
              Services & capabilities.
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
            {brand.services.map((s) => (
              <StaggerItem key={s}>
                <div className="group flex items-start gap-4 bg-[var(--ows-panel)] p-6 transition-all hover:bg-black md:p-8">
                  <div
                    className="grid h-8 w-8 flex-none place-items-center"
                    style={{ backgroundColor: `${brand.color}22`, color: brand.color }}
                  >
                    <Check size={16} />
                  </div>
                  <p className="font-display text-lg font-semibold text-foreground">{s}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Clients */}
      <section className="border-b border-white/5 bg-black py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-foreground/40">— Trusted By</p>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-foreground md:text-5xl">
              Selected clients.
            </h2>
          </Reveal>
          <Stagger className="mt-12 flex flex-wrap gap-3">
            {brand.clients.map((c) => (
              <StaggerItem key={c}>
                <span
                  className="inline-flex border border-white/10 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80 transition-all hover:text-foreground"
                  style={{ borderColor: `${brand.color}55` }}
                >
                  {c}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Synergy */}
      {brand.synergy.length > 0 && (
        <section
          className="border-b border-white/5 py-24"
          style={{ background: `linear-gradient(180deg, ${brand.color}0d 0%, transparent 100%)` }}
        >
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <Reveal>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.35em]"
                style={{ color: brand.color }}
              >
                — Cross-Vertical Synergy
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-black uppercase leading-tight text-foreground md:text-5xl">
                How {brand.short} powers the rest of the group.
              </h2>
            </Reveal>
            <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
              {brand.synergy.map((s) => (
                <StaggerItem key={s}>
                  <div className="border-l-2 bg-black/40 p-6 md:p-8" style={{ borderColor: brand.color }}>
                    <p className="font-display text-lg text-foreground md:text-xl">{s}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Next + CTA */}
      <section className="border-b border-white/5 bg-black py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 lg:grid-cols-2 lg:px-10">
          <Link
            to="/contact"
            className="group flex items-center justify-between border border-white/10 p-8 transition-all hover:border-[var(--ows-red)] hover:bg-[var(--ows-red)]/5 md:p-12"
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--ows-red)]">
                — Work with {brand.short}
              </p>
              <p className="mt-3 font-display text-2xl font-bold text-foreground md:text-3xl">
                Start the conversation
              </p>
            </div>
            <ArrowRight size={28} className="text-foreground transition-transform group-hover:translate-x-2" />
          </Link>
          <Link
            to="/our-group/$brand"
            params={{ brand: next.slug }}
            className="group flex items-center justify-between border border-white/10 p-8 transition-all md:p-12"
            style={{ borderColor: `${next.color}33` }}
          >
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.25em]"
                style={{ color: next.color }}
              >
                — Next in the group
              </p>
              <p className="mt-3 font-display text-2xl font-bold text-foreground md:text-3xl">
                {next.name}
              </p>
            </div>
            <ArrowUpRight
              size={28}
              className="text-foreground transition-transform group-hover:rotate-45"
            />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
