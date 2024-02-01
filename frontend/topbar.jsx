import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import { useHistory } from 'react-router-dom'

export default function Topbar() {

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
        <div className="root-top-bar">
        <div className="logo-div">
            <div className="top-bar-logo">
            <img
                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1706257191/salesoptima-logo2_ltpbkb.png"
                alt="SalesOptima Logo"
            />
            <h1 className="Sales-text">SALES</h1>
            <h1 className="Optima-text">OPTIMA</h1>
            </div>
            <img className='Support-Logo'
            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1706257373/Online_Support_cfiypq.png"
            alt="Online Support"
            />
        </div>
      </div>
    );
};
