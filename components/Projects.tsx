"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

const filters = ["All", "Company"] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500">Selected Work</p>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">Things I&apos;ve built.</h2>

        <div className="mt-8 flex gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm ${
                active === f ? "bg-white text-black" : "border border-white/15 text-zinc-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {shown.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-xs text-zinc-500">{p.category} Project</p>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-zinc-400">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-4 text-sm">
                {p.links.map((l) => (
                  <a key={l.label} href={l.url} target="_blank" className="underline">
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