export function localBusinessJsonLd(site) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": site.url + "/#business",
    "name": site.businessName,
    "description": site.tagline,
    "image": site.logoUrl || site.url + "/images/logo.png",
    "url": site.url,
    "telephone": site.phone,
    "email": site.email,
    "priceRange": site.priceRange || "$$",
    "sameAs": site.socials?.filter(Boolean),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "areaServed": site.serviceAreas?.map(city => ({
      "@type": "City",
      "name": city
    })),
    "byAppointmentOnly": true
  };
  return JSON.stringify(data);
}

export function serviceJsonLd(service, site) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": site.businessName,
      "telephone": site.phone,
      "areaServed": site.serviceAreas
    },
    "areaServed": site.serviceAreas,
    "url": `${site.url}/services/${service.slug}`
  });
}

export const faqJsonLd = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
});

export const breadcrumbsJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((it, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": it.name,
    "item": it.url,
  })),
});
