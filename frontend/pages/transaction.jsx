import React, { useState } from 'react'
import '../style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Topbar from '../topbar';
import Sidebar from '../sidebar';
import Transaction from '../components/transactions';

export default function TransactionsPage() {
    return (
            <div className='root-transaction'>
                <Topbar/>
                <div className='d-flex content-color'>
                    <Sidebar/>
                    <Transaction/>
                </div>
            </div>
      );
    };