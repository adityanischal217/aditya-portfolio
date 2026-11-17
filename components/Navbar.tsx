
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["home", "about", "projects", "experience", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      links.forEach((link) => {
        const section = document.getElementById(link);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = link;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-0"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl border border-t-0 border-white/10 bg-zinc-950/90 px-5 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl md:px-6">

        {/* Logo */}
        <a href="#home" className="group flex shrink-0 items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#8DDB72] to-[#4CAF50] text-lg font-black text-black shadow-[0_0_20px_rgba(141,219,114,0.15)] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(141,219,114,0.4)]">
            AN
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-wide text-white">
              Aditya<span className="text-[#8DDB72]">.</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              Android Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link;

            return (
              <li key={link}>
                <a
                  href={`#${link}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative block overflow-hidden rounded-full px-4 py-2 text-sm font-medium capitalize transition-all duration-300 ${
                    isActive
                      ? "bg-[#8DDB72]/10 text-[#8DDB72]"
                      : "text-zinc-400 hover:bg-white/[0.06] hover:text-[#8DDB72]"
                  }`}
                >
                  {link}

                  <span
                    className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8DDB72] to-[#4CAF50] transition-all duration-300 ${
                      isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hire Me */}
        <a
          href="#contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#8DDB72] to-[#4CAF50] px-5 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(141,219,114,0.4)]"
        >
          Hire Me
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </nav>
    </motion.header>
  );
}
