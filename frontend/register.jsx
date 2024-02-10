import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      phone_number: '',
      cert: '',
      password: '',
      confirm_password: '',
    });
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:8081/register', values);
        console.log(response.data);
        // Optionally, you can navigate to another page upon successful registration
        navigate('/');
      } catch (error) {
        console.error(error.response.data);
      }
    };

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
            <form onSubmit={handleSubmit}>

                <div className='name'>
                    <div className='first-last-name'>
                        <label className='label'>First name</label>
                        <input className='input' placeholder="Erica Joy" onChange={e => setValues({...values, busowner_fname: e.target.value})}/>
                    </div>
                    <div className='first-last-name'>
                        <label className='label'>Last name</label>
                        <input className='input' placeholder="Cavaneyro" onChange={e => setValues({...values, busowner_lname: e.target.value})} />
                    </div>
                </div>

                <div className='email-reg'>
                    <label className='label'>Email Address</label>
                    <input className='input' placeholder="abcde@gmail.com" onChange={e => setValues({...values, busowner_email: e.target.value})}/>
                </div>

                <div className='company'>
                    <label className='label'>Company</label>
                    <input className='input' placeholder="WeebDev" onChange={e => setValues({...values, busowner_company: e.target.value})}/>
                </div>

                <div className='phone-number'>
                    <label className='label'>Phone Number</label>
                    <input className='input' placeholder="+63 908 123 4567" onChange={e => setValues({...values, busowner_phone: e.target.value})}/>
                </div>

                <div className='main-password'>
                    <div className='password'>
                        <label className='label'>Password</label>
                        <input className='input' placeholder="**********" onChange={e => setValues({...values, busowner_password: e.target.value})}/>
                    </div>
                    <div className='password'>
                        <label className='label'>Confirm Password</label>
                        <input className='input' placeholder="**********" onChange={e => setValues({...values, confirm_password: e.target.value})}/>
                        <input className='input' />
                    </div>
                </div>

                <div className='certificate'>
                    <label className='label'>Business Certificate</label>
                    <input type="file" className='file-upload' onChange={e => setValues({...values, busowner_cert: e.target.value})}/>
                </div>

                <div className='Terms-Condition'>
                    <input type="checkbox" className='checkbox' required/>
                    <p className='text'>I agree with the Terms and Conditions</p>
                </div>


                <button type='submit' className='next'>
                <img src="assets/next.png"></img>
        </button>
                </form>

            </div>
        </div>
    );
}