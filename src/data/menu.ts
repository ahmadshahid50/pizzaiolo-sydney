/**
 * Event catering menu — migrated verbatim from /catering-form.
 * Descriptions and prices are the client's own.
 */

export type MenuItem = {
  name: string;
  description?: string;
  prices: string[];
};

export type MenuGroup = {
  id: string;
  title: string;
  blurb?: string;
  image?: { src: string; alt: string };
  items: MenuItem[];
};

export const menuIntro = {
  eyebrow: "Event Catering",
  heading: "We don\u2019t just make pizza",
  body: "Explore our full menu featuring delicious pastas, fresh salads, crispy arancini, and plenty more to enjoy.",
  note: "All dishes are made fresh on the day of your event, using authentic Italian recipes and the highest-quality ingredients. Available in Family Size or Catering Size to suit any occasion.",
};

export const menuGroups: MenuGroup[] = [
  {
    id: "trays",
    title: "Pasta & Bakes",
    blurb: "Family Size serves 4\u20136. Catering Size serves 30.",
    image: {
      src: "/images/catering/catering-pasta-arancini-trays.webp",
      alt: "Catering trays of baked pasta, lasagna and arancini set out on a buffet table",
    },
    items: [
      {
        name: "Eggplant Parmigiana",
        description:
          "Layers of golden fried eggplant, rich Napoli sauce, and melted mozzarella, baked to perfection. A hearty Italian classic the whole family will love.",
        prices: ["Family Size \u2014 $60 (Serves 4\u20136)", "Catering Size \u2014 $140 (Serves 30)"],
      },
      {
        name: "Beef Lasagna",
        description:
          "Traditional Italian-style lasagna with rich Bolognese, creamy b\u00e9chamel, and melted cheese. Comforting, hearty, and perfect for gatherings.",
        prices: ["Family Size \u2014 $60 (Serves 4\u20136)", "Catering Size \u2014 $140 (Serves 30)"],
      },
      {
        name: "Vegetarian Lasagna",
        description:
          "A wholesome mix of seasonal vegetables layered with Napoli sauce, b\u00e9chamel, and cheese. A hearty, meat-free favourite.",
        prices: ["Family Size \u2014 $60 (Serves 4\u20136)", "Catering Size \u2014 $140 (Serves 30)"],
      },
      {
        name: "Beef Cannelloni",
        description:
          "Tender pasta filled with beef, topped with Napoli sauce and melted cheese, baked until golden. A true crowd-pleaser.",
        prices: ["Family Size \u2014 $60 (Serves 4\u20136)", "Catering Size \u2014 $140 (Serves 30)"],
      },
      {
        name: "Spinach & Ricotta Cannelloni",
        description:
          "Delicate pasta tubes filled with creamy ricotta and spinach, topped with Napoli, b\u00e9chamel, and cheese. A beloved vegetarian classic.",
        prices: ["Family Size \u2014 $60 (Serves 4\u20136)", "Catering Size \u2014 $140 (Serves 30)"],
      },
    ],
  },
  {
    id: "pasta-meat",
    title: "Meatballs & Pasta",
    image: {
      src: "/images/catering/italian-meatballs-garlic-bread.webp",
      alt: "A tray of Italian meatballs in Napoletana sauce beside woodfired garlic bread",
    },
    items: [
      {
        name: "Italian Meatballs",
        description:
          "60 tender, hand-rolled meatballs simmered in a rich Napoletana sauce made with vine-ripened tomatoes, garlic, and fresh herbs. Perfect for events and sharing platters.",
        prices: ["$140 (60 pieces, serves 30)"],
      },
      {
        name: "Penne Boscaiola",
        description:
          "A generous tray of penne pasta tossed in creamy Boscaiola sauce with bacon, mushrooms, garlic, and herbs. Rich, flavourful, and ideal for parties or corporate events.",
        prices: ["$95 (Serves 30)"],
      },
      {
        name: "Penne Napoletana",
        description:
          "Classic penne in a rich Napoli sauce with ripe tomatoes, garlic, herbs, and olives. Light, aromatic, and perfect for large gatherings.",
        prices: ["$90 (Serves 30)"],
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    image: {
      src: "/images/catering/arancini-italian-rice-balls.webp",
      alt: "Golden crumbed arancini rice balls served on a wooden board",
    },
    items: [
      {
        name: "Rocket & Parmesan Salad",
        description:
          "Fresh wild rocket tossed with shaved parmesan, extra virgin olive oil, and balsamic vinegar. Light, zesty, and a perfect side.",
        prices: ["$50 (Serves 30)"],
      },
      {
        name: "Mixed Leaf Greek Salad",
        description:
          "A colourful blend of mixed leaves, tomato, cucumber, red onion, olives, and creamy feta in a Greek-style dressing.",
        prices: ["$70 (Serves 30)"],
      },
      {
        name: "Caprese Salad",
        description:
          "Fior di latte, vine-ripened tomatoes, and fresh basil drizzled with extra virgin olive oil and balsamic. Simple, fresh, and vibrant.",
        prices: ["$85 (Serves 30)"],
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    blurb: "Choose from our freshly filled, crispy Italian cannoli.",
    image: {
      src: "/images/cannoli/sicilian-cannoli-ricotta.webp",
      alt: "Freshly filled Sicilian cannoli dusted with icing sugar on a wooden board",
    },
    items: [
      {
        name: "Sweetened Ricotta with Choc Chips Cannoli",
        prices: ["12 pcs \u2014 $44", "24 pcs \u2014 $88"],
      },
      { name: "Nutella Cannoli", prices: ["12 pcs \u2014 $44", "24 pcs \u2014 $88"] },
      { name: "Vanilla Custard Cannoli", prices: ["12 pcs \u2014 $44", "24 pcs \u2014 $88"] },
      {
        name: "Tiramisu Tray",
        description:
          "Classic tiramisu layered with espresso-soaked savoiardi, mascarpone cream, and cocoa.",
        prices: ["$95 (Serves up to 30)"],
      },
    ],
  },
];
