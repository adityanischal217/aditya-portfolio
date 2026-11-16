export default function Contact() {
  const input = "w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 outline-none focus:border-white/50";
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500">Get in Touch</p>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">Let&apos;s build together.</h2>

        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="mt-10 space-y-4">
          <input name="name" required placeholder="Your Name" className={input} />
          <input name="email" type="email" required placeholder="Email Address" className={input} />
          <textarea name="message" required rows={5} placeholder="Your Message" className={input} />
          <button className="rounded-full bg-white px-8 py-3 font-medium text-black">Send Message</button>
        </form>

        <div className="mt-10 flex gap-6 text-zinc-400">
          <a href="https://github.com/yourname" target="_blank">GitHub ↗</a>
          <a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn ↗</a>
          <a href="mailto:you@email.com">Email ↗</a>
        </div>
      </div>
    </section>
  );
}