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

          
        // const handleSignIn = () => {
        //   // Redirect to the Sign In page
        //   history.push('/signin');
        // };
      
        // const handleRegister = () => {
        //   // Redirect to the Register page
        //   history.push('/register');
        // };
      
        // const handleForgotPassword = () => {
        //   // Redirect to the Forgot Password page
        //   history.push('/forgotpassword');
        // };

    return (
        <div className="root-side-bar">
                <div className="sidebar-button">
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className="icon"
                    />
                    <h3 className="sidebar-button-text">Home</h3>
                </div>
                <div className="sidebar-button">
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className="icon"
                    />
                    <h3 className="sidebar-button-text">Customers</h3>
                </div>
                <div className="sidebar-button">
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className="icon"
                    />
                    <h3 className="sidebar-button-text">Product</h3>
                </div>
                <div className="sidebar-button">
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className="icon"
                    />
                    <h3 className="sidebar-button-text">Data backup &amp; Restore</h3>
                </div>
                <div className="sidebar-button">
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className="icon"
                    />
                    <h3 className="sidebar-button-text">Message Us</h3>
                </div>
                <div className="sidebar-button">
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className="icon"
                    />
                    <h3 className="sidebar-button-text">Log out</h3>
                </div>
        </div>
    );
};
