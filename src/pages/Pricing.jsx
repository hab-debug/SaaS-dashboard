import { useState } from "react";
import { motion } from "framer-motion";
import { pricingPlans } from "../data/pricing";
import CTAButton from "../components/ui/CTAButton";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-28 px-4 overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Pricing That Scales With You
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Flexible plans designed for individuals, teams, and enterprises.
          </p>

          {/* TOGGLE */}
          <div className="mt-6 flex justify-center items-center gap-4">
            <span className={!yearly ? "font-semibold" : ""}>Monthly</span>

            <button
              onClick={() => setYearly(!yearly)}
              className="w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full relative"
            >
              <motion.div
                className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full"
                animate={{ x: yearly ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </button>

            <span className={yearly ? "font-semibold" : ""}>Yearly</span>
          </div>
        </div>

        {/* PRICING CARDS */}
        <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory">

          {pricingPlans?.length ? (
            pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name || index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`snap-center min-w-[300px] max-w-[320px] flex-shrink-0 group relative rounded-3xl p-6 transition duration-500 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-primary to-purple-600 text-white scale-105 shadow-2xl"
                    : "bg-white/60 dark:bg-secondary/60 backdrop-blur-xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl"
                }`}
              >

                {/* BADGE */}
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-white text-primary px-3 py-1 rounded-full font-semibold shadow">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold">
                  {plan?.name || "Plan"}
                </h3>

                <p className="text-3xl font-bold mt-4">
                  {yearly
                    ? plan?.priceYearly || "$0"
                    : plan?.priceMonthly || "$0"}
                </p>

                <p className="mt-2 text-sm opacity-80">
                  {plan?.description || "No description"}
                </p>

                {/* IMAGES */}
                <div className="grid grid-cols-2 gap-2 mt-6">
                  {plan?.images?.length ? (
                    plan.images.map((img, i) => (
                      <div key={i} className="overflow-hidden rounded-lg">
                        <img
                          src={img}
                          alt={plan.name}
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "/images/fallback.png";
                          }}
                          className="w-full h-20 object-cover transform group-hover:scale-110 transition duration-500"
                        />
                      </div>
                    ))
                  ) : (
                    <p className="text-xs opacity-60">No preview</p>
                  )}
                </div>

                {/* FEATURES */}
                <ul className="mt-6 space-y-2 text-sm">
                  {plan?.features?.length ? (
                    plan.features.map((f, i) => (
                      <li key={i}>✔ {f}</li>
                    ))
                  ) : (
                    <li>No features listed</li>
                  )}
                </ul>

                {/* CTA */}
                <CTAButton text="Get Started" />

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-primary/10 to-transparent" />
              </motion.div>
            ))
          ) : (
            <p>No pricing plans available</p>
          )}

        </div>

        <p className="text-center mt-6 text-sm text-gray-500">
          ← Scroll to explore plans →
        </p>

        {/* WHY CHOOSE US */}
        <div className="mt-28 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "AI Automation",
              img: "/images/p13.png",
              desc: "Automate repetitive tasks effortlessly.",
            },
            {
              title: "Smart Insights",
              img: "/images/p14.png",
              desc: "Real-time data to guide decisions.",
            },
            {
              title: "Seamless Workflow",
              img: "/images/p15.png",
              desc: "Integrates with your tools smoothly.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden bg-white/60 dark:bg-secondary/60 backdrop-blur-xl border shadow"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div className="mt-28 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Get Started?
          </h2>

          <button
            onClick={() => alert("Start flow")}
            className="mt-6 bg-primary text-white px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            Start Now
          </button>
        </div>

      </div>
    </section>
  );
}