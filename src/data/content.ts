/**
 * Narrative content migrated from the existing site.
 * Wording is the client's; only grammar and punctuation have been tidied
 * where the original contained clear typos. Facts are unchanged.
 */

export const story = {
  eyebrow: "Our Story",
  heading: "The true taste of Italy, brought to your table",
  body: [
    "At Pizzaiolo, we bring the true taste of Italy to your table with every slice. Our passion for crafting authentic, wood-fired pizzas using the freshest ingredients sets us apart.",
    "Whether you\u2019re craving a classic Margherita or a bold new flavour, every pizza is made with love, tradition, and a dedication to quality that you can taste in every bite.",
  ],
  /** Original heading: "Pizza Catering". Original copy had "dinning" \u2014 corrected. */
  pull: "Welcome to our woodfire dining experience, where warmth, flavour, and good company come together any time of day.",
};

export const process = {
  eyebrow: "How Pizzaiolo Works",
  heading: "Three steps, and the rest is ours",
  steps: [
    {
      title: "Book Your Event",
      body: "Select your catering package and lock in your date with ease.",
    },
    {
      title: "We Bring Everything",
      body: "Our team arrives fully equipped with our complete wood-fired pizza setup.",
    },
    {
      title: "Enjoy Fresh Pizza",
      body: "Relax while we prepare, serve, and clean up \u2014 so you can enjoy the event with your guests.",
    },
  ],
};

/** Value propositions. Each is supported by content on the existing site. */
export const valueProps = [
  {
    title: "Authentic Neapolitan",
    body: "Slow-fermented dough fired in a traditional woodfire oven, the way it has always been done.",
  },
  {
    title: "Cooked At Your Event",
    body: "Every pizza is made and cooked on-site, in front of your guests \u2014 never reheated.",
  },
  {
    title: "A Complete Setup",
    body: "Oven, trailer, ingredients and team. We arrive two hours early and clean up after.",
  },
  {
    title: "Nobody Leaves Hungry",
    body: "All-you-can-eat service. We keep making and serving pizzas until your guests are full.",
  },
];

export const cannoli = {
  eyebrow: "Cannoli by Michele",
  heading: "A taste of Sicily, one cannolo at a time",
  price: "Cannoli Catering Packages \u2014 Starting from $800",
  body: [
    "Bring the sweet charm of Sicily to your next event with our Cannoli catering experience \u2014 a crowd favourite that\u2019s as interactive as it is delicious. Our packages begin with 120 mini cannoli and include one professional server who will roam your venue for one hour, delighting guests with freshly piped cannoli, made to order on the spot.",
    "Guests can choose from two classic cannoli fillings, with four topping options available, adding a personal touch to every bite. Whether it\u2019s a wedding, corporate function, or private celebration, our cannoli service creates a fun, memorable experience.",
    "Packages are fully customisable to suit your event size, duration, and style. Let us bring a taste of Sicily to you \u2014 one cannolo at a time.",
  ],
  highlights: [
    { label: "From", value: "$800" },
    { label: "Includes", value: "120 mini cannoli" },
    { label: "Roaming service", value: "1 hour, 1 server" },
    { label: "Choose", value: "2 fillings, 4 toppings" },
  ],
};

/**
 * Trailer specifications, transcribed from the client's own setup spec sheets
 * (smsetup / lgcorrect). Dimensions are stated as approximate on those sheets.
 */
export const setups = [
  {
    id: "small-trailer",
    name: "Small Trailer Setup",
    strapline: "Compact. Mobile. Authentic.",
    body: "A flexible woodfire pizza solution for any event. Compact, efficient and built to serve.",
    image: "/images/setup/pizzaiolo-small-trailer-setup-dimensions.webp",
    alt: "Diagram of the Pizzaiolo small trailer setup showing front, side and top views with dimensions",
    specs: [
      { label: "Length (front to back)", value: "4.5m" },
      { label: "Height (with marquee)", value: "2.7m" },
      { label: "Width (side to side)", value: "3.5m" },
      { label: "Trailer length", value: "3.5m" },
    ],
    notes: [
      "Our setup can be compacted without running our marquee, depending on the location of your event and where you would like us to situate the trailer.",
      "Marquee setup adds shelter, atmosphere and a professional service area \u2014 3m wide at the front, 2.7m high. Marquee size can be adjusted to suit your event needs.",
    ],
  },
  {
    id: "large-trailer",
    name: "Large Trailer Setup",
    strapline: "Spacious. Professional. Powered to serve.",
    body: "Our large trailer setup is designed for high-volume events where performance, efficiency and presentation matter.",
    image: "/images/setup/pizzaiolo-large-trailer-setup-dimensions.webp",
    alt: "Diagram of the Pizzaiolo large trailer setup showing top, side and rear views with dimensions",
    specs: [
      { label: "Length (front to back)", value: "7.5m" },
      { label: "Height", value: "3.6m" },
      { label: "Width (side to side)", value: "2.4m" },
      { label: "Power required", value: "10amp outlet" },
    ],
    notes: [
      "Standard 10amp power outlet required within 10 metres.",
    ],
  },
];

export const setupNote = "Please note: dimensions are approximate.";
