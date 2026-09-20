/**
 * Single source of truth for business information.
 * Every value here was migrated verbatim from pizzaiolosydney.com.au.
 * Nothing in this file is invented — update here and it updates sitewide.
 */

export const site = {
  name: "Pizzaiolo",
  legalName: "Pizzaiolo Woodfire Pizza Pty Ltd",
  fullName: "Pizzaiolo Woodfire Pizza",
  tagline: "Authentic Woodfire Pizza. Made the Traditional Way.",
  url: "https://www.pizzaiolosydney.com.au",
  description:
    "We bring the authentic taste of woodfire pizza directly to your event — freshly made on-site with our mobile pizza truck. Perfect for weddings, parties, and celebrations!",
  phone: "0406 858 124",
  phoneHref: "tel:+61406858124",
  email: "pizzaiolosydney@gmail.com",
  emailHref: "mailto:pizzaiolosydney@gmail.com",
  serviceArea: "Sydney, NSW",
  /** Travel fee applies beyond this radius — stated on the packages page. */
  travelBase: "Sutherland Shire",
} as const;

/** External integrations — these are live booking/ordering endpoints. Do not alter. */
export const external = {
  /** Square booking page used by every "Let's Cater Your Event" CTA. */
  book: "https://pizzaiolo-woodfire-pizza.square.site/pizzaandcateringpackages",
  /** Square online ordering storefront. */
  order:
    "https://pizzaiolo-woodfire-pizza.square.site/s/order?location=LENCCW0VMAT6Q#LRAZ3BAQWJ34EUA6O6WFI4SM",
  /** Square hosted contact form. */
  contact: "https://pizzaiolo-woodfire-pizza.square.site/contact-us",
} as const;

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/pizzaiolosydney" },
  { name: "Instagram", href: "https://www.instagram.com/pizzaiolosydney/" },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@pizzaiolosydney?_t=ZS-9100mVwgCMS&_r=1",
  },
] as const;

/** Google Ads conversion tracking — carried over from the existing site. */
export const tracking = {
  googleAdsId: "AW-11320356794",
  googleSiteVerification: "5-plES6_BOZTYL7KbpQ2j2lAbZKu5wGNMu7MF2AD-9I",
} as const;

/** Google Maps embed for the business listing, as used on the current site. */
export const mapsEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424495.5289623424!2d150.9661444!3d-33.77690815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2320bd1be1e60933%3A0xb6d911058b0d864c!2sPizzaiolo%20woodfire%20Pizza%20Pty%20Ltd!5e0!3m2!1sen!2s!4v1761883301011!5m2!1sen!2s";

/** Primary navigation. Routes match the existing site's URLs exactly. */
export const navLinks = [
  { label: "Pizza Packages", href: "/pizza-catering-form" },
  { label: "Catering Menu", href: "/catering-form" },
  { label: "Gallery", href: "/gallery" },
  { label: "Cannoli", href: "/roaming-cannoli" },
  { label: "Our Setup", href: "/pizzaiolo-setup" },
  { label: "Contact", href: "/contact" },
] as const;

/** Location landing pages — preserved from the existing footer for SEO. */
export const serviceAreaLinks = [
  { label: "Mobile Pizza Catering Sydney", href: "/mobile-pizza-truck-catering-sydney" },
  { label: "Event Pizza Catering Sydney", href: "/event-pizza-catering-sydney" },
  { label: "Pizza Catering Inner West Sydney", href: "/pizza-catering-inner-west-sydney" },
  { label: "Wedding Pizza Catering Sydney", href: "/wedding-pizza-catering-sydney" },
  { label: "Sutherland Shire Pizza Catering", href: "/pizza-catering-sutherland-shire" },
] as const;
