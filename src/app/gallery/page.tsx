import { PageHero } from "@/components/sections/PageHero";
import { Gallery } from "@/components/sections/Gallery";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { galleryImages } from "@/data/gallery";

export const metadata = buildMetadata({
  title: "Gallery | Pizzaiolo Woodfire Pizza Sydney",
  description:
    "Browse woodfired pizzas, catering spreads, cannoli and our mobile setup from real Pizzaiolo events across Sydney.",
  path: "/gallery",
  image: "/images/pizza/pizza-prosciutto-rocket.webp",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Every slice, straight from the oven"
        lead={`${galleryImages.length} photographs from Pizzaiolo events — the pizzas, the desserts and the setup that brings it all together.`}
        image="/images/hero/woodfire-oven-flames.webp"
        alt=""
        crumb="Gallery"
      />

      <section className="relative bg-cream">
        <div className="shell py-16 sm:py-20 lg:py-24">
          <Gallery images={galleryImages} showFilters />
        </div>
      </section>

      <FinalCTA />
      <JsonLd data={breadcrumbSchema([{ name: "Gallery", path: "/gallery" }])} />
    </>
  );
}
