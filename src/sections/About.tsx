'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 ">
          I am a Full Stack Developer with hands-on experience building scalable web applications using modern techologies based in India with . Skilled in frontend and backend development,  performance optimization and solving real-world problems using modern tools.
        </p>
      </motion.div>
    </section>
  );
}

