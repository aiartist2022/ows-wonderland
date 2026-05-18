import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { BRANDS, BRAND_WEBSITES } from "@/lib/brands";
import logoImg from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="relative overflow-hidden border-b border-white/5 bg-gradient-to-r from-[#7a0a14] via-[var(--ows-red)] to-[#7a0a14]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
        <div className="relative mx-auto flex w-full max-w-[1920px] flex-col items-start justify-between gap-6 px-6 py-12 lg:flex-row lg:items-center lg:px-10">
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

      <div className="mx-auto w-full max-w-[1920px] px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <img
              src={logoImg}
              alt="OWS Holdings"
              className="h-32 w-auto object-contain md:h-40 lg:h-44"
            />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-foreground/60">
              One Group. Nine Capabilities.{" "}
              <span className="text-[var(--ows-red)]">Infinite Value.</span>
            </p>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-foreground/40">
              Headquartered in Dubai, UAE — operating across automotive, defence,
              insurance, media, events, wellness and facility management.
            </p>
          </div>

          {/* Group */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/40">Group</h4>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-1">
              {BRANDS.map((b) => (
                <li key={b.slug} className="flex items-center gap-2">
                  <Link
                    to="/our-group/$brand"
                    params={{ brand: b.slug }}
                    className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {b.name}
                  </Link>
                  {BRAND_WEBSITES[b.slug] && (
                    <a
                      href={BRAND_WEBSITES[b.slug]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${b.name} website`}
                      className="text-foreground/30 transition-colors hover:text-[var(--ows-red)]"
                    >
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/40">Company</h4>
            <ul className="mt-6 space-y-3">
              <li><Link to="/about" className="text-sm text-foreground/70 hover:text-foreground">About Us</Link></li>
              <li><Link to="/capabilities" className="text-sm text-foreground/70 hover:text-foreground">Capabilities</Link></li>
              <li><Link to="/careers" className="text-sm text-foreground/70 hover:text-foreground">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-foreground/70 hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/40">Connect</h4>
            <a
              href="mailto:info@owsholdings.com"
              className="mt-6 flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
            >
              <Mail size={14} /> info@owsholdings.com
            </a>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-foreground/40">
              OWS Holdings HQ<br />
              Dubai Design District, Building 1B,<br />
              Office 707, Dubai, United Arab Emirates
            </p>
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

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} OWS Holdings. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-foreground/40">
            <span className="font-semibold uppercase tracking-[0.25em] text-[var(--ows-red)]">
              owsholdings.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
