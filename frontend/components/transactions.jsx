import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './components.css';

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Fetch the customer ID from the URL params

  useEffect(() => {
    axios.get(`http://localhost:8081/customers/${id}`) // Use the fetched customer ID in the URL
      .then((res) => {
        setTransactions(res.data.transactions); // Assuming the transactions data is in the 'transactions' field
      })
      .catch((err) => {
        setError(`Error: ${err.message}`);
      });
  }, [id]); // Add id to the dependency array to trigger useEffect when id changes

  return (
    <div className='root-transact'>
      <h2 className='transac-title'>Transactions for Customer ID: {id}</h2>
      <table className='table'>
        <thead>
          <tr className='content-color'>
            <th scope="col">Transaction ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total Price</th>
            <th scope="col">Transaction Date</th>
            <th scope="col">Total Amount</th>

          </tr>
        </thead>
        <tbody className='content-color'>
          {transactions.map((transaction) => (
            <tr key={transaction.transaction_id}>
              <td>{transaction.transaction_id}</td>
              <td>{transaction.product_name}</td>
              <td>{transaction.product_quantity}</td>
              <td>{transaction.product_price}</td>
              <td>{transaction.total_price}</td>
              <td>{transaction.transaction_date}</td>
              <td>{transaction.total_amount}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
