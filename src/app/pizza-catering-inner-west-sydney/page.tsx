import { LandingPageTemplate } from "@/components/sections/LandingPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { landingPages } from "@/data/landing";

const page = landingPages["pizza-catering-inner-west-sydney"];

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/pizza-catering-inner-west-sydney",
  image: page.heroImage,
});

export default function Page() {
  return <LandingPageTemplate page={page} />;
}
