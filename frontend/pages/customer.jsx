import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../topbar';
import Sidebar from '../sidebar';
import Customer from '../components/customer';

export default function CustomerPage() {


    return(
    <div className='root-customer'>
        <Topbar/>
        <div className='d-flex content-color'>
            <Sidebar/>
            <Customer/>
        </div>
    </div>
    );
};