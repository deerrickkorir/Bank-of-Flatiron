// AddTransaction.js
import React, { useState } from 'react';

function AddTransaction({ addTransaction }) {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    const newTransaction = {
      id: Date.now(), 
      date: date,
      description: description,
      category: category,
      amount: parseFloat(amount) 
    };

    addTransaction(newTransaction);

    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  }

  return (
    <div className='container1'>
      <form onSubmit={handleSubmit}>
        <div className='formInput'>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            placeholder='date'
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder='Description'
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder='Category'
          />
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder='Amount'
          />
        </div>
        <div className='button23'>
          <button type="submit" className='button'>
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
