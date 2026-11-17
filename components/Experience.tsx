import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
         <p className="bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] bg-clip-text text-base font-extrabold uppercase tracking-widest text-transparent md:text-lg">
        Experience
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">My journey so far.</h2>

        <div className="mt-12 space-y-10 border-l border-white/15 pl-8">
          {experience.map((e) => (
            <div key={e.role + e.period} className="relative">
              <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-white" />
              <p className="text-sm text-zinc-500">{e.period}</p>
              <h3 className="text-xl font-semibold">{e.role}</h3>
              <p className="text-zinc-400">{e.company}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-400">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}