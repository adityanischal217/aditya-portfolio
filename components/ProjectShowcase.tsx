"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
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
        </motion.div>

        {/* App Showcase */}
        <div className="space-y-12">
          {projects
            .filter((p) => p.screenshots?.length)
            .map((project, index) => {
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
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, delay: 0.1 }}
                  className="group relative overflow-hidden rounded-[32px] border border-[var(--card-border)] bg-[var(--card)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[var(--accent)] hover:shadow-[0_25px_70px_var(--glow)]"
                >
                  {/* Subtle Hover Glow */}
                  <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#6CC656]/[0.04] via-transparent to-[#6CC656]/[0.08] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="relative z-10 grid items-center lg:grid-cols-2">

                    {/* Project Information */}
                    <div className="order-2 p-7 md:p-12 lg:order-1 lg:p-14">

                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--glow)] text-sm font-bold text-[var(--accent)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                          0{index + 1}
                        </span>

                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                          Featured Application
                        </span>
                      </div>

                      <h3 className="mt-7 text-3xl font-extrabold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--accent)] md:text-4xl">
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
                          {project.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, y: 8 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.3,
                                delay: tagIndex * 0.025,
                              }}
                              whileHover={{ y: -4, scale: 1.05 }}
                              className="cursor-default rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-3 py-2 text-xs font-medium text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--glow)] hover:text-[var(--accent)] hover:shadow-[0_5px_15px_var(--glow)]"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Store Links */}
                      <div className="mt-9 flex flex-wrap gap-3">
                        {project.links
                          .filter((link) => link.url)
                          .map((link) => (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-[#8DDB72] to-[#4CAF50] px-6 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_25px_rgba(108,198,86,0.35)] active:scale-95"
                            >
                              {link.label}
                              <span className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                                ↗
                              </span>
                            </a>
                          ))}
                      </div>
                    </div>

                    {/* Smartphone Gallery */}
                    <div className="relative order-1 flex min-h-[520px] flex-col items-center justify-center overflow-hidden bg-[var(--surface)] px-5 py-10 lg:order-2 lg:min-h-[620px]">

                      {/* Decorative Rings */}
                      <div className="pointer-events-none absolute h-80 w-80 rounded-full border border-[#6CC656]/10 transition-transform duration-1000 group-hover:scale-110 group-hover:border-[#6CC656]/30" />
                      <div className="pointer-events-none absolute h-64 w-64 rounded-full border border-[#6CC656]/20 transition-transform duration-1000 group-hover:scale-110" />
                      <div className="pointer-events-none absolute h-52 w-52 rounded-full bg-[#6CC656]/15 blur-[80px] transition-all duration-700 group-hover:bg-[#6CC656]/25 group-hover:blur-[100px]" />

                      {/* Phone */}
                      <motion.div
                        whileHover={{
                          y: -10,
                          rotate: 2,
                          scale: 1.04,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 180,
                          damping: 15,
                        }}
                        className="relative z-10 h-[390px] w-[195px] rounded-[38px] border-[7px] border-[#242424] bg-[#111] p-[5px] shadow-[0_30px_70px_rgba(0,0,0,0.4)] transition-shadow duration-500 group-hover:shadow-[0_35px_80px_rgba(108,198,86,0.25)] sm:h-[450px] sm:w-[225px]"
                      >
                        <div className="relative h-full w-full overflow-hidden rounded-[29px] bg-white">

                          {/* Dynamic Island */}
                          <div className="absolute left-1/2 top-2 z-20 h-[18px] w-[65px] -translate-x-1/2 rounded-full bg-black" />

                          <Image
                            key={screenshots[activeIndex]}
                            src={screenshots[activeIndex]}
                            alt={`${project.title} app screen ${activeIndex + 1}`}
                            fill
                            sizes="(max-width: 640px) 195px, 225px"
                            priority={index === 0}
                            className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                        </div>

                        {/* Side Buttons */}
                        <div className="absolute -right-[10px] top-24 h-12 w-[3px] rounded-r-full bg-[#555]" />
                        <div className="absolute -left-[10px] top-20 h-8 w-[3px] rounded-l-full bg-[#555]" />
                      </motion.div>

                      {/* Image Navigation */}
                      <div className="relative z-20 mt-7 flex items-center gap-5">

                        <button
                          type="button"
                          onClick={() => changeImage(-1)}
                          aria-label="Previous screenshot"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] text-xl text-[var(--text-primary)] transition-all duration-300 hover:scale-110 hover:border-[var(--accent)] hover:bg-[var(--glow)] hover:text-[var(--accent)] active:scale-90"
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
                                  ? "w-7 bg-[#6CC656] shadow-[0_0_10px_rgba(108,198,86,0.5)]"
                                  : "w-2 bg-[var(--text-secondary)]/40 hover:w-5 hover:bg-[#6CC656]"
                              }`}
                            />
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => changeImage(1)}
                          aria-label="Next screenshot"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] text-xl text-[var(--text-primary)] transition-all duration-300 hover:scale-110 hover:border-[var(--accent)] hover:bg-[var(--glow)] hover:text-[var(--accent)] active:scale-90"
                        >
                          ›
                        </button>
                      </div>

                      <p className="relative z-10 mt-3 text-xs font-medium text-[var(--text-secondary)]">
                        Screen {activeIndex + 1} of {screenshots.length}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
