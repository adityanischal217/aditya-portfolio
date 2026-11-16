import { skills } from "@/data/skills";

export default function About() {
  const loop = [...skills, ...skills];
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500">About Me</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-5xl">
          Calm execution and thoughtful products.
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="aspect-square rounded-2xl bg-zinc-800">
            {/* Put your photo in /public/profile.jpg, then swap this div for: */}
            {/* <img src="/profile.jpg" alt="Your Name" className="h-full w-full rounded-2xl object-cover" /> */}
          </div>
          <div className="space-y-4 text-zinc-400">
            <h3 className="text-2xl font-semibold text-white">I enjoy turning complexity into clarity.</h3>
            <p>Write 2-3 short paragraphs about who you are and what you care about.</p>
            <p>Mention your strengths, how you work, and what you are looking for.</p>
          </div>
        </div>

        <div className="mt-20 overflow-hidden">
          <p className="mb-4 text-sm text-zinc-500">Tech Stack</p>
          <div className="flex w-max animate-marquee gap-4">
            {loop.map((s, i) => (
              <span key={i} className="whitespace-nowrap rounded-full border border-white/15 px-5 py-2">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}