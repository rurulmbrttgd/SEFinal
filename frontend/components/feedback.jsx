import React from 'react'
import './components.css'

export default function Feedback() {    
    return (
        <div className='feedback-root'>
            <div className='report-text'>
                <h1 className='should-text'>Should you have questions?</h1>
                <h1 className='reports-text'> Reports?</h1>
            </div>
            <div className='email'>
                <h2 className='subject-text'>Subject</h2>
                <input className='subject-input'
                    placeholder='Subject'/>
                <h2 className='desc-text'>Description</h2>
                
                <input className='desc-input'
                    placeholder='Description'/>


            </div>
            <div className='send-button'>
                <h2 className='send-text'>Send</h2>
            </div>
        </div>
    );
};