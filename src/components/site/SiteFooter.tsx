import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { BRANDS } from "@/lib/brands";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="relative overflow-hidden border-b border-white/5 bg-gradient-to-r from-[#7a0a14] via-[var(--ows-red)] to-[#7a0a14]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
        <div className="relative mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-6 py-12 lg:flex-row lg:items-center lg:px-10">
          <div>
            <h3 className="font-display text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
              One Group. <span className="text-foreground/70">Limitless Possibilities.</span>
            </h3>
            <p className="mt-3 max-w-xl text-sm text-foreground/85">
              Partner with OWS Holdings for integrated solutions that drive efficiency, growth and long-term value.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 border-2 border-foreground bg-black px-7 py-4 text-[12px] font-bold uppercase tracking-[0.25em] text-foreground transition-all hover:bg-foreground hover:text-background"
          >
            Get In Touch
            <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <span className="font-display text-3xl font-black text-foreground">OWS</span>
              <span className="ml-1 mt-1 h-[4px] w-8 bg-[var(--ows-red)]" />
            </div>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/50">
              Holdings
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-foreground/60">
              One Group. Seven Capabilities. <span className="text-[var(--ows-red)]">Infinite Value.</span>
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/40">Group</h4>
            <ul className="mt-5 space-y-3">
              {BRANDS.map((b) => (
                <li key={b.slug}>
                  <Link
                    to="/our-group/$brand"
                    params={{ brand: b.slug }}
                    className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/40">Company</h4>
            <ul className="mt-5 space-y-3">
              <li><Link to="/about" className="text-sm text-foreground/70 hover:text-foreground">About Us</Link></li>
              <li><Link to="/capabilities" className="text-sm text-foreground/70 hover:text-foreground">Capabilities</Link></li>
              <li><Link to="/careers" className="text-sm text-foreground/70 hover:text-foreground">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-foreground/70 hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/40">Connect</h4>
            <a href="mailto:info@owsholdings.com" className="mt-5 flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground">
              <Mail size={14} /> info@owsholdings.com
            </a>
            <div className="mt-6 flex gap-3">
              <a aria-label="LinkedIn" href="#" className="grid h-10 w-10 place-items-center border border-white/10 text-foreground/70 transition-all hover:border-[var(--ows-red)] hover:text-[var(--ows-red)]">
                <Linkedin size={16} />
              </a>
              <a aria-label="Instagram" href="#" className="grid h-10 w-10 place-items-center border border-white/10 text-foreground/70 transition-all hover:border-[var(--ows-red)] hover:text-[var(--ows-red)]">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} OWS Holdings. All Rights Reserved.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--ows-red)]">
            owsholdings.com
          </p>
        </div>
      </div>
    </footer>
  );
}
