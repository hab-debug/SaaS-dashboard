import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../../data/faq";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Everything you need to know about the product.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-white dark:bg-secondary"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer (Animated) */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}