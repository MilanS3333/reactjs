import React, { useState } from 'react';
import './css/Section_03.css'
import API_05 from './api/API_05';

function Section_03(props) {
    const [api, setapi] = useState(API_05)
    // console.log(api);
    return (
        <>
            <div className="container s3">
                <div className='text-center'>
                    <p>Features</p>
                    <div className="h1-div">The components you need, together on one tool</div>
                    <div>
                        <div className='gif-container'>
                            {api.map(res => {
                                // console.log(res);
                                return (
                                    <>
                                        <div className='gif-img'>
                                            <img src={res.img} alt="" />
                                            <p>{res.info}</p>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: 'rgba(58,64,76,1)' }} className='pt-4 pb-5'>
                <div className='text-center text-white container fup'><span className='fw-bold'>Get started on Podio,</span> for streamlined work that will drive your business forward.</div>
                <div className='foo'>
                    <form className="d-flex hero-input-container mx-auto mt-4 mb-3">
                        <input className="form-control hero-input" type="search" placeholder="Enter your work email" aria-label="Search" />
                        <button className='hero-btn btn-sign-in' type="submit">Start free</button>
                    </form>
                </div>
            </div >
        </>
    );
}

export default Section_03;