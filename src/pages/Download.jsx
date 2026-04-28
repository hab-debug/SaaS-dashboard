import { motion } from "framer-motion";
import CTAButton from "../components/ui/CTAButton";

export default function Download() {
  return (
    <section className="relative py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-10 md:p-16 overflow-hidden text-center bg-gradient-to-r from-primary to-purple-600 text-white shadow-2xl"
        >

          {/* ✨ FLOATING BLOBS */}
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          />

          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
            className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          />

          {/* 🧠 MAIN CONTENT */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Supercharge Your Workflow with{" "}
            <span className="underline decoration-white/40">
              AI Automation
            </span>
          </h2>

          <p className="mt-6 text-lg opacity-90 max-w-2xl mx-auto">
            Experience a smarter way to work. Automate repetitive tasks,
            generate content instantly, and scale your productivity like never before.
          </p>

          {/* 📲 CTA BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:scale-105 active:scale-95 transition shadow-lg">
              Download App
            </button>

            <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition">
              Try Live Demo
            </button>

          </div>

          {/* ⭐ TRUST BADGES */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <span>✔ No credit card required</span>
            <span>✔ 14-day free trial</span>
            <span>✔ Cancel anytime</span>
          </div>

          {/* 🖼 PRODUCT PREVIEW IMAGES */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">

            {["p1.png", "p2.png", "p3.png", "p4.png"].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={`/images/${img}`}
                  alt="preview"
                  className="w-full h-32 object-cover"
                />
              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* 📱 PLATFORM SECTION */}
        <div className="mt-20 text-center">

          <h3 className="text-2xl font-bold">
            Available Everywhere
          </h3>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Access your AI tools on any device, anytime.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">

            {["Web App", "iOS", "Android", "Desktop"].map((platform, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 rounded-xl bg-white/60 dark:bg-secondary/60 backdrop-blur-xl border shadow"
              >
                {platform}
              </motion.div>
            ))}

          </div>
        </div>

        {/* 🚀 FINAL CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Join thousands already using AI to work smarter and faster.
          </p>

         <CTAButton text="Get Started" />
        </div>

      </div>
    </section>
  );
}