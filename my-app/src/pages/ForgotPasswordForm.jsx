import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage("Password reset link has been sent to your email (demo).");
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
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your registered email"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {message && (
          <div className="mt-4 text-green-600 text-center font-medium">
            {message}
          </div>
        )}

        <div className="text-sm mt-6 text-center">
          <a
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}