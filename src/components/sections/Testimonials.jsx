import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Loved by Users Worldwide
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            See how people are transforming their workflow with AI.
          </p>
        </motion.div>

        {/* Horizontal Scroll */}
        <div className="overflow-x-hidden relative">

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-sm bg-white dark:bg-secondary border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
              >

                {/* User */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  “{t.quote}”
                </p>

              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}