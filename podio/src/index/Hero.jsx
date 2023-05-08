import React from 'react';
import './css/Hero.css';

function Hero(props) {
    return (
        <>
            <div>
                <div className='hero hero-t'>
                    <div className='container'>
                        <div className='my-5'>
                            <h1>Get your team working in sync</h1>
                            <p className='mt-3'>Build powerful low-code business solutions to customize work and communication</p>
                            <div className='pb-sm-4'>
                                <form className="d-flex hero-input-container">
                                    <input className="form-control hero-input" type="search" placeholder="Enter your work email" aria-label="Search" />
                                    <button className='hero-btn btn-sign-in' type="submit">Start free</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hero-brand'>
                    <div>
                        <img src='images/Volvo.png' alt="" />
                    </div>
                    <div>
                        <img src="images/Deloitte.png" alt="" />
                    </div>
                    <div>
                        <img src="images/NFL.png" alt="" />
                    </div>
                    <div>
                        <img src="images/SONY.png" alt="" />
                    </div>
                    <div>
                        <img src="images/timewarnercable.png" alt="" />
                    </div>
                    <div>
                        <img src="images/sothebys.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;