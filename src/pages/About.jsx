import { motion } from "framer-motion";
import CTAButton from "../components/ui/CTAButton";

export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Building the Future of{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              AI Productivity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300"
          >
            We are redefining how individuals and businesses interact with AI —
            making powerful tools accessible, intuitive, and scalable.
          </motion.p>
        </div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16"
        >
          <img
            src="/images/about-hero.jpg"
            alt="AI dashboard"
            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* STORY */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold">
              Our Story
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              The idea behind our platform started with a simple observation:
              AI tools were powerful, but fragmented and difficult to integrate
              into everyday workflows.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              We set out to create a unified experience — a platform where
              automation, intelligence, and usability come together seamlessly.
              Our mission is to empower creators, developers, and businesses
              to move faster and build smarter.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="/images/about-story.jpg"
            alt="team working"
            className="rounded-2xl shadow-xl w-full h-[300px] object-cover"
          />
        </div>

        {/* VALUES */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center">
            Our Core Values
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                title: "Innovation",
                desc: "We push boundaries to create tools that redefine productivity.",
              },
              {
                title: "Simplicity",
                desc: "Powerful tools should feel simple and intuitive to use.",
              },
              {
                title: "Scalability",
                desc: "Our platform grows with you—from solo creators to enterprises.",
              },
              {
                title: "Performance",
                desc: "Speed and efficiency are at the core of everything we build.",
              },
              {
                title: "Security",
                desc: "We prioritize data protection and user privacy at every level.",
              },
              {
                title: "User-Centric",
                desc: "Everything we design starts with the user experience.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/60 dark:bg-secondary/60 backdrop-blur-xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>

        {/* TEAM */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center">
            Meet the Team
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { name: "Alex Carter", role: "Founder", img: "/images/user1.jpg" },
              { name: "Sophia Lee", role: "Product Designer", img: "/images/user2.jpg" },
              { name: "James Smith", role: "Engineer", img: "/images/user3.jpg" },
              { name: "Maya Patel", role: "Marketing Lead", img: "/images/user4.jpg" },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover"
                />
                <h4 className="mt-4 font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </motion.div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Join us in building the future
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Be part of a new era where AI empowers creativity and productivity.
          </p>

          <CTAButton text="Get Started" />
        </div>

      </div>
    </section>
  );
}