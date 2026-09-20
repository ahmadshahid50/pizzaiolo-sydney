import { LandingPageTemplate } from "@/components/sections/LandingPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { landingPages } from "@/data/landing";

const page = landingPages["mobile-pizza-truck-catering-sydney"];

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/mobile-pizza-truck-catering-sydney",
  image: page.heroImage,
});

export default function Page() {
  return <LandingPageTemplate page={page} />;
}
