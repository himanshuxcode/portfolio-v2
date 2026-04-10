"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMonitor, FiServer, FiDatabase, FiCloud } from "react-icons/fi";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  frontend: FiMonitor,
  backend: FiServer,
  database: FiDatabase,
  cloud: FiCloud,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-2">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || FiMonitor;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass rounded-2xl p-8 group hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-20 flex items-center justify-center`}
                    style={{ background: `linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.15))` }}
                  >
                    <Icon size={22} className="text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 + j * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-4 py-2 text-sm rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-10 text-white/80 border border-white/5 cursor-default hover:border-white/20 transition-colors`}
                      style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
