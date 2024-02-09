import React, { useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Topbar from '../topbar';
import Sidebar from '../sidebar';
import Feedback from '../components/feedback';


export default function FeedbackPage() {
return(
    <div className='root-feedback'>
        <Topbar/>
        <div className='d-flex content-color'>
            <Sidebar/>
            <Feedback/>
        </div>
    </div>
    );
};