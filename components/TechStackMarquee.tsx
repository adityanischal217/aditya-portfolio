
"use client";

import { useEffect, useRef } from "react";

const RESUME_DELAY = 1500;
const REPEATS = 6;

function Row({
  items,
  reverse,
  speed = 0.8,
  paused,
  onStart,
  onEnd,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
  paused: React.MutableRefObject<boolean>;
  onStart: () => void;
  onEnd: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const pos = useRef(0);

  // Width of one complete set of skills
  const getPeriod = () => setRef.current?.offsetWidth ?? 0;

  // Keep scroll position inside the repeating content range
  const normalize = (x: number, p: number) => {
    if (p <= 0) return x;

    while (x >= 2 * p) x -= p;
    while (x < p) x += p;

    return x;
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf: number;

    pos.current = getPeriod();
    el.scrollLeft = pos.current;

    const tick = () => {
      const p = getPeriod();

      if (!paused.current && p > 0) {
        pos.current = normalize(
          pos.current + (reverse ? -speed : speed),
          p
        );

        el.scrollLeft = pos.current;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reverse, speed]);

  // Manual scrolling: keep position synchronized
  const onScroll = () => {
    const el = ref.current;

    if (!el || !paused.current) return;

    const p = getPeriod();
    const x = normalize(el.scrollLeft, p);

    if (x !== el.scrollLeft) {
      el.scrollLeft = x;
    }

    pos.current = x;
  };

  return (
    <div
      ref={ref}
      onMouseEnter={onStart}
      onMouseLeave={onEnd}
      onTouchStart={onStart}
      onTouchEnd={onEnd}
      onWheel={() => {
        onStart();
        onEnd();
      }}
      onScroll={onScroll}
      className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex w-max">
        {Array.from({ length: REPEATS }).map((_, r) => (
          <div
            key={r}
            ref={r === 0 ? setRef : undefined}
            className="flex gap-4 pr-4"
          >
            {items.map((s, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-[var(--card-border)] bg-[var(--card)] px-5 py-2 text-sm font-medium text-[var(--text-secondary)] shadow-sm transition-all duration-300 hover:border-[var(--accent)]/50 hover:bg-[var(--card-hover)] hover:text-[var(--accent)] hover:shadow-[0_0_15px_var(--glow)]"
              >
                {s}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStackMarquee({
  rows,
}: {
  rows: string[][];
}) {
  const [rowOne, rowTwo] = rows;

  const paused = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const pause = () => {
    paused.current = true;

    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  const resumeLater = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      paused.current = false;
    }, RESUME_DELAY);
  };

  return (
    <div className="flex flex-col gap-4">
      <Row
        items={rowOne}
        speed={0.8}
        paused={paused}
        onStart={pause}
        onEnd={resumeLater}
      />

      <Row
        items={rowTwo}
        reverse
        speed={1.0}
        paused={paused}
        onStart={pause}
        onEnd={resumeLater}
      />
    </div>
  );
}
