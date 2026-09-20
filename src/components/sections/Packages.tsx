import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/ui/Icons";
import {
  dessertUpgrade,
  packageNotes,
  packages,
} from "@/data/packages";
import { external } from "@/data/site";

type Props = {
  /** "preview" trims the fine print for the homepage. */
  variant?: "preview" | "full";
};

export function Packages({ variant = "full" }: Props) {
  const isPreview = variant === "preview";

  return (
    <section
      id="packages"
      className={`relative ${isPreview ? "bg-cream" : "bg-cream-100"}`}
    >
      <div className="shell py-20 sm:py-24 lg:py-28">
        <SectionHeading
          eyebrow="Pizza Catering Packages"
          title={
            isPreview ? "Pick a package, we handle the rest" : "Our Packages"
          }
          lead="Every package is an all-you-can-eat woodfire service, cooked on-site and served until your guests are full. Setup, cooking and service are included."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 110} className="h-full min-w-0">
              <article
                className={[
                  "group relative flex h-full min-w-0 flex-col rounded-3xl p-6 transition-all duration-500 sm:p-8",
                  pkg.featured
                    ? "bg-ink text-cream-200 shadow-[0_32px_70px_-30px_rgba(11,10,9,0.7)] lg:-translate-y-3"
                    : "border border-ink/12 bg-cream-50 text-ink-700 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_24px_50px_-28px_rgba(11,10,9,0.45)]",
                ].join(" ")}
              >
                {pkg.featured ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-ember px-3.5 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-cream-50">
                    Most Popular
                  </span>
                ) : null}

                <header>
                  <h3
                    className={`text-sm font-semibold uppercase tracking-[0.18em] ${
                      pkg.featured ? "text-flame-200" : "text-ember"
                    }`}
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {pkg.name}
                  </h3>

                  <p className="mt-5 flex items-baseline gap-2">
                    <span
                      className={`font-display text-[3.25rem] font-semibold leading-none ${
                        pkg.featured ? "text-cream-50" : "text-ink-900"
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-sm ${pkg.featured ? "text-cream-200/65" : "text-ink-400"}`}
                    >
                      {pkg.unit}
                    </span>
                  </p>

                  <p
                    className={`mt-2 text-[0.8125rem] ${
                      pkg.featured ? "text-cream-200/60" : "text-ink-400"
                    }`}
                  >
                    {pkg.minimum}
                  </p>

                  <p
                    className={`mt-5 text-[0.9375rem] leading-relaxed ${
                      pkg.featured ? "text-cream-200/80" : "text-ink-500"
                    }`}
                  >
                    {pkg.summary}
                  </p>
                </header>

                <hr
                  className={`my-6 border-t ${
                    pkg.featured ? "border-cream-50/12" : "border-ink/10"
                  }`}
                />

                <ul className="flex flex-1 flex-col gap-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          pkg.featured ? "text-flame" : "text-ember"
                        }`}
                      />
                      <span className={pkg.featured ? "text-cream-200/85" : "text-ink-700"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <ButtonLink
                    href={external.book}
                    variant={pkg.featured ? "primary" : "secondary"}
                    size="lg"
                    className="w-full"
                  >
                    Let&rsquo;s Cater Your Event
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Fine print — the full page carries the client's exact notes */}
        {!isPreview ? (
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-ember/25 bg-ember/6 p-7">
                <h3 className="text-xl text-ink-900">{dessertUpgrade.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">
                  {dessertUpgrade.body}
                </p>
                <ul className="mt-4 space-y-2">
                  {dessertUpgrade.options.map((o) => (
                    <li key={o} className="flex gap-3 text-[0.9375rem] text-ink-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                      {o}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.8125rem] italic text-ink-500">
                  {dessertUpgrade.note}
                </p>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <div className="h-full rounded-2xl border border-ink/12 bg-cream-50 p-7">
                <h3 className="text-xl text-ink-900">Good to know</h3>
                <ul className="mt-4 space-y-3">
                  {packageNotes.map((note) => (
                    <li key={note} className="flex gap-3 text-[0.9375rem] leading-snug text-ink-700">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                      />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        ) : (
          <Reveal delay={340}>
            <div className="mt-12 flex justify-center">
              <ButtonLink href="/pizza-catering-form" variant="secondary" size="lg">
                See Full Package Details
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </ButtonLink>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
