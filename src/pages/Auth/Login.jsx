import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      setTimeout(() => {
        setSuccessPopup(true);
        setLoading(false);

        setTimeout(() => {
          setSuccessPopup(false);
          navigate("/");
        }, 3000);
      }, 1000);
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid credentials");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-softGray px-4 relative">
      {successPopup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-4 rounded-md shadow-md text-center w-[90%] max-w-lg">
          Logged in successfully!
          <p className="mt-1 flex items-center justify-center gap-2">
            Redirecting to homepage...
            <span className="animate-spin border-2 border-t-2 border-white rounded-full w-4 h-4 inline-block"></span>
          </p>
        </div>
      )}

      <div className="w-full mt-16 mb-16 max-w-xl bg-gray-900 p-8 rounded-xl shadow-md">
        <h2 className="text-4xl font-heading text-indigo font-bold mb-8 text-center">Log In</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <FontAwesomeIcon icon={faEnvelope} className="text-indigo mb-2 text-xl" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-indigo focus:outline-none placeholder-gray-400"
            />
          </div>

          <div className="mb-6">
            <FontAwesomeIcon icon={faLock} className="text-indigo mb-2 text-xl" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-indigo focus:outline-none placeholder-gray-400"
            />
          </div>

          {error && <p className="text-red-500 text-xs mb-4">{error}</p>}

          <div className="mb-6 flex justify-end">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-sm text-indigo underline hover:text-indigo-300 transition"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo text-white font-semibold py-3 rounded-md hover:bg-indigo/90 transition duration-300"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          Don't have an account?{" "}
          <span
            className="text-indigo underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/")}
            className="text-indigo underline text-sm"
          >
            ← Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;



