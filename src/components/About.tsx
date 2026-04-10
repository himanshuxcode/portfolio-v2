"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMapPin, FiCode, FiCoffee, FiHeart } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";

const stats = [
  { label: "Years Experience", value: "5+", icon: FiCode },
  { label: "Projects Shipped", value: "30+", icon: FiCoffee },
  { label: "Open Source Contributions", value: "120+", icon: FiHeart },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <FiMapPin className="text-indigo-400" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4"
          >
            {stats.map(({ label, value, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass rounded-2xl p-6 flex items-center gap-5 group hover:border-indigo-500/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-cyan-500/30 transition-colors">
                  <Icon className="text-indigo-400" size={24} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{value}</div>
                  <div className="text-sm text-gray-500">{label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
