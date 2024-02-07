import React, { useState } from 'react';
import './components.css';
import emailjs from '@emailjs/browser';

export default function Feedback() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_hqbt4nd'; // Replace with your actual service ID
        const templateId = 'template_agnh7ea'; // Replace with your actual template ID
        const publicKey = 'imDW0Vp3H0DTBwxCE'; // Replace with your actual public key

        // Define template parameters
        const templateParams = {
            subject: subject,
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setSubject('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    return (
        <div className='feedback-root'>
            <div className='report-text'>
                <h1 className='should-text'>Should you have questions?</h1>
                <h1 className='reports-text'> Reports?</h1>
            </div>

            <div className='feedback-email'>
                <h2 className='subject-text'>Subject</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Subject'
                        required
                        className='subject-input'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <h2 className='desc-text'>Message</h2>
                    <textarea
                        required
                        className='desc-input'
                        placeholder='Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </form>
            </div>
            <button className='send-button' type='submit' onClick={handleSubmit}>
                <h2 className='send-text'>Send</h2>
            </button>
        </div>
    );
}