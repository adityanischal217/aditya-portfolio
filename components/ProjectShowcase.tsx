
"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/data/projects";

export default function ProjectShowcase() {
  const [activeImages, setActiveImages] = useState<Record<string, number>>({});

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[var(--background)] px-4 py-20 sm:px-6 md:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#6CC656]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#6CC656]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#6CC656]">
            Visual Experience
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[var(--text-primary)] md:text-6xl">
            Inside the{" "}
            <span className="text-[var(--accent)]">Apps.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
            Take a closer look at the mobile applications I've helped
            build. Explore real app screens and user experiences.
          </p>
        </div>

        {/* App Showcase */}
        <div className="space-y-12">

          {projects.filter((p) => p.screenshots?.length).map((project, index) => {
            const screenshots = project.screenshots ?? [];
            const activeIndex = activeImages[project.title] ?? 0;

            const changeImage = (direction: number) => {
              setActiveImages((prev) => ({
                ...prev,
                [project.title]:
                  (activeIndex + direction + screenshots.length) %
                  screenshots.length,
              }));
            };

            return (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[32px] border border-[var(--card-border)] bg-[var(--card)] transition-all duration-500 hover:border-[var(--accent)] hover:shadow-[0_20px_60px_var(--glow)]"
              >
                <div className="grid items-center lg:grid-cols-2">

                  {/* Project Information */}
                  <div className="order-2 p-7 md:p-12 lg:order-1 lg:p-14">

                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--glow)] text-sm font-bold text-[var(--accent)]">
                        0{index + 1}
                      </span>

                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                        Featured Application
                      </span>
                    </div>

                    <h3 className="mt-7 text-3xl font-extrabold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)] md:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 text-sm leading-8 text-[var(--text-secondary)] md:text-base">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-8">
                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                        Technology Stack
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-3 py-2 text-xs font-medium text-[var(--text-secondary)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Store Links */}
                    <div className="mt-9 flex flex-wrap gap-3">
                      {project.links.filter((link) => link.url).map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-[#8DDB72] to-[#4CAF50] px-6 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(108,198,86,0.3)]"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>

                  </div>

                  {/* Smartphone Gallery */}
                  <div className="relative order-1 flex min-h-[520px] flex-col items-center justify-center overflow-hidden bg-[var(--surface)] px-5 py-10 lg:order-2 lg:min-h-[620px]">

                    {/* Decorative Rings */}
                    <div className="pointer-events-none absolute h-80 w-80 rounded-full border border-[#6CC656]/10" />
                    <div className="pointer-events-none absolute h-64 w-64 rounded-full border border-[#6CC656]/20" />
                    <div className="pointer-events-none absolute h-52 w-52 rounded-full bg-[#6CC656]/15 blur-[80px]" />

                    {/* Phone */}
                    <div className="relative z-10 h-[390px] w-[195px] rounded-[38px] border-[7px] border-[#242424] bg-[#111] p-[5px] shadow-[0_30px_70px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:-translate-y-2 sm:h-[450px] sm:w-[225px]">

                      <div className="relative h-full w-full overflow-hidden rounded-[29px] bg-white">

                        {/* Dynamic Island */}
                        <div className="absolute left-1/2 top-2 z-20 h-[18px] w-[65px] -translate-x-1/2 rounded-full bg-black" />

                        <Image
                          key={screenshots[activeIndex]}
                          src={screenshots[activeIndex]}
                          alt={`${project.title} app screen ${activeIndex + 1}`}
                          fill
                          sizes="225px"
                          priority={index === 0}
                          className="object-contain"
                        />
                      </div>

                      {/* Side Buttons */}
                      <div className="absolute -right-[10px] top-24 h-12 w-[3px] rounded-r-full bg-[#555]" />
                      <div className="absolute -left-[10px] top-20 h-8 w-[3px] rounded-l-full bg-[#555]" />
                    </div>

                    {/* Image Navigation */}
                    <div className="relative z-20 mt-7 flex items-center gap-5">

                      <button
                        type="button"
                        onClick={() => changeImage(-1)}
                        aria-label="Previous screenshot"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] text-xl text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        ‹
                      </button>

                      <div className="flex items-center gap-2">
                        {screenshots.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            aria-label={`Show screenshot ${i + 1}`}
                            aria-pressed={activeIndex === i}
                            onClick={() =>
                              setActiveImages((prev) => ({
                                ...prev,
                                [project.title]: i,
                              }))
                            }
                            className={`h-2 rounded-full transition-all duration-300 ${
                              activeIndex === i
                                ? "w-7 bg-[#6CC656]"
                                : "w-2 bg-[var(--text-secondary)]/40 hover:bg-[#6CC656]"
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => changeImage(1)}
                        aria-label="Next screenshot"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] text-xl text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        ›
                      </button>
                    </div>

                    <p className="relative z-10 mt-3 text-xs font-medium text-[var(--text-secondary)]">
                      Screen {activeIndex + 1} of {screenshots.length}
                    </p>

                  </div>
                </div>
              </article>
            );
          })}

        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Crafted with passion. Powered by technology.
          </p>
        </div>

      </div>
    </section>
  );
}
