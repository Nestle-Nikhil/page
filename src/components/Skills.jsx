import { motion } from "framer-motion"
import { useState } from "react"

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Next.js", "Node.js", "Express",
  "REST API", "GraphQL", "TRPC",
  "Tailwind CSS", "Shadcn", "Framer Motion",
  "OAuth", "SQL", "Firebase", "MongoDB",
  "Smart Contracts", "DB Modeling", "AI Integration",
  "Razorpay", "Git", "GitHub", "Vercel", "Render"
]

export default function Skills() {
  const [active, setActive] = useState(null)

  return (
    <section id="skills" className="p-10 text-center">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-10 text-orange-400">
        My Skills
      </h2>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-lg border cursor-pointer
            transition duration-300
            ${
              active === i
                ? "bg-orange-400 text-black border-orange-400 shadow-lg"
                : "border-white/30 text-gray-300 hover:border-orange-400 hover:text-orange-400"
            }`}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
