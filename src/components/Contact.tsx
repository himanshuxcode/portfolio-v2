"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      {/* Background glow */}
      <div className="glow-orb w-96 h-96 bg-indigo-600 bottom-0 left-1/4 opacity-20" />
      <div className="glow-orb w-80 h-80 bg-cyan-500 top-20 right-1/4 opacity-15" />

      <div ref={ref} className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-2">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 max-w-lg mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
            Drop me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-indigo-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <FiMail className="text-indigo-400" size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="text-white">{personalInfo.email}</div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-indigo-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <FiMapPin className="text-cyan-400" size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="text-white">{personalInfo.location}</div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {[
                { icon: FiGithub, href: personalInfo.github },
                { icon: FiLinkedin, href: personalInfo.linkedin },
                { icon: FiTwitter, href: personalInfo.twitter },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/30 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 glass rounded-2xl p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm text-gray-500 block mb-2">Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500 block mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-500 block mb-2">Subject</label>
              <input
                type="text"
                required
                placeholder="Project Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
            </div>
            <div className="mb-6">
              <label className="text-sm text-gray-500 block mb-2">Message</label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25 transition-shadow"
            >
              {submitted ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message <FiSend size={16} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
