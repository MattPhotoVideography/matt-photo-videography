"use client";
import { useState, useRef, useEffect } from "react";
import reviews from "@/content/testimonials.json";

/**
 * Minimal, dependency-free carousel:
 * - Keyboard accessible (←/→)
 * - Buttons for previous/next
 * - Touch/trackpad friendly via scroll container
 * - “Floating card” style like your reference
 */
export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const clamp = (v) => Math.max(0, Math.min(v, reviews.length - 1));
  const go = (i) => setIndex(clamp(i));
  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  // Scroll to active card
  useEffect(() => {
    const el = trackRef.current?.children?.[index];
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index]);

  // Arrow keys
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  if (!reviews?.length) return null;

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-1"
        style={{ scrollBehavior: "smooth" }}
      >
        {reviews.map((r, i) => (
          <figure
            key={i}
            className={`snap-center shrink-0 w-[85%] md:w-[60%] lg:w-[45%] 
                        bg-white border border-gray-200 rounded-2xl p-6 
                        shadow-[0_10px_30px_rgba(17,24,39,0.08)] 
                        transition-transform duration-300 
                        ${i === index ? "scale-[1.01] -translate-y-1" : "opacity-90"}`}
            aria-current={i === index}
          >
            <blockquote className="text-gray-800 leading-relaxed">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold">
              {r.name}{r.location ? ` — ${r.location}` : ""}{r.rating ? ` · ${"★".repeat(r.rating)}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous"
          className="h-10 w-10 rounded-full border border-gray-300 bg-white hover:bg-amber-50"
        >
          ←
        </button>
        <div className="flex gap-1">
          {reviews.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-brand" : "bg-gray-300"}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="h-10 w-10 rounded-full border border-gray-300 bg-white hover:bg-amber-50"
        >
          →
        </button>
      </div>
    </div>
  );
}