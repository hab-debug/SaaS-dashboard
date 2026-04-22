import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { features } from "../../data/features";
import { fadeUp, stagger } from "../../utils/animations";

export default function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Powerful AI Features
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Everything you need to scale faster with AI automation.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeUp}>
              
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.02}
                transitionSpeed={2500}
                className="group bg-white dark:bg-secondary border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition duration-300 hover:shadow-2xl"
              >

                {/* Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>

                  {/* Spotlight Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>

              </Tilt>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}