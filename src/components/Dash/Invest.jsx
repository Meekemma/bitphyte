import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaCopy } from "react-icons/fa";


const PLANS = [
  {
    id: "basic",
    title: "Basic Plan",
    range: "$100 - $9,999",
    dailyProfit: "2.5%",
    min: 100,
    max: 9999,
  },
  {
    id: "standard",
    title: "Standard Plan",
    range: "$10,000 - $99,999",
    dailyProfit: "3.2%",
    min: 10000,
    max: 99999,
  },
  {
    id: "premium",
    title: "Premium Plan",
    range: "$100,000 - $500,000",
    dailyProfit: "5%",
    min: 100000,
    max: 500000,
  },
];

const CRYPTO_OPTIONS = [
  "Bitcoin",
  "USDT",
  "Ethereum",
  "Pi Network",
  "XRP",
  "Litecoin",
  "Cardano",
  "Dogecoin",
  "Polkadot",
];

const WALLET_ADDRESS = "0x1234ABCD5678EF7T8M5RMTJ858TJ8585F5OO"; // Dummy wallet address
const QR_CODE_URL = "https://via.placeholder.com/150?text=QR+Code"; // Dummy QR code

const Invest = () => {
  const navigate = useNavigate();

  // Steps: 1 - Plan select, 2 - Crypto & Amount input, 3 - Payment confirmation, 4 - Processing payment
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [crypto, setCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(300); // 5 minutes in seconds

  const countdownRef = useRef(null);

  // Handle countdown timer for payment confirmation (step 3)
  useEffect(() => {
    if (step === 3) {
      countdownRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownRef.current);
            // Time expired - you can reset or alert user, here we reset flow
            alert("Payment time expired. Please start again.");
            resetAll();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(countdownRef.current);
      setCountdown(300);
    }

    return () => clearInterval(countdownRef.current);
  }, [step]);

  // Processing payment timer (step 4) 5 minutes then redirect
  useEffect(() => {
    let processingTimer;
    if (step === 4) {
      processingTimer = setTimeout(() => {
        navigate("/dashboard/home");
      }, 2 * 60 * 1000); // 2 minutes
    }
    return () => clearTimeout(processingTimer);
  }, [step, navigate]);

  const resetAll = () => {
    setStep(1);
    setSelectedPlan(null);
    setCrypto("");
    setAmount("");
    setError("");
    setCountdown(300);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setError("");
  };

  const handleProceedToCrypto = () => {
    if (!selectedPlan) {
      setError("Please select a plan before proceeding.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleCryptoAmountSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!crypto) {
      setError("Please select a cryptocurrency.");
      return;
    }
    const numAmount = Number(amount);
    if (isNaN(numAmount)) {
      setError("Please enter a valid number amount.");
      return;
    }
    if (numAmount < selectedPlan.min || numAmount > selectedPlan.max) {
      setError(
        `Amount must be between $${selectedPlan.min.toLocaleString()} and $${selectedPlan.max.toLocaleString()}.`
      );
      return;
    }

    setError("");
    setStep(3);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handlePaidProceed = () => {
    setStep(4);
  };

  const handleCopy = () => {
  navigator.clipboard.writeText(WALLET_ADDRESS)
    .then(() => {
      // Optionally show a success message or feedback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    })
  };

  return (
    <div className="bg-navy rounded-xl text-softGray px-6 py-8">
      {step === 1 && (
        <>
          <h2 className="text-3xl font-heading font-bold text-center mb-6">Select an Investment Plan</h2>
          <p className="text-md md:text-lg font-medium text-center mb-8 px-4">
            Choose the investment plan that best suits your needs. Each plan offers different daily profit rates and deposit ranges.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl shadow-md border border-softGray p-6 cursor-pointer bg-gradient-to-r from-navy via-greenGray to-navy text-softGray transition
                  ${
                    selectedPlan?.id === plan.id
                      ? "ring-4 ring-greenGray"
                      : "hover:ring-2 hover:ring-greenGray"
                  }`}
                onClick={() => handlePlanSelect(plan)}
              >
                <h3 className="text-sm font-semibold mb-8">{plan.title}</h3>
                <p className="mb-8 text-2xl font-bold">{plan.range}</p>
                <p className="mb-2 text-sm">Daily Profit: <strong>{plan.dailyProfit}</strong></p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlanSelect(plan);
                    handleProceedToCrypto();
                  }}
                  className="px-6 py-2 rounded-md bg-greenGray text-softGray font-semibold hover:bg-opacity-90 transition w-full"
                >
                  Proceed
                </button>
              </div>
            ))}
          </div>
          {error && <p className="text-center text-red-500 mt-4 font-semibold">{error}</p>}
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-3xl font-heading font-bold text-center mb-6">Invest in {selectedPlan.title}</h2>
          <form
            onSubmit={handleCryptoAmountSubmit}
            className="max-w-md mx-auto bg-gradient-to-r from-navy via-greenGray to-navy border border-softGray rounded-xl p-6"
          >
            <div className="mb-6">
              <label className="block mb-2 font-semibold" htmlFor="crypto">
                Select Cryptocurrency
              </label>
              <select
                id="crypto"
                value={crypto}
                onChange={(e) => setCrypto(e.target.value)}
                className="w-full p-2 rounded-md bg-navy border border-softGray text-softGray"
                required
              >
                <option value="">-- Select --</option>
                {CRYPTO_OPTIONS.map((coin) => (
                  <option key={coin} value={coin}>
                    {coin}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold" htmlFor="amount">
                Enter Amount ($)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={`Between ${selectedPlan.min} and ${selectedPlan.max}`}
                min={selectedPlan.min}
                max={selectedPlan.max}
                className="w-full p-2 rounded-md bg-navy border border-softGray text-softGray"
                required
              />
            </div>

            {error && <p className="text-red-500 mb-4 font-semibold">{error}</p>}

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-2 rounded-md bg-gray-600 text-softGray font-semibold hover:bg-opacity-90 transition"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-md bg-greenGray text-softGray font-semibold hover:bg-opacity-90 transition"
              >
                Proceed
              </button>
            </div>
          </form>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-3xl font-heading font-bold text-center mb-6 max-w-md mx-auto">Confirm Your Investment</h2>
          <div className="max-w-md mx-auto bg-gradient-to-r from-navy via-greenGray to-navy border border-softGray rounded-xl p-6 text-center">
            <p className="mb-3 text-lg">
              <strong>Plan:</strong> {selectedPlan.title}
            </p>
            <p className="mb-3 text-lg">
              <strong>Amount:</strong> ${Number(amount).toLocaleString()}
            </p>
            <p className="mb-3 text-lg">
              <strong>Cryptocurrency:</strong> {crypto}
            </p>
            <p className="mb-6 text-lg">Please send your payment to the following wallet address:</p>
            <div className="bg-navy p-2 rounded-md border border-softGray mb-6 flex items-center max-w-full">
                <p className="break-all font-mono flex-1 mr-2 select-text">
                    {WALLET_ADDRESS}
                </p>
                <button
                    onClick={handleCopy}
                    aria-label="Copy wallet address"
                    className="p-2 rounded-md hover:bg-greenGray hover:bg-opacity-50 transition flex items-center justify-center"
                >
                    <FaCopy size={20} />
                </button>
            </div>
            <img
              src={QR_CODE_URL}
              alt="QR Code"
              className="mx-auto mb-6 rounded-md border border-softGray"
              style={{ width: "150px", height: "150px" }}
            />

            <p className="mb-4 font-semibold">Time remaining to pay: <span className="text-greenGray">{formatTime(countdown)}</span></p>

            <button
              onClick={handlePaidProceed}
              className="px-8 py-3 rounded-md bg-greenGray text-navy font-bold hover:bg-opacity-90 transition"
            >
              I have Paid
            </button>
          </div>
        </>
      )}

      {step === 4 && (
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <h2 className="text-3xl font-heading font-bold text-center mb-4">Processing payment...</h2>
          <p className="text-softGray text-center mb-2">
            This may take up to 2 minutes. Please do not refresh or navigate away.
          </p>
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-greenGray h-24 w-24 mb-4"></div>
          {/* Simple CSS loader below */}
          <style>{`
            .loader {
              border-top-color: transparent;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              0% {transform: rotate(0deg);}
              100% {transform: rotate(360deg);}
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default Invest;
