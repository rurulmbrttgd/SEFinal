import React, { useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    return (
        <div className='login-root'>
            <div className='logoreg-div'>
                <img
                    src="assets/salesoptima-logo3.png"
                    alt=""
                    className='login-logo'
                />
            </div>
            <svg
                width="148"
                height="950"
                viewBox="0 0 148 950"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M103.5 1080L144.974 866.644C149.509 843.314 145.587 819.131 133.909 798.43L13.928 585.736C-2.84687 555.999 -3.29059 519.758 12.7512 489.619L134.883 260.159C145.939 239.387 149.316 215.383 144.42 192.367L103.5 0"
                    stroke="white"
                    className='middle-line'
                />
            </svg>
            <div className='login-reg-div'>
                <div className='name'>
                    <div className='first-last-name'>
                        <label className='label'>First name</label>
                        <input className='input' placeholder="Erica Joy" />
                    </div>
                    <div className='first-last-name'>
                        <label className='label'>Last name</label>
                        <input className='input' placeholder="Cavaneyro" />
                    </div>
                </div>

                <div className='email-reg'>
                    <label className='label'>Email Address</label>
                    <input className='input' placeholder="abcde@gmail.com" />
                </div>

                <div className='company'>
                    <label className='label'>Company</label>
                    <input className='input' placeholder="WeebDev" />
                </div>

                <div className='phone-number'>
                    <label className='label'>Phone Number</label>
                    <input className='input' placeholder="+63 908 123 4567" />
                </div>

                <div className='main-password'>
                    <div className='password'>
                        <label className='label'>Password</label>
                        <input className='input' placeholder="**********" />
                    </div>
                    <div className='password'>
                        <label className='label'>Confirm Password</label>
                        <input className='input' placeholder="**********" />
                        <input className='input' />
                    </div>
                </div>

                <div className='certificate'>
                    <label className='label'>Business Certificate</label>
                    <input type="file" className='file-upload' />
                </div>

                <div className='Terms-Condition'>
                    <input type="checkbox" className='checkbox' />
                    <p className='text-register'>I agree with the Terms and Conditions</p>
                </div>

                <svg
                    width="123"
                    height="99"
                    viewBox="0 0 123 99"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='next'
                >
                    <path
                        d="M20.5 78.375V20.625L82 49.5L20.5 78.375Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                    <path d="M102.5 16.5V82.5" stroke="white" strokeWidth="1.5" />
                </svg>
            </div>
        </div>
    );
}