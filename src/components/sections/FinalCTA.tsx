import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Mail, Phone } from "@/components/ui/Icons";
import { external, site } from "@/data/site";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image
        src="/images/story/woodfire-pizza-cheese-pull.webp"
        alt=""
        fill
        sizes="100vw"
        loading="lazy"
        quality={72}
        className="-z-20 object-cover object-center opacity-45"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-ink via-ink/88 to-wine/75"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_50%_100%,rgba(224,135,58,0.25),transparent_70%)]"
      />
      <div className="grain absolute inset-0 -z-10" aria-hidden />

      <div className="shell relative py-24 sm:py-28 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="tricolore" aria-hidden />
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-7 text-[clamp(2.2rem,6vw,4rem)] text-cream-50">
              Ready to bring wood-fired pizza to your event?
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-cream-200/80">
              Tell us the date, the place and roughly how many guests. We will
              take care of everything else.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink href={external.book} size="lg" className="w-full sm:w-auto">
                Let&rsquo;s Cater Your Event
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </ButtonLink>
              <ButtonLink
                href="/contact"
                variant="light"
                size="lg"
                className="w-full sm:w-auto"
              >
                Contact Us
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center gap-4 text-[0.9375rem] sm:flex-row sm:gap-8">
              <a
                href={site.phoneHref}
                className="-my-1 inline-flex items-center gap-2.5 py-1 text-cream-200/80 transition-colors hover:text-cream-50"
              >
                <Phone className="h-4 w-4 text-flame" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="-my-1 inline-flex items-center gap-2.5 break-all py-1 text-cream-200/80 transition-colors hover:text-cream-50"
              >
                <Mail className="h-4 w-4 text-flame" />
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
