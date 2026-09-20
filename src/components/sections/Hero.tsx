import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowDown, ArrowRight, Star } from "@/components/ui/Icons";
import { external, site } from "@/data/site";

const trustPoints = [
  "Cooked live at your event",
  "All-you-can-eat service",
  "Setup & cleanup included",
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink pb-12 pt-32 sm:pb-16 sm:pt-36 lg:min-h-[100svh] lg:pb-20">
      {/* Backdrop */}
      <Image
        src="/images/hero/woodfire-oven-flames.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={82}
        className="-z-20 object-cover object-center"
      />

      {/* Scrims: vertical for text legibility, warm side-glow for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/72 to-ink/45"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(75%_60%_at_78%_38%,rgba(224,135,58,0.28),transparent_68%)]"
      />
      <div className="grain absolute inset-0 -z-10" aria-hidden />

      <div className="shell relative">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          {/* Headline column */}
          <div className="lg:col-span-7">
            <p className="eyebrow text-flame-200">Mobile Woodfire Pizza Catering</p>

            <h1 className="text-shadow-hero mt-6 max-w-[16ch] text-[clamp(2.6rem,8vw,5.25rem)] text-cream-50">
              Authentic wood-fired pizza,{" "}
              <em className="not-italic text-flame">made fresh at your event</em>
            </h1>

            <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-cream-200/85 sm:text-lg">
              We bring the oven, the dough and the team to you — anywhere in{" "}
              {site.serviceArea}. Neapolitan pizzas fired on-site and served
              until your guests are full.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={external.book} size="lg" className="w-full sm:w-auto">
                Let&rsquo;s Cater Your Event
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </ButtonLink>
              <ButtonLink
                href="/pizza-catering-form"
                variant="light"
                size="lg"
                className="w-full sm:w-auto"
              >
                View Pizza Packages
              </ButtonLink>
            </div>

            {/* Trust strip */}
            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-cream-200/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-flame" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Floating proof card — the trailer, framed in the oven-arch motif */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="ml-auto max-w-sm">
              {/* Landscape crop: the trailer is a wide subject and a portrait
                  frame would slice it into something unreadable. */}
              <div className="arch-sm relative aspect-5/4 w-full shadow-[0_28px_70px_-22px_rgba(0,0,0,0.75)] ring-1 ring-cream-50/15">
                <Image
                  src="/images/hero/pizzaiolo-pizza-trailer.webp"
                  alt="The Pizzaiolo mobile woodfire pizza trailer, wrapped in black and white photography"
                  fill
                  // Not `priority`: this panel is hidden below lg, so
                  // preloading it would cost mobile LCP for nothing.
                  loading="eager"
                  sizes="(min-width: 1024px) 24rem, 0px"
                  quality={80}
                  className="object-cover object-center"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center gap-1" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 text-flame" />
                    ))}
                  </div>
                  <p className="mt-3 font-display text-lg leading-snug text-cream-50">
                    Our kitchen arrives on wheels — oven, team and all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-12 flex justify-center lg:mt-16">
          <a
            href="#story"
            className="group inline-flex flex-col items-center gap-2 text-cream-200/55 transition-colors hover:text-cream-50"
          >
            <span className="text-[0.625rem] font-semibold uppercase tracking-[0.25em]">
              Discover
            </span>
            <ArrowDown className="h-4 w-4 animate-bounce [animation-duration:2.4s] motion-reduce:animate-none" />
            <span className="sr-only">Scroll to our story</span>
          </a>
        </div>
      </div>
    </section>
  );
}
