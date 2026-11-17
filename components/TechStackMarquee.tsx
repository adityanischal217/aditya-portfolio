"use client";
import { useEffect, useRef } from "react";

const SPEED = 0.8; // pixels per frame, lower = slower
const RESUME_DELAY = 1500; // ms to wait after manual scroll before auto-scroll resumes

export default function TechStackMarquee({ skills }: { skills: string[] }) {
  const loop = [...skills, ...skills];
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pos = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf: number;

    const tick = () => {
      if (!paused.current) {
        pos.current += SPEED;
        const half = el.scrollWidth / 2;
        if (pos.current >= half) pos.current -= half;
        el.scrollLeft = pos.current;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
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

  // Keep our position in sync when the user scrolls manually
  const syncPos = () => {
    if (!ref.current) return;
    if (paused.current) {
      const half = ref.current.scrollWidth / 2;
      let x = ref.current.scrollLeft;
      if (x >= half) {
        x -= half;
        ref.current.scrollLeft = x;
      } else if (x <= 0) {
        x += half;
        ref.current.scrollLeft = x;
      }
      pos.current = x;
    }
  };

  return (
    <div
      ref={ref}
      onMouseEnter={pause}
      onMouseLeave={resumeLater}
      onTouchStart={pause}
      onTouchEnd={resumeLater}
      onWheel={() => {
        pause();
        resumeLater();
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