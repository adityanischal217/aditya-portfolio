
import { skillRows } from "@/data/skills";
import TechStackMarquee from "@/components/TechStackMarquee";

const accent = "from-[#8DDB72] to-[#4CAF50]";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24">
      {/* Soft glow behind the phone */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-[#4CAF50]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="text-lg font-semibold text-[#8DDB72]">
          About me
        </p>

        <h2 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-zinc-100 md:text-6xl">
          Focused execution, scalable architecture, polished mobile experiences.
        </h2>

        <div className="mt-16 grid items-center gap-14 md:grid-cols-[minmax(0,380px)_1fr]">
          
          {/* Phone-frame portrait */}
          <div className="relative mx-auto w-full max-w-[320px] md:max-w-none">
            <div className="rounded-[2.75rem] border border-white/15 bg-zinc-900 p-3 shadow-2xl shadow-[#4CAF50]/10">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[2.1rem] bg-zinc-800">
                <img
                  src="/aditya_pic.png"
                  alt="Aditya Nischal"
                  className="h-full w-full object-cover"
                />

                {/* Camera pill */}
                <span className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-black/80" />

                {/* Bottom fade + name */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 pt-16">
                  <p className="text-lg font-semibold text-white">
                    Aditya Nischal
                  </p>
                  <p className="text-sm text-zinc-300">
                    Android Engineer, Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story + Bento */}
          <div>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              I build Android apps that scale to millions of users.
            </h3>

            <div className="mt-5 max-w-prose space-y-4 text-zinc-400">
              <p>
                I'm an Android Developer with 6.5+ years of experience building
                fast, reliable apps with Kotlin, Java, Jetpack and MVVM. I've
                taken products from concept to Google Play release, including
                apps with over 5M downloads.
              </p>

              <p>
                I enjoy the whole journey: clean architecture, REST APIs with
                Retrofit, payment gateways, analytics, even Augmented Reality
                with ARCore, backed by automated testing.
              </p>

              <p>
                Right now I'm a Frontend Engineer (Android) at Join Ventures
                Solutions Pvt Ltd., working closely with designers, backend and
                product teams, and growing with Jetpack Compose.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">

              {/* Experience */}
              <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-[#4CAF50]/20 via-transparent to-transparent p-6">
                <p className="text-sm text-zinc-300">
                  Years building Android
                </p>

                <p
                  className={`bg-gradient-to-b ${accent} bg-clip-text text-6xl font-extrabold text-transparent md:text-7xl`}
                >
                  6.5+
                </p>
              </div>

              {/* Published Apps */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-bold text-zinc-100">
                  4
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  Published apps
                </p>
              </div>

              {/* Education */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xl font-bold text-zinc-100">
                  B.Tech CSE
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  Education
                </p>
              </div>

              {/* Play Store Downloads */}
              <div className="col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-[#4CAF50]/15 via-white/[0.03] to-transparent p-5">
                <p
                  className={`bg-gradient-to-b ${accent} bg-clip-text text-5xl font-extrabold text-transparent`}
                >
                  5M+
                </p>

                <p className="mt-2 text-sm text-zinc-400">
                  Total Play Store downloads
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-24">
          <p className="mb-4 text-lg font-semibold text-[#8DDB72]">
            Tech stack
          </p>

          <TechStackMarquee rows={skillRows} />
        </div>

      </div>
    </section>
  );
}
