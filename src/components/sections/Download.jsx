import { motion } from "framer-motion";

export default function Download() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-10 md:p-16 overflow-hidden text-center bg-gradient-to-r from-primary to-purple-600 text-white shadow-2xl"
        >

          {/* Glow Background Effect */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <motion.div
                 animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
                />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <h2 className="text-3xl md:text-5xl font-bold">
            Start Building with AI Today
          </h2>

          <p className="mt-6 text-lg opacity-90 max-w-2xl mx-auto">
            Join thousands of creators and businesses using AI to automate workflows and scale faster.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Download App
            </button>

            <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition">
              Try Live Demo
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}