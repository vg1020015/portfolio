import React from "react";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub, FaStar } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  const {
    title,
    description,
    stack,
    demo,
    github,
    image,
    featured,
  } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -10,
        scale: 1.01,
      }}
      className="
        group relative overflow-hidden rounded-3xl
        backdrop-blur-xl bg-white/5 dark:bg-black/20
        border border-white/10
        shadow-[0_8px_40px_rgba(0,0,0,0.15)]
        transition-all
      "
    >
      {/* Glow Background */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 blur-3xl" />

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-medium z-10">
          <FaStar />
          Featured
        </div>
      )}

      {/* IMAGE SECTION */}
      {image && (
        <div className="relative overflow-hidden h-48 md:h-56">
          <img
            src={image}
            alt={title}
            className="
              w-full h-full object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-white/10 rotate-12 group-hover:translate-x-[250%] transition-transform duration-1000" />
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-4">
          {(stack || []).map((tech) => (
            <span
              key={tech}
              className="
                px-3 py-1 text-xs font-medium
                rounded-full
                bg-orange-500/10
                text-orange-500
                border border-orange-500/20
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-4 mt-6">
          {/* Live Demo */}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-5 py-2.5 rounded-xl
                bg-gradient-to-r from-orange-500 to-red-500
                text-white font-medium
                hover:scale-105 transition
              "
            >
              Live Demo <HiExternalLink />
            </a>
          )}

          {/* GitHub */}
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-5 py-2.5 rounded-xl
                border border-white/10
                bg-white/5 backdrop-blur-lg
                text-gray-700 dark:text-gray-300
                hover:bg-white/10 transition
              "
            >
              <FaGithub /> Code
            </a>
          ) : (
            <span className="text-xs text-gray-400 flex items-center gap-2">
              <FaGithub /> Private Project
            </span>
          )}
        </div>
      </div>

      {/* Bottom Glow Bar */}
      <div className="h-1 w-full bg-white/10 overflow-hidden">
        <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 transition-all duration-500" />
      </div>
    </motion.div>
  );
}