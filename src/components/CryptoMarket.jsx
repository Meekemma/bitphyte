import React, { useEffect, useState, useRef } from "react";

const retryFetch = async (fn, retries = 3, delay = 1000) => {
  try {
    return await fn();
  } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retryFetch(fn, retries - 1, delay * 2);
  }
};

const MarketData = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState({ loading: true, error: null });
  const [viewCount, setViewCount] = useState(10);
  const [page, setPage] = useState(1);

  const intervalRef = useRef(5000);
  const timerRef = useRef(null);

  const fetchMarketData = async () => {
    try {
      const res = await retryFetch(() =>
        fetch("https://api.coincap.io/v2/assets?limit=50")
      );
      if (!res.ok) throw new Error("Failed to fetch market data");
      const json = await res.json();
      setData(json.data);
      setState({ loading: false, error: null });
      intervalRef.current = 5000;
    } catch (err) {
      setState({ loading: false, error: err.message || "Error fetching data" });
      intervalRef.current = Math.min(intervalRef.current * 2, 30000);
    }
  };

  useEffect(() => {
    // stagger first call at t = 2.5 s to avoid collision with calculator
    const first = setTimeout(fetchMarketData, 2500);
    timerRef.current = setInterval(fetchMarketData, intervalRef.current);

    return () => {
      clearTimeout(first);
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(fetchMarketData, intervalRef.current);
  }, [intervalRef.current]);

  /* pagination handlers ... unchanged */
  const handleShowMore = () => { setViewCount(25); setPage(2); };
  const handleNextPage  = () => { setViewCount(50); setPage(3); };
  const handleReset     = () => { setViewCount(10); setPage(1); };

  return (
    <section className="max-w-7xl mt-2 mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-gray-300">
      <h2 className="text-3xl font-bold mb-6 text-indigo">Market Overview</h2>

      {state.loading && <p className="text-center py-10 animate-pulse">Loading market data…</p>}
      {state.error && <p className="text-center py-4 text-red-500">{state.error}</p>}

      {!state.loading && !state.error && (
        <>
          {/* table unchanged */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-indigo/20 text-indigo">
                  <th className="p-3 text-left">Coin</th>
                  <th className="p-3 text-right">Price (USD)</th>
                  <th className="p-3 text-right">24h Change</th>
                  <th className="p-3 text-right">Market Cap</th>
                  <th className="p-3 text-right">Volume (24h)</th>
                </tr>
              </thead>
              <tbody>
                {data.slice(0, viewCount).map(coin => {
                  const priceChange = parseFloat(coin.changePercent24Hr);
                  return (
                    <tr key={coin.id} className="border-b border-gray-700 hover:bg-indigo/10">
                      <td className="flex items-center gap-3 p-3">
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-400 uppercase font-bold">
                          {coin.symbol.slice(0, 3)}
                        </div>
                        <div>
                          <p className="font-semibold">{coin.name}</p>
                          <p className="text-xs text-gray-500 uppercase">{coin.symbol}</p>
                        </div>
                      </td>
                      <td className="text-right font-mono">${parseFloat(coin.priceUsd).toFixed(4)}</td>
                      <td className={`text-right font-semibold ${priceChange > 0 ? "text-green-500" : "text-red-500"}`}>
                        {priceChange.toFixed(2)}%
                      </td>
                      <td className="text-right">${parseFloat(coin.marketCapUsd).toLocaleString()}</td>
                      <td className="text-right">${parseFloat(coin.volumeUsd24Hr).toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* pagination controls unchanged */}
          <div className="flex justify-center mt-6 gap-6">
            {page === 1 && <button onClick={handleShowMore} className="text-indigo text-3xl">▼</button>}
            {page === 2 && (
              <>
                <button onClick={handleNextPage} className="text-indigo text-3xl">→</button>
                <button onClick={handleReset} className="text-indigo/80">Reset</button>
              </>
            )}
            {page === 3 && <button onClick={handleReset} className="text-indigo/80">← Back to first</button>}
          </div>
        </>
      )}
    </section>
  );
};

export default MarketData;



