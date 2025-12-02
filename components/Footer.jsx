import site from "@/content/site.json";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold">{site.businessName}</div>
          <div className="mt-2">Serving {site.serviceAreas.join(", ")}</div>
          <div className="mt-2">Phone: <a href={`tel:${site.phone}`} className="underline">{site.phone}</a></div>
          <div>Email: <a href={`mailto:${site.email}`} className="underline">{site.email}</a></div>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-2 space-y-1">
            <li><a href="/portfolio" className="underline">Portfolio</a></li>
            <li><a href="/services" className="underline">Services</a></li>
            <li><a href="/blog" className="underline">Blog</a></li>
            <li><a href="/contact" className="underline">Contact</a></li>
            <li><a href="/privacy" className="underline">Privacy</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Follow</div>
          <ul className="mt-2 space-y-1">
            <li><a className="underline" href={site.facebook} target="_blank">Facebook</a></li>
            <li><a className="underline" href={site.instagram} target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-6">© {new Date().getFullYear()} {site.businessName}. All rights reserved.</div>
    </footer>
  );
}
