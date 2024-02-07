import React from 'react'
import './components.css'
import { useNavigate } from 'react-router-dom'

export default function HelpCenter() {    

    const navigate = useNavigate();
    const handleLink = () => {
        // Redirect to YouTube
        window.open('https://www.youtube.com', '_blank');
    };

    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = '/assets/SalesOptimaUserManual.pdf'; // Replace with the actual file URL
        link.download = 'SalesOptimaUserManual.pdf'; // Replace with the desired file name and extension
        link.click();
    };

    return (
        <div className='col p-0 m-0 helpcenter-root'>
            <div className='Caption'>
                <div className='report-text'>
                    <h1 className='should-text'>How can we help?</h1>
                </div>

                <div className='search'>
                    <input
                        className='search-input'
                        placeholder="Search, Contacts, Message, Reports... "
                    />
                </div>
            </div>
            <div className="helpbox">
                <div className="youtube">
                    <h2 className='yt-text'>SalesOptima Tutorial Video</h2>

                    <button className='gray'  onClick={handleLink}>
                        
                        <img
                            src="/assets/youtube.png"
                            alt=""
                            className='youtube-icon'
                        />

                    </button>
                </div>

                <div className="handbook">
                    <h2 className='hb-text'>SalesOptima Handbook</h2>
                    <button className='blue' onClick={downloadFile}>
                            <img
                                src="/assets/pdf.png"
                                alt=""
                                className='handbook-icon'
                            />
                    </button>
                </div>
                <div className="faq">
                    <h2 className='faq-text'>Frequently Asked Questions</h2>
                    <div className='yellow'>
                        <img
                            src="/assets/faq.png"
                            alt=""
                            className='faq-icon'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};