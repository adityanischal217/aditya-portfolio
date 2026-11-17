
import { skillRows } from "@/data/skills";
import TechStackMarquee from "@/components/TechStackMarquee";

const accent = "from-[#8DDB72] to-[#4CAF50]";

const stats = [
  {
    value: "4",
    label: "Published Apps",
    detail: "Live on Google Play",
    icon: "↗",
  },
  {
    value: "B.Tech",
    label: "Computer Science",
    detail: "Engineering Graduate",
    icon: "⌘",
  },
  {
    value: "5M+",
    label: "App Downloads",
    detail: "Across Play Store",
    icon: "↓",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden px-6 py-24 md:py-32"
    >
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#4CAF50]/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#8DDB72]/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-16">
          <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[#8DDB72]">
            <span className="h-px w-8 bg-[#8DDB72]" />
            About me
          </p>

          <h2 className="mt-5 max-w-5xl text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-6xl">
            Engineering ideas into
            <span className="bg-gradient-to-r from-[#8DDB72] to-[#4CAF50] bg-clip-text text-transparent">
              {" "}digital experiences.
            </span>
          </h2>
        </div>

        {/* Main profile layout */}
        <div className="grid items-center gap-14 md:grid-cols-[minmax(0,350px)_1fr] md:gap-20">

          {/* Profile image - Mobile phone frame */}
          <div className="relative mx-auto w-full max-w-[300px] md:max-w-none">

            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-br from-[#8DDB72]/20 to-transparent opacity-60 blur-2xl transition duration-500 group-hover:opacity-100" />

            <div className="group relative rounded-[2.8rem] border border-white/15 bg-gradient-to-br from-zinc-800 to-zinc-950 p-3 shadow-2xl shadow-black/40 transition-all duration-500 hover:-translate-y-2 hover:border-[#8DDB72]/50 hover:shadow-[0_25px_70px_rgba(76,175,80,0.15)]">

              <div className="relative aspect-[9/16] overflow-hidden rounded-[2.2rem] bg-zinc-800">

                <img
                  src="/aditya_pic.png"
                  alt="Aditya Nischal - Android Engineer"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Camera pill */}
                <span className="absolute left-1/2 top-3 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black/90 shadow-lg" />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Profile details */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#8DDB72]" />
                    <span className="text-xs font-medium uppercase tracking-widest text-[#8DDB72]">
                      Android Engineer
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Aditya Nischal
                  </h3>

                  <p className="mt-1 text-sm text-zinc-300">
                    Mumbai, India
                  </p>
                </div>
              </div>
            </div>

            {/* Floating experience badge */}
            <div className="absolute -right-5 top-24 rounded-2xl border border-[#8DDB72]/20 bg-zinc-950/90 p-4 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#8DDB72]/60 md:-right-10">
              <p className={`bg-gradient-to-r ${accent} bg-clip-text text-2xl font-extrabold text-transparent`}>
                6.5+
              </p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                Years Experience
              </p>
            </div>

          </div>

          {/* Profile content */}
          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <span className="text-[#8DDB72]">✦</span>
              <span className="text-xs font-medium tracking-wide text-zinc-300">
                Building mobile experiences that matter
              </span>
            </div>

            <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              I build Android applications that scale to millions of users.
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-400 md:text-base">
              <p>
                I'm an Android Developer with 6.5+ years of experience
                building fast, reliable applications using Kotlin,
                Java, Jetpack and MVVM. I've taken products from
                concept to Google Play release, including applications
                with over 5M downloads.
              </p>

              <p>
                My expertise spans clean architecture, REST API
                integration, payment gateways, analytics, ARCore
                and automated testing. I enjoy transforming complex
                requirements into polished mobile experiences.
              </p>

              <p>
                Currently, I'm working as a Frontend Engineer
                (Android) at Join Ventures Solutions Pvt Ltd.,
                collaborating with product, design and backend teams
                while exploring modern Android development with
                Jetpack Compose.
              </p>
            </div>

            {/* Stats Bento */}
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">

              {/* Experience card */}
              <div className="group relative col-span-2 overflow-hidden rounded-3xl border border-[#8DDB72]/20 bg-gradient-to-br from-[#4CAF50]/15 to-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8DDB72]/50 hover:shadow-[0_15px_40px_rgba(76,175,80,0.08)] md:col-span-1">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#8DDB72]/10 blur-2xl transition-all duration-500 group-hover:scale-150" />

                <p className="relative text-xs font-medium uppercase tracking-widest text-zinc-400">
                  Experience
                </p>

                <p className={`relative mt-5 bg-gradient-to-r ${accent} bg-clip-text text-5xl font-extrabold text-transparent transition-transform duration-300 group-hover:scale-105 group-hover:origin-left`}>
                  6.5+
                </p>

                <p className="relative mt-2 text-sm text-zinc-400">
                  Years building Android
                </p>
              </div>

              {/* Other stat cards */}
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8DDB72]/40 hover:bg-[#8DDB72]/[0.04] hover:shadow-[0_12px_35px_rgba(76,175,80,0.07)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      {stat.label}
                    </span>

                    <span className="text-lg text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#8DDB72]">
                      {stat.icon}
                    </span>
                  </div>

                  <p className="mt-5 text-2xl font-extrabold text-white transition-colors duration-300 group-hover:text-[#8DDB72]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    {stat.detail}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-28">

          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8DDB72]">
                My toolkit
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Technologies I work with.
              </h3>
            </div>

            <p className="text-sm text-zinc-500">
              Always learning. Always evolving.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] py-6 transition-colors duration-300 hover:border-[#8DDB72]/25">
            <TechStackMarquee rows={skillRows} />
          </div>

        </div>
      </div>
    </section>
  );
}
