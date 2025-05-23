import React from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const data = [
    { title: "Active Investment", amount: "$0" },
    { title: "Total Deposits", amount: "$0" },
    { title: "Total Rewards", amount: "$180" },
    { title: "Total Withdrawals", amount: "$0" },
  ];

  const overall = { title: "Current Portfolio", amount: "$180" };

  const handleNavigate = (path) => {
    navigate(`/dashboard/${path}`);
  };

  return (
    <div className="bg-navy rounded-xl text-softGray px-1 py-6">
      <h2 className="text-3xl font-heading font-bold text-center mb-4">Account Overview</h2>
      <p className="text-lg font-heading font-bold text-center mb-6">Track and manage your crypto portfolio effectively.</p>

      {/* Regular Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-2 mb-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md border border-softGray p-4 bg-gradient-to-r from-navy via-greenGray to-navy text-softGray w-full"
          >
            <h3 className="text-center text-lg font-semibold">{item.title}</h3>
            <p className="text-2xl text-center mt-2 font-bold">{item.amount}</p>
          </div>
        ))}
      </div>

      {/* Highlighted Overall Balance */}
      <div className="mb-8">
        <div className="rounded-xl shadow-lg border border-softGray p-6 bg-gradient-to-r from-greenGray via-navy to-greenGray text-softGray w-full">
          <h3 className="text-center text-xl md:text-2xl font-semibold">{overall.title}</h3>
          <p className="text-4xl md:text-5xl text-center mt-3 font-bold">{overall.amount}</p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center">
        <p className="text-md md:text-lg font-medium mb-4 px-4">
          Ready to take the next step? Deposit crypto to start building your investment portfolio today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => handleNavigate("invest")}
            className="px-6 py-2 rounded-md bg-greenGray text-softGray font-semibold hover:bg-opacity-60 transition"
          >
            Deposit
          </button>
          <button
            onClick={() => handleNavigate("withdraw")}
            className="px-6 py-2 rounded-md bg-greenGray text-softGray font-semibold hover:bg-opacity-60 transition"
          >
            Withdraw
          </button>
          <button
            onClick={() => handleNavigate("invest")}
            className="px-6 py-2 rounded-md bg-greenGray text-softGray font-semibold hover:bg-opacity-60 transition"
          >
            Invest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;



