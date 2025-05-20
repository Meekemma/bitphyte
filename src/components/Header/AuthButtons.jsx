import React from "react";
import { Link } from "react-router-dom";

const AuthButtons = () => {
  return (
    <div className="space-x-4">
      <Link
        to="/login"
        className="text-softGray hover:text-indigo font-medium transition-colors"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-indigo text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default AuthButtons;
