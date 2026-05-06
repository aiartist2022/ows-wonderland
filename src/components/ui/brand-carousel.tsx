import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { Brand } from "@/lib/brands";

interface BrandCarouselProps {
  brands: Brand[];
  className?: string;
}

export const BrandCarousel = React.forwardRef<HTMLDivElement, BrandCarouselProps>(
  ({ brands, className }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    const checkScrollability = React.useCallback(() => {
      const c = scrollContainerRef.current;
      if (!c) return;
      const { scrollLeft, scrollWidth, clientWidth } = c;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }, []);

    React.useEffect(() => {
      const c = scrollContainerRef.current;
      if (!c) return;
      checkScrollability();
      c.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => {
        c.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }, [brands, checkScrollability]);

    const scroll = (direction: "left" | "right") => {
      const c = scrollContainerRef.current;
      if (!c) return;
      const amount = c.clientWidth * 0.8;
      c.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    };

    return (
      <div ref={ref} className={cn("w-full", className)}>
        <div className="mb-8 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="rounded-full border border-white/15 bg-black/40 p-3 text-foreground transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--ows-red)] hover:text-[var(--ows-red)]"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="rounded-full border border-white/15 bg-black/40 p-3 text-foreground transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--ows-red)] hover:text-[var(--ows-red)]"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              to="/our-group/$slug"
              params={{ slug: brand.slug }}
              className="group relative flex-shrink-0 snap-start w-[280px] sm:w-[320px] lg:w-[360px] overflow-hidden border border-white/10 bg-[var(--ows-panel)] transition-all duration-500 hover:border-[var(--ows-red)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--ows-red)]">
                    {brand.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-black uppercase leading-[1] tracking-tight text-foreground">
                    {brand.name}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 line-clamp-2">{brand.tagline}</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 bg-black/60 px-5 py-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/80">
                  {brand.short}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/50 transition-colors group-hover:text-[var(--ows-red)]">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
);

BrandCarousel.displayName = "BrandCarousel";
