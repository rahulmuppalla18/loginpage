import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [rollNumber, setRollNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Account created successfully (demo).");
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
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="Enter your roll number"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <div className="text-sm mt-6 text-center">
          <a
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
          >
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
}