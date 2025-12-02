"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function GalleryCarousel({ images = [] }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  // helper to scroll so the chosen child is centered
  const scrollToIndex = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i];
    if (!child) return;

    const target =
      child.offsetLeft - (track.clientWidth - child.clientWidth) / 2;

    track.scrollTo({ left: target, behavior: "smooth" });
    setIndex(i);
  };

  const prev = () => scrollToIndex(Math.max(0, index - 1));
  const next = () =>
    scrollToIndex(Math.min(images.length - 1, index + 1));

  // keep dots in sync when user drags/scrolls
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        for (let i = 0; i < track.children.length; i++) {
          const el = track.children[i];
          const mid = el.offsetLeft + el.clientWidth / 2;
          const d = Math.abs(mid - center);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        }
        setIndex(best);
        ticking = false;
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  if (!images?.length) return null;

  return (
    <div className="relative">
      {/* floating arrows pinned to the top-left/right */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute z-20 top-3 left-6 h-9 w-9 grid place-items-center
                   rounded-md border border-white/40 bg-white/70 backdrop-blur
                   hover:bg-brand-light"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute z-20 top-3 right-6 h-9 w-9 grid place-items-center
                   rounded-md border border-white/40 bg-white/70 backdrop-blur
                   hover:bg-brand-light"
      >
        ›
      </button>

      {/* track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1
                   [scrollbar-width:none] [-ms-overflow-style:none]"
        style={{ scrollBehavior: "smooth" }}
        // hide scrollbar on WebKit
        onWheel={(e) => {
          // horizontal scroll with trackpad/shift+wheel
          const el = trackRef.current;
          if (!el) return;
          if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // already horizontal
          el.scrollLeft += e.deltaY;
        }}
      >
        {images.map((img, i) => (
          <figure
            key={i}
            className={`snap-center shrink-0 w-[88%] sm:w-[70%] md:w-[58%] lg:w-[48%]
                        rounded-2xl overflow-hidden border border-gray-200 bg-white
                        shadow-[0_8px_24px_rgba(17,24,39,0.08)]
                        transition-transform duration-300
                        ${i === index ? "scale-[1.01]" : "opacity-95"}`}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={img.src}
                alt={img.alt || "Portfolio image"}
                fill
                className="object-cover"
                sizes="(min-width:1280px) 48vw, (min-width:768px) 58vw, 88vw"
                priority={i === 0}
              />
            </div>
            {img.caption ? (
              <figcaption className="px-4 py-3 text-sm text-gray-700">
                {img.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {/* dots */}
      <div className="mt-5 flex items-center justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full ${
              i === index ? "bg-brand" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
