import { motion } from "framer-motion";
import { features } from "../data/features";
import CTAButton from "../components/ui/CTAButton";

export default function Features() {
  return (
    <section id="features" className="relative py-28 px-4 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* 🚀 HERO */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Powerful AI Features Built for Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-6 text-gray-600 dark:text-gray-300"
          >
            Discover tools designed to automate, optimize, and scale your workflow effortlessly.
          </motion.p>
        </div>

        {/* 💎 FEATURE GRID (UPGRADED) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden bg-white/60 dark:bg-secondary/60 backdrop-blur-xl border shadow-lg hover:shadow-2xl transition"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

        {/* 🖼 FEATURE SHOWCASE */}
        <div className="mt-28 grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="/images/feature1.png"
            className="rounded-2xl shadow-2xl w-full h-[300px] object-cover"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold">
              Smart AI Automation
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-300">
              Automate repetitive workflows and free up your time to focus on high-impact work.
              Our AI handles the heavy lifting so you can scale faster.
            </p>

            <ul className="mt-6 space-y-2 text-sm">
              <li>⚡ Instant task automation</li>
              <li>🎯 Smart decision making</li>
              <li>🔗 Seamless integrations</li>
            </ul>
          </motion.div>

        </div>

        {/* ⚡ SECOND SHOWCASE */}
        <div className="mt-28 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold">
              Real-Time Insights
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-300">
              Gain powerful insights with real-time analytics and AI-driven recommendations
              that help you make smarter business decisions.
            </p>

            <ul className="mt-6 space-y-2 text-sm">
              <li>📊 Live analytics dashboard</li>
              <li>📈 Growth tracking</li>
              <li>🧠 Predictive intelligence</li>
            </ul>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="/images/feature2.png"
            className="rounded-2xl shadow-2xl w-full h-[300px] object-cover"
          />

        </div>

        {/* 📊 STATS */}
        <div className="mt-28 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {[
            "10K+ Users",
            "500+ Teams",
            "1M+ Automations",
            "99.9% Uptime",
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="p-6 rounded-xl bg-white/60 dark:bg-secondary/60 backdrop-blur-xl border shadow"
            >
              {stat}
            </motion.div>
          ))}

        </div>

        {/* 🚀 FINAL CTA */}
        <div className="mt-28 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Experience These Features?
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Start using our AI tools today and transform your workflow.
          </p>

          <CTAButton text="Get Started" />
        </div>

      </div>
    </section>
  );
}