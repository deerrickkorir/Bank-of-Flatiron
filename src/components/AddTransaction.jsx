import React from 'react';
import AddTransactionForm from './AddTransaction'; // Adjusted import path

function AccountContainer() {
  return (
    <div>
      <h1>Account Container</h1>
      <AddTransactionForm /> {/* Render AddTransactionForm component */}
    </div>
  );
}

export default AccountContainer;
