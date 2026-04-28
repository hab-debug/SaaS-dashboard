import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTAButton({
  text = "Get Started",
  to = "/get-started",
  className = "",
  variant = "primary",
}) {
  const navigate = useNavigate();

  const baseStyles =
    "px-10 py-4 rounded-xl shadow-xl font-medium transition";

  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-white text-primary border border-primary",
    dark: "bg-black text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate(to)}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </motion.button>
  );
}