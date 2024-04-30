import React from "react";


function TransactionsList() {
  // Your transactions data
  const transactions = [
    {
      "id": 3,
      "date": "2012-06-04",
      "description": "car hire",
      "category": "vehicles",
      "amount": -2255
    },
    {
      "id": 7,
      "date": "2023-12-07",
      "description": "Marketing",
      "category": "Per Item",
      "amount": 200
    },
    {
      "id": 8,
      "date": "2020-11-30",
      "description": "Labour",
      "category": "construction",
      "amount": 3000
    },
    {
      "id": 9,
      "date": "2012-12-11",
      "description": "management",
      "category": "daily earning",
      "amount": 10000
    },
    {
      "id": 11,
      "date": "2009-05-18",
      "description": "Air bnb",
      "category": "appartments",
      "amount": 116
    },
    {
      "id": 12,
      "date": "2007-10-11",
      "description": "accesories",
      "category": "industrial",
      "amount": 2000
    }
  ];

  return (
    <div>
      <h3>Transactions List</h3>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id} className={index % 2 === 0 ? "even" : "odd"}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;
