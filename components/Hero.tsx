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
       <span className="bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] bg-clip-text text-transparent">
            Hello, I'm Aditya Nischal
          </span>
         {/* <span className="rounded-md bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] px-3 py-1 text-black shadow-[0_0_20px_rgba(108,198,86,0.45)]">
            
          </span>*/}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-5xl font-bold leading-tight md:text-8xl"
        >
          Crafting <br /> Digital <br />{" "}
          <span className="bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] bg-clip-text text-transparent">
            Mobility.
          </span>
        </motion.h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
          Android Developer. Java and Kotlin enthusiast. Building intuitive, scalable, and high-performance mobile applications that people love to use.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] px-6 py-3 font-medium text-black transition hover:shadow-[0_0_25px_rgba(108,198,86,0.55)]"
          >
            Explore Projects
          </a>
          <a
            href="https://www.linkedin.com/in/adityanischal/"
            target="_blank"
            className="px-6 py-3 text-zinc-400 transition hover:text-[#6CC656]"
          >
            Linkedin ↗
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-12">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] bg-clip-text text-4xl font-bold text-transparent">
                {s.value}
              </p>
              <p className="text-sm text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}