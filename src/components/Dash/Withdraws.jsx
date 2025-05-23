import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Withdrawal = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [usdtAddress, setUsdtAddress] = useState("");
  const [network, setNetwork] = useState("BEP20");
  const [balance, setBalance] = useState(180); // Dummy balance
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (processing) {
      timerRef.current = setTimeout(() => {
        setProcessing(false);
        setStep(5);
      }, 60000); // 1 minute
    }
    return () => clearTimeout(timerRef.current);
  }, [processing]);

  const handleInitialProceed = () => setStep(2);

  const handleAmountProceed = () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0 || Number(amount) > balance) {
      setError("Enter a valid amount within your balance.");
      return;
    }
    setError("");
    setStep(3);
  };

  const handleWalletProceed = () => {
    if (!usdtAddress || !network) {
      setError("Please fill in all fields correctly.");
      return;
    }
    setError("");
    setProcessing(true);
    setStep(4);
  };

  const handleCancel = () => {
    clearTimeout(timerRef.current);
    setProcessing(false);
    setStep(1); // Return to start or modify to go to previous step
  };

  const goToTerms = () => navigate("/terms");
  const goToContact = () => navigate("/contact");
  const goToDashboard = () => navigate("/dashboard/home");

  return (
    <div className="bg-navy text-softGray rounded-xl px-6 py-8">
      {step === 1 && (
        <>
          <h2 className="text-3xl font-heading font-bold text-center mb-5">Withdraw Funds</h2>
          <p className="text-md md:text-lg font-medium text-center mb-8 px-4">
            Please note that a <span className="text-greenGray font-semibold">1% processing fee</span> will be charged on every withdrawal.
            Currently, we only process withdrawals via <span className="text-greenGray font-semibold">USDT (BEP20 Network)</span>.
            Ensure your wallet address is correct. By proceeding, you agree to our
            <button onClick={goToTerms} className="text-greenGray underline ml-1">terms of service</button>.
          </p>
          <button
            onClick={handleInitialProceed}
            className="bg-greenGray text-navy font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 mx-auto block"
          >
            Proceed
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold text-center mb-4">Enter Amount</h2>
          <p className="text-center mb-2 font-medium">Your Balance: <span className="text-greenGray">${balance.toLocaleString()}</span></p>
          <input
            type="number"
            placeholder="Enter amount to withdraw"
            className="w-full p-3 rounded-md mb-4 bg-navy border border-softGray text-white"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setStep(1)}
              className="bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-80"
            >
              Back
            </button>
            <button
              onClick={handleAmountProceed}
              className="bg-greenGray text-navy font-bold py-2 px-6 rounded-lg hover:bg-opacity-80"
            >
              Proceed
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-2xl font-bold text-center mb-4">Wallet Details</h2>
          <input
            type="text"
            placeholder="Enter your USDT BEP20 address"
            className="w-full p-3 rounded-md mb-4 bg-navy border border-softGray text-white"
            value={usdtAddress}
            onChange={(e) => setUsdtAddress(e.target.value)}
          />
          <select
            className="w-full p-3 rounded-md mb-4 bg-navy border border-softGray text-white"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
          >
            <option value="BEP20">BEP20</option>
            <option value="ERC20">ERC20</option>
            <option value="TRC20">TRC20</option>
          </select>
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setStep(2)}
              className="bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-80"
            >
              Back
            </button>
            <button
              onClick={handleWalletProceed}
              className="bg-greenGray text-navy font-bold py-2 px-6 rounded-lg hover:bg-opacity-80"
            >
              Proceed
            </button>
          </div>
        </>
      )}

      {step === 4 && (
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-greenGray border-opacity-70 mx-auto mb-6"></div>
          <h3 className="text-xl font-bold mb-2">Processing Withdrawal...</h3>
          <p className="text-md mb-4">Please wait while we process your payment. This may take up to a minute.</p>
          <button
            onClick={handleCancel}
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 inline-block"
          >
            Cancel
          </button>
        </div>
      )}

      {step === 5 && (
        <div className="text-center">
          <h3 className="text-xl font-bold text-red-500 mb-2">Payment Failed</h3>
          <p className="mb-4">Please try again later or contact our support team.</p>
          <p className="mb-2">
            <button onClick={goToContact} className="text-greenGray underline">Contact Support</button> or email <a href="mailto:support@bitphyte.com" className="text-greenGray underline">support@bitphyte.com</a>
          </p>
          <button onClick={goToDashboard} className="bg-greenGray text-navy font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 inline-block">Go to Dashboard</button>
        </div>
      )}
    </div>
  );
};

export default Withdrawal;




