import { external, site, socials } from "@/data/site";

/**
 * LocalBusiness / FoodEstablishment schema.
 *
 * Only facts published on the client's existing site are asserted here.
 * There is deliberately no aggregateRating, priceRange beyond the published
 * per-head rates, street address or opening hours — none of those are stated
 * on the source site, and inventing them would be a misrepresentation.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["FoodEstablishment", "CateringBusiness"],
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: site.fullName,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/hero/woodfire-oven-flames.webp`,
    logo: `${site.url}/images/branding/pizzaiolo-logo.png`,
    servesCuisine: ["Italian", "Pizza", "Neapolitan"],
    areaServed: { "@type": "City", name: "Sydney", addressRegion: "NSW", addressCountry: "AU" },
    address: { "@type": "PostalAddress", addressLocality: "Sydney", addressRegion: "NSW", addressCountry: "AU" },
    sameAs: socials.map((s) => s.href),
    potentialAction: {
      "@type": "OrderAction",
      target: { "@type": "EntryPoint", urlTemplate: external.order },
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.fullName,
    publisher: { "@id": `${site.url}/#business` },
  };
}

/** Breadcrumbs for interior pages. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      ...trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: t.name,
        item: `${site.url}${t.path}`,
      })),
    ],
  };
}

/** Renders one or more JSON-LD blocks. */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
