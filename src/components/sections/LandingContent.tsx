import { Reveal } from "@/components/ui/Reveal";
import { Check } from "@/components/ui/Icons";
import { Amp } from "@/components/ui/Amp";
import type { LandingSection } from "@/data/landing";

/**
 * Renders migrated long-form landing copy.
 *
 * Headings become <h2> so each page keeps a single <h1> (supplied by PageHero)
 * and a clean, crawlable heading hierarchy underneath it.
 */
export function LandingContent({ sections }: { sections: LandingSection[] }) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="grain absolute inset-0" aria-hidden />

      <div className="shell relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          {sections.map((section, si) => (
            <Reveal key={si} delay={si === 0 ? 0 : 60}>
              <article
                className={
                  si === 0
                    ? ""
                    : "mt-14 border-t border-ink/10 pt-14 sm:mt-16 sm:pt-16"
                }
              >
                <h2 className="text-[clamp(1.5rem,3.4vw,2.25rem)] text-ink-900">
                  <Amp>{section.heading}</Amp>
                </h2>

                <div className="mt-5 space-y-5">
                  {section.blocks.map((block, bi) =>
                    block.type === "p" ? (
                      <p
                        key={bi}
                        className="text-[1.0625rem] leading-[1.8] text-ink-500"
                      >
                        {block.text}
                      </p>
                    ) : (
                      <ul key={bi} className="space-y-3 pt-1">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3.5 text-[1.0625rem] leading-relaxed text-ink-700"
                          >
                            <Check className="mt-1.5 h-4 w-4 shrink-0 text-ember" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
