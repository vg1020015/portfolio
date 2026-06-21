import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import useTypewriter from '../hooks/useTypewriter.js'
import { profile } from '../data/portfolioData.js'
import profileImg from '../assets/profile.jpeg'

export default function Hero() {
const typed = useTypewriter(profile.roles, {
typingSpeed: 70,
deletingSpeed: 35,
pauseTime: 1500
})

const scrollToProjects = () =>
document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })

return ( <section
   id="hero"
   className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-24 overflow-hidden"
 >
{/* Background */} <div className="absolute inset-0 -z-10 bg-grid-light dark:bg-grid-dark opacity-50" /> <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-terracotta/10 blur-3xl animate-pulse -z-10" /> <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl animate-pulse -z-10" />

  <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT */}
    <div>
      <p className="text-terracotta text-sm mb-4 tracking-wide">
        🚀 Available for Work
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Hi, I'm <span className="text-terracotta">{profile.name}</span>
      </h1>

      <div className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
        {typed}
        <span className="inline-block w-[2px] h-6 bg-terracotta ml-1 animate-blink" />
      </div>

      <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-lg">
        {profile.intro}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={scrollToProjects}
          className="px-6 py-3 bg-terracotta text-white rounded-lg shadow-md hover:scale-105 transition"
        >
          View Projects
        </button>

        <a
          href={profile.resumeFile}
          download
          className="px-6 py-3 border rounded-lg hover:border-terracotta hover:text-terracotta transition"
        >
          Download Resume
        </a>
      </div>

      {/* LinkedIn Only */}
      <div className="flex gap-5 mt-6 text-xl">
        <a href={profile.linkedin} target="_blank">
          <FaLinkedin className="hover:text-terracotta transition" />
        </a>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex justify-center"
    >
     <img
  src={profileImg}
  alt="profile"
  className="w-80 h-80 object-cover object-[center_30%] rounded-full border-4 border-terracotta shadow-lg"
/>
    </motion.div>
  </div>

  {/* Scroll Icon */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
  >
    <HiArrowDown size={22} />
  </motion.div>
</section>

)
}
