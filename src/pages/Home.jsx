import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import WhoWeAre from "../components/WhoWeAre";
import Plans from "../components/Plan";
import Testimonial from "../components/Testimonial";
import Market from "../components/CryptoMarket";
import CryptoCalculator from "../components/CryptoCalculator";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollToPlans) {
      const element = document.getElementById("plans");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait for DOM to fully render
      }
    }
  }, [location]);

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="bg-dark text-softGray min-h-screen flex flex-col">
      <Header />
      <Hero />
      <WhoWeAre />
      <Plans />
      <Market />
      <WhyUs />
      <Testimonial />
      <CryptoCalculator />

      <main
        className="
          flex-grow container mx-auto px-8 py-20
          rounded-3xl shadow-lg
          text-center
          flex flex-col items-center justify-center
          max-w-4xl
          transition-all duration-500
          hover:scale-[1.02] hover:shadow-2xl
        "
      >
        <h1 className="text-3xl font-extrabold text-indigo mb-4 font-heading">
          Bitphyte
        </h1>
        <p className="text-gray-300 text-sm max-w-xl mb-8 leading-relaxed">
          Your trusted platform for crypto investment. Invest securely and watch your balance grow.
        </p>
        <button
          onClick={handleSignup}
          className="
            mt-4 bg-indigo text-white font-semibold px-8 py-3 rounded-full
            shadow-md
            transform
            transition
            duration-300
            hover:bg-indigo
            hover:scale-105
            active:scale-95
            active:shadow-inner
            focus:outline-none focus:ring-4 focus:ring-greenGray
          "
        >
          Signup now →
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default Home;



