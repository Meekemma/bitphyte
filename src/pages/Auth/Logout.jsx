import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleLogout = () => {
    setLoading(true);

    setTimeout(() => {
      // Clear token/session logic goes here if needed
      setLoading(false);
      setSuccessPopup(true);

      setTimeout(() => {
        setSuccessPopup(false);
        navigate("/");
      }, 3000); // Wait 3 seconds before navigating
    }, 3000); // Simulate logout request
  };

  const handleGoBack = () => {
    navigate("/dashboard/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-softGray px-4 relative">
      {/* Success Message */}
      {successPopup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-4 rounded-md shadow-md text-center w-[90%] max-w-lg">
          Logged out successfully!
          <p className="mt-1 flex items-center justify-center gap-2">
            Redirecting to homepage...
            <span className="animate-spin border-2 border-t-2 border-white rounded-full w-4 h-4 inline-block"></span>
          </p>
        </div>
      )}

      <div className="w-full max-w-xl bg-gradient-to-r from-navy via-greenGray to-navy p-8 rounded-xl shadow-md text-center mt-16 mb-16">
        <h2 className="text-3xl font-heading font-bold mb-6">Are you sure you want to log out?</h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button
            onClick={handleLogout}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            {loading ? "Logging out..." : "Yes, Log Out"}
          </button>

          <button
            onClick={handleGoBack}
            className="w-full bg-navy text-softGray font-semibold py-3 rounded-md hover:bg-greenGray transition duration-300"
          >
            No, Go Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;

