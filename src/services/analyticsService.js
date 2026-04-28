const BASE_URL = "http://localhost:5000/api";

const getToken = () => localStorage.getItem("token");

// GET ANALYTICS
export const getAnalytics = async () => {
  const res = await fetch(`${BASE_URL}/analytics`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Failed to load analytics");

  return data;
};