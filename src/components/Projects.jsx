import { motion } from "framer-motion"

const projects = [
  {
    title: "Bird-Bot",
    description:
      "A full-stack AI chat application inspired by ChatGPT,built using modern web technologies.",
    tech: [
      "React",
      "Javascript",
      "Express",
      "MongoDB",
      "Nodejs",
    ],
    img: "/project.png",
    github: "https://github.com/Nestle-Nikhil/chatGPT-clone.git",
    live:  "https://bird-bot.vercel.app",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="p-10 relative">
      
      {/* Glow Effect */}
      <div className="absolute w-72 h-72 bg-orange-500 blur-3xl opacity-20 top-10 right-10"></div>

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6 text-orange-400">
        Projects
      </h2>

      <p className="text-gray-400 mb-10">
        A showcase of my recent work, personal projects, and collaborations.
      </p>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-lg bg-white/10 dark:bg-white/5 
            border border-white/20 rounded-xl p-6 shadow-lg"
          >
            {/* Title */}
            <h3 className="text-2xl font-bold text-orange-400">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mt-3 leading-relaxed">
              {p.description}
            </p>

            {/* Tech Stack */}
            <p className="text-sm text-gray-400 mt-4">
              Technologies Used:
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full 
                  bg-orange-400/10 border border-orange-400/40 
                  text-orange-300 backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href={p.live}
                className="px-4 py-2 rounded-full 
                bg-orange-400 text-black font-medium"
              >
                Live Site ↗
              </a>

              <a
                href={p.github}
                className="px-4 py-2 rounded-full 
                border border-orange-400 text-orange-400"
              >
                Github ↗
              </a>
            </div>

            {/* Image */}
            <div className="w-32 mt-6 rounded-xl overflow-hidden border border-white/20">
              <img
                src={p.img}
                alt={p.title}
                className="w-full hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}