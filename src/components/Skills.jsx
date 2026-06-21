
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaShopify,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import SectionWrapper from "./SectionWrapper.jsx";
import useOnScreen from "../hooks/useOnScreen.js";
import { skills } from "../data/portfolioData.js";

function SkillBar({ name, level, isVisible, delay }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>

        <span
          className="
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            bg-orange-500/10
            text-orange-500
          "
        >
          {level}%
        </span>
      </div>

      <div
        className="
          h-3
          rounded-full
          overflow-hidden
          bg-white/5
          border border-white/10
        "
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: isVisible ? `${level}%` : 0,
          }}
          transition={{
            duration: 1.2,
            delay,
            ease: "easeOut",
          }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-orange-500
            via-yellow-400
            to-red-500
          "
        />
      </div>
    </div>
  );
}

const categoryIcons = {
  Frontend: <FaReact />,
  Backend: <FaNodeJs />,
  Shopify: <FaShopify />,
  Database: <FaDatabase />,
};

export default function Skills() {
  const [ref, isVisible] = useOnScreen({
    threshold: 0.2,
  });

  return (
    <SectionWrapper
      id="skills"
      eyebrow="tech_stack"
      title="Technologies I Work With"
    >
      <div className="relative" ref={ref}>
        {/* Background Glow */}
        <div className="absolute left-0 top-0 w-72 h-72 bg-orange-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-yellow-500/10 blur-[120px]" />

        {/* Top Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {[
            {
              value: "20+",
              label: "Technologies",
            },
            {
              value: "3+",
              label: "Years Experience",
            },
            {
              value: "50+",
              label: "Projects",
            },
            {
              value: "100%",
              label: "Dedication",
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -8,
              }}
              className="
                p-6
                rounded-2xl
                backdrop-blur-xl
                bg-white/5
                border border-white/10
                text-center
              "
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-500">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.entries(skills).map(
            ([category, items], catIdx) => (
              <motion.div
                key={category}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: catIdx * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  backdrop-blur-xl
                  bg-white/5
                  border border-white/10
                  p-7
                  shadow-[0_8px_40px_rgba(0,0,0,0.15)]
                "
              >
                {/* Card Glow */}
                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-32
                    h-32
                    bg-orange-500/10
                    blur-3xl
                  "
                />

                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-gradient-to-r
                      from-orange-500
                      to-red-500
                      text-white
                      flex
                      items-center
                      justify-center
                      text-xl
                    "
                  >
                    {categoryIcons[category] || (
                      <FaCode />
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {category}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Expertise Area
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-5">
                  {items.map((skill, idx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      isVisible={isVisible}
                      delay={0.15 + idx * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

