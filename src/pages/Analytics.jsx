import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Analytics() {
  const [data, setData] = useState({
    requests: 0,
    projects: 0,
    logins: 0,
    aiTokensUsed: 0,
    dailyUsage: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // ✅ GET EVENTS FROM LOCAL STORAGE
      const events = JSON.parse(localStorage.getItem("events") || "[]");

      // ✅ CALCULATIONS
      const requests = events.filter(e => e.event?.includes("ai")).length;
      const logins = events.filter(e => e.event === "login").length;
      const projects = events.filter(e => e.event === "project_create").length;

      // simulate token usage
      const aiTokensUsed = requests * 120;

      // ✅ GROUP BY DAY
      const dailyMap = {};

      events.forEach(e => {
        const day = new Date(e.time).toLocaleDateString("en-US", {
          weekday: "short",
        });

        if (!dailyMap[day]) {
          dailyMap[day] = 0;
        }

        dailyMap[day] += 20;
      });

      const dailyUsage = Object.keys(dailyMap).map(day => ({
        day,
        value: dailyMap[day],
      }));

      setData({
        requests,
        projects,
        logins,
        aiTokensUsed,
        dailyUsage,
      });

    } catch (err) {
      console.error("Analytics error:", err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading analytics...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen px-6 py-28 bg-gray-50 dark:bg-black text-gray-900 dark:text-white">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          📊 Analytics Dashboard
        </h1>
        <p className="mt-2 text-gray-500">
          Real-time usage tracking (frontend simulation)
        </p>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {[
          { title: "AI Requests", value: data.requests },
          { title: "Projects", value: data.projects },
          { title: "Logins", value: data.logins },
          { title: "Tokens Used", value: data.aiTokensUsed },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white dark:bg-secondary border shadow"
          >
            <h3 className="text-sm text-gray-500">{item.title}</h3>
            <p className="text-2xl font-bold mt-2">
              {item.value || 0}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CHART */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-xl font-bold mb-6">📈 Daily Usage</h2>

        {data.dailyUsage.length === 0 ? (
          <p className="text-gray-500">No activity yet</p>
        ) : (
          <div className="grid grid-cols-7 gap-4">
            {data.dailyUsage.map((d, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: d.value }}
                transition={{ duration: 0.6 }}
                className="bg-primary/70 rounded-xl flex items-end justify-center text-white text-xs"
                style={{ height: `${d.value}px` }}
              >
                {d.day}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* INSIGHTS */}
      <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-6">

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white shadow-xl"
        >
          <h2 className="text-xl font-bold">🔥 Peak Performance Time</h2>
          <p className="mt-2 opacity-90">
            Users are most active during evenings (simulated insight).
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl bg-white dark:bg-secondary border"
        >
          <h2 className="text-xl font-bold">⚡ Optimization Tip</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Cache repeated AI responses to reduce latency.
          </p>
        </motion.div>

      </div>

    </section>
  );
}