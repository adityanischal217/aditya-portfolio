
"use client";

import Image from "next/image";
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
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#6CC656]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 rounded-full bg-[#6CC656]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-10">
          <p className="bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] bg-clip-text text-sm font-extrabold uppercase tracking-[0.25em] text-transparent md:text-base">
            My Portfolio
          </p>

          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-[var(--text-primary)] md:text-6xl">
            Things I've{" "}
            <span className="text-[var(--accent)]">built.</span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
            A collection of mobile applications and digital experiences
            I've contributed to, bringing ideas to life through technology.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="mb-10 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`min-h-11 shrink-0 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 active:scale-95 ${
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
        <div className="grid gap-7 md:grid-cols-2">

          {shown.map((p, index) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card)] shadow-[0_8px_30px_var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_15px_45px_var(--glow)]"
            >
              {/* Project Screenshot Showcase */}
              <div className="relative overflow-hidden border-b border-[var(--card-border)] bg-[var(--surface)] p-5">

                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                    Project Preview
                  </span>

                  <span className="rounded-full bg-[var(--glow)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                    0{index + 1}
                  </span>
                </div>

                {p.screenshots && p.screenshots.length > 0 ? (
                  <div className="flex min-h-[210px] items-center justify-center gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]">
                    {p.screenshots.map((src, i) => (
                      <div
                        key={`${src}-${i}`}
                        className="relative h-[260px] w-[145px] shrink-0 overflow-hidden rounded-[22px] border-[5px] border-[#252525] bg-[#111] shadow-xl transition-transform duration-500 group-hover:-translate-y-1"
                      >
                        <Image
                          src={src}
                          alt={`${p.title} app screenshot ${i + 1}`}
                          fill
                          sizes="145px"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--card-border)] bg-[var(--card)]">
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--glow)] text-3xl text-[var(--accent)]">
                      {p.title.charAt(0)}
                    </div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      {p.title}
                    </p>
                    <p className="mt-1 text-xs text-[var(--text-secondary)]">
                      Project screenshots coming soon
                    </p>
                  </div>
                )}
              </div>

              {/* Project Information */}
              <div className="p-6 md:p-8">

                {/* Category */}
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-[var(--accent)]/20 bg-[var(--glow)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                    {p.category} Project
                  </span>

                  <span className="text-xs font-medium text-[var(--text-secondary)]">
                    Mobile Application
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-extrabold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {p.description}
                </p>

                {/* Technologies */}
                <div className="mt-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                {p.links.some((link) => link.url) && (
                  <div className="mt-7 flex flex-wrap gap-3 border-t border-[var(--card-border)] pt-6">
                    {p.links
                      .filter((link) => link.url)
                      .map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8DDB72] to-[#4CAF50] px-6 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(108,198,86,0.3)] active:scale-95"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                  </div>
                )}

              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#8DDB72]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
