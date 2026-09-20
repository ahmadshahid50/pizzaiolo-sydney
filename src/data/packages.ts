/**
 * Pizza catering packages — migrated verbatim from /pizza-catering-form.
 * Prices and inclusions are the client's own. Do not alter without their say-so.
 */

export type Package = {
  id: string;
  name: string;
  price: string;
  unit: string;
  minimum: string;
  summary: string;
  featured?: boolean;
  includes: string[];
};

export const packages: Package[] = [
  {
    id: "package-1",
    name: "Package 1",
    price: "$27",
    unit: "per person",
    minimum: "Minimum charge: $1650",
    summary: "Five savoury pizzas plus a dessert pizza, served all-you-can-eat.",
    includes: [
      "2.5 hours all-you-can-eat woodfire pizza service",
      "Includes 2 hours of savoury pizzas followed by 30 mins of dessert pizzas",
      "Optional dessert alternative upgrade available",
      "Select 5 savoury pizzas and 1 dessert pizza from our menu",
      "Freshly made and cooked on-site in our woodfire oven",
      "Pizzas continuously rotated throughout service",
      "Includes setup, cooking and service",
    ],
  },
  {
    id: "package-2",
    name: "Package 2",
    price: "$30",
    unit: "per person",
    minimum: "Minimum charge: $1650",
    summary: "A broader spread — eight savoury pizzas and a dessert pizza.",
    featured: true,
    includes: [
      "2.5 hours all-you-can-eat woodfire pizza service",
      "Includes 2 hours of savoury pizzas followed by 30 mins of dessert pizzas",
      "Optional dessert alternative upgrade available",
      "Select 8 savoury pizzas and 1 dessert pizza from our menu",
      "Freshly made and cooked on-site in our woodfire oven",
      "Pizzas continuously rotated throughout service",
      "Includes setup, cooking and service",
    ],
  },
  {
    id: "package-3",
    name: "Package 3",
    price: "$35",
    unit: "per person",
    minimum: "Minimum charge: $1650",
    summary: "The full menu, unrestricted — our premium service.",
    includes: [
      "2.5 hours all-you-can-eat premium woodfire pizza service",
      "Includes 2 hours of savoury pizzas followed by 30 mins of dessert pizzas",
      "Optional dessert alternative upgrade available",
      "Full access to our entire savoury pizza menu",
      "Select 1 dessert pizza from our menu",
      "Freshly made and cooked on-site in our woodfire oven",
      "Pizzas continuously rotated throughout service",
      "Includes setup, cooking and service",
    ],
  },
];

export const dessertUpgrade = {
  title: "Optional Dessert Alternative Upgrade",
  body: "All pizza packages can alternatively be changed to a 2 hour service with no dessert pizzas and instead choose one of the following per person:",
  options: ["One cannoli per person", "One portion of tiramisu per person"],
  note: "Tiramisu served in catering trays — each tray serves approximately 30 portions.",
};

export const packageNotes = [
  "We make and serve pizzas until your guests are full — nobody leaves hungry.",
  "Gluten free bases available upon request (+$5 per pizza)",
  "Vegan cheese available upon request (+$5 per person)",
  "Travel fee may apply for events located more than 25km outside the Sutherland Shire.",
  "Vegetarian, vegan and halal-friendly options available.",
];

/** "How It Works" — the service timeline, as described on the packages page. */
export const howItWorks = {
  intro:
    "We are here to make your party or event planning as easy as possible! We offer a stress free way to entertain your guests with great authentic pizzas and desserts.",
  speciality:
    "Pizzaiolo Wood Fire Pizza specialise in Neapolitan style pizza, creating delicious wood-fired pizzas for parties, private events, corporate functions, weddings and more!",
  steps: [
    "We will arrive 2 hours before the guests arrive to set up the woodfired oven already primed and ready to cook.",
    "Once your guests start to arrive you say \u201cgo\u201d & we\u2019ll start serving pizzas on your designated table.",
    "We\u2019ll rotate between your selected pizzas throughout the service.",
    "We make & serve pizzas until your guests are full \u2014 nobody leaves hungry.",
    "We finish the night with dessert pizzas or other Italian desserts of your choice.",
  ],
};
