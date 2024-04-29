import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("http://localhost:8000/transactions?q=" + query)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch transactions");
        }
        return resp.json();
      })
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <TransactionsList transactions={transactions} />
      )}
    </div>
  );
}

export default AccountContainer;
