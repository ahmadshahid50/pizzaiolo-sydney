import { PageHero } from "@/components/sections/PageHero";
import { Cannoli } from "@/components/sections/Cannoli";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cannoli by Michele | Pizzaiolo Woodfire Pizza Sydney",
  description:
    "Pizzaiolo Woodfire Pizza Sydney's Cannoli by Michele service brings the sweet charm of Sicily to your event.",
  path: "/roaming-cannoli",
  image: "/images/cannoli/cannoli-by-michele-board.webp",
});

export default function CannoliPage() {
  return (
    <>
      <PageHero
        eyebrow="Cannoli by Michele"
        title="Freshly piped cannoli, roaming your event"
        lead="A crowd favourite that is as interactive as it is delicious — made to order, in front of your guests."
        image="/images/cannoli/cannoli-by-michele-board.webp"
        alt=""
        crumb="Cannoli by Michele"
        focal="center 60%"
      />
      <Cannoli variant="full" />
      <FinalCTA />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Cannoli by Michele", path: "/roaming-cannoli" },
        ])}
      />
    </>
  );
}
