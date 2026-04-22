import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>

      {/* Container */}
      <div className="max-w-5xl mx-auto">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1 text-sm bg-primary/10 text-primary rounded-full"
        >
          🚀 AI-powered productivity
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Build smarter with{" "}
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            AI automation
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Generate, automate, and scale your workflow using next-gen AI tools.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <button className="bg-primary text-white px-6 py-3 rounded-xl hover:scale-105 active:scale-95 transition">
            Start Free Trial
          </button>

          <button className="border px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Live Demo
          </button>
        </motion.div>

        {/* Animated Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative h-64 md:h-96 rounded-2xl bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white text-xl font-semibold shadow-2xl overflow-hidden">

            {/* Floating Glow Effect */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
            />

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 8 }}
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
            />

            {/* Text */}
            AI Dashboard Preview
          </div>
        </motion.div>

      </div>
    </section>
  );
}