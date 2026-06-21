import React from 'react'
import { motion } from 'framer-motion'

/**
 * Wraps a section with consistent spacing, an id for nav-scrolling,
 * an optional eyebrow + heading, and a fade/slide reveal on scroll.
 */
export default function SectionWrapper({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`py-20 md:py-28 px-5 sm:px-6 md:px-12 lg:px-24 overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto min-w-0">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 md:mb-16"
          >
            {eyebrow && (
              <p className="liquid-tag text-sm text-terracotta mb-3">
                <span className="opacity-60">{'{{'}</span> {eyebrow} <span className="opacity-60">{'}}'}</span>
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight break-words">{title}</h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
