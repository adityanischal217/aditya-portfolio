export default function Contact() {
  const input =
    "w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 outline-none transition focus:border-[#6CC656]";
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <p className="bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] bg-clip-text text-base font-extrabold uppercase tracking-widest text-transparent md:text-lg">
          Get in Touch
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">Let&apos;s build together.</h2>

        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="mt-10 space-y-4">
          <input name="name" required placeholder="Your Name" className={input} />
          <input name="email" type="email" required placeholder="Email Address" className={input} />
          <textarea name="message" required rows={5} placeholder="Your Message" className={input} />
          <button
            type="submit"
            className="rounded-full bg-gradient-to-b from-[#8DDB72] to-[#4CAF50] px-6 py-3 font-medium text-black transition hover:shadow-[0_0_25px_rgba(108,198,86,0.55)]"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 flex gap-6 text-zinc-400">
         {/* <a href="https://github.com/yourname" target="_blank" className="transition hover:text-[#8DDB72]">GitHub ↗</a>*/}
          <a href="https://www.linkedin.com/in/adityanischal/" target="_blank" className="transition hover:text-[#8DDB72]">LinkedIn ↗</a>
          <a href="mailto:adityanischal217@email.com" className="transition hover:text-[#8DDB72]">Email ↗</a>
        </div>
      </div>
    </section>
  );
}