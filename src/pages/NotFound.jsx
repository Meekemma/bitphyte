import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const messages = [
    "Oops! This page vanished into thin air.",
    "Looks like you're lost in the BitPhyte universe.",
    "This page doesn't exist (yet!).",
    "Hmm... can't find that page.",
    "The page you're looking for took a coffee break."
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-dark text-mediumGray px-4 text-center">
      <h1 className="text-6xl font-heading font-bold mb-4 text-softGray">404</h1>
      <p className="text-xl md:text-2xl mb-6">{messages[messageIndex]}</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-indigo text-softGray rounded-md font-medium hover:bg-indigo/90 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
