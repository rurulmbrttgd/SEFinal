import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './components.css';

export default function Customer() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/customers')
      .then((res) => {
        setData(res.data.customers);
      })
      .catch((err) => {
        setError(`Error: ${err.message}`);
      });
  }, []);

  const handleRowClick = (customerId) => {
    navigate(`/customers/${customerId}`);
  };

  return (
    <table className='table'>
      <thead>
        <tr className='content-color'>
          <th scope="col">Customer ID</th>
          <th scope="col">Customer Firstname</th>
          <th scope="col">Customer Lastname</th>
          <th scope="col">Email</th>
          <th scope="col">Contact Number</th>
          <th scope="col">CLV (Customer Lifetime Value)</th>
        </tr>
      </thead>
      <tbody className='content-color'>
        {data.map((customer, index) => (
          <tr key={index} className="clickable-row" onClick={() => handleRowClick(customer.customer_id)}>
            <td className='customer-data'>{customer.customer_id}</td>
            <td className='customer-data'>{customer.customer_fname}</td>
            <td className='customer-data'>{customer.customer_lname}</td>
            <td className='customer-data'>{customer.customer_email}</td>
            <td className='customer-data'>{customer.customer_phone}</td>
            <td className='customer-data'>{customer.customer_CLV}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
