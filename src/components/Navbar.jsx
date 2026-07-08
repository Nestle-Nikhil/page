import { useState } from "react"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark")
  }

  return (
    <nav className="fixed w-full bg-black dark:bg-black text-white shadow z-50">
      <div className="flex justify-between p-4">
        <h1 className="font-bold text-xl text-white">MyPortfolio</h1>

        <div className="hidden md:flex gap-6 text-white">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleDark}>🌙</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          className="flex flex-col items-center gap-6 pb-6 md:hidden"
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleDark}>Toggle Mode</button>
        </motion.div>
      )}
    </nav>
  )
}