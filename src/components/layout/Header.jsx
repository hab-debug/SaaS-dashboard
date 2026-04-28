import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Download", path: "/download" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Analytics", path: "/analytics" },
  ];

  // 🔥 NO BACKEND TRACKING (SAFE NO-OP)
  const fireTrack = () => {
    // intentionally empty (frontend-only mode)
  };

  // 🚀 NAVIGATION
  const handleNavigation = (path) => {
    fireTrack();
    navigate(path);
    setOpen(false);
  };

  // 🚀 GET STARTED CTA
  const handleGetStarted = () => {
  navigate("/get-started");
  setOpen(false); // closes mobile menu if open
};

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 backdrop-blur-xl bg-white/60 dark:bg-secondary/60 border-b border-gray-200/50 dark:border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        {/* LOGO */}
        <h1
          onClick={() => handleNavigation("/")}
          className="text-xl font-bold cursor-pointer"
        >
          AI SaaS
        </h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`relative text-sm font-medium transition ${
                  isActive ? "text-primary" : "hover:text-primary"
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>

          {/* CTA BUTTON */}
          <button
            onClick={handleGetStarted}
            disabled={loading}
            className="hidden md:block bg-primary text-white px-5 py-2 rounded-xl hover:scale-105 active:scale-95 transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Get Started"}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden px-6 pb-6"
          >
            <div className="flex flex-col gap-4 bg-white/80 dark:bg-secondary/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border">

              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className="text-left text-sm font-medium hover:text-primary"
                >
                  {item.name}
                </button>
              ))}

              <CTAButton
                 text="Get Started"
                className="hidden md:block"
              />

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}