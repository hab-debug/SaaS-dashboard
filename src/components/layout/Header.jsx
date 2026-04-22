import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 backdrop-blur-xl bg-white/60 dark:bg-secondary/60 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold cursor-pointer">
          AI SaaS
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium hover:text-primary transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>

          {/* CTA */}
          <button className="hidden md:block bg-primary text-white px-5 py-2 rounded-xl hover:scale-105 active:scale-95 transition">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-6"
          >
            <div className="flex flex-col gap-4 bg-white dark:bg-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">

              {["Features", "Pricing", "FAQ"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium hover:text-primary transition"
                >
                  {item}
                </a>
              ))}

              <button className="mt-4 bg-primary text-white py-3 rounded-xl hover:scale-105 active:scale-95 transition">
                Get Started
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}