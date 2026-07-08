import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="p-10 relative">
      
      {/* Glow effect */}
      <div className="absolute w-72 h-72 bg-blue-500 blur-3xl opacity-20 top-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 
        bg-gradient-to-r from-purple-400 to-pink-500 
        text-transparent bg-clip-text">
          About Me
        </h2>

        {/* Description */}
        <p className=" text-lg  text-white dark:text-gray-300 leading-relaxed">
          I'm a passionate frontend developer who loves building modern, 
          responsive, and user-friendly web applications. I enjoy turning 
          complex problems into simple, beautiful, and intuitive designs.
        </p>

        <p className="mt-4 text-lg text-white dark:text-gray-300">
          I specialize in React, Tailwind CSS, and JavaScript, and I focus on 
          creating smooth user experiences with clean UI and animations.
        </p>

        <p className="mt-4 text-lg text-white dark:text-gray-300">
          Currently, I'm exploring advanced frontend concepts, improving my 
          problem-solving skills, and building real-world projects to grow as 
          a developer.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {[
            { label: "Projects", value: "10+" },
            { label: "Technologies", value: "8+" },
            { label: "Learning", value: "Always" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="backdrop-blur-lg bg-white/10 dark:bg-white/5 
              border border-white/20 rounded-xl p-4"
            >
              <h3 className="text-2xl font-bold text-white">{item.value}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-8 px-6 py-3 rounded-lg text-white 
          bg-gradient-to-r from-purple-500 to-pink-500"
        >
          Let's Connect
        </motion.a>
      </motion.div>
    </section>
  )
}