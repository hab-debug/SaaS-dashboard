/* ================= FAKE AUTH SYSTEM (FRONTEND ONLY) ================= */

// SIGNUP
export const signupUser = async (payload) => {
  const fakeUser = {
    id: Date.now(),
    name: payload.name,
    email: payload.email,
    plan: "Starter",
  };

  localStorage.setItem("token", "fake-token");
  localStorage.setItem("user", JSON.stringify(fakeUser));

  return { user: fakeUser };
};

// LOGIN
export const loginUser = async (payload) => {
  const fakeUser = {
    id: Date.now(),
    name: "Demo User",
    email: payload.email,
    plan: "Starter",
  };

  localStorage.setItem("token", "fake-token");
  localStorage.setItem("user", JSON.stringify(fakeUser));

  return { user: fakeUser };
};

// LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

/* ================= USER FLOW ================= */

export const saveOnboarding = async (payload) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const updatedUser = {
    ...user,
    useCase: payload.useCase,
  };

  localStorage.setItem("user", JSON.stringify(updatedUser));
};

export const selectPlan = async (payload) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const updatedUser = {
    ...user,
    plan: payload.plan,
  };

  localStorage.setItem("user", JSON.stringify(updatedUser));
};

export const getDashboard = async () => {
  return {
    projects: 12,
    requests: 240,
  };
};

/* ================= FAKE STRIPE ================= */

export const createCheckoutSession = async (plan) => {
  // simulate payment success
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ url: "/dashboard" });
    }, 1500);
  });
};

/* ================= FAKE ANALYTICS ================= */

export const trackEvent = async (event) => {
  const events = JSON.parse(localStorage.getItem("events") || "[]");

  events.push({
    event,
    time: new Date().toISOString(),
  });

  localStorage.setItem("events", JSON.stringify(events));
};