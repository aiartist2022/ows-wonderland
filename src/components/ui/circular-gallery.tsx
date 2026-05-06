import React, { useState, useEffect, useRef, HTMLAttributes } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { Brand } from "@/lib/brands";

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: Brand[];
  /** Distance from the rotation center, in px. */
  radius?: number;
  /** Auto-rotation speed (degrees per frame). */
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.04, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    // Scroll-based rotation, scoped to this section
    useEffect(() => {
      const handleScroll = () => {
        const el = containerRef.current;
        if (!el) return;
        setIsScrolling(true);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // progress 0..1 as the section traverses the viewport
        const progress = Math.min(
          1,
          Math.max(0, (vh - rect.top) / (vh + rect.height)),
        );
        setRotation(progress * 360);

        scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 180);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      };
    }, []);

    // Auto-rotation when not scrolling
    useEffect(() => {
      const tick = () => {
        if (!isScrolling) setRotation((prev) => prev + autoRotateSpeed);
        animationFrameRef.current = requestAnimationFrame(tick);
      };
      animationFrameRef.current = requestAnimationFrame(tick);
      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }, [isScrolling, autoRotateSpeed]);

    const anglePerItem = 360 / Math.max(items.length, 1);

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={cn(
          "relative mx-auto flex h-[640px] w-full items-center justify-center overflow-hidden",
          className,
        )}
        style={{ perspective: "1400px" }}
        {...props}
      >
        <div
          className="relative h-72 w-56 sm:h-80 sm:w-64"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
            willChange: "transform",
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const total = ((rotation % 360) + 360) % 360;
            const relative = (itemAngle + total) % 360;
            const normalized = Math.abs(relative > 180 ? 360 - relative : relative);
            const opacity = Math.max(0.35, 1 - normalized / 200);

            return (
              <div
                key={item.slug}
                className="absolute inset-0"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                  opacity,
                }}
              >
                <Link
                  to="/our-group/$brand"
                  params={{ brand: item.slug }}
                  className="group relative block h-full w-full overflow-hidden border border-white/10 bg-black"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale transition-all duration-500 group-hover:opacity-95 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1 transition-all group-hover:h-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="relative flex h-full flex-col justify-between p-4">
                    <div>
                      {item.logo ? (
                        <div className="flex h-14 w-28 items-center justify-start opacity-90">
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="max-h-full max-w-full object-contain object-left"
                          />
                        </div>
                      ) : (
                        <span
                          className="font-display text-4xl font-black"
                          style={{ color: item.color }}
                        >
                          {item.short}
                        </span>
                      )}
                    </div>
                    <div>
                      <p
                        className="text-[8px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: item.color }}
                      >
                        {item.category.split(" & ")[0]}
                      </p>
                      <h3 className="mt-2 font-display text-sm font-bold leading-tight text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/60">
                        {item.tagline}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

CircularGallery.displayName = "CircularGallery";

export { CircularGallery };
