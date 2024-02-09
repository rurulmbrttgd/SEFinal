import React, { useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Topbar from '../topbar';
import Sidebar from '../sidebar';


export default function Home() {
return(
    <div className='root-home'>
        <Topbar/>
        <div className='d-flex content-color'>
            <Sidebar/>
        </div>
    </div>
    );
};