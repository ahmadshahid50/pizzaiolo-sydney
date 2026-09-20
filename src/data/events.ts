/**
 * Event types. Every entry is drawn from occasions the existing site
 * explicitly names across its packages, landing and catering pages.
 */

export type EventType = {
  title: string;
  blurb: string;
  image: string;
  alt: string;
};

export const eventTypes: EventType[] = [
  {
    title: "Weddings",
    blurb:
      "A relaxed, interactive alternative to a plated menu — pizzas served straight from the oven as your guests mingle.",
    image: "/images/pizza/pizza-prosciutto-rocket.webp",
    alt: "Woodfired pizza topped with prosciutto and rocket on a wooden serving board",
  },
  {
    title: "Engagements & Parties",
    blurb:
      "The setup becomes part of the night. Guests gather by the oven while pizzas keep coming.",
    image: "/images/story/woodfire-pizza-cheese-pull.webp",
    alt: "A slice of woodfired pizza lifted with a cheese pull",
  },
  {
    title: "Corporate Functions",
    blurb:
      "Fast, generous service for large teams — from office gatherings to full-scale company events.",
    image: "/images/catering/catering-pasta-arancini-trays.webp",
    alt: "Catering trays of baked pasta, lasagna and arancini on a buffet table",
  },
  {
    title: "Private Events",
    blurb:
      "Backyard or venue, we bring the oven, the ingredients and the team to you.",
    image: "/images/hero/pizzaiolo-pizza-trailer.webp",
    alt: "The Pizzaiolo mobile woodfire pizza trailer set up at an event",
  },
  {
    title: "Birthdays & Celebrations",
    blurb:
      "All-you-can-eat service that finishes with dessert pizzas, cannoli or tiramisu.",
    image: "/images/cannoli/cannoli-by-michele-board.webp",
    alt: "Sicilian cannoli filled to order and dusted with icing sugar",
  },
  {
    title: "Community & Fundraisers",
    blurb:
      "Festivals, school fundraisers and community days — a portable kitchen that works almost anywhere.",
    image: "/images/catering/pizza-selection-boxes.webp",
    alt: "A selection of freshly boxed woodfired pizzas ready for service",
  },
];
