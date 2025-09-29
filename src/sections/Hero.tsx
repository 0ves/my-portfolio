"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Background accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-tr from-purple-400 to-pink-300 blur-3xl opacity-30 dark:opacity-20"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-300 blur-3xl opacity-30 dark:opacity-20"
      />

      {/* Hero text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl font-bold mb-4 pb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
          {/* Bringing ideas to life, digitally. */}
          👋 My name is Oves 

        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto pt-2 pl-4">
          {/* Innovative, bespoke, digital solutions. */}
         I am a Full-Stack web application developer. 
        </p>
      </motion.div>
    </section>
  )
}

