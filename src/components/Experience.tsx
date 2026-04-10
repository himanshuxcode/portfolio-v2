"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase } from "react-icons/fi";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-cyan-500 to-purple-500 opacity-30" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-5 top-2">
                  <motion.div
                    animate={isInView ? { scale: [0, 1.2, 1] } : {}}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center`}
                  >
                    <FiBriefcase size={12} className="text-white" />
                  </motion.div>
                </div>

                {/* Content card */}
                <div className="glass rounded-2xl p-6 hover:border-indigo-500/30 transition-colors group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-gray-500 font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className={`text-sm font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-4`}>
                    {exp.company} &middot; {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((desc) => (
                      <li
                        key={desc}
                        className="text-gray-400 text-sm flex items-start gap-3"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
