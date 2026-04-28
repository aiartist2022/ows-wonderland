import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { motion } from "framer-motion";
import { BRANDS } from "@/lib/brands";

export const Route = createFileRoute("/our-group/")({
  head: () => ({
    meta: [
      { title: "Our Group — Seven Businesses, One Vision | OWS Holdings" },
      { name: "description", content: "Explore the seven businesses of OWS Holdings: OWS Automotive, AJ Industries, AJ Insurance, Melt Live, Melt Media, Platform Health Club and Handy Bunch." },
      { property: "og:title", content: "Our Group — OWS Holdings" },
      { property: "og:description", content: "Seven specialised businesses operating as one integrated group." },
    ],
  }),
  component: OurGroupPage,
});

function OurGroupPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Group"
        title={<>Seven businesses.<br /> One vision.</>}
        subtitle="Each business is a category leader. Together they deliver compounding value across the MENA region — and beyond."
      />

      <section className="relative bg-black py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-px bg-white/5 md:grid-cols-2">
            {BRANDS.map((brand, i) => (
              <motion.div
                key={brand.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to="/our-group/$brand"
                  params={{ brand: brand.slug }}
                  className="group relative block aspect-[4/3] overflow-hidden bg-black"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1 transition-all duration-500 group-hover:h-2"
                    style={{ backgroundColor: brand.color }}
                  />
                  <div className="relative flex h-full flex-col justify-between p-8 md:p-12">
                    <div className="flex items-start justify-between">
                      <span
                        className="font-display text-7xl font-black md:text-9xl"
                        style={{ color: brand.color }}
                      >
                        {brand.short}
                      </span>
                      <ArrowUpRight
                        size={28}
                        className="text-foreground/40 transition-all group-hover:rotate-45 group-hover:text-foreground"
                      />
                    </div>
                    <div>
                      <p
                        className="text-[10px] font-bold uppercase tracking-[0.25em]"
                        style={{ color: brand.color }}
                      >
                        {brand.category}
                      </p>
                      <h3 className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">
                        {brand.name}
                      </h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.15em] text-foreground/70">
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
    </SiteShell>
  );
}
