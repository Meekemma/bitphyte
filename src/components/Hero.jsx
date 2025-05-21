import React from "react";
import { useNavigate } from "react-router-dom";

const coins = [
  "/bitcoin.png",   
  "/bnb.png",  
  "/cardano.png",
  "/eth.png",
  "/pi.png",
  "/sol.png",
  "/usdt.png",
  "/xrp.png",
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundAttachment: "scroll",
        }}
      ></div>

      {/* Coins animation container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {coins.map((coin, index) => (
          <CoinAnimation key={index} src={coin} delay={index * 2} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center text-white max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-8 drop-shadow-lg">
          <span className="text-Gray-200">Earn A Passive Income Through </span>
          <span className="text-green-500">Forex and Crypto</span>
        </h1>
        <button
          onClick={() => navigate("/signup")}
          className="
            bg-indigo
            text-softGray
            mt-20
            hover:bg-indigo-700 
            transition-colors 
            px-6 py-3 sm:px-8 sm:py-4 
            rounded-lg 
            text-lg sm:text-xl 
            font-semibold 
            shadow-lg
            focus:outline-none 
            focus:ring-4 
            focus:ring-indigo-400
            focus:ring-opacity-50
            "
        >
          Get Started
        </button>

      </div>

      {/* CSS Styles */}
      <style>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(100vw) translateY(0);
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(-150px) translateY(0);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

// Individual coin animation component
const CoinAnimation = ({ src, delay }) => {
  const topPosition = Math.random() * 80 + 10;
  const animationDuration = 8 + Math.random() * 4;

  return (
    <img
      src={src}
      alt="crypto coin"
      style={{
        top: `${topPosition}vh`,
        animation: `slideLeft ${animationDuration}s linear infinite`,
        animationDelay: `${delay}s`
      }}
      className="absolute w-10 sm:w-12 h-10 sm:h-12 object-contain opacity-80"
    />
  );
};

export default Hero;

