import React, { useState } from "react";
import './App.css'

function NewItem({ onAddNewTransaction }) {
  const [transactionDate, setTransactionDate] = useState("");
  const [transactionCategory, setTransactionCategory] = useState("");
  const [transactionDescription, setTransactionDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      date: transactionDate,
      category: transactionCategory,
      description: transactionDescription,
      amount: transactionAmount,
    };

    // Pass new item to the parent component
    onAddNewTransaction(newItem);

    // Clear input fields after submission
    setTransactionDate("");
    setTransactionCategory("");
    setTransactionDescription("");
    setTransactionAmount("");
  }

  return (
    <div className="container">
        <div className='text'>Bank Transactions</div>
      <form onSubmit={handleSubmit}>
      <div className="form-row">
          <div className="input-data">
              <input type="date" name="date" value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} required/>
              <div class="underline"></div>
              <label for="">DATE</label>
          </div>
          <div className="form-row">
              <div className="input-data">
                <input type="text" name="description" value={transactionDescription} onChange={(e) => setTransactionDescription(e.target.value)} required/>
                <div className="underline"></div>
              </div>
              <label for="">DESCRIPTION</label>
          </div>
      </div>
        <div className="form-row">
          <div className="input-data">
              <input type="text" name="category" value={transactionCategory} onChange={(e) => setTransactionCategory(e.target.value)} required/>
              <div className="underline"></div>
              <label for="">CATEGORY:</label>
          </div>
          <div className="input-data">
              <input type="number" name="amount" value={transactionAmount} onChange={(e) => setTransactionAmount(e.target.value)} required/>
              <div className="underline"></div>
             <label for="">AMOUNT:</label>
          </div>
        </div>
        <br/>
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="New Transaction"/>
            </div>
          </div>
      </form>
    </div>
  );
}

export default NewItem;
