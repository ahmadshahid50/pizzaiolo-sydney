"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";

/** useLayoutEffect warns during SSR; fall back to useEffect on the server. */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ------------------------------------------------------------------ *
 * Shared reveal manager
 *
 * One rAF-throttled scroll listener drives every Reveal on the page.
 * IntersectionObserver was tried first and proved unreliable here: during
 * fast or programmatic scrolling the browser coalesces callbacks, and
 * elements that passed through the viewport between flushes were left
 * permanently invisible. A direct rect check is deterministic — an element
 * whose top has risen above the viewport bottom is shown, full stop.
 * ------------------------------------------------------------------ */

const pending = new Set<HTMLElement>();
let listening = false;
let frame = 0;

/** Reveal anything at or above the trigger line, then drop it from the set. */
function sweep() {
  frame = 0;
  const line = window.innerHeight * 0.92;
  for (const el of pending) {
    if (el.getBoundingClientRect().top < line) {
      el.classList.add("is-visible");
      pending.delete(el);
    }
  }
  if (pending.size === 0) stopListening();
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(sweep);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
}

type RevealProps = {
  children: ReactNode;
  /** Stagger, in milliseconds, applied to this element's transition. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Fades and lifts its children into view the first time they are scrolled to.
 *
 * The markup renders visible and is only hidden once JS has confirmed it can
 * reveal it again, so content is never trapped invisible for crawlers or when
 * JS fails. Elements already on screen — or already scrolled past, which
 * happens when hydration lands after the visitor has started scrolling — are
 * shown straight away.
 *
 * `prefers-reduced-motion` is honoured in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("reveal", "is-visible");
      return;
    }

    el.classList.add("reveal");

    // Already on screen (or behind us): animate in on the next frame rather
    // than waiting for a scroll that may never come.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      const id = requestAnimationFrame(() => el.classList.add("is-visible"));
      return () => cancelAnimationFrame(id);
    }

    pending.add(el);
    startListening();

    return () => {
      pending.delete(el);
      if (pending.size === 0) stopListening();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
