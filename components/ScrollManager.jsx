"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollManager() {
  const pathname = usePathname();
  const search = useSearchParams();

  // 1) Never let the browser auto-restore
  useEffect(() => {
    if ("scrollRestoration" in history) {
      const prev = history.scrollRestoration;
      history.scrollRestoration = "manual";
      return () => (history.scrollRestoration = prev);
    }
  }, []);

  // helper: really snap to top after layout settles
  const snapTop = () => {
    if (window.location.hash) return; // respect in-page anchors
    // two rAFs ensures layout + hydration finished
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    });
  };

  // 2) First mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    snapTop();
  }, []);

  // 3) On route or query change
  useEffect(() => {
    if (typeof window === "undefined") return;
    snapTop();
  }, [pathname, search?.toString()]);

  // 4) If the page was kept in bfcache and restored, force top again
  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "visible") snapTop();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return null;
}
