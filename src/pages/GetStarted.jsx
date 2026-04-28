import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function GetStarted() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    useCase: "",
    plan: "",
  });

  const [errors, setErrors] = useState({});

  const next = () => setStep((p) => p + 1);
  const back = () => setStep((p) => p - 1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= VALIDATION ================= */

  const validateStep1 = () => {
    let err = {};
    if (!form.name) err.name = "Name is required";
    if (!form.email.includes("@")) err.email = "Valid email required";
    if (form.password.length < 6) err.password = "Min 6 characters";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const validateStep2 = () => {
    if (!form.useCase) {
      setErrors({ useCase: "Select a use case" });
      return false;
    }
    setErrors({});
    return true;
  };

  const validateStep3 = () => {
    if (!form.plan) {
      setErrors({ plan: "Select a plan" });
      return false;
    }
    setErrors({});
    return true;
  };

  /* ================= STEP 1 (LOCAL) ================= */

  const handleStep1 = async () => {
    if (!validateStep1()) return;

    setLoading((l) => ({ ...l, step1: true }));

    setTimeout(() => {
      // ✅ simulate signup (store locally)
      const user = {
        name: form.name,
        email: form.email,
      };

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", "demo-token"); // fake auth

      toast.success("Account created 🚀");
      next();

      setLoading((l) => ({ ...l, step1: false }));
    }, 800);
  };

  /* ================= STEP 2 (LOCAL) ================= */

  const handleStep2 = async () => {
    if (!validateStep2()) return;

    setLoading((l) => ({ ...l, step2: true }));

    setTimeout(() => {
      // ✅ save onboarding locally
      const user = JSON.parse(localStorage.getItem("user")) || {};
      user.useCase = form.useCase;

      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Preferences saved ✅");
      next();

      setLoading((l) => ({ ...l, step2: false }));
    }, 700);
  };

  /* ================= STEP 3 (LOCAL) ================= */

  const handleStep3 = async () => {
    if (!validateStep3()) return;

    setLoading((l) => ({ ...l, step3: true }));

    setTimeout(() => {
      // ✅ save plan locally
      const user = JSON.parse(localStorage.getItem("user")) || {};
      user.plan = form.plan;

      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Plan selected 🎯");
      next();

      setLoading((l) => ({ ...l, step3: false }));
    }, 700);
  };

  /* ================= FINAL ================= */

  const handleSubmit = () => {
    toast.success("Welcome onboard 🎉");
    navigate("/dashboard");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="w-full max-w-3xl bg-white/80 dark:bg-secondary/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border">

        {/* PROGRESS */}
        <div className="mb-8">
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <motion.div
              className="h-2 bg-primary rounded-full"
              animate={{ width: `${step * 25}%` }}
            />
          </div>
          <p className="mt-2 text-sm">Step {step} of 4</p>
        </div>

        <AnimatePresence mode="wait">

          {/* STEP 1 */}
          {step === 1 && (
            <motion.div key="1">
              <h2 className="text-2xl font-bold">Create Account</h2>

              <input name="name" onChange={handleChange} placeholder="Name"
                className="w-full p-3 border mt-4 rounded-lg" />
              {errors.name && <p className="text-red-500">{errors.name}</p>}

              <input name="email" onChange={handleChange} placeholder="Email"
                className="w-full p-3 border mt-4 rounded-lg" />
              {errors.email && <p className="text-red-500">{errors.email}</p>}

              <input type="password" name="password" onChange={handleChange} placeholder="Password"
                className="w-full p-3 border mt-4 rounded-lg" />
              {errors.password && <p className="text-red-500">{errors.password}</p>}

              <button
                onClick={handleStep1}
                disabled={loading.step1}
                className="mt-6 w-full bg-primary text-white py-3 rounded-xl"
              >
                {loading.step1 ? "Creating..." : "Continue"}
              </button>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div key="2">
              <h2 className="text-2xl font-bold">Use Case</h2>

              {["Development", "Marketing", "Content", "Automation"].map((u) => (
                <div key={u}
                  onClick={() => setForm({ ...form, useCase: u })}
                  className="p-3 border mt-3 cursor-pointer rounded-lg">
                  {u}
                </div>
              ))}

              {errors.useCase && <p className="text-red-500">{errors.useCase}</p>}

              <button onClick={back} className="mt-6 border w-full py-3">Back</button>
              <button onClick={handleStep2}
                className="mt-3 w-full bg-primary text-white py-3 rounded-xl">
                Continue
              </button>
            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div key="3">
              <h2 className="text-2xl font-bold">Choose Plan</h2>

              {["Starter", "Pro", "Enterprise"].map((p) => (
                <div key={p}
                  onClick={() => setForm({ ...form, plan: p })}
                  className="p-3 border mt-3 cursor-pointer rounded-lg">
                  {p}
                </div>
              ))}

              {errors.plan && <p className="text-red-500">{errors.plan}</p>}

              <button onClick={back} className="mt-6 border w-full py-3">Back</button>
              <button onClick={handleStep3}
                className="mt-3 w-full bg-primary text-white py-3 rounded-xl">
                Continue
              </button>
            </motion.div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <motion.div key="4" className="text-center">
              <h2 className="text-2xl font-bold">🎉 Complete</h2>

              <button
                onClick={handleSubmit}
                className="mt-6 w-full bg-primary text-white py-3 rounded-xl"
              >
                Go to Dashboard
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}