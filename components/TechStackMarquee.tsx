"use client";
import { useEffect, useRef } from "react";

const SPEED = 0.8; // pixels per frame, lower = slower
const RESUME_DELAY = 1500; // ms to wait after manual scroll before auto-scroll resumes

function Row({
  items,
  reverse,
  paused,
  onInteractStart,
  onInteractEnd,
  registerRef,
}: {
  items: string[];
  reverse?: boolean;
  paused: React.MutableRefObject<boolean>;
  onInteractStart: () => void;
  onInteractEnd: () => void;
  registerRef: (el: HTMLDivElement | null) => void;
}) {
  const loop = [...items, ...items];
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerRef(el);
    let raf: number;

    // Row 2 starts at the midpoint so it can scroll backwards seamlessly
    if (reverse) {
      pos.current = el.scrollWidth / 2;
      el.scrollLeft = pos.current;
    }

    const tick = () => {
      if (!paused.current) {
        const half = el.scrollWidth / 2;
        pos.current += reverse ? -SPEED : SPEED;
        if (pos.current >= half) pos.current -= half;
        if (pos.current <= 0) pos.current += half;
        el.scrollLeft = pos.current;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep position in sync (and loop seamlessly) when the user scrolls manually
  const syncPos = () => {
    const el = ref.current;
    if (!el || !paused.current) return;
    const half = el.scrollWidth / 2;
    let x = el.scrollLeft;
    if (x >= half) {
      x -= half;
      el.scrollLeft = x;
    } else if (x <= 0) {
      x += half;
      el.scrollLeft = x;
    }
    pos.current = x;
  };

  return (
    <div
      ref={ref}
      onMouseEnter={onInteractStart}
      onMouseLeave={onInteractEnd}
      onTouchStart={onInteractStart}
      onTouchEnd={onInteractEnd}
      onWheel={() => {
        onInteractStart();
        onInteractEnd();
      }}
      onScroll={syncPos}
      className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex w-max gap-4">
        {loop.map((s, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-white/15 px-5 py-2"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStackMarquee({ skills }: { skills: string[] }) {
  const mid = Math.ceil(skills.length / 2);
  const rowOne = skills.slice(0, mid);
  const rowTwo = skills.slice(mid);

  const paused = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  const pause = () => {
    paused.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };

  const resumeLater = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      paused.current = false;
    }, RESUME_DELAY);
  };

  const noop = () => {};

  return (
    <div className="flex flex-col gap-4">
      <Row
        items={rowOne}
        paused={paused}
        onInteractStart={pause}
        onInteractEnd={resumeLater}
        registerRef={noop}
      />
      <Row
        items={rowTwo}
        reverse
        paused={paused}
        onInteractStart={pause}
        onInteractEnd={resumeLater}
        registerRef={noop}
      />
    </div>
  );
}