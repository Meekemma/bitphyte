import React, { useEffect, useState, useRef } from "react";

const retryFetch = async (fn, retries = 3, delay = 1000) => {
  try {
    return await fn();
  } catch (err) {
    if (retries <= 0) throw err;
    await new Promise((r) => setTimeout(r, delay));
    return retryFetch(fn, retries - 1, delay * 2); // exponential back-off
  }
};

const CryptoCalculator = () => {
  const [coins, setCoins] = useState([]);
  const [prices, setPrices] = useState({});
  const [state, setState] = useState({ loading: true, error: null });
  const [amount, setAmount] = useState("1");
  const [selectedCoin, setSelectedCoin] = useState("");

  const intervalRef = useRef(5000);
  const timerRef = useRef(null);

  const fetchTopCoins = async () => {
    try {
      const res = await retryFetch(() =>
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false")
      );
      if (!res.ok) throw new Error("Failed to fetch coin list");
      const json = await res.json();
      setCoins(json);
      if (!selectedCoin) setSelectedCoin(json[0].id); // set default selected coin
    } catch (err) {
      setState({ loading: false, error: err.message || "Error fetching coin list" });
    }
  };

  const fetchPrices = async () => {
    try {
      const ids = coins.map((coin) => coin.id).join(",");
      const res = await retryFetch(() =>
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`)
      );
      if (!res.ok) throw new Error("Failed to fetch prices");
      const json = await res.json();
      setPrices(json);
      setState({ loading: false, error: null });
      intervalRef.current = 5000;
    } catch (err) {
      setState({ loading: false, error: err.message || "Error fetching prices" });
      intervalRef.current = Math.min(intervalRef.current * 2, 30000);
    }
  };

  useEffect(() => {
    fetchTopCoins();
  }, []);

  useEffect(() => {
    if (coins.length > 0) {
      fetchPrices();
      timerRef.current = setInterval(fetchPrices, intervalRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [coins]);

  useEffect(() => {
    clearInterval(timerRef.current);
    if (coins.length > 0) {
      timerRef.current = setInterval(fetchPrices, intervalRef.current);
    }
  }, [intervalRef.current]);

  const handleAmountChange = (e) => {
    const val = e.target.value;
    if (val === "" || /^[0-9]*\.?[0-9]*$/.test(val)) setAmount(val);
  };

  const convertedValue =
    amount && prices[selectedCoin]
      ? (parseFloat(amount || 0) * prices[selectedCoin].usd).toFixed(2)
      : "0.00";

  return (
    <section className="max-w-7xl mt-12 mx-auto p-6 bg-gradient-to-r from-navy via-greenGray to-navy rounded-lg shadow-lg text-mediumGray">
      <h2 className="text-3xl font-bold mb-2 text-softGray text-center">Crypto Calculator</h2>
      <p className="text-lg text-mediumGray mb-10 text-center">
        Find out the current value of any top 50 crypto
      </p>

      {state.loading && <p className="text-center py-10 animate-pulse">Loading prices…</p>}
      {state.error && <p className="text-center py-4 text-red-500">{state.error}</p>}

      {!state.loading && coins.length > 0 && (
        <div className="max-w-md mx-auto bg-lightGray p-6 mt-4 rounded-lg shadow-md">
          <label className="block mb-2 text-navy font-semibold">Select Cryptocurrency</label>
          <select
            className="w-full mb-4 p-2 rounded bg-navy text-white focus:outline-none focus:ring-2 focus:ring-indigo"
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
          >
            {coins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-navy font-semibold">Amount</label>
          <input
            value={amount}
            onChange={handleAmountChange}
            className="w-full mb-6 p-2 rounded bg-navy text-softGray font-mono text-lg focus:outline-none focus:ring-2 focus:ring-indigo"
            placeholder="Enter amount"
          />

          <div className="text-navy font-semibold text-xl text-center">
            {amount && !isNaN(amount) ? (
              <>
                {amount} {selectedCoin.toUpperCase()} ={" "}
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


