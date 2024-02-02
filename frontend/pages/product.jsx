import React, { useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Topbar from '../topbar';
import Sidebar from '../sidebar';
import Product from '../components/product';


export default function ProductPage() {
return(
    <div className='root-product'>
        <Topbar/>
        <div className='d-flex content-color'>
            <Sidebar/>
            <Product/>
        </div>
    </div>
    );
};