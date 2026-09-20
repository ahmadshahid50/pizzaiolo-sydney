import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { story } from "@/data/content";

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-cream">
      <div className="grain absolute inset-0" aria-hidden />

      <div className="shell relative py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Imagery — the arch echoes the mouth of the oven */}
          <div className="lg:col-span-5">
            <Reveal className="relative">
              <div className="arch relative aspect-4/5 w-full overflow-hidden shadow-[0_30px_70px_-30px_rgba(11,10,9,0.5)]">
                <Image
                  src="/images/story/pizzaiolo-chef-waterfront.webp"
                  alt="A Pizzaiolo chef holding a freshly made woodfired pizza by the water"
                  fill
                  sizes="(min-width: 1024px) 34rem, (min-width: 640px) 70vw, 88vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Overlapping detail shot */}
              <div className="absolute -bottom-8 -right-4 hidden h-44 w-36 overflow-hidden rounded-2xl shadow-[0_20px_50px_-18px_rgba(11,10,9,0.6)] ring-4 ring-cream sm:block lg:-right-10 lg:h-52 lg:w-44">
                <Image
                  src="/images/story/pizza-dough-preparation.webp"
                  alt="Pizza bases being hand-dressed on the bench before firing"
                  fill
                  sizes="11rem"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <span className="eyebrow text-ember">{story.eyebrow}</span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 max-w-[18ch] text-[clamp(2rem,5vw,3.4rem)] text-ink-900">
                {story.heading}
              </h2>
            </Reveal>

            <div className="mt-7 space-y-5">
              {story.body.map((para, i) => (
                <Reveal key={i} delay={140 + i * 80}>
                  <p className="max-w-xl text-[1.0625rem] leading-[1.75] text-ink-500">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Pull quote */}
            <Reveal delay={320}>
              <blockquote className="mt-10 border-l-2 border-ember/40 pl-6">
                <p className="font-display text-[1.375rem] leading-snug text-ink-800 sm:text-2xl">
                  {story.pull}
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-9">
                <ButtonLink href="/pizzaiolo-setup" variant="secondary" size="lg">
                  See How We Set Up
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
