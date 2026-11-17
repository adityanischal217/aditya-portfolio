"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

const filters = ["All", "Company"] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="projects" className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      {/* soft glow behind the section */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#6CC656]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <p className="bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] bg-clip-text text-sm font-extrabold uppercase tracking-widest text-transparent md:text-lg">
          Selected Work
        </p>
        <h2 className="mt-3 text-4xl font-extrabold leading-tight md:text-6xl">
          Things I&apos;ve <span className="text-[#8DDB72]">built.</span>
        </h2>

        {/* Filter chips: big touch targets, scrollable on small phones */}
        <div className="-mx-4 mt-8 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`min-h-12 shrink-0 rounded-full px-7 py-3 text-base font-semibold transition active:scale-95 ${
                active === f
                  ? "bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] text-black shadow-[0_0_25px_rgba(108,198,86,0.45)]"
                  : "border border-white/15 bg-white/5 text-zinc-300 hover:border-[#6CC656] hover:text-[#8DDB72]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 md:gap-6">
          {shown.map((p) => (
            <article
              key={p.title}
              tabIndex={0}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-6 transition-all duration-300
                         hover:-translate-y-1 hover:border-[#6CC656] hover:bg-gradient-to-br hover:from-[#1f3d1a] hover:via-[#16281a] hover:to-zinc-900 hover:shadow-[0_10px_40px_rgba(108,198,86,0.25)]
                         active:border-[#6CC656] active:bg-gradient-to-br active:from-[#1f3d1a] active:via-[#16281a] active:to-zinc-900
                         focus-visible:border-[#6CC656] focus-visible:bg-gradient-to-br focus-visible:from-[#1f3d1a] focus-visible:via-[#16281a] focus-visible:to-zinc-900
                         md:p-8"
            >
              {/* accent bar on the left */}
              <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] opacity-60 transition-opacity group-hover:opacity-100 group-active:opacity-100" />

              <span className="inline-block rounded-full bg-[#6CC656]/15 px-3 py-1 text-xs font-semibold text-[#8DDB72]">
                {p.category} Project
              </span>
              <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-200 group-active:text-zinc-200">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-1.5 text-xs transition-colors group-hover:bg-[#6CC656]/25 group-active:bg-[#6CC656]/25"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-sm font-medium transition hover:border-[#8DDB72] hover:bg-[#8DDB72] hover:text-black active:scale-95 active:bg-[#8DDB72] active:text-black"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}