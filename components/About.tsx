
import { skillRows } from "@/data/skills";
import TechStackMarquee from "@/components/TechStackMarquee";

const accent = "from-[#8DDB72] to-[#4CAF50]";

const stats = [
  {
    value: "B.Tech",
    label: "Computer Science",
    detail: "Engineering Graduate",
    icon: "⌘",
  },
  {
    value: "4",
    label: "Published Apps",
    detail: "Live on Google Play",
    icon: "↗",
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
      className="relative isolate overflow-hidden bg-[var(--background)] px-6 py-24 transition-colors duration-300 md:py-32"
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
          <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            <span className="h-px w-8 bg-[var(--accent)]" />
            About me
          </p>

          <h2 className="mt-5 max-w-5xl text-4xl font-extrabold leading-[1.15] tracking-tight text-[var(--text-primary)] md:text-6xl">
            Engineering ideas into
            <span className={`bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
              {" "}digital experiences.
            </span>
          </h2>
        </div>

        {/* Main profile layout */}
        <div className="grid items-center gap-14 md:grid-cols-[minmax(0,350px)_1fr] md:gap-20">

          {/* Profile image - Phone frame */}
          <div className="relative mx-auto w-full max-w-[300px] md:max-w-none">

            {/* Outer glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-[3.5rem] bg-gradient-to-br from-[#8DDB72]/20 to-transparent opacity-60 blur-2xl" />

            <div className="group relative rounded-[2.8rem] border border-[var(--card-border)] bg-[var(--card)] p-3 shadow-2xl shadow-[var(--shadow)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent)]/50 hover:shadow-[0_25px_70px_var(--glow)]">

              <div className="relative aspect-[9/16] overflow-hidden rounded-[2.2rem] bg-[var(--surface)]">

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
                    Join Ventures Solution Pvt Ltd, Mumbai, India
                  </p>
                </div>
              </div>
            </div>

            {/* Floating experience badge */}
            <div className="absolute -right-5 top-24 rounded-2xl border border-[var(--accent)]/20 bg-[var(--card)]/95 p-4 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)]/60 md:-right-10">
              <p className={`bg-gradient-to-r ${accent} bg-clip-text text-2xl font-extrabold text-transparent`}>
                6.5+
              </p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
                Years Experience
              </p>
            </div>

          </div>

          {/* Profile content */}
          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--surface)] px-4 py-2">
              <span className="text-[var(--accent)]">✦</span>
              <span className="text-xs font-medium tracking-wide text-[var(--text-secondary)]">
                Building mobile experiences that matter
              </span>
            </div>

            <h3 className="text-3xl font-bold leading-tight text-[var(--text-primary)] md:text-4xl">
              I build Android applications that scale to millions of users.
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
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
                Currently, I'm working as a Frontend Engineer 2
                (Android) at Join Ventures Solutions Pvt Ltd.,
                collaborating with product, design and backend teams
                while exploring modern Android development with
                Jetpack Compose.
              </p>
            </div>

            {/* Three Stats Cards */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-5 shadow-[0_8px_25px_var(--shadow)] transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)]/40 hover:bg-[var(--card-hover)] hover:shadow-[0_12px_35px_var(--glow)]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                      {stat.label}
                    </span>

                    <span className="text-lg text-[var(--text-muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent)]">
                      {stat.icon}
                    </span>
                  </div>

                  <p className="mt-5 text-2xl font-extrabold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-[var(--text-muted)]">
                    {stat.detail}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Tech Stack - No background card */}
        <div className="mt-28">

          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                Tech Stack
              </p>
            </div>
          </div>

          <TechStackMarquee rows={skillRows} />

        </div>
      </div>
    </section>
  );
}
