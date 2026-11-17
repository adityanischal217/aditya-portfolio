
import { experience } from "@/data/experience";

const accent = "bg-gradient-to-r from-[#8DDB72] to-[#4CAF50]";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#4CAF50]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="bg-gradient-to-r from-[#8DDB72] to-[#4CAF50] bg-clip-text text-sm font-bold uppercase tracking-[0.25em] text-transparent">
              Career Journey
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Experience<span className="text-[#8DDB72]">.</span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
              Building impactful mobile experiences, solving engineering
              challenges, and growing through every opportunity.
            </p>
          </div>

          <div className="hidden text-right md:block">
            <p className="text-4xl font-extrabold text-zinc-700">
              CAREER
            </p>
            <p className="text-xs tracking-[0.3em] text-zinc-500">
              PROFESSIONAL TIMELINE
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative mt-16">

          {/* Timeline line */}
          <div className="absolute bottom-8 left-[7px] top-8 w-px bg-gradient-to-b from-[#8DDB72] via-white/15 to-transparent md:left-[15px]" />

          <div className="space-y-8">
            {experience.map((e, index) => (
              <div
                key={e.role + e.period}
                className="group relative pl-10 md:pl-16"
              >
                {/* Timeline indicator */}
                <div className="absolute left-0 top-7 z-10 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-[#8DDB72]/50 bg-zinc-950 transition-all duration-300 group-hover:scale-125 group-hover:border-[#8DDB72] md:left-[8px] md:h-[15px] md:w-[15px]">
                  <span
                    className={`h-2 w-2 rounded-full ${accent} ${
                      index === 0 ? "shadow-[0_0_12px_#8DDB72]" : ""
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 ease-out hover:z-20 hover:-translate-y-2 hover:scale-[1.03] hover:border-[#8DDB72]/50 hover:bg-white/[0.06] hover:shadow-[0_15px_50px_rgba(76,175,80,0.12)] md:p-8">

                  {/* Card top */}
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8DDB72]">
                        {e.period}
                      </p>

                      <h3 className="mt-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#8DDB72] md:text-2xl">
                        {e.role}
                      </h3>

                      <p className="mt-1 text-base font-medium text-zinc-400">
                        {e.company}
                      </p>
                    </div>

                    {/* Experience number */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-zinc-500 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-[#8DDB72]/40 group-hover:bg-[#8DDB72]/10 group-hover:text-[#8DDB72]">
                      {String(experience.length - index).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-white/[0.08] transition-colors duration-300 group-hover:bg-[#8DDB72]/20" />

                  {/* Responsibilities */}
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {e.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 text-sm leading-6 text-zinc-400 transition-colors duration-300 hover:text-zinc-200"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8DDB72] transition-all duration-300 group-hover:shadow-[0_0_8px_#8DDB72]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#8DDB72]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Always learning. Always building.
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

      </div>
    </section>
  );
}
