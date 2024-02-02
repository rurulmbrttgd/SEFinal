import React, { useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Topbar from '../topbar';
import Sidebar from '../sidebar';
import Feedback from '../components/feedback';
import Customer from '../components/customer'

export default function CustomerPage() {
return(
    <div className='root-feedback'>
        <Topbar/>
        <div className='d-flex'>
            <Sidebar/>
            <Customer/>
        </div>
    </div>
    );
};