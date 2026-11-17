"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "6.5+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold text-zinc-300 md:text-2xl"
        >
          Hello, I'm{" "}
          <span className="rounded-md bg-[#A855F7] px-3 py-1 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            Aditya Nischal
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-5xl font-bold leading-tight md:text-8xl"
        >
          Crafting <br /> Digital <br />{" "}
          <span className="text-[#A855F7] drop-shadow-[0_0_25px_rgba(168,85,247,0.45)]">
            Mobility.
          </span>
        </motion.h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
          Android Developer. Java and Kotlin enthusiast. Building intuitive, scalable, and high-performance mobile applications that people love to use.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[#A855F7] px-6 py-3 font-medium text-white transition hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
          >
            Explore Projects
          </a>
          <a
            href="https://www.linkedin.com/in/adityanischal/"
            target="_blank"
            className="px-6 py-3 text-zinc-400 transition hover:text-[#A855F7]"
          >
            Linkedin ↗
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-12">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-[#A855F7]">{s.value}</p>
              <p className="text-sm text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}