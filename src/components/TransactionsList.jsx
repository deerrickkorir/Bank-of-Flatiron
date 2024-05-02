import React from "react";
import Transaction from "./Transaction";
import db from "./db.json";

function TransactionsList() {
  // Use transactions data from db.json
  const transactions = db.transactions;

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
