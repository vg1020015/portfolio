import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/portfolioData.js";

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="portfolio"
      title="Featured Work & Client Storefronts"
    >
      <div className="relative">

        {/* Background Glow */}
        <div className="absolute -top-20 left-0 w-72 h-72 bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/10 blur-[120px]" />

        {/* Intro Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
             mb-14
            p-6 md:p-8
            rounded-3xl
            backdrop-blur-xl
            bg-white/5
            border border-white/10
            shadow-[0_8px_40px_rgba(0,0,0,0.15)]
          "
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Real-world Shopify experiences that drive{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              conversions
            </span>
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I design and build high-performance storefronts focused on speed,
            UX, and revenue optimization. Each project is deployed in production
            and actively serving customers with measurable impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
              }}
              className="h-full"
            >
              <ProjectCard project={project} index={idx} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-16
            text-center
            p-10
            rounded-3xl
            backdrop-blur-xl
            bg-white/5
            border border-white/10
            shadow-[0_8px_40px_rgba(0,0,0,0.15)]
          "
        >
          <h3 className="text-3xl font-bold mb-3">
            Want a high-converting storefront?
          </h3>

          <p className="text-gray-500 mb-6">
            Let’s build something fast, scalable and conversion-focused.
          </p>

          <a
            href="#contact"
            className="
              inline-flex items-center
              px-8 py-4
              rounded-xl
              bg-gradient-to-r from-orange-500 to-red-500
              text-white font-semibold
              hover:scale-105 transition
            "
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}