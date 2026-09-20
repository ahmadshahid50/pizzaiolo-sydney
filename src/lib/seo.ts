import type { Metadata } from "next";
import { site } from "@/data/site";

type SeoInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/gallery". Used for the canonical URL. */
  path: string;
  /** Absolute or root-relative image path for social sharing. */
  image?: string;
};

const DEFAULT_OG = "/images/og-pizzaiolo-woodfire-catering.jpg";

/**
 * Builds page metadata with a canonical URL and Open Graph / Twitter cards.
 * Canonicals point at the live domain so the migrated URLs keep their equity.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG,
}: SeoInput): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const ogImage = image.startsWith("http") ? image : `${site.url}${image}`;

  return {
    // Absolute: the migrated titles are already complete, so the root
    // layout's "%s | Pizzaiolo Woodfire Pizza" template must not be applied.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.fullName,
      locale: "en_AU",
      type: "website",
      // Only the purpose-built card is a known 1.91:1; for any other image
      // we omit the dimensions rather than assert ones that are wrong.
      images: [
        image === DEFAULT_OG
          ? { url: ogImage, width: 1200, height: 630, alt: site.fullName }
          : { url: ogImage, alt: site.fullName },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
