import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import { useHistory } from 'react-router-dom'

export default function Topbar() {
          
    const navigate = useNavigate();

    const handleSupportClick = () => {
      // Navigate to the desired page when the support image is clicked
      navigate('/help');
    };

    return (
        <div className="root-top-bar">
            <div className="top-bar-logo">
            <img
                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1706257191/salesoptima-logo2_ltpbkb.png"
                alt="SalesOptima Logo"
            />
            <h1 className="Sales-text">SALES</h1>
            <h1 className="Optima-text">OPTIMA</h1>
            </div>
            <a href="/help" onClick={handleSupportClick}>
              <img className='w-75'
              src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1706257373/Online_Support_cfiypq.png"
              alt="Online Support"
              />
            </a>
      </div>
    );
};