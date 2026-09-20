import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Mail, MapPin, Phone } from "@/components/ui/Icons";
import { EnquiryForm } from "./EnquiryForm";
import { external, mapsEmbedSrc, site } from "@/data/site";

const channels = [
  {
    Icon: Phone,
    label: "Call us",
    value: site.phone,
    href: site.phoneHref,
    note: "Quickest way to check a date",
  },
  {
    Icon: Mail,
    label: "Email us",
    value: site.email,
    href: site.emailHref,
    note: "We reply as soon as we can",
  },
  {
    Icon: MapPin,
    label: "Where we cater",
    value: `Mobile catering across ${site.serviceArea}`,
    note: `Travel fee may apply beyond 25km from the ${site.travelBase}`,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative bg-cream-100">
      <div className="shell py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Details */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow text-ember">Get In Touch</span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-5 text-[clamp(2rem,5vw,3.2rem)] text-ink-900">
                Let&rsquo;s talk about your event
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-ink-500">
                Reach out and let us know if there is anything we can do for you.
                Send through your date and guest numbers and we will come back
                with the right package.
              </p>
            </Reveal>

            <ul className="mt-9 space-y-5">
              {channels.map((c, i) => (
                <Reveal as="li" key={c.label} delay={200 + i * 80}>
                  <div className="flex gap-4">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ember/25 bg-ember/8 text-ember"
                    >
                      <c.Icon className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-400">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="mt-1 block break-words font-display text-lg text-ink-900 transition-colors hover:text-ember"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-display text-lg text-ink-900">
                          {c.value}
                        </p>
                      )}
                      <p className="mt-1 text-[0.8125rem] text-ink-400">{c.note}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={440}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={external.book} className="w-full sm:w-auto">
                  Book Your Event
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </ButtonLink>
                <ButtonLink
                  href={external.order}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Order Online
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <p className="mt-5 text-[0.8125rem] text-ink-400">
                Prefer a hosted form?{" "}
                <a
                  href={external.contact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ember underline underline-offset-4 transition-colors hover:text-wine"
                >
                  Use our Square contact form
                </a>
                .
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="rounded-3xl border border-ink/12 bg-cream p-6 shadow-[0_24px_60px_-40px_rgba(11,10,9,0.5)] sm:p-8">
                <h3 className="text-xl text-ink-900">Send us an enquiry</h3>
                <p className="mt-2 text-[0.875rem] text-ink-500">
                  Fields marked <span className="text-ember">*</span> are required.
                </p>
                <div className="mt-7">
                  <EnquiryForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Map */}
      <Reveal>
        <div className="relative h-[320px] w-full overflow-hidden border-t border-ink/10 sm:h-[420px]">
          <iframe
            src={mapsEmbedSrc}
            title={`${site.legalName} location on Google Maps`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-full w-full border-0 grayscale-[35%] transition-[filter] duration-700 hover:grayscale-0"
          />
        </div>
      </Reveal>
    </section>
  );
}
