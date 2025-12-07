"use client";

import { useState } from "react";
import Link from "next/link";
import site from "@/content/site.json";

// tiny inline icons (no packages)
const IconMenu = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconX = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

function nudgeTop() {
  try {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));
  } catch {}
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const NavLinks = ({ onClick }) => (
    <>
      <Link href="/portfolio" onClick={onClick} className="px-3 py-2 rounded-md">
        Portfolio
      </Link>
      <Link href="/services" onClick={onClick} className="px-3 py-2 rounded-md">
        Services
      </Link>
      <Link href="/behind-the-lens" onClick={onClick} className="px-3 py-2 rounded-md">
        Behind the Lens
      </Link>
      <Link href="/faq" onClick={onClick} className="px-3 py-2 rounded-md">
        FAQ
      </Link>
      <Link href="/about" onClick={onClick} className="px-3 py-2 rounded-md">
        About
      </Link>
      <Link
        href="/contact"
        onClick={onClick}
        className="px-4 py-2 rounded-xl bg-brand text-white font-medium"
      >
        Book
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">
      <div className="pt-[env(safe-area-inset-top)]" />

      <div className="container h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          onClick={() => {
            nudgeTop();
            close();
          }}
          className="flex items-center gap-2 min-w-0"
          aria-label={`${site.businessName} home`}
        >
          <img src={site.logoUrl} alt={`${site.businessName} logo`} className="h-8 w-auto shrink-0" />
          <span className="font-semibold text-base sm:text-lg leading-tight line-clamp-1">
            {site.businessName}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <NavLinks onClick={nudgeTop} />
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 border border-gray-300/70"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden border-t border-gray-200 transition-[max-height] duration-300 ${
          open ? "max-h-[70vh]" : "max-h-0"
        }`}
      >
        <div className="container py-3 flex flex-col gap-2 text-base">
          <NavLinks
            onClick={() => {
              nudgeTop();
              close();
            }}
          />
        </div>
      </div>
    </header>
  );
}
