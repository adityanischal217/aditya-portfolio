"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "6.5+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto max-w-6xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-400">
          Hello, I'm Aditya Nischal
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-5xl font-bold leading-tight md:text-8xl"
        >
          Crafting <br /> Digital <br /> Mobility.
        </motion.h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-400">
          Android Developer. Java and Kotlin enthusiast. Building intuitive, scalable, and high-performance mobile applications that people love to use.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full bg-white px-6 py-3 font-medium text-black">
            Explore Projects
          </a>
         {/*<a href="mailto:adityanischal217@email.com" className="rounded-full border border-white/20 px-6 py-3">
            Start a Conversation
          </a>*/}
          {/*<a href="https://github.com/yourname" target="_blank" className="px-6 py-3 text-zinc-400 hover:text-white">
            GitHub ↗
          </a>*/}
           <a href="https://www.linkedin.com/in/adityanischal/" target="_blank" className="px-6 py-3 text-zinc-400 hover:text-white">
            Linkedin ↗
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