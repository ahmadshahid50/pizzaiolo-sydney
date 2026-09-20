import { PageHero } from "@/components/sections/PageHero";
import { Contact } from "@/components/sections/Contact";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us | Pizzaiolo Woodfire Pizza Sydney",
  description:
    "Get in touch with Pizzaiolo Woodfire Pizza. Call 0406 858 124, email us, or send an enquiry about woodfire pizza catering for your Sydney event.",
  path: "/contact",
  image: "/images/hero/pizzaiolo-pizza-trailer.webp",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your event"
        lead="Reach out and let us know if there is anything we can do for you."
        image="/images/catering/catering-pasta-arancini-trays.webp"
        alt=""
        crumb="Contact"
      />
      <Contact />
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
    </>
  );
}
