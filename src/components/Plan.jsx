import React from "react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    title: "Basic Plan",
    priceRange: "$100 - $9,999",
    dailyProfit: "2.5%",
    minDeposit: "$100",
    maxDeposit: "$9,999",
  },
  {
    title: "Standard Plan",
    priceRange: "$10,000 - $99,999",
    dailyProfit: "3.2%",
    minDeposit: "$10,000",
    maxDeposit: "$99,999",
  },
  {
    title: "Premium Plan",
    priceRange: "$100,000 - $500,000",
    dailyProfit: "5%",
    minDeposit: "$100,000",
    maxDeposit: "$500,000",
  },
];

const Plan = () => {
  const navigate = useNavigate();

  return (
    <section id="plans" className="bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-4 mt-4">Our Investment Plans</h2>
        <p className="text-2xl md:text-lg text-gray-300 mb-10">Pick the plan that best fits your investment target</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white/10 text-white p-6 rounded-2xl shadow-md hover:scale-105 hover:shadow-xl transition duration-300 border border-indigo-400/20"
            >
              <h3 className="font-bold text-indigo mb-4">{plan.title}</h3>
              <p className="text-lg mb-2 font-bold text-3xl">{plan.priceRange}</p>
              <p className="text-lg mb-2 text-sm"><span className="font-semibold text-gray-300 text-sm">Daily Profit:</span> {plan.dailyProfit}</p>
              <p className="text-lg mb-2 mt-8"><span className="font-semibold text-gray-300">Min Deposit:</span> {plan.minDeposit}</p>
              <p className="text-lg mb-6"><span className="font-semibold text-gray-300">Max Deposit:</span> {plan.maxDeposit}</p>

              <button
                onClick={() => navigate("/signup")}
                className="bg-indigo hover:bg-indigo mt- text-white font-semibold py-2 px-4 rounded-full w-full transition"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plan;
