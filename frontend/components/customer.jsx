import React, { useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Customer() {
    return (
    <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">Customer ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact Number</th>
              <th scope="col">CLV (Customer Lifetime Value) </th>
              <th scope="col">Search</th>
            </tr>
          </thead>
      {/* <tbody>
        
  {data.map((customer, index) => {
    return (  
      <tr key={index} className="clickable-row" onClick={() => handleRowClick(customer.id)}>
     
        <td>{customer.ID}</td>
        <td>{customer.fullName}</td>
        <td>{customer.email}</td>
        <td>{customer.contact}</td>
        <td>{customer.clv}</td>
        <td>
        
        <Link to={`/EmployeeDetails/${employee.ID}`} className='btn bi-eye-fill text-info view'></Link>
        <Link to={`/EmployeeEdit`} className="btn btn-primary btn-sm me-2">Edit</Link>
          <button onClick={e => handleDelete(employee.ID)} className="btn btn-sm btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  })}
</tbody> */}

        </table>

    </div>
    )
    }