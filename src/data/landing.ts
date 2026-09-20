/**
 * Location and service landing pages.
 *
 * Body copy, headings and page titles are migrated verbatim from the existing
 * site so these pages keep the search equity they have already built. All five
 * routes were live and indexed in the old sitemap — the slugs must not change.
 */

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export type LandingSection = { heading: string; blocks: ContentBlock[] };

export type LandingPage = {
  slug: string;
  crumb: string;
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  sections: LandingSection[];
};

export const landingPages: Record<string, LandingPage> = {
  "mobile-pizza-truck-catering-sydney": {
    slug: "mobile-pizza-truck-catering-sydney",
    crumb: "Mobile Pizza Catering",
    title: "Mobile Pizza Catering Sydney | Bringing the Pizzeria to You",
    description: "Bring the taste and theatre of Woodfire cooking to your event with mobile pizza catering Sydney from Pizzaiolo Woodfire Pizza\u2014fresh, hot, unforgettable.",
    heroImage: "/images/hero/pizzaiolo-pizza-trailer.webp",
    heroAlt: "The Pizzaiolo mobile woodfire pizza trailer, wrapped in black and white photography",
    sections: [
      {
        heading: "Mobile Pizza Catering Sydney with Style\u2014Pizzaiolo Woodfire Pizza Serves Fresh, Wood-Fired Pizzas Adding Flavour, Aroma, and Atmosphere to Your Event",
        blocks: [
          { type: "p", text: "There\u2019s something unforgettable about watching pizza being made right in front of you \u2014 the dough stretched by hand, the toppings scattered generously, the oven flames flickering as the crust turns golden. Our mobile pizza catering Sydney service brings all of that to your event, creating an experience that\u2019s as much about atmosphere as it is about taste. Guests don\u2019t just eat \u2014 they watch, smell, and enjoy every moment leading up to that first bite." },
          { type: "p", text: "Whether it\u2019s a family birthday, a corporate get-together, or an outdoor celebration under the stars, Pizzaiolo Woodfire Pizza makes catering simple. We arrive with everything we need: the oven, the ingredients, and a skilled team ready to keep the pizzas flowing. You won\u2019t be worrying about plates, queues, or cold food \u2014 just the buzz of happy guests and the scent of wood-fired perfection drifting through the air." },
          { type: "p", text: "Our mobile pizza catering is built for flexibility without cutting corners on quality. We cook every pizza fresh on-site, using dough that\u2019s been slow-fermented for depth of flavour, tomatoes picked at their sweetest, and toppings sourced from trusted local suppliers. The wood-fired oven gives each slice a subtle smokiness and the crisp-yet-chewy base that\u2019s impossible to replicate in a standard kitchen. From small backyards to large open venues, our portable setup means the same quality pizza can be enjoyed anywhere." },
        ],
      },
      {
        heading: "Mobile Pizza Catering Sydney for Any Occasion",
        blocks: [
          { type: "p", text: "When you need catering that\u2019s fresh, fun, and easy to organise, our mobile pizza catering Sydney service ticks every box. Pizzaiolo Woodfire Pizza brings authentic Italian flavour to your event, no matter the location. We set up our portable wood-fired ovens on-site, so your guests enjoy pizza that\u2019s hot, crisp, and cooked right in front of them." },
          { type: "p", text: "We\u2019ve served pizzas at all kinds of events \u2014 from corporate lunches in the CBD to backyard birthday parties and community fairs. Each pizza is made from slow-fermented dough, topped with fresh, locally sourced ingredients, and cooked in a way that delivers a smoky, crispy crust with a soft, airy centre. The result? A slice that\u2019s as satisfying as it is memorable." },
        ],
      },
      {
        heading: "Mobile Pizza Catering Sydney with Menu Variety",
        blocks: [
          { type: "p", text: "Food at an event should be more than just something to fill a plate \u2014 it should be an experience. Our mobile pizza catering Sydney service blends flavour, entertainment, and options to suit everyone." },
          {
            type: "list",
            items: [
              "Wide menu selection to suit all tastes.",
              "Flexible setup for both small and large venues.",
              "Dietary-friendly choices including vegetarian, vegan, and gluten-free.",
              "Friendly staff to make guests feel welcome.",
              "Fresh, locally sourced ingredients for maximum flavour.",
            ],
          },
        ],
      },
      {
        heading: "Pizza Truck Catering Sydney for All Events",
        blocks: [
          { type: "p", text: "Our pizza truck catering Sydney service takes the stress out of event catering by delivering everything you need for a great meal right to your location. The Pizzaiolo Woodfire Pizza truck is fully equipped with a wood-fired oven and all the fresh ingredients needed to serve your guests hot, delicious pizzas." },
          { type: "p", text: "From weddings and festivals to workplace parties and school fundraisers, our pizza truck is a hit everywhere it goes. We make the pizzas fresh to order, using a mix of classic and creative toppings so everyone finds something they love. It\u2019s quick, interactive, and perfect for keeping the food flowing without slowing down the fun." },
        ],
      },
      {
        heading: "Pizza Truck Catering Sydney with Fast Service",
        blocks: [
          { type: "p", text: "When you want your guests fed quickly without sacrificing quality, our pizza truck catering Sydney delivers. We prepare pizzas to order, keeping the queue moving and the flavours high." },
          {
            type: "list",
            items: [
              "Fully mobile wood-fired pizza kitchen.",
              "Fresh pizzas ready in minutes.",
              "Balanced menu for all age groups.",
              "Quality ingredients that taste as good as they look.",
              "A lively setup that\u2019s part of the event\u2019s atmosphere.",
            ],
          },
          { type: "p", text: "Your guests will love the combination of speed, freshness, and flavour, making it a stand-out part of the occasion." },
        ],
      },
      {
        heading: "Woodfired Pizza Truck Sydney for Fresh, Authentic Flavour",
        blocks: [
          { type: "p", text: "Our woodfired pizza truck Sydney service is all about bringing the rich, smoky taste of traditional pizza to your event, wherever it\u2019s held. At Pizzaiolo Woodfire Pizza, we\u2019ve taken the heart of an Italian pizzeria and put it on wheels, complete with a genuine wood-fired oven." },
          { type: "p", text: "From seaside festivals to suburban street parties, our truck delivers pizzas that are hot, fresh, and made in full view of your guests. The slow-fermented dough, tangy tomato sauce, and premium toppings come together under intense heat, creating that unmistakable woodfired flavour in every bite." },
        ],
      },
      {
        heading: "Woodfired Pizza Truck Sydney with Authentic Italian Woodfire Pizza",
        blocks: [
          { type: "p", text: "Few things compare to the taste of an authentic wood-fired pizza, and our woodfired pizza truck Sydney makes it possible anywhere." },
          {
            type: "list",
            items: [
              "Traditional wood-fired cooking method for rich flavour.",
              "Freshly made dough prepared with care.",
              "Premium toppings inspired by Italian tradition.",
              "Friendly, skilled staff to serve guests.",
              "Portable setup that works in almost any location.",
            ],
          },
          { type: "p", text: "The smell of wood smoke and the sight of pizzas coming straight from the oven make it an experience your guests will remember." },
        ],
      },
      {
        heading: "Pizzaiolo Woodfire Pizza \u2013 Synonymous with Quality in Mobile Pizza Catering Sydney",
        blocks: [
          { type: "p", text: "Choosing Pizzaiolo Woodfire Pizza means bringing together convenience, theatre, and flavour in one service. We believe catering should be something guests look forward to, not just a quick stop for food." },
          {
            type: "list",
            items: [
              "Menu variety to please everyone \u2014 including vegetarian, vegan, and gluten-free.",
              "Friendly, professional staff.",
              "High hygiene standards.",
              "Freshly made pizzas topped to order.",
              "Fast service for large groups.",
              "Authentic wood-fired flavour in every bite.",
            ],
          },
          { type: "p", text: "We aim to create catering moments that feel personal and memorable \u2014 the kind where guests remember exactly where they were when they took that perfect bite." },
        ],
      },
      {
        heading: "Fresh, Hot, and On-Site \u2014 Mobile Pizza Catering Sydney for Any Occasion",
        blocks: [
          { type: "p", text: "Our mobile pizza catering Sydney is more than a meal \u2014 it\u2019s a feature of your event. Guests gather near the oven, talking, laughing, watching pizza being made." },
          { type: "p", text: "From milestone birthdays and intimate weddings to big community days, our service adapts to your timing, your venue, and your crowd." },
        ],
      },
    ],
  },
  "event-pizza-catering-sydney": {
    slug: "event-pizza-catering-sydney",
    crumb: "Event Pizza Catering",
    title: "Event Pizza Catering Sydney | Fresh, On-Site Woodfire",
    description: "Make your gathering memorable with event pizza catering Sydney\u2014Pizzaiolo Woodfire Pizza serves fresh wood-fired pizzas, cooked live for flavour & atmosphere.",
    heroImage: "/images/setup/pizzaiolo-trailer-corporate-event.webp",
    heroAlt: "The Pizzaiolo mobile pizza trailer set up at a corporate event beside a Qantas aircraft",
    sections: [
      {
        heading: "From Corporate to Casual, Pizzaiolo Woodfire Pizza offers Event Pizza Catering Sydney with Fresh, On-Site Cooking and Authentic Italian Taste.",
        blocks: [
          { type: "p", text: "Every event needs great food \u2014 something that gets people talking, keeps the mood lively, and brings guests together. Our event pizza catering Sydney service delivers all that and more, with fresh wood-fired pizzas cooked right where the action is. The smell of dough baking, the glow of the oven, and the sight of pizzas being pulled out hot and ready \u2014 it\u2019s all part of the atmosphere." },
          { type: "p", text: "From small private celebrations to large corporate gatherings, Pizzaiolo Woodfire Pizza has catered events of all shapes and sizes. We make the process easy, from setting up our portable ovens to serving pizzas that cater to everyone\u2019s tastes. You can relax and enjoy the occasion while we take care of the food." },
          { type: "p", text: "Our event pizza catering brings authentic Italian flavours and a touch of theatre to your next gathering. We cook every pizza fresh on-site using slow-fermented dough, quality local ingredients, and traditional wood-fired methods for unbeatable flavour and texture." },
        ],
      },
      {
        heading: "Unforgettable Gatherings with Event Pizza Catering Sydney",
        blocks: [
          { type: "p", text: "Every great event deserves great food \u2014 and our event pizza catering Sydney service makes sure your guests are treated to fresh, hot, and authentic wood-fired pizza from start to finish. Pizzaiolo Woodfire Pizza brings the warmth and flavour of Italy to your event, cooking everything right in front of your guests. From the smell of dough baking to the sound of the oven crackling, it\u2019s an experience that goes beyond just eating." },
          { type: "p", text: "We\u2019ve catered for events in community halls, corporate offices, private homes, and open-air venues across Sydney. Our pizzas are made with slow-fermented dough, locally sourced toppings, and cooked in portable wood-fired ovens for that irresistible smoky crust. The service is smooth, the food is fast, and the atmosphere it creates is one your guests won\u2019t forget." },
        ],
      },
      {
        heading: "Why Our Event Pizza Catering Sydney Works Every Time",
        blocks: [
          { type: "p", text: "The right food keeps people happy and engaged. Our event pizza catering Sydney service delivers both flavour and entertainment in one package." },
          {
            type: "list",
            items: [
              "Pizzas cooked on-site so they\u2019re always hot and fresh.",
              "Wide menu options to cater to all tastes.",
              "Fresh, high-quality ingredients from local suppliers.",
              "Friendly, professional staff who adapt to your event.",
              "Flexible setup that suits indoor and outdoor spaces.",
            ],
          },
          { type: "p", text: "By the end of your event, the oven often becomes a natural meeting point where guests chat, grab another slice, and enjoy the atmosphere. It\u2019s catering that\u2019s as much a part of the event as the entertainment itself." },
        ],
      },
      {
        heading: "Bringing People Together with Sydney Pizza Catering for Events",
        blocks: [
          { type: "p", text: "Food is the heart of any gathering, and our Sydney pizza catering for events makes it memorable. At Pizzaiolo Woodfire Pizza, we specialise in serving authentic wood-fired pizzas that are cooked fresh at your venue. From the first whiff of the oven to the last slice served, we create a dining experience that\u2019s lively and satisfying." },
          { type: "p", text: "Our pizzas are made with care \u2014 slow-risen dough, hand-picked ingredients, and traditional methods. Whether your event is in a corporate boardroom, a sports club, or a rooftop terrace, our portable ovens fit right in. Guests get to enjoy food that\u2019s fresh, hot, and prepared before their eyes, which adds a unique touch to the occasion." },
        ],
      },
      {
        heading: "The Advantages of Sydney Pizza Catering for Events",
        blocks: [
          { type: "p", text: "Choosing catering that works for everyone is easy when it\u2019s pizza. Our Sydney pizza catering for events is flexible, delicious, and stress-free. Why it\u2019s perfect for events:" },
          {
            type: "list",
            items: [
              "Fresh pizzas cooked and served on the spot.",
              "Menu options for dietary requirements.",
              "Ingredients selected for taste and quality.",
              "Fast, efficient service for large groups.",
              "Setup suitable for a variety of venues.",
            ],
          },
          { type: "p", text: "It\u2019s food that keeps people happy, fuels conversation, and leaves guests talking about the great catering long after the event is over." },
        ],
      },
      {
        heading: "Celebrate in Style with Birthday Party Pizza Catering Sydney",
        blocks: [
          { type: "p", text: "Birthdays are all about fun, and our birthday party pizza catering Sydney service makes the food just as exciting as the celebration itself. Pizzaiolo Woodfire Pizza comes to you with portable wood-fired ovens, fresh dough, and a menu designed for your crowd. Guests can watch as we stretch the dough, add toppings, and cook pizzas to perfection in minutes." },
          { type: "p", text: "From kids\u2019 birthday parties to milestone 50ths, we\u2019ve catered all kinds of celebrations across Sydney. Our pizzas are made using traditional Neapolitan methods, with slow-fermented dough and fresh, flavour-packed toppings. The result? A party where the food is part of the entertainment." },
        ],
      },
      {
        heading: "Why Birthday Party Pizza Catering Sydney is Always a Hit",
        blocks: [
          {
            type: "list",
            items: [
              "Live cooking that adds to the party atmosphere.",
              "Menus tailored to favourite flavours.",
              "Quick service to keep guests happy.",
              "Options for vegetarian, vegan, and gluten-free guests.",
              "Fun, relaxed catering style that fits any birthday theme.",
            ],
          },
          { type: "p", text: "Guests leave happy, full, and talking about \u201cthat amazing pizza\u201d \u2014 the perfect recipe for a birthday to remember." },
        ],
      },
      {
        heading: "Fresh, Fun, and Easy Pizza Catering for Schools Sydney",
        blocks: [
          { type: "p", text: "Feeding a school crowd doesn\u2019t have to be complicated. Our pizza catering for schools Sydney is designed to serve fresh, hot, and delicious pizzas quickly, with no fuss. Pizzaiolo Woodfire Pizza sets up on-site with our portable wood-fired ovens, preparing pizzas that suit students, staff, and parents alike." },
          { type: "p", text: "From sports days to fundraisers, our pizzas are always a hit. We work closely with schools to plan menus that are nutritious, appealing, and cater to different dietary needs. The live cooking setup makes it fun for everyone \u2014 kids love watching their pizza come to life, and teachers love how easy it is to organise." },
        ],
      },
      {
        heading: "Pizza Catering for Schools Sydney \u2013 Perfect for Students, Teachers, and Parents",
        blocks: [
          {
            type: "list",
            items: [
              "Healthy, fresh ingredients that kids actually enjoy eating.",
              "Menu variety to suit all ages and dietary needs.",
              "Fast, efficient service to feed large groups without delays.",
              "Friendly, experienced staff who work well in school environments.",
              "Easy setup in playgrounds, halls, or sports areas.",
            ],
          },
          { type: "p", text: "It\u2019s catering that brings great food, minimal hassle, and a little extra excitement to any school event." },
        ],
      },
      {
        heading: "Why Choose Pizzaiolo Woodfire Pizza for Event Pizza Catering Sydney?",
        blocks: [
          { type: "p", text: "When you\u2019re organising an event, you want the food to be more than just \u201cwhat\u2019s on the menu.\u201d Our event pizza catering Sydney is a mix of flavour, theatre, and atmosphere \u2014 the kind of catering that guests actually talk about. It\u2019s as much about the energy and the moment as it is about the pizza itself." },
          { type: "p", text: "Here\u2019s why people book Pizzaiolo Woodfire Pizza again and again:" },
          {
            type: "list",
            items: [
              "Live cooking that\u2019s part of the show \u2014 Dough being stretched, toppings scattered by hand, the oven door opening to reveal bubbling cheese.",
              "Fits almost any setting \u2014 we\u2019ve set up in courtyards, gardens, rooftops, and even tucked-away indoor spots.",
              "Menus for every taste \u2014 Classic Margheritas, gourmet toppings, plant-based choices, and gluten-free bases.",
              "Fresh, local ingredients \u2014 Produce and toppings chosen for quality and taste, not just convenience.",
              "A team that feels part of the celebration \u2014 Professional, friendly, and quick to adapt to your event\u2019s pace.",
              "Quality you can count on \u2014 from the very first pizza to the last one of the night.",
              "The oven as a gathering point \u2014 its warmth, aroma, and glow become part of the memory.",
            ],
          },
          { type: "p", text: "It\u2019s that mix of great food, an easygoing service style, and an atmosphere people love that\u2019s made us a regular choice for events across Sydney." },
        ],
      },
      {
        heading: "Unforgettable Gatherings with Event Pizza Catering Sydney",
        blocks: [
          { type: "p", text: "Our event pizza catering Sydney isn\u2019t simply about making sure everyone eats. It\u2019s about creating a moment \u2014 the kind that naturally draws people together. The oven becomes the heart of the event, with guests stopping by to watch their pizza take shape, snap a few photos, and have a laugh while they wait. We keep the pizzas flowing so no one has to wait long, and the vibe stays lively from the first order to the last slice. Whether your event is black-tie formal or a laid-back weekend catch-up, we adapt to the tone, blending in seamlessly. By the end of the evening, your guests won\u2019t just be full \u2014 they\u2019ll have another favourite memory from your event." },
        ],
      },
    ],
  },
  "pizza-catering-inner-west-sydney": {
    slug: "pizza-catering-inner-west-sydney",
    crumb: "Inner West Sydney",
    title: "Pizza Catering Inner West Sydney | Authentic Flavours",
    description: "Create an atmosphere to remember with pizza catering Inner West Sydney from Pizzaiolo Woodfire Pizza\u2014woodfired pizzas cooked fresh and served hot on-site.",
    heroImage: "/images/hero/woodfire-oven-flames.webp",
    heroAlt: "Flames inside the Pizzaiolo woodfire oven with a pizza on the peel",
    sections: [
      {
        heading: "Bring the Magic of Woodfire Cooking to Your Event with Pizza Catering Inner West Sydney from Pizzaiolo Woodfire Pizza\u2014Authentic, Fresh, and Stress-Free",
        blocks: [
          { type: "p", text: "Good pizza has a way of making people slow down, smile, and savour the moment \u2014 and that\u2019s exactly what we bring with our pizza catering Inner West Sydney service. At Pizzaiolo Woodfire Pizza, we\u2019ve turned the craft of authentic, Italian-style pizza into a catering experience that works just as well for a backyard birthday as it does for a wedding or corporate party." },
          { type: "p", text: "From the moment the oven fires up, the event changes. You\u2019ll hear the crackle of the wood, smell the dough baking, and see the toppings sizzle as they cook. It\u2019s food that\u2019s more than a meal \u2014 it\u2019s part of the atmosphere, giving your guests something to talk about between slices." },
          { type: "p", text: "Our pizza catering Inner West Sydney delivers hot, fresh, wood-fired pizzas to your event, cooked right there on-site for the ultimate in flavour and freshness. We handle the setup, the cooking, and the service so you can enjoy the occasion without stress." },
        ],
      },
      {
        heading: "Pizza Catering Inner West Sydney for Every Kind of Celebration",
        blocks: [
          { type: "p", text: "From quiet family birthdays in Leichhardt to big wedding receptions in Balmain, our pizza catering Inner West Sydney service has been part of all sorts of celebrations. The approach is simple: bring the oven, make everything fresh, and keep the pizzas coming until everyone\u2019s had their fill. Guests get to watch the dough being stretched, smell the wood smoke, and see the toppings go on before the pizzas disappear into the oven. It\u2019s a little bit of theatre and a whole lot of flavour." },
          { type: "p", text: "We\u2019ve worked in backyards, courtyards, community halls \u2014 even car parks that turned into amazing party spots. No matter the location, we set up quickly and start cooking without a fuss. Our pizzas are made using slow-fermented dough, fresh local ingredients, and the same methods used in traditional Neapolitan pizzerias. The crust comes out crisp on the outside, soft in the middle, with just the right char from the wood fire. It\u2019s food that brings people together, one slice at a time." },
        ],
      },
      {
        heading: "Bringing Authentic Flavour to Pizza Catering Inner West Sydney",
        blocks: [
          { type: "p", text: "If you\u2019ve ever tried pizza straight from a wood-fired oven, you\u2019ll understand why it\u2019s at the heart of our pizza catering Inner West Sydney service. The heat, the aroma, the way the cheese bubbles and the crust blisters \u2014 it all comes together in minutes, yet the taste stays with you long after. We believe in keeping things honest: quality dough, proper tomato sauce, fresh toppings, and ovens hot enough to make the magic happen." },
          { type: "p", text: "Our catering suits all sizes and styles of events. We can serve a handful of friends gathered in a Marrickville backyard just as easily as a crowd of two hundred in a Newtown function space. The menu is flexible, with classics for the traditionalists and creative toppings for those who like something different. Vegetarian, vegan, or gluten-free? Not a problem \u2014 we\u2019ve got it covered so no one misses out. It\u2019s about more than just pizza; it\u2019s about creating an atmosphere your guests will remember." },
        ],
      },
      {
        heading: "Making Your Event Unforgettable with Pizza Catering Inner West Sydney",
        blocks: [
          { type: "p", text: "Every event needs a centrepiece, and our pizza catering Inner West Sydney often becomes just that. Once the fire\u2019s going and the first pizzas are in, guests naturally gather around to watch and chat. It\u2019s casual, it\u2019s fun, and it\u2019s the kind of catering that keeps the mood lively from start to finish." },
          { type: "p", text: "What we bring to your celebration:" },
          {
            type: "list",
            items: [
              "Fresh pizzas made to order, right on-site.",
              "Ingredients sourced from local markets for real flavour.",
              "Menu options to suit every taste and diet.",
              "A team that blends in with your event while keeping the energy up.",
              "The charm of live cooking as part of the entertainment.",
            ],
          },
          { type: "p", text: "By the end of the night, the oven\u2019s usually the busiest spot in the place. People linger, swap stories, and go in for \u201cjust one more\u201d slice. It\u2019s that mix of great food, good company, and relaxed atmosphere that turns a regular event into something special." },
        ],
      },
      {
        heading: "Why Choose Pizzaiolo Woodfire Pizza for Pizza Catering Inner West Sydney?",
        blocks: [
          { type: "p", text: "When you book catering, you want more than just full plates \u2014 you want an experience that feels personal, delicious, and memorable. Our pizza catering Inner West Sydney has been part of countless birthdays, weddings, and special occasions, and we know how to make the food a highlight without stealing the spotlight from the celebration itself." },
          {
            type: "list",
            items: [
              "Pizzas cooked fresh in front of your guests \u2014 the dough is stretched, the toppings are added, and the pizza goes into the oven right before their eyes.",
              "We set up anywhere \u2014 from suburban backyards in Ashfield to function halls in Newtown, our portable ovens fit in almost any space.",
              "Menus that suit every guest \u2014 we offer classic favourites alongside creative topping combinations, plus vegetarian, vegan, and gluten-free choices.",
              "Ingredients chosen for taste first \u2014 local produce and quality toppings mean every slice is as good as the last.",
              "A friendly, professional team \u2014 we blend in with the vibe of your event, keeping things easy-going while staying efficient.",
              "Consistency from the first pizza to the last \u2014 whether you have 20 guests or 200, the quality never drops.",
              "An experience people remember \u2014 the smell, the sound of the fire, and the taste of fresh pizza all come together to create lasting memories.",
            ],
          },
          { type: "p", text: "That\u2019s why so many hosts in the Inner West keep calling us back \u2014 because we deliver more than just great pizza. We bring energy, flavour, and a little bit of Italian theatre to your table." },
        ],
      },
      {
        heading: "Bring the Flavours of Italy to Your Inner West Sydney Celebration",
        blocks: [
          { type: "p", text: "At Pizzaiolo Woodfire Pizza, we make catering effortless for hosts and unforgettable for guests. Our pizza catering Inner West Sydney brings the warmth of a wood-fired oven, authentic Italian recipes, and the buzz of live cooking right to your event. From anniversaries to office parties, we tailor the service to suit your space and crowd. The oven becomes a gathering point, the pizzas keep coming, and the good mood flows. When the last slice is gone, your guests will leave happy, full, and ready for the next time." },
        ],
      },
    ],
  },
  "wedding-pizza-catering-sydney": {
    slug: "wedding-pizza-catering-sydney",
    crumb: "Wedding Pizza Catering",
    title: "Wedding Pizza Catering Sydney | Fresh, On-Site Pizzas",
    description: "Make your day memorable with wedding pizza catering Sydney\u2014Pizzaiolo Woodfire Pizza serves fresh wood-fired pizzas for a relaxed, interactive dining experience.",
    heroImage: "/images/pizza/pizza-prosciutto-rocket.webp",
    heroAlt: "Woodfired pizza with prosciutto, rocket and balsamic on a wooden serving board",
    sections: [
      {
        heading: "Wedding Pizza Catering Sydney by Pizzaiolo Woodfire Pizza\u2014Custom Toppings, Woodfire Aroma, and Live Cooking that Turns your Wedding Meal into An Experience",
        blocks: [
          { type: "p", text: "Weddings are busy, emotional, and packed with moments you\u2019ll remember forever \u2014 and the food should be one of them. Our wedding pizza catering Sydney isn\u2019t about stiff, sit-down service; it\u2019s about warmth, flavour, and that instant smile you get when you smell fresh pizza cooking over a wood fire. Guests wander over to see what\u2019s going on, the fire\u2019s glowing in the background, and suddenly the catering has become part of the celebration." },
          { type: "p", text: "We\u2019ve worked at all kinds of weddings \u2014 glitzy waterfront receptions, cosy backyard affairs, rustic country barns. It\u2019s always the same reaction when the first pizzas start rolling out: plates in hand, people chatting, someone saying, \u201cThis is exactly what we needed.\u201d We bring the oven, the fresh dough, and the toppings you choose, so the only thing you need to do is enjoy your day." },
          { type: "p", text: "At Pizzaiolo Woodfire Pizza, our wedding pizza catering is all about fresh, wood-fired pizzas cooked on-site, served in a relaxed, interactive style that makes the food part of your wedding story." },
        ],
      },
      {
        heading: "Turn Your Wedding Meal into an Experience with Wedding Pizza Catering Sydney",
        blocks: [
          { type: "p", text: "Weddings aren\u2019t just about the big, obvious moments. They\u2019re also about the little ones \u2014 the laugh between friends over a shared plate, or that warm wave of wood-fired pizza drifting across the room. Our wedding pizza catering Sydney isn\u2019t just food on a table; it\u2019s part of the day. You can picture it: dough being stretched by hand, toppings sizzling away, a glowing oven throwing light across the crowd." },
          { type: "p", text: "At Pizzaiolo Woodfire Pizza, we don\u2019t just show up with food \u2014 we bring the whole setup, the know-how, and the kind of attention that makes every slice taste like it was made for you. We sort the oven, the prep, the service, so you can get on with enjoying your night. Whether you\u2019re tying the knot in a leafy garden or hosting a grand reception in the city, our pizzas slide seamlessly into the vibe, like they were part of the plan all along." },
        ],
      },
      {
        heading: "A Slice of Italy for Your Sydney Wedding Day",
        blocks: [
          { type: "p", text: "Your wedding celebrates love, and love deserves food worth celebrating. Our wedding pizza catering Sydney brings the flavour and warmth of Italy straight to your guests. Every pizza starts with dough that\u2019s been given time to rest, so it bakes up just right. We pile on fresh, local toppings \u2014 colourful vegetables, fragrant herbs, and quality cheese \u2014 before sliding it into our portable wood-fired oven. The crust comes out smoky and crisp on the outside, soft and airy inside, just the way it\u2019s meant to be." },
          { type: "p", text: "We\u2019ve been part of weddings all over Sydney \u2014 chic waterfront spots with the city lights twinkling, or barn receptions where the fire glows under strings of fairy lights. The menu\u2019s flexible: a simple Margherita for the purists, a spicy salami for the bold, or something vegetarian, vegan, or gluten-free so no one misses out. Every slice gets the same attention, whether it\u2019s the first of the night or the last one before the dancing starts again." },
          { type: "p", text: "And the best part? Our wedding pizza catering is more than food service \u2014 it\u2019s a bit of live entertainment. Guests watch the fire, smell the basil and garlic, see their pizza come together, and before they know it, they\u2019re part of the process. It\u2019s relaxed, fun, and keeps the mood buzzing. Long after the plates are cleared, that shared feast will be one of the things everyone remembers." },
        ],
      },
      {
        heading: "Creating Lasting Memories with Wedding Pizza Catering Sydney",
        blocks: [
          { type: "p", text: "The food you choose shapes the tone of your reception. Our wedding pizza catering Sydney doesn\u2019t just fill plates \u2014 it builds moments your guests will want to relive. The warm glow from the oven, the sound of dough hitting the bench, the smell of cheese melting\u2026 these little things become part of your wedding story." },
          {
            type: "list",
            items: [
              "Pizzas made to order, right where the celebration\u2019s happening.",
              "Fresh, local ingredients chosen for taste first.",
              "Menu variety so there\u2019s something for every guest.",
              "A catering crew that slots right into your event.",
              "Portable ovens that work in just about any space.",
            ],
          },
          { type: "p", text: "As the night rolls on, the oven often becomes the heart of the party \u2014 a spot for another slice, a quick photo, or a chat before heading back to the dance floor. It\u2019s catering that feels effortless but still special, keeping the celebration alive right through to the final toast." },
        ],
      },
      {
        heading: "Why Choose Pizzaiolo Woodfire Pizza for Wedding Pizza Catering Sydney?",
        blocks: [
          { type: "p", text: "Food at a wedding isn\u2019t just about filling plates \u2014 it\u2019s about the experience. Our wedding pizza catering Sydney turns mealtime into a highlight, with guests gathered around the oven, talking while they wait for the next one to come out. The smell, the heat, the sight of the cheese bubbling \u2014 it\u2019s an atmosphere all on its own. Why couples keep booking Pizzaiolo Woodfire Pizza:" },
          {
            type: "list",
            items: [
              "Live cooking that\u2019s part of the fun \u2014 You\u2019ll see the dough being stretched, the toppings going on, and the pizza sliding into the oven right there in front of you.",
              "We can work almost anywhere \u2014 Rooftops, backyards, reception halls; our portable ovens fit right in.",
              "Menus built for your guests \u2014 Keep it classic, add a gourmet twist, or cover all bases with vegetarian, vegan, and gluten-free options.",
              "Fresh ingredients chosen for taste \u2014 we shop for flavour first, not shortcuts.",
              "Friendly team who know weddings \u2014 we blend in, keep the vibe easy-going, and still get the job done.",
              "Every pizza gets the same care \u2014 doesn\u2019t matter if we make 20 or 200, each one\u2019s done properly.",
              "Memories beyond the meal \u2014 the smell of wood smoke, the glow of the oven, the moment someone says, \u201cThis is the best pizza I\u2019ve ever had.\u201d",
            ],
          },
          { type: "p", text: "That mix of good food, atmosphere, and service is why we\u2019re more than just another caterer. We\u2019re part of the party." },
        ],
      },
      {
        heading: "From Vows to Woodfired Wow \u2014 Wedding Pizza Catering Sydney Experts",
        blocks: [
          { type: "p", text: "It\u2019s your day \u2014 the one you\u2019ve been planning for months, maybe years \u2014 and you want it to feel effortless when it finally arrives. Our wedding pizza catering Sydney makes that happen. We show up, set up, and get those ovens going so the air fills with the smell of pizza while you\u2019re busy celebrating. We\u2019ve seen guests take selfies in front of the oven, kids watching the pizzas cook like it\u2019s a magic trick, and late-night dance floors fuelled by \u201cjust one more\u201d slice. By the time we\u2019re packing down, it\u2019s not just that everyone\u2019s eaten \u2014 it\u2019s that the food has become part of the story you\u2019ll tell about your wedding." },
        ],
      },
    ],
  },
  "pizza-catering-sutherland-shire": {
    slug: "pizza-catering-sutherland-shire",
    crumb: "Sutherland Shire",
    title: "Sutherland Shire Pizza Catering | Fresh Pizzas for All Occasions",
    description: "Looking for pizza catering in Sutherland Shire? We serve fresh, delicious pizzas at your event, whether it's a wedding, party, or corporate function. Order your pizza catering today!",
    heroImage: "/images/story/pizzaiolo-chef-waterfront.webp",
    heroAlt: "A Pizzaiolo chef holding a freshly made woodfired pizza by the water",
    sections: [
      {
        heading: "Pizzaiolo Woodfire Pizza Serves Sutherland Shire Pizza Catering That\u2019s Authentic, Fresh, and Cooked On-Site\u2014Turning Any Event into a True Italian Feast",
        blocks: [
          { type: "p", text: "Good pizza can make a good day even better \u2014 and that\u2019s exactly what we bring with our Sutherland Shire pizza catering. At Pizzaiolo Woodfire Pizza, we\u2019ve turned authentic Italian pizza-making into a travelling service that fits perfectly with the coastal lifestyle. From small backyard gatherings in Avalon to big wedding receptions overlooking the ocean, we make sure every slice is fresh, hot, and full of flavour." },
          { type: "p", text: "The best part? Everything\u2019s made right in front of your guests. You get the smell of the wood fire, the sight of the dough being stretched, and that first bite of a pizza cooked exactly the way it should be. It\u2019s food that doubles as entertainment, adding to the atmosphere of your event in a way that people will still be talking about long after the last slice is gone." },
          { type: "p", text: "Our Sutherland Shire pizza catering brings the warmth, flavour, and tradition of Italy to your event, anywhere along the coast. We handle the setup, cooking, and service, so you can focus on enjoying the day while your guests enjoy pizza made fresh on-site." },
        ],
      },
      {
        heading: "Sutherland Shire Pizza Catering That Brings People Together",
        blocks: [
          { type: "p", text: "There\u2019s something about pizza that just works at a party. Our Sutherland Shire pizza catering isn\u2019t a pre-cooked box dropped at the door \u2014 it\u2019s the whole show. We roll up with our oven, the fire\u2019s already roaring, and the smell hits before the first pizza\u2019s even started. It\u2019s that mix of warmth, wood smoke, and melted cheese that gets people wandering over for a look. Someone always asks, \u201cWhen\u2019s the first one ready?\u201d" },
          { type: "p", text: "We\u2019ve done it all \u2014 low-key backyard dinners, birthdays that went late into the night, weddings where everyone stayed relaxed and smiling. The pizzas are made fresh with proper dough, the kind that\u2019s had a day or two to rest, and toppings that actually taste like food, not just filler." },
        ],
      },
      {
        heading: "Authentic Italian Flavours in Sutherland Shire Pizza Catering",
        blocks: [
          { type: "p", text: "If you\u2019ve ever had proper pizza in Italy, you\u2019ll know the difference straight away. That\u2019s what we aim for with our Sutherland Shire pizza catering \u2014 not overcomplicated, just done right. Dough that\u2019s been looked after, tomato sauce with a bit of bite, mozzarella that melts into every corner, and toppings that keep their colour and crunch even after the oven\u2019s had its way with them." },
          { type: "p", text: "Doesn\u2019t matter where; the setup\u2019s quick, and we\u2019re cooking before you\u2019ve had your second drink. If someone needs vegetarian or gluten-free, we\u2019ve got it covered without fuss. It\u2019s not just about feeding the crowd; it\u2019s about adding to the mood, keeping that relaxed, welcoming vibe going until the very last pizza." },
        ],
      },
      {
        heading: "Making Your Event Special with Sutherland Shire Pizza Catering",
        blocks: [
          { type: "p", text: "Events can be stressful \u2014 food shouldn\u2019t be. Our Sutherland Shire pizza catering blends into the day without you needing to keep an eye on us. We just keep the pizzas rolling out, one after another, each one as good as the last." },
          {
            type: "list",
            items: [
              "Pizzas cooked right there, no reheating.",
              "Ingredients picked because they taste great, not because they\u2019re cheap.",
              "Menu that changes to suit the crowd.",
              "Team that\u2019s quick with a laugh as well as the tongs.",
              "The oven becomes a spot people naturally gather around.",
            ],
          },
        ],
      },
      {
        heading: "Fresh, Authentic & On-Site \u2014 Sutherland Shire Pizza Catering you\u2019ll Love",
        blocks: [
          { type: "p", text: "At Pizzaiolo Woodfire Pizza, \u201cfresh\u201d isn\u2019t just a word we throw around. It\u2019s in the dough we make ahead of time, the produce we pick, and the way every pizza is cooked to order." },
          { type: "p", text: "Whether you\u2019re planning something small and personal or a big celebration, we make sure the food becomes part of the fun. The oven becomes a natural gathering point, the smell fills the air, and every slice is worth the wait." },
        ],
      },
    ],
  },
};

export const landingSlugs = Object.keys(landingPages);
