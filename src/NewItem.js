// import React, { useState } from "react";

// function NewItem({onAddNewTransaction}) {
//   const [transactionDate, setTransactionDate] = useState("");
//   const [transactionCategory, setTransactionCategory] = useState("");
//   const [transactionDescription, setTransactionDescription] = useState("");
//   const [transactionAmount, setTransactionAmount] = useState([]);

//   function handleSubmit(e) {
//     e.preventDefault();

//     const newItem = {
//       date: transactionDate,
//       category: transactionCategory,
//       description: transactionDescription,
//       amount: transactionAmount,
//     };

//     onAddNewTransaction(NewItem) // To pass new item to the parent component

//     fetch("http://localhost:3000/transactions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newItem),
//     }).then((res)=> res.json())
//       .catch((err) => console.log(err.message));

//     setTransactionAmount("");
//     setTransactionCategory("");
//     setTransactionDescription("");
//     setTransactionDate("");
//   }


  

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           DATE:
//           <input
//             type="date"
//             name="date"
//             value={transactionDate}
//             onChange={(e) => setTransactionDate(e.target.value)}
//           />
//         </label>
//         <label>
//           DESCRIPTION:
//           <input
//             type="text"
//             name="description"
//             value={transactionDescription}
           
//             onChange={(e) => setTransactionDescription(e.target.value)}
//           />
//         </label>
//         <label>
//           CATEGORY:
//           <input
//             type="text"
//             name="category"
//             value={transactionCategory}
//             onChange={(e) => setTransactionCategory(e.target.value)}
//           />
//         </label>
//         <label>
//           AMOUNT:
//           <input
//             type="number"
//             name="amount"
//             value={transactionAmount}
//             onChange={(e) => setTransactionAmount(e.target.value)}
//           />
//         </label>
//         <button type="submit">Add new transaction</button>

//       </form>
//     </div>
//   );

//   }
// export default NewItem;


// NewItem.js
import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          DATE:
          <input
            type="date"
            name="date"
            value={transactionDate}
            onChange={(e) => setTransactionDate(e.target.value)}
          />
        </label>
        <label>
          DESCRIPTION:
          <input
            type="text"
            name="description"
            value={transactionDescription}
            onChange={(e) => setTransactionDescription(e.target.value)}
          />
        </label>
        <label>
          CATEGORY:
          <input
            type="text"
            name="category"
            value={transactionCategory}
            onChange={(e) => setTransactionCategory(e.target.value)}
          />
        </label>
        <label>
          AMOUNT:
          <input
            type="number"
            name="amount"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
        </label>
        <button type="submit">Add new transaction</button>
      </form>
    </div>
  );
}

export default NewItem;
