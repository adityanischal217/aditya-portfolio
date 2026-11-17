import { skills } from "@/data/skills";

const stats = [
  { value: "6.5+", label: "Years of Experience" },
  { value: "4", label: "Published Apps" },
  { value: "B.Tech CSE", label: "Education" },
  { value: "Android + Kotlin", label: "Platforms" },
];

export default function About() {
  const loop = [...skills, ...skills];
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500">About Me</p>
        <h2 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-zinc-100 md:text-6xl">
          Focused execution,
          <br />
          scalable architecture,
          <br />
          and polished mobile experiences.
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="aspect-square rounded-2xl bg-zinc-800">
            <img
              src="/aditya_pic.png"
              alt="Aditya Nischal"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          <div className="space-y-4 text-zinc-400">
            <h3 className="bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
              I build Android apps that scale to millions of users.
            </h3>
            <p>
              I'm Aditya Nischal, an Android Developer with 6.5+ years of experience building
              fast, reliable and scalable apps using Kotlin, Java, Jetpack and MVVM.
              I've taken products from concept to Google Play Store release, including
              apps with over 5M+ downloads.
            </p>
            <p>
              I enjoy the full journey of an app: designing clean architecture,
              integrating REST APIs with Retrofit, adding payment gateways like
              Razorpay, PayU and Paytm, and tracking user behaviour with Firebase,
              Mixpanel, AppsFlyer and Netcore. I've also explored Augmented Reality
              with ARCore and care deeply about quality through automated testing.
            </p>
            <p>
              Currently working as a Frontend Engineer (Android) at Join Ventures
              Solutions Pvt Ltd. in Mumbai, I collaborate closely with designers, backend
              engineers and product teams. I'm always looking for opportunities to
              build impactful products and keep growing with modern Android,
              including Jetpack Compose.
            </p>

            {/* Stats card */}
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 rounded-3xl border border-white/10 p-6 md:p-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-zinc-200 md:text-base">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden">
          <p className="mb-4 text-sm text-zinc-500">Tech Stack</p>
          <div className="flex w-max animate-marquee gap-4">
            {loop.map((s, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-white/15 px-5 py-2"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}