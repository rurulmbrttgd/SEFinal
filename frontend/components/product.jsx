import React, { useEffect, useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// export default function Product() {    
//     return (
//         <div className='product-root'>
//                         <div className='firstColumn'>
//                             <input type="checkbox" />
//                         </div>
//                         <div className='secondRow'>
//                             <h4 className='Header'>Product ID</h4>
//                         </div>
//                         <div className='thirdRow'>
//                             <h4 className='Header'>
//                                 Category
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     viewBox="0 0 20 20"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         d="M7.2801 13.8241L12.1347 13.839C12.4374 13.8401 12.6824 14.0935 12.6824 14.4043V17.1353C12.6824 17.4471 12.5053 17.7293 12.2294 17.8597L7.8227 19.9289C7.71974 19.9767 7.6106 20 7.50147 20C7.35629 20 7.21112 19.9576 7.08448 19.8738C6.86311 19.7274 6.72927 19.475 6.72927 19.2046V14.3894C6.72927 14.0766 6.97637 13.8231 7.2801 13.8241ZM17.8718 0C19.0476 0 20 0.981053 20 2.19225V3.72376C20 4.31133 19.7704 4.87557 19.3627 5.28708L12.8577 11.867C12.7454 11.9816 12.5931 12.0452 12.4355 12.0442L6.98893 12.0272C6.82317 12.0272 6.66564 11.9561 6.55238 11.832L0.574517 5.25738C0.204891 4.85117 0 4.31451 0 3.7577V2.19332C0 0.982113 0.952381 0 2.12819 0H17.8718Z"
//                                         fill="black"
//                                     />
//                                 </svg>
//                             </h4>
//                         </div>
//                         <div className='fourthRow'>
//                             <h4 className='styles.Header'>Product Name</h4>
//                         </div>
//                         <div className='styles.fifthRow'>
//                             <h4 className='styles.Header'>Price</h4>
//                         </div>
//                         <div className='styles.sixthRow'>
//                             <h4 className='styles.Header'>Stock</h4>
//                         </div>
//                         <div className='styles.search'>
//                             <h4 className='styles.searchHeader'>Search</h4>
//                         </div>
//                     </div>
//     );
// };


export default function Product() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios.get('http://localhost:8081/product')
        .then((res) => {
          setData(res.data.customers); // Assuming the data is in the 'customers' field
        })
        .catch((err) => {
          setError(`Error: ${err.message}`);
        });
    }, []);
  
      return (
        <table className='table'>
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Category</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Search</th>
          </tr>
        </thead>
    <tbody>
      
  {data.map((product, index) => {
  return (  
    <tr key={index} className="clickable-row" onClick={() => handleRowClick(product.product_id)}>
   
      <td className='product-data'>{product.product_id}</td>
      <td className='product-data'>{product.category}</td>
      <td className='product-data'>{product.product_name}</td>
      <td className='product-data'>{product.product_price}</td>
      <td className='product-data'>{product.product_stock}</td>
    </tr>
  );
  })}
  </tbody>
  
      </table>
      );
    };