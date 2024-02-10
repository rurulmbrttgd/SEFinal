import React, { useState } from 'react';
import './style.css';
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink and useNavigate
import axios from 'axios';

export default function Sidebar() {
    const [activeButton, setActiveButton] = useState('');

    const handleSetActiveButton = (buttonName) => {
        setActiveButton(buttonName);
    };
    
    const navigate = useNavigate();
    
    const handleHome = () => {
        navigate('/home');
    };
    
    const handleCustomers = () => {
        navigate('/customers');
    };
    
    const handleProduct = () => {
        navigate('/product');
    };

    const handleDataBackup = () => {
        navigate('/databackup');
    };
    
    const handleMessageUs = () => {
        navigate('/messageus');
    };

    const handleLogout = async () => {
        try {
          // Make a request to the logout endpoint on the server
          await axios.post('http://localhost:8081/logout');
    
          // Clear the token from localStorage (optional, as the server already cleared the cookie)
          localStorage.removeItem('token');
    
          // Navigate to the login page
          navigate('/');
        } catch (error) {
          console.error('Error during logout:', error);
          // Handle errors if needed
        }
      };

    return (
        <div className="root-side-bar">
            <NavLink
                to="/home"
                className={`sidebar-button ${activeButton === 'Home' ? 'active' : ''}`}
                onClick={() => handleSetActiveButton('Home')}
            >
                <img src="assets/home.png" alt="" className="icon" />
                <span className="sidebar-button-text">Home</span>
            </NavLink>
            <NavLink
                to="/customers"
                className={`sidebar-button ${activeButton === 'Customers' ? 'active' : ''}`}
                onClick={() => handleSetActiveButton('Customers')}
            >
                <img src="assets/customer.png" alt="" className="icon" />
                <span className="sidebar-button-text">Customers</span>
            </NavLink>
            <NavLink
                to="/product"
                className={`sidebar-button ${activeButton === 'Product' ? 'active' : ''}`}
                onClick={() => handleSetActiveButton('Product')}
            >
                <img src="assets/product.png" alt="" className="icon" />
                <span className="sidebar-button-text">Product</span>
            </NavLink>
            <NavLink
                to="/databackup"
                className={`sidebar-button ${activeButton === 'DataBackup' ? 'active' : ''}`}
                onClick={() => handleSetActiveButton('DataBackup')}
            >
                <img src="assets/backup.png" alt="" className="icon" />
                <span className="sidebar-button-text">Data backup &amp; Restore</span>
            </NavLink>
            <NavLink
                to="/messageus"
                className={`sidebar-button ${activeButton === 'MessageUs' ? 'active' : ''}`}
                onClick={() => handleSetActiveButton('MessageUs')}
            >
                <img src="assets/message.png" alt="" className="icon" />
                <span className="sidebar-button-text">Message Us</span>
            </NavLink>
            <NavLink
                to="/"
                className={`sidebar-button ${activeButton === 'LogOut' ? 'active' : ''}`}
                onClick={() => handleLogout('LogOut')}
            >
                <img src="assets/logout.png" alt="" className="icon" />
                <span className="sidebar-button-text">Log out</span>
            </NavLink>
        </div>
    );
};
