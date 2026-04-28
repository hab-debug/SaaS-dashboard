import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔐 FRONTEND AUTH ONLY
  useEffect(() => {
    const token = localStorage.getItem("token");
    const localUser = JSON.parse(localStorage.getItem("user"));

    if (!token || !localUser) {
      navigate("/get-started");
      return;
    }

    setUser(localUser);
    setLoading(false);
  }, [navigate]);

  // 🔓 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/get-started");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
        Loading your AI workspace...
      </div>
    );
  }

  return (
    <section className="min-h-screen px-6 py-28 bg-gray-50 dark:bg-black text-gray-900 dark:text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome back, {user?.name || "User"} 👋
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Your AI workspace is ready.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-red-500 text-white hover:scale-105 transition"
        >
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          { title: "Projects", value: "12" },
          { title: "AI Requests", value: "1,240" },
          { title: "Active Plan", value: user?.plan || "Starter" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white dark:bg-secondary shadow border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-sm text-gray-500">{item.title}</h3>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-2 gap-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white shadow-2xl"
        >
          <h2 className="text-xl font-bold">🚀 Generate AI Content</h2>
          <p className="mt-2 opacity-90">
            Create high-quality content instantly using AI automation.
          </p>
          <button className="mt-4 bg-white text-primary px-4 py-2 rounded-lg hover:scale-105 transition">
            Start Generating
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-2xl bg-white dark:bg-secondary border border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-xl font-bold">📊 Usage Analytics</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Track AI usage, performance, and insights.
          </p>
          <button
            onClick={() => navigate("/analytics")}
            className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            View Analytics
          </button>
        </motion.div>

      </div>
    </section>
  );
}