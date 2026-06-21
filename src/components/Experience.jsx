import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper.jsx";
import { experience } from "../data/portfolioData.js";

// 👉 REAL IMAGE IMPORTS
import appreciation from "../assets/Appreciation.jpeg";
import year from "../assets/Year.jpeg";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow="career_story_mode"
      title="My Journey in Motion"
    >
      <div className="relative">

        {/* ambient glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/3 w-80 h-80 bg-orange-500/10 blur-[150px]" />
          <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-yellow-500/10 blur-[150px]" />
        </div>

        {/* EXPERIENCE TIMELINE */}
        <div className="space-y-10">

          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`
                relative p-8 rounded-3xl border transition-all duration-500 backdrop-blur-xl
                ${
                  idx === 0
                    ? "bg-white/10 border-orange-500/30 scale-[1.02] shadow-[0_0_60px_rgba(249,115,22,0.2)]"
                    : "bg-white/5 border-white/10 opacity-90"
                }
              `}
            >

              {/* glow dot */}
              <div className="absolute -left-3 top-8 w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.8)]" />

              {/* top row */}
              <div className="flex items-center justify-between">
                <p className="text-xs text-orange-500 font-medium">
                  {job.duration}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <FaAward className="text-orange-500" />
                  Experience
                </div>
              </div>

              {/* role */}
              <h3 className="text-2xl font-bold mt-2">
                {job.role}
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                {job.company} • {job.location}
              </p>

              {/* points */}
              <ul className="space-y-2">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600 dark:text-gray-300"
                  >
                    • {point}
                  </li>
                ))}
              </ul>

              {/* badges */}
              <div className="flex gap-2 mt-5 flex-wrap">
                <span className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-500">
                  Shopify
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                  Frontend
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                  Performance
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CERTIFICATION SECTION */}
        <div className="mt-20">

          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
              <FaAward className="text-orange-500" />
              Achievements
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Recognition from ITGeeks Technologies Pvt. Ltd.
            </p>
          </motion.div>

          {/* CERTIFICATES GRID */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* CERT 1 */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
            >
              <img
                src={appreciation}
                alt="Certificate of Appreciation"
                className="w-full h-64 object-cover"
              />

              <div className="p-4">
                <h4 className="font-semibold">
                  Certificate of Appreciation
                </h4>
                <p className="text-xs text-gray-500">
                  ITGeeks Technologies Pvt Ltd
                </p>
              </div>
            </motion.div>

            {/* CERT 2 */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
            >
              <img
                src={year}
                alt="Years of Service Award"
                className="w-full h-64 object-cover"
              />

              <div className="p-4">
                <h4 className="font-semibold">
                  Years of Service Award
                </h4>
                <p className="text-xs text-gray-500">
                  ITGeeks Technologies Pvt Ltd
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}