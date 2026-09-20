import { PageHero } from "@/components/sections/PageHero";
import { Setup } from "@/components/sections/Setup";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pizzaiolo Setup | Pizzaiolo Woodfire Pizza Sydney",
  description:
    "Our mobile woodfire setup, in detail. Small and large trailer configurations with dimensions, marquee options and power requirements.",
  path: "/pizzaiolo-setup",
  image: "/images/hero/pizzaiolo-pizza-trailer.webp",
});

export default function SetupPage() {
  return (
    <>
      <PageHero
        eyebrow="Pizzaiolo Setup"
        title="A real woodfire oven, on wheels"
        lead="Two trailer configurations built around a genuine woodfire oven. Here are the dimensions, so you know exactly what fits."
        image="/images/hero/pizzaiolo-pizza-trailer.webp"
        alt=""
        crumb="Pizzaiolo Setup"
      />
      <Setup variant="full" />
      <FinalCTA />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Pizzaiolo Setup", path: "/pizzaiolo-setup" },
        ])}
      />
    </>
  );
}
