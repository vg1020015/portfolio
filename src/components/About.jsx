import React from "react";
import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";
import { FaCode, FaRocket, FaStore } from "react-icons/fa";

import SectionWrapper from "./SectionWrapper.jsx";
import { about, profile } from "../data/portfolioData.js";
import aboutImg from "../assets/profile.jpeg";

const HIGHLIGHTS = [
  "3+ years building on the Shopify platform",
  "Custom Liquid themes matched to brand guidelines",
  "Shopify Plus apps with Remix, Extensions & Functions",
  "Performance tuning, SEO & Core Web Vitals optimization",
];

const STATS = [
  {
    icon: <FaStore />,
    value: "50+",
    label: "Storefronts Built",
  },
  {
    icon: <FaRocket />,
    value: "99%",
    label: "Client Satisfaction",
  },
  {
    icon: <FaCode />,
    value: "3+",
    label: "Years Experience",
  },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="about_me"
      title="Crafting Experiences That Convert Visitors Into Customers"
    >
      <div className="relative">

        {/* Background Glow (unchanged) */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-yellow-500/10 blur-[120px]" />

        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-center min-w-0">

          {/* LEFT IMAGE (FIXED MOBILE STABILITY) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-full overflow-hidden will-change-transform"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 blur-3xl opacity-30" />

            {/* Rotating Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-10px] rounded-[32px] border border-dashed border-orange-400/40"
            />

            {/* Glass Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                backdrop-blur-xl
                bg-white/5
                border border-white/10
                shadow-[0_8px_40px_rgba(0,0,0,0.25)]
              "
              style={{ transform: "translateZ(0)" }}
            >
              <img
                src={aboutImg}
                alt={profile.name}
                className="
                  w-[min(340px,100%)]
                  max-w-full
                  h-[420px]
                  object-cover
                  block
                  select-none
                  pointer-events-none
                "
              />

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 px-4 py-2 rounded-xl bg-black/40 backdrop-blur-lg border border-white/10 text-white text-sm">
                🚀 Shopify Developer
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-5">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Building Modern Shopify Experiences With
              <span className="block bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent">
                Performance & Conversion In Mind
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {about.summary}
            </p>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {about.goals}
            </p>

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {HIGHLIGHTS.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
                >
                  <HiBadgeCheck size={22} className="text-green-500 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-5 rounded-2xl text-center bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg"
                >
                  <div className="text-orange-500 text-2xl flex justify-center mb-2">
                    {stat.icon}
                  </div>

                  <h3 className="text-2xl font-bold">
                    {stat.value}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
