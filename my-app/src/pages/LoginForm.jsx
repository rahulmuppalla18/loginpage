import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      if (rollNumber === "admin" && password === "admin") {
        alert("Login successful (demo).");
      } else {
        setError("Invalid roll number or password.");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="card">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/logo.jpg"
            alt="College Logo"
            className="w-20 h-20"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              placeholder="Enter your roll number"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && (
          <div className="mt-4 text-red-600 text-center font-medium">
            {error}
          </div>
        )}

        <div className="text-sm mt-6 text-center space-y-2">
          <a
            onClick={() => navigate("/forgot-password")}
            className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
          >
            Forgot Password?
          </a>
          <br />
          <a
            onClick={() => navigate("/signup")}
            className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
          >
            Don't have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}