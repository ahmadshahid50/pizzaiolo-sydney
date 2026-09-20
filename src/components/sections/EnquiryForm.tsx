"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "@/components/ui/Icons";
import { buttonClass } from "@/components/ui/Button";
import { site } from "@/data/site";

const EVENT_TYPES = [
  "Wedding",
  "Engagement",
  "Birthday",
  "Corporate function",
  "Private event",
  "Other celebration",
];

const field =
  "w-full rounded-xl border border-ink/15 bg-cream-50 px-4 py-3 text-[0.9375rem] text-ink-900 " +
  "placeholder:text-ink-400 transition-colors duration-200 hover:border-ink/28 " +
  "focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/25";

const label = "block text-[0.8125rem] font-medium text-ink-700";

/**
 * Enquiry form.
 *
 * There is no backend on this site, so rather than presenting a form that
 * silently discards submissions (as the previous site did), this composes a
 * structured email and hands it to the visitor's mail client. The Square
 * contact form remains available alongside it as a hosted alternative.
 */
export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const lines = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Event type: ${get("eventType") || "Not specified"}`,
      `Event date: ${get("date") || "Not specified"}`,
      `Guests: ${get("guests") || "Not specified"}`,
      `Location: ${get("location") || "Not specified"}`,
      "",
      "Message:",
      get("message") || "(none)",
    ];

    const subject = `Catering enquiry — ${get("name") || "New enquiry"}`;
    window.location.href =
      `mailto:${site.email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(lines.join("\n"))}`;

    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Your name <span className="text-ember">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Rossi"
            className={`mt-2 ${field}`}
          />
        </div>

        <div>
          <label htmlFor="phone" className={label}>
            Phone <span className="text-ember">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="0400 000 000"
            className={`mt-2 ${field}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={label}>
          Email <span className="text-ember">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          className={`mt-2 ${field}`}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="eventType" className={label}>
            Event type
          </label>
          <select id="eventType" name="eventType" className={`mt-2 ${field}`} defaultValue="">
            <option value="">Select an option</option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date" className={label}>
            Event date
          </label>
          <input id="date" name="date" type="date" className={`mt-2 ${field}`} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="guests" className={label}>
            Approximate guests
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            inputMode="numeric"
            placeholder="80"
            className={`mt-2 ${field}`}
          />
        </div>

        <div>
          <label htmlFor="location" className={label}>
            Event location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Suburb or venue"
            className={`mt-2 ${field}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Anything else we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Dietary requirements, timings, access notes…"
          className={`mt-2 resize-y ${field}`}
        />
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <button type="submit" className={`${buttonClass("primary", "lg")} w-full sm:w-auto`}>
          Send Enquiry
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
        <p className="text-[0.75rem] leading-relaxed text-ink-400">
          Opens your email app with the details filled in, ready to send.
        </p>
      </div>

      <p aria-live="polite" className="min-h-5 text-[0.875rem] text-basil">
        {sent
          ? "Your email app should have opened. If it did not, email us directly at " +
            site.email +
            "."
          : ""}
      </p>
    </form>
  );
}
