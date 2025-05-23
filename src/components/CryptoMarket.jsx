import React, { useEffect, useState } from "react";

const coins = [
  { symbol: "BTCUSD", name: "Bitcoin BTC" },
  { symbol: "ETHUSD", name: "Ethereum ETH" },
  { symbol: "USDTUSD", name: "Tether USDT" },
  { symbol: "BNBUSD", name: "Binance Coin BNB" },
  { symbol: "SOLUSD", name: "Solana SOL" },
  { symbol: "XRPUSD", name: "Ripple XRP" },
  { symbol: "ADAUSD", name: "Cardano ADA" },
  { symbol: "DOGEUSD", name: "Dogecoin DOGE" },
  { symbol: "TONUSD", name: "Toncoin TON" },
  { symbol: "AVAXUSD", name: "Avalanche AVAX" },
  { symbol: "TRXUSD", name: "Tron TRX" },
  { symbol: "PIUSDT", name: "Pi Network PI" },
];

const Chart = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCoins = showAll ? coins : coins.slice(0, 4);

  useEffect(() => {
    const loadWidgetScript = () => {
      return new Promise((resolve, reject) => {
        if (window.TradingView) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/tv.js";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject("Failed to load TradingView script.");
        document.head.appendChild(script);
      });
    };

    loadWidgetScript()
      .then(() => {
        visibleCoins.forEach((coin, index) => {
          const containerId = `tradingview_${coin.symbol}_${index}`;
          if (document.getElementById(containerId)?.children.length > 0) return;

          new window.TradingView.widget({
            width: "100%",
            height: "220",
            symbol: coin.symbol,
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            hide_top_toolbar: true,
            save_image: false,
            container_id: containerId,
          });
        });
      })
      .catch(console.error);
  }, [showAll]); // Re-run when showAll changes

  return (
    <div className="bg-dark text-softGray px-4 py-10">
      <h2 className="text-3xl font-heading font-bold text-center mb-10">Live Crypto Market</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {visibleCoins.map((coin, index) => {
          const containerId = `tradingview_${coin.symbol}_${index}`;
          return (
            <div
              key={index}
              className="rounded-xl shadow-md border border-softGray p-2 bg-gradient-to-r from-navy via-greenGray to-navy text-softGray"
            >
              <div id={containerId} className="w-full h-[220px]" />
              <p className="text-sm mt-2 text-center">{coin.name}</p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-md bg-greenGray text-navy font-semibold hover:bg-opacity-90 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Chart;





