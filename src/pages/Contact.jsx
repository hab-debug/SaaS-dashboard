import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import CTAButton from "../components/ui/CTAButton";

export default function Contact() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 HERO */}
        <div className="relative text-center max-w-3xl mx-auto">

          {/* Glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 blur-3xl rounded-full"></div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Let’s Talk 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300"
          >
            Have questions, feedback, or want to work with us? We’d love to hear from you.
          </motion.p>
        </div>

        {/* 📩 MAIN GRID */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-start">

          {/* ✉️ FORM */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-2xl bg-white/60 dark:bg-secondary/60 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-xl space-y-6"
          >
            <h2 className="text-2xl font-bold">Send a Message</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <textarea
              rows="5"
              placeholder="Your Message..."
              className="w-full p-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>

            <button className="w-full bg-primary text-white py-3 rounded-xl hover:scale-105 active:scale-95 transition shadow-lg">
              Send Message
            </button>
          </motion.form>

          {/* 📞 CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >

            {[
              {
                icon: <FiMail />,
                title: "Email",
                value: "support@aisaas.com",
              },
              {
                icon: <FiPhone />,
                title: "Phone",
                value: "+234 800 000 0000",
              },
              {
                icon: <FiMapPin />,
                title: "Location",
                value: "Remote • Global",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 dark:bg-secondary/60 backdrop-blur-xl border hover:shadow-xl transition"
              >
                <div className="text-primary text-xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* 🖼 IMAGE */}
            <div className="mt-6">
              <img
                src="/images/contact.jpg"
                alt="contact"
                className="rounded-2xl shadow-xl w-full h-[200px] object-cover"
              />
            </div>

          </motion.div>
        </div>

        {/* ⚡ QUICK HELP */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold">
            Need Quick Answers?
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Check our FAQ section for instant solutions to common questions.
          </p>

          <a
            href="/faq"
            className="inline-block mt-6 text-primary font-semibold hover:underline"
          >
            Go to FAQ →
          </a>
        </div>

        {/* 🚀 FINAL CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Build Something Amazing Together
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Whether you're a developer, startup, or enterprise — we’re ready to collaborate.
          </p>

         <CTAButton text="Get Started" />
        </div>

      </div>
    </section>
  );
}