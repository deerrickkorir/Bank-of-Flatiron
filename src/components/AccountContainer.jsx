import React, { useState } from 'react';
import TransactionsList from './TransactionsList';

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  // Function to add a new transaction
  const addTransaction = () => {
    // Check if all fields are filled
    if (!date || !description || !category || !amount) {
      console.error("Please fill in all fields.");
      return;
    }

    const newTransaction = {
      id: Date.now(), 
      date: date,
      description: description,
      category: category,
      amount: parseFloat(amount) 
    };

    setTransactions([...transactions, newTransaction]);

    // Reset input fields after adding transaction
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  // UI for adding a new transaction
  const addTransactionUI = (
    <div>
      <h2>Add New Transaction</h2>
      {/* Input fields for transaction data */}
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      {/* Button to add new transaction */}
      <button onClick={addTransaction}>Add Transaction</button>
    </div>
  );

  return (
    <div>
      {addTransactionUI}
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
