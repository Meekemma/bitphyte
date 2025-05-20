import React, { useEffect, useState } from "react";

const COINS = [
  "bitcoin",
  "ethereum",
  "binancecoin",
  "cardano",
  "solana",
  "tether",
  "xrp",
];

const CryptoCalculator = () => {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [amount, setAmount] = useState(1);
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");

  // Fetch prices from CoinGecko
  const fetchPrices = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${COINS.join(
          ","
        )}&vs_currencies=usd`
      );
      if (!res.ok) throw new Error("Failed to fetch prices");
      const json = await res.json();
      setPrices(json);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError(err.message || "Error fetching prices");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAmountChange = (e) => {
    const val = e.target.value;
    if (val === "" || /^[0-9]*\.?[0-9]*$/.test(val)) {
      setAmount(val);
    }
  };

  const convertedValue =
    amount && prices[selectedCoin]
      ? (parseFloat(amount) * prices[selectedCoin].usd).toFixed(2)
      : "0.00";

  return (
    <section className="max-w-7xl mt-12 mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-gray-800">
      <h2 className="text-3xl font-bold mb-2 text-indigo text-center">Crypto Calculator</h2>
      <p classname="text-2xl md:text-lg text-gray-300 mb-10">Find out the current value of any crypto</p>

      {loading && (
        <p className="text-center py-10 text-gray-500 animate-pulse">
          Loading prices...
        </p>
      )}

      {error && (
        <p className="text-center py-10 text-red-600 font-semibold">{error}</p>
      )}

      {!loading && !error && (
        <div className="max-w-md mx-auto bg-gray-800 p-6 mt-4 rounded-lg shadow-md">
          <label className="block mb-2 text-indigo-300 font-semibold">
            Select Cryptocurrency
          </label>
          <select
            className="w-full mb-4 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
          >
            {COINS.map((coin) => (
              <option key={coin} value={coin}>
                {coin.charAt(0).toUpperCase() + coin.slice(1)}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-indigo-300 font-semibold">
            Amount
          </label>
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="w-full mb-6 p-2 rounded bg-gray-700 text-white font-mono text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter amount"
          />

          <div className="text-indigo-400 font-semibold text-xl text-center">
            {amount && !isNaN(amount) ? (
              <>
                {amount} {selectedCoin.charAt(0).toUpperCase() + selectedCoin.slice(1)} ={" "}
                <span className="text-green-400">${convertedValue}</span>
              </>
            ) : (
              "Enter a valid amount"
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CryptoCalculator;
