import React, { useEffect, useState } from "react";
import NewItem from "./NewItem";

function Items() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState(""); // To store sorting type

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.log(err.message));
  }, []);

  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  const handleDelete = (id) => {
    // Send a DELETE request to the API
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Remove the deleted transaction from the state
        setTransactions((prevTransactions) =>
          prevTransactions.filter((transaction) => transaction.id !== id)
        );
      })
      .catch((error) => console.log("Error deleting transaction: ", error));
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.includes(searchTerm)
  );

  // Sort transactions based on sortType
  if (sortType === "category") {
    filteredTransactions.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortType === "description") {
    filteredTransactions.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  return (
    <div>
      <NewItem onAddNewTransaction={addTransaction} />
      <div>
       
      </div>
          <input className="button-18" onClick={() => setSortType("category")} value="Sort by Category"/>
          <input className="button-18" onClick={() => setSortType("description")} value= "Sort by Description"/>
          <input
        className="button-20"
          type="text"
          placeholder="Search by description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>AMOUNT</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>
                  <button onClick={() => handleDelete(transaction.id)} className="button-18">
                    Delete Transaction
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Items;
