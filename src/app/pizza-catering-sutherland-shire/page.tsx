import { LandingPageTemplate } from "@/components/sections/LandingPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { landingPages } from "@/data/landing";

const page = landingPages["pizza-catering-sutherland-shire"];

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/pizza-catering-sutherland-shire",
  image: page.heroImage,
});

export default function Page() {
  return <LandingPageTemplate page={page} />;
}
