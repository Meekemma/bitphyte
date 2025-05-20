import React, { useEffect, useState } from "react";

const MarketData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [viewCount, setViewCount] = useState(10);
  const [page, setPage] = useState(1);

  const fetchMarketData = async () => {
    try {
      const res = await fetch("https://api.coincap.io/v2/assets?limit=50");
      if (!res.ok) throw new Error("Failed to fetch market data");
      const json = await res.json();
      setData(json.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError(err.message || "Error fetching data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
    const interval = setInterval(fetchMarketData, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleShowMore = () => {
    setViewCount(25);
    setPage(2);
  };

  const handleNextPage = () => {
    setViewCount(50);
    setPage(3);
  };

  const handleReset = () => {
    setViewCount(10);
    setPage(1);
  };

  return (
    <section className="max-w-7xl mt-2 mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-indigo">Market Overview</h2>

      {loading && (
        <p className="text-center py-10 text-gray-500 animate-pulse">
          Loading market data...
        </p>
      )}

      {error && (
        <p className="text-center py-10 text-red-600 font-semibold">{error}</p>
      )}

      {!loading && !error && (
        <>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-indigo-100 text-indigo-700">
                  <th className="p-3 text-left">Coin</th>
                  <th className="p-3 text-right">Price (USD)</th>
                  <th className="p-3 text-right">24h Change</th>
                  <th className="p-3 text-right">Market Cap</th>
                  <th className="p-3 text-right">Volume (24h)</th>
                </tr>
              </thead>
              <tbody>
                {data.slice(0, viewCount).map((coin) => {
                  const priceChange = parseFloat(coin.changePercent24Hr);
                  const priceChangeColor =
                    priceChange > 0 ? "text-green-600" : "text-red-600";

                  return (
                    <tr
                      key={coin.id}
                      className="border-b border-gray-200 hover:bg-indigo-50 transition-colors"
                    >
                      <td className="flex items-center gap-3 p-3">
                        {/* CoinCap API does not provide coin images, so placeholder */}
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-400 uppercase font-bold">
                          {coin.symbol.slice(0, 3)}
                        </div>
                        <div>
                          <p className="font-semibold">{coin.name}</p>
                          <p className="text-xs text-gray-500 uppercase">
                            {coin.symbol}
                          </p>
                        </div>
                      </td>
                      <td className="text-right font-mono">
                        ${parseFloat(coin.priceUsd).toFixed(4)}
                      </td>
                      <td className={`text-right font-semibold ${priceChangeColor}`}>
                        {priceChange?.toFixed(2)}%
                      </td>
                      <td className="text-right">
                        ${parseFloat(coin.marketCapUsd).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </td>
                      <td className="text-right">
                        ${parseFloat(coin.volumeUsd24Hr).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center mt-6 gap-6">
            {page === 1 && (
              <button
                onClick={handleShowMore}
                aria-label="Show more coins"
                className="text-indigo-500 hover:text-indigo-700 text-3xl"
                title="Show more coins"
              >
                ▼
              </button>
            )}

            {page === 2 && (
              <>
                <button
                  onClick={handleNextPage}
                  aria-label="Next page"
                  className="text-indigo-500 hover:text-indigo-700 text-3xl"
                  title="Next page"
                >
                  →
                </button>
                <button
                  onClick={handleReset}
                  aria-label="Show less"
                  className="text-indigo-400 hover:text-indigo-600 text-xl"
                  title="Show less"
                >
                  Reset
                </button>
              </>
            )}

            {page === 3 && (
              <button
                onClick={handleReset}
                aria-label="Back to first page"
                className="text-indigo-400 hover:text-indigo-600 text-xl"
                title="Back to first page"
              >
                ← Back to first page
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default MarketData;


