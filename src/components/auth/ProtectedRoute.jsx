import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // 🔐 NO TOKEN → REDIRECT
  if (!token) {
    return <Navigate to="/get-started" replace />;
  }

  // ✅ OPTIONAL: Basic token validation (prevent empty/broken token)
  try {
    if (token === "undefined" || token === "null") {
      throw new Error("Invalid token");
    }
  } catch {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return <Navigate to="/get-started" replace />;
  }

  // ✅ AUTHORIZED → RENDER PAGE
  return children;
}