import Hero from "../components/sections/Hero";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import CTAButton from "../components/ui/CTAButton";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">

      {/* 🔥 HERO */}
      <Hero />

      {/* 🧠 PRODUCT SHOWCASE */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Your AI Command Center
            </h2>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Everything you need to automate, create, and scale — all in one place.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <p>⚡ Real-time automation</p>
              <p>📊 Smart analytics</p>
              <p>🔗 Seamless integrations</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative"
          >
            <img
              src="/images/dashboard.png"
              className="rounded-2xl shadow-2xl"
            />

            <div className="absolute -z-10 inset-0 bg-primary/20 blur-3xl rounded-full"></div>
          </motion.div>

        </div>
      </section>

      {/* ⚡ HOW IT WORKS */}
      <section className="py-32 px-4 bg-gray-50 dark:bg-secondary/40">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            How It Works
          </h2>

          <div className="mt-20 grid md:grid-cols-3 gap-12">

            {[
              { title: "Connect", img: "/images/work1.png" },
              { title: "Automate", img: "/images/work2.png" },
              { title: "Scale", img: "/images/work3.png" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-secondary">
                  <img src={step.img} className="w-full h-44 object-cover" />
                  <div className="p-6 font-semibold">{step.title}</div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 🖼 USE CASES */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Built for Every Workflow
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8">

            {[
              { title: "Developers", img: "/images/use1.png" },
              { title: "Startups", img: "/images/use2.png" },
              { title: "Creators", img: "/images/use3.png" },
              { title: "Agencies", img: "/images/use4.png" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, rotate: 1 }}
                className="rounded-xl overflow-hidden shadow-xl"
              >
                <img src={item.img} className="w-full h-40 object-cover" />
                <div className="p-4 font-semibold bg-white dark:bg-secondary">
                  {item.title}
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* 📊 STATS */}
      <section className="py-32 px-4 bg-gray-50 dark:bg-secondary/40">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Trusted by Thousands
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8">

            {[
              "10K+ Users",
              "500+ Teams",
              "1M+ Automations",
              "99.9% Uptime",
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="p-8 rounded-2xl bg-white dark:bg-secondary shadow-lg text-xl font-semibold"
              >
                {stat}
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* 🎯 FINAL CTA */}
      <section className="py-32 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Transform Your Workflow?
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-300">
          Start using AI to work smarter, faster, and better.
        </p>

        <CTAButton text="Get Started" />
      </section>

      {/* ⭐ COMPONENTS */}
      <Testimonials />
      <FAQ />

    </div>
  );
}