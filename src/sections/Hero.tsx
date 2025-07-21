"use client"
import { motion} from "framer-motion"
export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center px-4">
      <motion.div 
      initial={{ opacity: 0, y:40}}
      animate={{ opacity:1 , y:0}}
      transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Oves 👋</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          A passionate web developer crafting beautiful and performant apps with React, Next.js, and Tailwind CSS.
        </p>
      </motion.div>
    </section>
  );
}
