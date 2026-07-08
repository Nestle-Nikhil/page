import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiDownload } from "react-icons/fi"

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-10 relative overflow-hidden"
    >
      {/* 🔥 Glow Background */}
      <div className="absolute w-72 h-72 bg-orange-500 blur-3xl opacity-20 top-20 left-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        {/* Small Intro */}
        <p className="text-orange-400 text-lg mb-2">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-orange-400">
          Nikhil Pandey.
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-300 leading-relaxed text-lg">
          I'm a fullstack engineer with a strong inclination towards backend 
          development, meanwhile dabbling into the frontend territory too 
          to create intuitive user interfaces.
          <br /><br />
          Let's build something extraordinary together.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-8">
          
          {/* Github */}
          <a
            href="https://github.com/Nestle-Nikhil"
            className="flex items-center gap-2 px-6 py-3 rounded-lg 
            border border-white/30 text-white 
            hover:border-orange-400 hover:text-orange-400 
            transition"
          >
            <FaGithub />
            Github
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1rR7YwsudjVVtO2pSOKhugVtUuv8eUWhe/view?usp=drive_link"
            className="flex items-center gap-2 px-6 py-3 rounded-lg 
            border border-white/30 text-white 
            hover:border-orange-400 hover:text-orange-400 
            transition"
          >
            <FiDownload />
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}
