import Link from "next/link";
import site from "@/content/site.json";

export default function Header() {
  return (
    <header className="border-b border-gray-200 sticky top-0 backdrop-blur bg-white/80 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <img src={site.logoUrl} alt={site.businessName + ' logo'} className="h-8 w-auto" />
          <span className="font-semibold">{site.businessName}</span>
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/services">Services</Link>
          <Link href="/behind-the-lens">Behind the Lens</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="px-3 py-1 rounded-2xl bg-brand text-white">Book</Link>
        </nav>
      </div>
    </header>
  );
}
