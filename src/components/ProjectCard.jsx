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
        y: -8,
        scale: 1.01,
      }}
      className="
        group relative overflow-hidden rounded-3xl
        backdrop-blur-xl bg-white/5 dark:bg-black/20
        border border-white/10
        shadow-[0_8px_40px_rgba(0,0,0,0.15)]
        transition-all
        w-full
      "
    >
      {/* Glow Background - Mobile Safe */}
      <div
        className="
          absolute top-0 right-0
          translate-x-1/4 -translate-y-1/4
          w-32 h-32 md:w-40 md:h-40
          bg-orange-500/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* Featured Badge */}
      {featured && (
        <div
          className="
            absolute top-4 left-4 z-10
            flex items-center gap-2
            px-3 py-1 rounded-full
            bg-orange-500 text-white
            text-xs font-medium
            max-w-[calc(100%-2rem)]
          "
        >
          <FaStar />
          Featured
        </div>
      )}

      {/* IMAGE */}
      {image && (
        <div className="relative overflow-hidden h-44 sm:h-48 md:h-56">
          <img
            src={image}
            alt={title}
            className="
              w-full h-full object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Shine Effect */}
          <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div
              className="
                absolute -left-1/2 top-0
                w-1/2 h-full
                bg-white/10 rotate-12
                group-hover:translate-x-[220%]
                transition-transform duration-1000
              "
            />
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className="p-5 md:p-6">
        {/* Title */}
        <h3
          className="
            text-lg sm:text-xl md:text-2xl
            font-bold
            text-gray-900 dark:text-white
            break-words
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-2
            text-sm md:text-base
            text-gray-600 dark:text-gray-300
            leading-relaxed
            break-words
          "
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {(stack || []).map((tech) => (
            <span
              key={tech}
              className="
                px-3 py-1
                text-xs font-medium
                rounded-full
                bg-orange-500/10
                text-orange-500
                border border-orange-500/20
                break-all
                max-w-full
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3 mt-6">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                w-full sm:w-auto
                px-5 py-2.5
                rounded-xl
                bg-gradient-to-r
                from-orange-500 to-red-500
                text-white font-medium
                hover:scale-105
                transition
              "
            >
              Live Demo <HiExternalLink />
            </a>
          )}

          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                w-full sm:w-auto
                px-5 py-2.5
                rounded-xl
                border border-white/10
                bg-white/5 backdrop-blur-lg
                text-gray-700 dark:text-gray-300
                hover:bg-white/10
                transition
              "
            >
              <FaGithub />
              Code
            </a>
          ) : (
            <span className="text-xs text-gray-400 flex items-center gap-2">
              <FaGithub />
              Private Project
            </span>
          )}
        </div>
      </div>

      {/* Bottom Glow Bar */}
      <div className="h-1 w-full bg-white/10 overflow-hidden">
        <div
          className="
            h-full w-0
            group-hover:w-full
            bg-gradient-to-r
            from-orange-500
            via-yellow-400
            to-red-500
            transition-all duration-500
          "
        />
      </div>
    </motion.div>
  );
}