'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="contact" ref={ref} className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Have a project idea or want to work together?
        </p>
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded hover:opacity-90"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
