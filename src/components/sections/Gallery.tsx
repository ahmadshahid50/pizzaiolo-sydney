"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Close,
  Expand,
} from "@/components/ui/Icons";
import {
  galleryCategories,
  type GalleryImage,
} from "@/data/gallery";

type Props = {
  images: GalleryImage[];
  /** Show the category filter rail (the full gallery page only). */
  showFilters?: boolean;
};

export function Gallery({ images, showFilters = false }: Props) {
  const [filter, setFilter] = useState<string>("All");
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const categories = useMemo(() => {
    const present = new Set(images.map((i) => i.category));
    return galleryCategories.filter((c) => c === "All" || present.has(c as never));
  }, [images]);

  const visible = useMemo(
    () => (filter === "All" ? images : images.filter((i) => i.category === filter)),
    [images, filter],
  );

  const open = useCallback((i: number) => {
    lastFocused.current = document.activeElement as HTMLElement;
    setIndex(i);
  }, []);

  const close = useCallback(() => {
    setIndex(null);
    lastFocused.current?.focus();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setIndex((cur) =>
        cur === null ? cur : (cur + dir + visible.length) % visible.length,
      );
    },
    [visible.length],
  );

  // Keyboard controls + scroll lock while the lightbox is open.
  useEffect(() => {
    if (index === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab") {
        // Simple trap: keep focus on the close control.
        e.preventDefault();
        closeRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const active = index === null ? null : visible[index];

  return (
    <>
      {showFilters && categories.length > 2 ? (
        <div
          role="group"
          aria-label="Filter gallery by category"
          className="no-scrollbar -mx-5 mb-10 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={isActive}
                className={[
                  "shrink-0 rounded-full px-4 py-2 text-[0.8125rem] font-medium transition-all duration-300",
                  isActive
                    ? "bg-ink text-cream-50"
                    : "border border-ink/15 text-ink-500 hover:border-ink/35 hover:text-ink-900",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </div>
      ) : null}

      {/* Masonry via CSS columns — no JS layout pass, no shift */}
      <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
        {visible.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => open(i)}
            aria-label={`View larger: ${img.alt}`}
            className="group relative mb-3 block w-full overflow-hidden rounded-xl bg-cream-200 sm:mb-4"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 46vw"
              loading="lazy"
              quality={78}
              className="h-auto w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25"
            />
            <span
              aria-hidden
              className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-cream-50/95 text-ink opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <Expand className="h-3.5 w-3.5" />
            </span>
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="py-12 text-center text-ink-400">
          No images in this category yet.
        </p>
      ) : null}

      {/* Lightbox */}
      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[70] flex flex-col bg-ink/96 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <span className="text-[0.8125rem] tabular-nums text-cream-200/60">
              {(index ?? 0) + 1} / {visible.length}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-50 transition-colors hover:bg-cream-50 hover:text-ink"
            >
              <Close className="h-5 w-5" />
              <span className="sr-only">Close gallery</span>
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => step(-1)}
              className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cream-50/20 text-cream-50 transition-colors hover:bg-cream-50 hover:text-ink sm:left-4"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous image</span>
            </button>

            <figure className="flex max-h-full flex-col items-center">
              <Image
                key={active.src}
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="(min-width: 640px) 80vw, 92vw"
                quality={88}
                priority
                className="max-h-[72svh] w-auto rounded-lg object-contain"
              />
              <figcaption className="mt-4 max-w-2xl px-4 text-center text-[0.875rem] text-cream-200/70">
                {active.alt}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={() => step(1)}
              className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cream-50/20 text-cream-50 transition-colors hover:bg-cream-50 hover:text-ink sm:right-4"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next image</span>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
