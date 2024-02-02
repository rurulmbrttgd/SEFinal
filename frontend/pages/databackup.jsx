import React, { useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Topbar from '../topbar';
import Sidebar from '../sidebar';
import Backup from '../components/backuprestore';

export default function Restore() {
return(
    <div className='root-restore'>
        <Topbar/>
        <div className='d-flex'>
            <Sidebar/>
            <Backup/>
        </div>
    </div>
    );
};