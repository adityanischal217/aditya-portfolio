
"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

const filters = ["All", "Company"] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const shown = projects.filter(
    (p) => active === "All" || p.category === active
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[var(--background)] px-4 py-16 transition-colors duration-300 sm:px-6 md:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#6CC656]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section Heading */}
        <p className="bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] bg-clip-text text-sm font-extrabold uppercase tracking-widest text-transparent md:text-lg">
          Selected Work
        </p>

        <h2 className="mt-3 text-4xl font-extrabold leading-tight text-[var(--text-primary)] md:text-6xl">
          Things I&apos;ve{" "}
          <span className="text-[var(--accent)]">built.</span>
        </h2>

        <p className="mt-4 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
          A selection of mobile applications and digital experiences
          I've helped bring to life.
        </p>

        {/* Filter Chips */}
        <div className="-mx-4 mt-8 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`min-h-12 shrink-0 rounded-full px-7 py-3 text-base font-semibold transition-all duration-300 active:scale-95 ${
                active === f
                  ? "bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] text-black shadow-[0_0_25px_rgba(108,198,86,0.25)]"
                  : "border border-[var(--card-border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 md:gap-6">
          {shown.map((p) => (
            <article
              key={p.title}
              tabIndex={0}
              className="group relative overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-[0_8px_30px_var(--shadow)] transition-all duration-300
                hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--card-hover)] hover:shadow-[0_10px_40px_var(--glow)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]
                md:p-8"
            >
              {/* Left Accent Bar */}
              <span className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Project Category */}
              <span className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--glow)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                {p.category} Project
              </span>

              {/* Project Title */}
              <h3 className="mt-4 text-2xl font-bold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                {p.title}
              </h3>

              {/* Description */}
              <p className="mt-3 leading-relaxed text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--text-primary)]">
                {p.description}
              </p>

              {/* Technology Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-all duration-300 group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--glow)] group-hover:text-[var(--accent)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-6 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-[var(--card-border)] px-5 text-sm font-medium text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black active:scale-95"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#8DDB72]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* Empty State */}
        {shown.length === 0 && (
          <div className="mt-10 rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-10 text-center">
            <p className="text-[var(--text-secondary)]">
              No projects found in this category.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
