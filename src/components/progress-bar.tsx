"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function ProgressBar({
  target,
  color1,
  color2,
  retrigger,
}: {
  target: number;
  color1?: string;
  color2?: string;
  retrigger?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`relative w-full h-4 rounded-full overflow-hidden ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-sm shadow-inner mb-2 ${
        color1 ?? "bg-neutral-200/60 dark:bg-white/10"
      }`}
    >
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: `${target}%` }}
        viewport={{ once: !retrigger, amount: 0.25 }}
        transition={reduce ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`${
          color2 ?? "bg-gradient-to-r from-sky-500 to-indigo-600"
        } h-full rounded-full ${
          reduce ? "" : "bg-[length:200%_100%] animate-[gradient-x_6s_linear_infinite]"
        }`}
      />
    </div>
  );
}
