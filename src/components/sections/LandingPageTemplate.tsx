import { PageHero } from "./PageHero";
import { LandingContent } from "./LandingContent";
import { Testimonials } from "./Testimonials";
import { FinalCTA } from "./FinalCTA";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import type { LandingPage } from "@/data/landing";

export function LandingPageTemplate({ page }: { page: LandingPage }) {
  const heading = page.sections[0]?.heading ?? page.crumb;

  return (
    <>
      <PageHero
        eyebrow="Pizzaiolo Woodfire Pizza"
        title={heading}
        image={page.heroImage}
        alt={page.heroAlt}
        crumb={page.crumb}
      />
      <LandingContent sections={page.sections.slice(1)} />
      <Testimonials />
      <FinalCTA />
      <JsonLd
        data={breadcrumbSchema([{ name: page.crumb, path: `/${page.slug}` }])}
      />
    </>
  );
}
