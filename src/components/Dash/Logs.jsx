import React, { useState, useEffect } from "react";

const TRANSACTION_TYPES = {
  ALL: "All",
  DEPOSIT: "Deposit",
  WITHDRAWAL: "Withdrawal",
};

const TIMEFRAMES = {
  ALL: "All Time",
  LAST_7_DAYS: "Last 7 Days",
  LAST_30_DAYS: "Last 30 Days",
};

const dummyTransactions = [
  {
    id: 1,
    type: "Deposit",
    amount: 500,
    date: new Date("2025-05-01T10:00:00"),
    status: "Ok",
  },
  {
    id: 2,
    type: "Withdrawal",
    amount: 200,
    date: new Date("2025-05-15T14:30:00"),
    status: "Ok",
  },
  {
    id: 3,
    type: "Deposit",
    amount: 1000,
    date: new Date("2025-04-25T08:20:00"),
    status: "Ok",
  },
  {
    id: 4,
    type: "Withdrawal",
    amount: 150,
    date: new Date("2025-05-20T09:15:00"),
    status: "Pending",
  },
  {
    id: 5,
    type: "Deposit",
    amount: 700,
    date: new Date("2025-03-30T12:45:00"),
    status: "Ok",
  },
];

const TransactionLogs = () => {
  const [transactions, setTransactions] = useState(dummyTransactions);
  const [filteredTransactions, setFilteredTransactions] = useState(dummyTransactions);
  const [selectedType, setSelectedType] = useState(TRANSACTION_TYPES.ALL);
  const [selectedTimeframe, setSelectedTimeframe] = useState(TIMEFRAMES.ALL);

  useEffect(() => {
    filterTransactions();
  }, [selectedType, selectedTimeframe]);

  const filterTransactions = () => {
    let filtered = [...transactions];

    // Filter by transaction type
    if (selectedType !== TRANSACTION_TYPES.ALL) {
      filtered = filtered.filter(txn => txn.type === selectedType);
    }

    // Filter by timeframe
    if (selectedTimeframe !== TIMEFRAMES.ALL) {
      const now = new Date();
      let thresholdDate;

      if (selectedTimeframe === TIMEFRAMES.LAST_7_DAYS) {
        thresholdDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      } else if (selectedTimeframe === TIMEFRAMES.LAST_30_DAYS) {
        thresholdDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      }

      filtered = filtered.filter(txn => txn.date >= thresholdDate);
    }

    setFilteredTransactions(filtered);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  return (
    <div className="bg-navy text-softGray rounded-xl px-2 py-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-heading font-bold text-center mb-6">Transactions</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
        {/* Timeframe Filter */}
        <div>
          <label htmlFor="timeframe" className="block mb-1 font-semibold text-greenGray">
            Filter by Timeframe
          </label>
          <select
            id="timeframe"
            className="bg-navy border border-softGray rounded-md px-3 py-2 text-white"
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
          >
            {Object.values(TIMEFRAMES).map((tf) => (
              <option key={tf} value={tf}>
                {tf}
              </option>
            ))}
          </select>
        </div>

        {/* Transaction Type Filter */}
        <div>
          <label htmlFor="transactionType" className="block mb-1 font-semibold text-greenGray">
            Filter by Transaction Type
          </label>
          <select
            id="transactionType"
            className="bg-navy border border-softGray rounded-md px-3 py-2 text-white"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {Object.values(TRANSACTION_TYPES).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-softGray text-left">
          <thead>
            <tr className="bg-greenGray text-navy">
              <th className="py-3 px-2 border border-softGray">Date</th>
              <th className="py-3 px-2 border border-softGray">Type</th>
              <th className="py-3 px-2 border border-softGray">Amount (USD)</th>
              <th className="py-3 px-2 border border-softGray">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-6 text-center text-greenGray font-semibold">
                  No transactions found.
                </td>
              </tr>
            ) : (
              filteredTransactions.map((txn) => (
                <tr key={txn.id} className="odd:bg-navyAlt even:bg-navy">
                  <td className="py-3 px-2 border border-softGray">{formatDate(txn.date)}</td>
                  <td className="py-3 px-2 border border-softGray">{txn.type}</td>
                  <td className="py-3 px-2 border border-softGray">${txn.amount.toLocaleString()}</td>
                  <td className={`py-3 px-2 border border-softGray font-semibold ${
                    txn.status === "Ok" ? "text-greenGray" : "text-yellow-400"
                  }`}>
                    {txn.status}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionLogs;
