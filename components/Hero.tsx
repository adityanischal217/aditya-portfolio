"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10", label: "Projects" },
  { value: "2", label: "Platforms" },
];

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto max-w-6xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-400">
          Hello, I am Your Name
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-5xl font-bold leading-tight md:text-8xl"
        >
          Crafting <br /> Digital <br /> Experiences.
        </motion.h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-400">
          A short line about what you build and the kind of work you do.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full bg-white px-6 py-3 font-medium text-black">
            Explore Projects
          </a>
          <a href="mailto:you@email.com" className="rounded-full border border-white/20 px-6 py-3">
            Start a Conversation
          </a>
          <a href="https://github.com/yourname" target="_blank" className="px-6 py-3 text-zinc-400 hover:text-white">
            GitHub ↗
          </a>
        </div>

        <div className="mt-16 flex gap-12">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold">{s.value}</p>
              <p className="text-sm text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}