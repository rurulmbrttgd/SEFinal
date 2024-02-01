import React, { useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import { useHistory } from 'react-router-dom'

export default function Login() {

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
    // };
    const navigate = useNavigate();
    const handleSignIn = () => {
        // Redirect to the Sign In page
        navigate('/home');
      };
    const handleRegister = () => {
        // Redirect to the Register page
        navigate('/register');
      };
    
    const handleForgotPassword = () => {
        // Redirect to the Forgot Password page
        navigate('/forgotpassword');
      };
          
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
        <div className='login-root'>
            <div className='login-div'>
                <div className='email'>
                    <h4>Email</h4>
                    <h4>
                        <input 
                        placeholder="abcde@gmail.com" 
                        className='input'  // replace with the name of your class
                        />
                    </h4>
                    <svg
                        width="450"
                        height="2"
                        viewBox="0 0 450 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="line"  // replace with the name of your class
                        >
                        <line
                            x1="-0.00228882"
                            y1="0.518097"
                            x2="449.998"
                            y2="0.518097"
                            stroke="white"
                        />
                    </svg>
                </div>
                <div className="password">  {/* replace with the name of your class */}
                    <h4>Password</h4>
                    <h4 className="password-text">  {/* replace with the name of your class */}
                        <input
                            placeholder='********'
                            className="input"  // replace with the name of your class
                            type="password"
                        />
                    </h4>
                    <svg
                    width="450"
                    height="2"
                    viewBox="0 0 450 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="line"
                    >
                        <line
                            x1="-0.00228882"
                            y1="0.518097"
                            x2="449.998"
                            y2="0.518097"
                            stroke="white"
                        />
                    </svg>
                </div>
                <div className="sign-in">
                <button className="signIn" onClick={handleSignIn}>Sign In</button>
                </div>
                <div className="reg-forgot"> 
                    <button className="register" onClick={handleRegister}>Register</button>
                    <button className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</button>
                </div>
            </div>
            <svg
                width="148"
                height="950"
                viewBox="0 0 148 1080"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M103.5 1080L144.974 866.644C149.509 843.314 145.587 819.131 133.909 798.43L13.928 585.736C-2.84687 555.999 -3.29059 519.758 12.7512 489.619L134.883 260.159C145.939 239.387 149.316 215.383 144.42 192.367L103.5 0"
                    stroke="white"
                    className='middle-line'
                />
            </svg>
            <div className='logo-div'>
                <img
                    src="assets/salesoptima-logo3.png"
                    alt=""
                    className='login-logo'
                />
            </div>
        </div>      
    );
};
