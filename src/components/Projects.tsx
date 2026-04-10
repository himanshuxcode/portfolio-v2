"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group glass rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project visual */}
                <div
                  className={`relative h-64 md:h-auto bg-gradient-to-br ${project.color} p-8 flex items-center justify-center`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="w-full max-w-xs aspect-video rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center"
                  >
                    <span className="text-white/80 text-lg font-mono">
                      {project.title}
                    </span>
                  </motion.div>
                  {/* Floating dots */}
                  <div className="absolute top-6 right-6 flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                </div>

                {/* Project info */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <FiGithub size={18} />
                      Code
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <FiExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
