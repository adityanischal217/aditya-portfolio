
"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "6.5+", label: "Years of Experience" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4CAF50]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-9 inline-flex items-center gap-2 rounded-full border border-[#8DDB72]/20 bg-[#8DDB72]/5 px-4 py-2 text-sm text-zinc-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8DDB72] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8DDB72]" />
          </span>
          Android Developer
          <span className="text-zinc-600">/</span>
          Open to Opportunities
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg font-medium tracking-wide text-zinc-400 md:text-xl"
        >
          Hello, I'm{" "}
          <span className="bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] bg-clip-text font-bold text-transparent">
            Aditya Nischal
          </span>
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-8xl"
        >
          Turning Ideas
          <br />
          Into{" "}
          <span className="relative inline-block bg-gradient-to-b from-[#B4F59B] via-[#8DDB72] to-[#4CAF50] bg-clip-text text-transparent">
            Mobile Experiences.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg"
        >
          I build high-performance Android applications with{" "}
          <span className="font-medium text-zinc-200">Kotlin and Java</span>.
          Turning complex ideas into intuitive, scalable, and seamless
          mobile experiences.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] px-7 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(108,198,86,0.3)]"
          >
            Explore My Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/adityanischal/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-4 font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#8DDB72]/50 hover:text-[#8DDB72]"
          >
            Let's Connect
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </motion.div>

        {/* Experience stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          {stats.map((s) => (
            <div key={s.label} className="group text-center">
              <p className="bg-gradient-to-b from-[#B4F59B] to-[#4CAF50] bg-clip-text text-5xl font-extrabold text-transparent transition-transform duration-300 group-hover:scale-110 md:text-6xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1 },
            y: { duration: 1.8, repeat: Infinity },
          }}
          className="mt-16 inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-600 transition-colors hover:text-[#8DDB72]"
        >
          Scroll to explore
          <span className="text-lg">↓</span>
        </motion.a>
      </div>
    </section>
  );
}
