import React, { useEffect, useState } from 'react'

function Items() {
    const[transactions, setTransactions] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/transactions")
        .then((res)=> res.json())
        .then((data)=> setTransactions(data))
    }, [])

  
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>DATE</th>
                <th>DESCRIPTION</th>
                <th>CATEGORY</th>
                <th>AMOUNT</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map((transaction)=> {
                return(
                <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                </tr>
            )})}
        </tbody>
       
        
        
      </table>
    </div>
  )
}

export default Items
