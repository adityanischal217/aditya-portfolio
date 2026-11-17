
"use client";

import { useEffect, useState } from "react";
import type {
  FormEvent,
  ChangeEvent,
  PageTransitionEvent,
} from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const input =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-all duration-300 hover:border-[#8DDB72]/30 hover:bg-white/[0.06] focus:border-[#8DDB72] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#8DDB72]/10";

  // Scroll to Home when returning to the portfolio
  useEffect(() => {
    const scrollToHome = () => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    };

    const handlePopState = () => {
      scrollToHome();
    };

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        scrollToHome();
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  // Handle form input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit form through Formspree without redirecting
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("");

    try {
      const formElement = e.currentTarget;

      const response = await fetch("https://formspree.io/f/xppddrpg", {
        method: "POST",
        body: new FormData(formElement),
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok && result.ok !== false) {
        // Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        formElement.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#4CAF50]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#8DDB72]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16">
          <p className="bg-gradient-to-r from-[#8DDB72] to-[#4CAF50] bg-clip-text text-sm font-bold uppercase tracking-[0.3em] text-transparent">
            Get in touch
          </p>

          <h2 className="mt-5 max-w-3xl text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            Have a project
            <br />
            in <span className="text-[#8DDB72]">mind?</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
            Whether it&apos;s an Android application, a new opportunity,
            or an interesting collaboration, I&apos;d love to hear from you.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left Contact Information */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition-all duration-500 hover:border-[#8DDB72]/30 hover:bg-white/[0.04] md:p-10">

            <div>
              {/* Availability */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#8DDB72]/20 bg-[#8DDB72]/[0.08] px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8DDB72] opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8DDB72]" />
                </span>

                <span className="text-xs font-medium text-[#8DDB72]">
                  Open to opportunities
                </span>
              </div>

              <h3 className="mt-10 text-3xl font-bold text-white">
                Let&apos;s connect and create something meaningful.
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Always interested in discussing mobile engineering,
                product ideas, and opportunities to build great
                digital experiences.
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-14 space-y-5">

              {/* Email */}
              <a
                href="mailto:adityanischal217@email.com"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#8DDB72]/40 hover:bg-[#8DDB72]/[0.05]"
              >
                <div>
                  <p className="text-xs text-zinc-500">Email me</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200 transition group-hover:text-[#8DDB72]">
                    adityanischal217@email.com
                  </p>
                </div>

                <span className="text-xl text-zinc-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8DDB72]">
                  ↗
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/adityanischal/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#8DDB72]/40 hover:bg-[#8DDB72]/[0.05]"
              >
                <div>
                  <p className="text-xs text-zinc-500">Connect on</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200 transition group-hover:text-[#8DDB72]">
                    LinkedIn
                  </p>
                </div>

                <span className="text-xl text-zinc-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8DDB72]">
                  ↗
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917876721147"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#8DDB72]/40 hover:bg-[#8DDB72]/[0.05]"
              >
                <div>
                  <p className="text-xs text-zinc-500">WhatsApp Number</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200 transition group-hover:text-[#8DDB72]">
                    7876721147
                  </p>
                </div>

                <span className="text-xl text-zinc-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8DDB72]">
                  ↗
                </span>
              </a>

            </div>
          </div>

          {/* Right Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:border-[#8DDB72]/25 md:p-10">

            <div className="mb-8">
              <p className="text-sm font-semibold text-[#8DDB72]">
                Send a message
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Let&apos;s talk about your idea.
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Fill out the form and I&apos;ll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Your name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={input}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={input}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Your message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${input} resize-none`}
                />
              </div>

              {/* Success Message */}
              {status === "success" && (
                <div
                  role="status"
                  className="rounded-xl border border-[#8DDB72]/30 bg-[#8DDB72]/10 p-4 text-sm text-[#8DDB72]"
                >
                  <span className="mr-2">✓</span>
                  Message sent successfully! Thank you for reaching out.
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400"
                >
                  Something went wrong. Please try again or contact me
                  directly by email.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#8DDB72] to-[#4CAF50] px-6 py-4 font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(108,198,86,0.3)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>

                <span className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-2">
                  {isSubmitting ? "..." : "→"}
                </span>
              </button>

              <p className="text-center text-xs text-zinc-600">
                Your message will be sent securely through Formspree.
              </p>

            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Aditya Nischal. Built with passion.
          </p>

          <p className="text-sm text-zinc-500">
            Designed &amp; developed with
            <span className="ml-1 text-[#8DDB72]">♥</span>
          </p>
        </div>

      </div>
    </section>
  );
}
