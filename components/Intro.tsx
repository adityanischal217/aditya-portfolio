"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";

export default function Intro() {
  const [unlocked, setUnlocked] = useState(false);
  const [time, setTime] = useState("");
  const x = useMotionValue(0);
  const textOpacity = useTransform(x, [0, 120], [1, 0]);

  useEffect(() => {
    setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  }, []);

  // stop the page behind from scrolling while locked
  useEffect(() => {
    document.body.style.overflow = unlocked ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [unlocked]);

  return (
    <AnimatePresence>
      {!unlocked && (
        <motion.div
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 px-6 text-center"
        >
          <p className="text-6xl font-light">{time}</p>

          <div className="mt-8 w-full max-w-sm rounded-2xl bg-white/10 p-4 text-left">
            <p className="text-xs text-zinc-400">Messages · now</p>
            <p className="font-semibold">Your Name</p>
            <p className="text-sm text-zinc-300">
              Hey 👋 slide to unlock and see what I&apos;ve built.
            </p>
          </div>

          <div className="relative mt-16 h-14 w-64 rounded-full bg-white/10">
            <motion.span
              style={{ opacity: textOpacity }}
              className="pointer-events-none absolute inset-0 flex items-center justify-center pl-8 text-sm text-zinc-300"
            >
              slide to unlock
            </motion.span>

            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 200 }}
              dragElastic={0}
              dragMomentum={false}
              dragSnapToOrigin
              style={{ x }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 120) setUnlocked(true);
              }}
              className="absolute left-1 top-1 flex h-12 w-12 cursor-grab touch-none select-none items-center justify-center rounded-full bg-white text-xl text-black active:cursor-grabbing"
            >
              →
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}