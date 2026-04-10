"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm text-gray-500"
        >
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with Next.js &
          Framer Motion.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-sm text-gray-600"
        >
          Designed & developed with{" "}
          <span className="text-rose-500">&hearts;</span>
        </motion.p>
      </div>
    </footer>
  );
}
