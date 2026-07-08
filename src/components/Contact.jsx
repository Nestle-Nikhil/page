import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  const form = useRef()

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    
    setLoading(true)
    setSuccess(null)

    emailjs
      .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY    
    



      )
      .then(
        () => {
          

          setLoading(false)
          setSuccess(true)
          form.current.reset()
        },
        () => {
          setLoading(false)
          setSuccess(false)
        }
      )
  }

  return (
    <section id="contact" className="p-10 relative">

      {/* Glow */}
      <div className="absolute w-72 h-72 bg-orange-500 blur-3xl opacity-20 top-10 left-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">
        
        {/* LEFT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="backdrop-blur-lg bg-white/10 dark:bg-white/5 
          border border-white/20 p-6 rounded-xl"
        >
          <h2 className="text-3xl font-bold mb-4 text-orange-400">
            Contact
          </h2>

          <p className="text-gray-300 mb-6">
            Let’s get in touch.
          </p>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="p-3 rounded bg-transparent border border-gray-500 focus:border-orange-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 rounded bg-transparent border border-gray-500 focus:border-orange-400 outline-none"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="p-3 rounded bg-transparent border border-gray-500 focus:border-orange-400 outline-none"
            />

            <button
              disabled={loading}
              className="mt-4 px-6 py-3 rounded border border-orange-400 
              text-orange-400 hover:bg-orange-400 hover:text-black transition
              disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success / Error Message */}
            {success === true && (
              <p className="text-green-400 text-sm">
                Message sent successfully ✅
              </p>
            )}

            {success === false && (
              <p className="text-red-400 text-sm">
                Failed to send message ❌
              </p>
            )}
          </form>
        </motion.div>

        {/* RIGHT - INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center gap-6"
        >
          <div>
            <h3 className="text-xl font-semibold text-orange-400">
              Email
            </h3>
            <p className="text-gray-300">
              nikhilpandey1033@email.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-orange-400">
              Location
            </h3>
            <p className="text-gray-300">
              Prayagraj, India
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-orange-400">
              Social
            </h3>

            <div className="flex gap-4 mt-2 text-2xl">
              <a href="https://github.com/Nestle-Nikhil" className="hover:text-orange-400 text-white">
                <FaGithub />
              </a>

              <a href="linkedin.com/in/nikhil-pandey-5a7b80244" className="hover:text-orange-400 text-white">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}