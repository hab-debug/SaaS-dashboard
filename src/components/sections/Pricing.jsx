import { useState } from "react";
import { motion } from "framer-motion";
import { pricingPlans } from "../../data/pricing";
import { fadeUp, stagger } from "../../utils/animations";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Simple Pricing
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Choose the plan that fits your needs.
          </p>

          {/* Toggle */}
          <div className="mt-6 flex justify-center items-center gap-4">
            <span className={!yearly ? "font-semibold" : ""}>Monthly</span>

            <button
              onClick={() => setYearly(!yearly)}
              className="w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full relative transition"
            >
              <motion.div
                layout
                className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full"
                animate={{ x: yearly ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </button>

            <span className={yearly ? "font-semibold" : ""}>Yearly</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`group rounded-2xl p-6 border transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.highlighted
                  ? "bg-primary text-white scale-105 shadow-2xl"
                  : "bg-white dark:bg-secondary border-gray-200 dark:border-gray-800"
              }`}
            >

              {/* Plan Name */}
              <h3 className="text-xl font-semibold">{plan.name}</h3>

              {/* Price */}
              <p className="text-3xl font-bold mt-4">
                {yearly ? plan.priceYearly : plan.priceMonthly}
              </p>

              <p className="mt-2 text-sm opacity-80">
                {plan.description}
              </p>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-2 mt-6">
                {plan.images.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-lg"
                  >
                    <img
                      src={img}
                      alt="preview"
                      className="w-full h-20 object-cover transform group-hover:scale-110 transition duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-6 w-full py-3 rounded-xl font-semibold transition ${
                  plan.highlighted
                    ? "bg-white text-primary hover:scale-105 active:scale-95"
                    : "bg-primary text-white hover:scale-105 active:scale-95"
                }`}
              >
                Get Started
              </button>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}