/**
 * Google reviews carried across from the existing site, word for word.
 *
 * These are real customer reviews: the wording (including the reviewers' own
 * typos) is preserved exactly as published. Do not edit, shorten or add to them.
 *
 * NOTE: `age` holds the relative date shown on the existing site. Relative
 * labels go stale — swap them for fixed dates when the client next reviews copy.
 */

export type Testimonial = {
  name: string;
  quote: string;
  age: string;
  source: "Google";
};

export const testimonials: Testimonial[] = [
  {
    name: "Adam Burg",
    quote:
      "We booked Pizzaiolo for our Engagement Party, and it was absolutely the best decision we made. Michael and the team were phenomenal, super easy to deal with in the lead-up and fantastic on the night. The pizza's speak for themselves - arguably better than what you would receive at some of the best Italian restaurants in Sydney. I'd recommend Micheal to anyone looking for catering at a function. Also, the desert pizzas and cannolis are a lovely addition and were absolutely amazing! Thankyou!!",
    age: "A month ago",
    source: "Google",
  },
  {
    name: "Agnese Perrino",
    quote:
      "Had a party Saturday night & had pizzaiolo to cater it. Everubody was impressed with the quality of the pizzas, & I'm still getting messages on how good the pizzas were. Would recommend them for any catering needed. Michael & crew were so respectful & nothing was a problem. The set-up was excellent & nothing was a problem. Even the vegans were impressed. Great job guys",
    age: "2 Weeks ago",
    source: "Google",
  },
  {
    name: "Christina Cannizzaro",
    quote:
      "THE BEST! We had Michael and his amazing team for our engagement party! The professionalism and amazing hospitality the Pizzaiolo team gave us was incredible. Everything from the delicious food to how effortlessly the service was. Very happy and would 10000% recommend!!",
    age: "A Week ago",
    source: "Google",
  },
];
