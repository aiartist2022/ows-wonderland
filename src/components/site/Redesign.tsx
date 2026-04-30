import { ReactNode } from "react";
import { motion } from "framer-motion";
import skylineImg from "@/assets/hero-skyline.jpg";

export function RedesignHero({
  title,
  subtitle,
  highlight,
  children,
  image,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  highlight?: ReactNode;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-black pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image || skylineImg}
          alt="Hero Background"
          className="h-full w-full object-cover object-center opacity-40 mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
      </div>

      {/* Red Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-radial-red opacity-50 mix-blend-screen" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1920px] flex-col justify-end px-6 lg:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[7.5rem]"
        >
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-[var(--ows-red)] text-glow-red">{highlight}</span>
            </>
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}
        
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function StatRow({ stats }: { stats: { icon: ReactNode; value: string; label: string }[] }) {
  return (
    <section className="relative border-b border-white/5 bg-[var(--ows-panel)]">
      <div className="mx-auto w-full max-w-[1920px]">
        <div className="grid grid-cols-2 divide-x divide-y divide-white/5 md:grid-cols-5 md:divide-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="text-[var(--ows-red)] mb-4">{stat.icon}</div>
              <p className="font-display text-3xl font-black tracking-tight text-white md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IconCard({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <div className="group relative flex h-full flex-col items-center border border-white/5 bg-black p-8 text-center transition-all hover:border-[var(--ows-red)] hover:bg-white/[0.02]">
      <div className="mb-6 text-[var(--ows-red)] opacity-80 transition-all group-hover:scale-110 group-hover:opacity-100 group-hover:text-glow-red">
        {icon}
      </div>
      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white mb-3">
        {title}
      </h3>
      <p className="text-sm text-foreground/60 leading-relaxed">{body}</p>
    </div>
  );
}
