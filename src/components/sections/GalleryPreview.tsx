import { Gallery } from "./Gallery";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { featuredGallery } from "@/data/gallery";

export function GalleryPreview() {
  return (
    <section className="relative bg-cream-100">
      <div className="shell py-20 sm:py-24 lg:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title="Straight from the oven"
            lead="Pizzas, desserts and setups from real Pizzaiolo events."
            className="max-w-2xl"
          />
          <Reveal delay={160}>
            <div className="shrink-0 sm:pb-2">
              <ButtonLink href="/gallery" variant="secondary">
                View Full Gallery
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12 block">
          <Gallery images={featuredGallery} />
        </Reveal>
      </div>
    </section>
  );
}
