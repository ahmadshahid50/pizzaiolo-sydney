import { LandingPageTemplate } from "@/components/sections/LandingPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { landingPages } from "@/data/landing";

const page = landingPages["wedding-pizza-catering-sydney"];

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/wedding-pizza-catering-sydney",
  image: page.heroImage,
});

export default function Page() {
  return <LandingPageTemplate page={page} />;
}
