import React from 'react'
import './components.css'

export default function HelpCenter() {    
    return (
        <div className='helpcenter-root'>
            <div className='report-text'>
                <h1 className='should-text'>How can we help?</h1>
            </div>

            <div className='search'>
                <input
                    className='search-input'
                    placeholder="Search, Contacts, Message, Reports... "
                />
            </div>
            <div className="helpbox">
                <div className="youtube">
                    <h2 className='yt-text'>SalesOptima Tutorial Video</h2>
                    <div className='gray'>
                        <img
                            src="/assets/youtube.png"
                            alt=""
                            className='youtube-icon'
                        />
                    </div>
                </div>
                <div className="handbook">
                    <h2 className='hb-text'>SalesOptima Handbook</h2>
                    <div className='blue'>
                        <img
                            src="/assets/pdf.png"
                            alt=""
                            className='handbook-icon'
                        />
                    </div>
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