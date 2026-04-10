"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Animated background orbs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="glow-orb w-96 h-96 bg-indigo-600 -top-20 -left-20"
      />
      <motion.div
        animate={{
          x: [0, -20, 30, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="glow-orb w-80 h-80 bg-cyan-500 top-40 -right-10"
      />
      <motion.div
        animate={{
          x: [0, 15, -15, 0],
          y: [0, -15, 15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="glow-orb w-64 h-64 bg-purple-600 bottom-20 left-1/3"
      />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full border border-indigo-500/30 text-indigo-400 bg-indigo-500/10">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl sm:text-7xl font-bold leading-tight mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl text-gray-400 mb-4"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-5 mb-12"
        >
          {[
            { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
            { icon: FiLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: FiTwitter, href: personalInfo.twitter, label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/50 transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium hover:shadow-xl hover:shadow-indigo-500/25 transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/20 text-gray-300 hover:bg-white/5 hover:border-white/40 transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown className="text-gray-500" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
