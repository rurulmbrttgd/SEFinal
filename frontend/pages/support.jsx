import React, { useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Topbar from '../topbar';
import Sidebar from '../sidebar';
import HelpCenter from '../components/helpcenter';


export default function Support() {
return(
    <div className='root-support'>
        <Topbar/>
        <div className='d-flex root-support1'>
            <Sidebar/>
            <HelpCenter/>
        </div>
    </div>
    );
};