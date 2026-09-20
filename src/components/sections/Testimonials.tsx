import { Reveal } from "@/components/ui/Reveal";
import { Google, Star } from "@/components/ui/Icons";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="grain absolute inset-0" aria-hidden />

      <div className="shell relative py-20 sm:py-24 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow text-ember">Reviews</span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.4rem)] text-ink-900">
              Trusted by verified clients
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-ink/12 bg-cream-50 px-5 py-2.5">
              <Google className="h-4 w-4" />
              <span className="text-[0.8125rem] font-medium text-ink-700">
                Google Reviews
              </span>
              <span className="h-3 w-px bg-ink/15" aria-hidden />
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-flame" />
                ))}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Snap rail on small screens, grid from md up */}
        <ul className="no-scrollbar -mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={i * 110}
              className="w-[85vw] shrink-0 snap-center sm:w-[60vw] md:w-auto"
            >
              <figure className="flex h-full flex-col rounded-3xl border border-ink/12 bg-cream-50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ink/22 hover:shadow-[0_24px_50px_-30px_rgba(11,10,9,0.45)] sm:p-8">
                <div className="flex items-center gap-0.5" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 text-flame" aria-hidden />
                  ))}
                </div>

                <blockquote className="mt-5 flex-1">
                  <p className="text-[0.9375rem] leading-[1.75] text-ink-700">
                    {t.quote}
                  </p>
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/10 pt-5">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-display text-base font-semibold text-cream-50"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[0.9375rem] font-medium text-ink-900">
                      {t.name}
                    </span>
                    <span className="mt-0.5 flex items-center gap-1.5 text-[0.75rem] text-ink-400">
                      <Google className="h-3 w-3" aria-hidden />
                      Verified {t.source} review &middot; {t.age}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
