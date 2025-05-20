import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendAvailable, setResendAvailable] = useState(false);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    let timer;
    if (submitted && countdown > 0 && !resendAvailable) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setResendAvailable(true);
    }
    return () => clearTimeout(timer);
  }, [submitted, countdown, resendAvailable]);

  const handleForgot = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setCountdown(60);
      setResendAvailable(false);
    } catch (err) {
      console.error("Error:", err);
      setError(
        "Oops! Something went wrong while trying to send the reset link. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-softGray px-4">
      <div className="w-full mt-16 mb-16 max-w-xl bg-gray-900 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-heading text-indigo font-bold mb-8 text-center">
          Forgot Password
        </h2>

        {!submitted ? (
          <form onSubmit={handleForgot}>
            <div className="mb-6">
              <FontAwesomeIcon icon={faEnvelope} className="text-indigo mb-2 text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-indigo focus:outline-none placeholder-gray-400"
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo text-white font-semibold py-3 rounded-md hover:bg-indigo/90 transition duration-300"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-500 mb-4">
              A reset link has been sent to <strong>{email}</strong>. Please check your inbox and follow the instructions.
              If you don’t see the email, check your spam or junk folder.
            </p>

            {!resendAvailable ? (
              <p className="text-sm text-gray-400">
                You can resend the link in {countdown} seconds.
              </p>
            ) : (
              <button
                onClick={handleForgot}
                disabled={loading}
                className="mt-3 text-indigo underline text-sm"
              >
                Resend Link
              </button>
            )}

            <div className="mt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setError("");
                }}
                className="text-indigo underline text-sm"
              >
                Edit email address
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/login")}
            className="text-indigo underline text-sm"
          >
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;




