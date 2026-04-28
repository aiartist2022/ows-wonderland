import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/our-group", label: "Our Group" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-white/5"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex h-9 items-center">
            <span className="font-display text-2xl font-black tracking-tight text-foreground">OWS</span>
            <span className="ml-1 mt-1 h-[3px] w-6 bg-[var(--ows-red)] transition-all group-hover:w-10" />
          </div>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/60 sm:block">
            Holdings
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group relative text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "!text-[var(--ows-red)]" }}
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--ows-red)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden border border-[var(--ows-red)] bg-[var(--ows-red)]/10 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground transition-all hover:bg-[var(--ows-red)] hover:shadow-[0_0_30px_var(--ows-red-glow)] md:block"
          >
            Get In Touch
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center text-foreground lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-white/5 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col px-6 py-6">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="border-b border-white/5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/80"
                  activeProps={{ className: "!text-[var(--ows-red)]" }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-6 inline-block bg-[var(--ows-red)] px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-foreground"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
