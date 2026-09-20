/**
 * Gallery manifest. Every image was migrated from the existing site with the
 * client’s authorisation, re-encoded to WebP and given descriptive alt text.
 *
 * Intrinsic width/height are recorded so Next/Image reserves space and the
 * masonry layout never shifts as images decode.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: GalleryCategory;
};

export const galleryCategories = [
  "All",
  "Pizza",
  "Catering",
  "Dessert",
  "Our Setup",
  "Behind the Scenes",
] as const;

export type GalleryCategory = Exclude<
  (typeof galleryCategories)[number],
  "All"
>;

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/pizza/pizza-capsicum-salami.webp",
    alt: "Woodfired pizza with salami and capsicum on a wooden board",
    width: 751,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/pizza/pizza-ham-mushroom.webp",
    alt: "Woodfired pizza with ham and mushroom on a wooden board",
    width: 550,
    height: 440,
    category: "Pizza",
  },
  {
    src: "/images/pizza/pizza-ham-salami-olive.webp",
    alt: "Woodfired pizza with ham, salami and olives on a wooden board",
    width: 751,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/pizza/pizza-margherita.webp",
    alt: "Classic margherita pizza on a wooden board",
    width: 751,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/pizza/pizza-mushroom-ham.webp",
    alt: "Woodfired pizza with mushroom and ham on a wooden board",
    width: 751,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/pizza/pizza-mushroom-truffle.webp",
    alt: "Woodfired mushroom pizza on a wooden board",
    width: 751,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/pizza/pizza-pepperoni.webp",
    alt: "Woodfired pepperoni pizza on a wooden board",
    width: 751,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/pizza/pizza-prosciutto-balsamic.webp",
    alt: "Prosciutto pizza drizzled with balsamic on a wooden board",
    width: 751,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/pizza/pizza-prosciutto-rocket.webp",
    alt: "Woodfired pizza with prosciutto, rocket and balsamic on a wooden board",
    width: 550,
    height: 440,
    category: "Pizza",
  },
  {
    src: "/images/pizza/pizza-quattro-formaggi.webp",
    alt: "Four cheese woodfired pizza on a wooden board",
    width: 751,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/pizza/pizza-roasted-vegetable.webp",
    alt: "Roasted vegetable woodfired pizza on a wooden board",
    width: 751,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/pizza/pizza-spicy-salami.webp",
    alt: "Spicy salami woodfired pizza on a wooden board",
    width: 751,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/pizza/pizza-vegetariana.webp",
    alt: "Vegetarian woodfired pizza with zucchini and red onion on a wooden board",
    width: 600,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/bufala-margherita-pizza.webp",
    alt: "Margherita pizza with bufala mozzarella and basil",
    width: 600,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/classic-margherita-boxed.webp",
    alt: "Classic margherita pizza boxed and ready to serve",
    width: 960,
    height: 1280,
    category: "Pizza",
  },
  {
    src: "/images/gallery/event-catering-buffet-spread.webp",
    alt: "An event catering spread of pizza, pasta and arancini",
    width: 600,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/four-cheese-woodfire-pizza.webp",
    alt: "Four cheese woodfired pizza",
    width: 624,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/ham-mushroom-pizza-cooling.webp",
    alt: "Ham and mushroom woodfired pizza resting after baking",
    width: 960,
    height: 1280,
    category: "Pizza",
  },
  {
    src: "/images/gallery/ham-mushroom-woodfire-pizza.webp",
    alt: "Woodfired pizza with ham and mushroom, blistered at the crust",
    width: 600,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/ham-pizza-woodfire.webp",
    alt: "Woodfired pizza topped with ham",
    width: 596,
    height: 797,
    category: "Pizza",
  },
  {
    src: "/images/gallery/loaded-meat-pizza.webp",
    alt: "Woodfired pizza loaded with ham, pepperoni and mushroom",
    width: 1080,
    height: 1080,
    category: "Pizza",
  },
  {
    src: "/images/gallery/loaded-woodfire-pizza.webp",
    alt: "A generously loaded woodfired pizza fresh from the oven",
    width: 450,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/margherita-before-firing.webp",
    alt: "A hand-stretched margherita dressed and ready for the woodfire oven",
    width: 600,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/margherita-fresh-from-oven.webp",
    alt: "Margherita pizza boxed straight from the woodfire oven",
    width: 450,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/margherita-woodfire-boxed.webp",
    alt: "Woodfired margherita pizza ready for a guest",
    width: 800,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/margherita-woodfire-crust.webp",
    alt: "Close view of a woodfired margherita and its leoparded crust",
    width: 960,
    height: 1280,
    category: "Pizza",
  },
  {
    src: "/images/gallery/pepperoni-basil-tray-pizza.webp",
    alt: "Tray-baked pepperoni pizza finished with fresh basil",
    width: 960,
    height: 1280,
    category: "Pizza",
  },
  {
    src: "/images/gallery/pepperoni-slice-served.webp",
    alt: "A slice of pepperoni pizza served during an event",
    width: 450,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/pepperoni-woodfire-pizza.webp",
    alt: "Woodfired pepperoni pizza fresh from the oven",
    width: 600,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/pesto-zucchini-pizza.webp",
    alt: "Pesto and zucchini woodfired pizza",
    width: 450,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/pizza-service-selection.webp",
    alt: "A run of freshly boxed pizzas lined up during event service",
    width: 600,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/prosciutto-pizza-woodfire.webp",
    alt: "Woodfired pizza finished with prosciutto and rocket",
    width: 596,
    height: 798,
    category: "Pizza",
  },
  {
    src: "/images/gallery/prosciutto-rocket-boxed.webp",
    alt: "Prosciutto and rocket pizza finished with a balsamic glaze",
    width: 450,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/prosciutto-rocket-wooden-board.webp",
    alt: "Prosciutto and rocket pizza plated on a wooden board",
    width: 550,
    height: 440,
    category: "Pizza",
  },
  {
    src: "/images/gallery/quattro-formaggi-woodfire.webp",
    alt: "Golden four cheese woodfired pizza in its box",
    width: 624,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/woodfire-margherita-basil.webp",
    alt: "Woodfired margherita pizza topped with fresh basil leaves",
    width: 600,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/woodfire-margherita-boxed.webp",
    alt: "Woodfired margherita pizza served in a Pizzaiolo box",
    width: 800,
    height: 600,
    category: "Pizza",
  },
  {
    src: "/images/gallery/woodfire-pizza-closeup.webp",
    alt: "Close view of a woodfired pizza",
    width: 279,
    height: 374,
    category: "Pizza",
  },
  {
    src: "/images/catering/arancini-italian-rice-balls.webp",
    alt: "Golden crumbed arancini rice balls on a wooden board",
    width: 751,
    height: 600,
    category: "Catering",
  },
  {
    src: "/images/catering/catering-pasta-arancini-trays.webp",
    alt: "Catering trays of baked pasta, lasagna and arancini on a buffet table",
    width: 1280,
    height: 960,
    category: "Catering",
  },
  {
    src: "/images/catering/italian-meatballs-garlic-bread.webp",
    alt: "Italian meatballs in Napoletana sauce beside woodfired garlic bread",
    width: 751,
    height: 600,
    category: "Catering",
  },
  {
    src: "/images/catering/pepperoni-pizza-tray.webp",
    alt: "Tray-baked pepperoni pizza with fresh basil",
    width: 450,
    height: 600,
    category: "Catering",
  },
  {
    src: "/images/catering/pizza-selection-boxes.webp",
    alt: "A selection of freshly boxed woodfired pizzas ready for service",
    width: 450,
    height: 600,
    category: "Catering",
  },
  {
    src: "/images/catering/woodfire-garlic-bread-tray.webp",
    alt: "A tray of woodfired garlic bread",
    width: 800,
    height: 600,
    category: "Catering",
  },
  {
    src: "/images/catering/woodfire-garlic-bread.webp",
    alt: "Woodfired garlic bread sliced and ready to serve",
    width: 1280,
    height: 960,
    category: "Catering",
  },
  {
    src: "/images/cannoli/biscoff-cannoli.webp",
    alt: "Biscoff cannoli served with Biscoff spread and biscuits",
    width: 480,
    height: 600,
    category: "Dessert",
  },
  {
    src: "/images/cannoli/cannoli-by-michele-board.webp",
    alt: "Sicilian cannoli filled to order and dusted with icing sugar",
    width: 771,
    height: 600,
    category: "Dessert",
  },
  {
    src: "/images/cannoli/cannoli-freshly-piped.webp",
    alt: "A freshly piped cannolo held in front of the Pizzaiolo logo",
    width: 600,
    height: 600,
    category: "Dessert",
  },
  {
    src: "/images/cannoli/nutella-cannoli-box.webp",
    alt: "A box of Nutella cannoli dusted with icing sugar",
    width: 300,
    height: 300,
    category: "Dessert",
  },
  {
    src: "/images/cannoli/sicilian-cannoli-ricotta.webp",
    alt: "Cannoli filled with sweetened ricotta on a wooden board",
    width: 751,
    height: 600,
    category: "Dessert",
  },
  {
    src: "/images/setup/pizzaiolo-trailer-corporate-event.webp",
    alt: "The Pizzaiolo mobile pizza trailer set up at a corporate event beside a Qantas aircraft",
    width: 800,
    height: 600,
    category: "Our Setup",
  },
  {
    src: "/images/setup/woodfire-pizza-served-outdoors.webp",
    alt: "A woodfired pizza served outdoors at an event",
    width: 800,
    height: 600,
    category: "Our Setup",
  },
  {
    src: "/images/story/margherita-fresh-made.webp",
    alt: "A freshly dressed margherita waiting to go into the oven",
    width: 960,
    height: 1280,
    category: "Behind the Scenes",
  },
  {
    src: "/images/story/pizza-dough-preparation.webp",
    alt: "Pizza bases being hand-dressed on the bench before firing",
    width: 450,
    height: 600,
    category: "Behind the Scenes",
  },
  {
    src: "/images/story/pizzaiolo-chef-waterfront.webp",
    alt: "A Pizzaiolo chef holding a freshly made woodfired pizza by the water",
    width: 480,
    height: 600,
    category: "Behind the Scenes",
  },
  {
    src: "/images/story/woodfire-pizza-cheese-pull.webp",
    alt: "A slice of woodfired pizza lifted with a cheese pull",
    width: 450,
    height: 600,
    category: "Behind the Scenes",
  },
];

/**
 * Curated subset for the homepage preview.
 *
 * Deliberately mixed: taking the first N would show eight near-identical
 * studio pizzas on the same board. This spans pizza, the oven, catering,
 * dessert and the setup so the preview shows the range of the service.
 */
const FEATURED_ORDER = [
  "/images/pizza/pizza-prosciutto-rocket.webp",
  "/images/story/pizzaiolo-chef-waterfront.webp",
  "/images/catering/catering-pasta-arancini-trays.webp",
  "/images/pizza/pizza-margherita.webp",
  "/images/cannoli/cannoli-by-michele-board.webp",
  "/images/setup/pizzaiolo-trailer-corporate-event.webp",
  "/images/catering/arancini-italian-rice-balls.webp",
  "/images/story/woodfire-pizza-cheese-pull.webp",
];

export const featuredGallery: GalleryImage[] = FEATURED_ORDER.map((src) => {
  const found = galleryImages.find((i) => i.src === src);
  if (!found) throw new Error(`featuredGallery: unknown image ${src}`);
  return found;
});
