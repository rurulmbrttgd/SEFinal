import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import { useHistory } from 'react-router-dom'

export default function Sidebar() {

    // const [values, setValues] = useState({
    //     username: '',
    //     password: ''
    // })

    // const navigate = useNavigate()
    // axios.defaults.withCredentials = true;
    // const [error, setError] = useState('')

    // axios.defaults.withCredentials = true;

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('http://localhost:8081/login', values)
    //         .then(res => {
    //             if (res.data.Status === "Login Successfully!") {
    //                 navigate('/');
    //             } else {
    //                 setError("Wrong Email or Password");
    //             }
    //         })
    //         .catch(err => {
    //             console.error(err);
    //             setError("Invalid Credentials");
    //         });

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

        const handleLogout = () => {
            navigate('/');
        };

    return (
        <div className="root-side-bar">
                <div className="sidebar-button" onClick={handleHome}>
                    <img
                        src="assets/home.png"
                        alt=""
                        className="icon"
                    />
                    <span className="sidebar-button-text">Home</span>
                </div>
                <div className="sidebar-button" onClick={handleCustomers}>
                    <img
                        src="assets/customer.png"
                        alt=""
                        className="icon"
                    />
                    <span className="sidebar-button-text">Customers</span>
                </div>
                <div className="sidebar-button" onClick={handleProduct}>
                    <img
                        src="assets/product.png"
                        alt=""
                        className="icon"
                    />
                    <span className="sidebar-button-text">Product</span>
                </div>
                <div className="sidebar-button" onClick={handleDataBackup}> 
                    <img
                        src="assets/backup.png"
                        alt=""
                        className="icon"
                    />
                    <span className="sidebar-button-text">Data backup &amp; Restore</span>
                </div>
                <div className="sidebar-button" onClick={handleMessageUs}>
                    <img
                        src="assets/message.png"
                        alt=""
                        className="icon"
                    />
                    <span className="sidebar-button-text">Message Us</span>
                </div>
                
                <div className="sidebar-button" onClick={handleLogout}>
                    <img
                        src="assets/logout.png"
                        alt=""
                        className="icon"
                    />
                    <span className="sidebar-button-text">Log out</span>
                </div>
        </div>
    );
};