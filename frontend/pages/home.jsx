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
        <div className='d-flex'>
            <Sidebar/>
            <iframe 
              className='centered-iframe'
              width='600'
              height='800'
              src='https://lookerstudio.google.com/embed/reporting/8c1ff205-c43c-4041-a509-15e1fe12ecaa/page/OytpD'
              frameBorder='0'
              style={{ border: '0', width: '100%', height: '750px' }}
              allowFullScreen
            ></iframe>
        </div>
      
    </div>
    );
};
