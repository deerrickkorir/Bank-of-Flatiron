import React from "react";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer() {
  return (
    <div>
     
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;