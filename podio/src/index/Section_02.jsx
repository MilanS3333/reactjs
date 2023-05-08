import React, { useState } from 'react';
import './css/Section_02.css';
import API_04 from './api/API_04';

function Section_02(props) {
    const [api, setapi] = useState(API_04);
    // console.log(api);
    return (
        <>
            <section className='section_02'>
                <div className="s2">
                    <div className="row" style={{ margin: '0' }}>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12"></div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 text-white ps-5">
                            <p style={{ fontSize: '52px' }}>
                                ChanceLight
                            </p>
                            <p className='fs-3'>
                                ChanceLight uses Podio to educate thousands of American students.
                            </p>
                            <a href="" className='fs-5 text-white _line'><i className="fa-sharp fa-regular fa-circle-play"></i> Watch Video (1:11)</a>
                        </div>
                    </div>
                </div>
                <div className="container-xxl" style={{ marginTop: '100px' }}>
                    <div className="row">
                        {api.map(res => {
                            return (
                                <>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                        <div className='s2-img-holder'>
                                            <img className='s2-img' src={res.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 px-5 rs-ma">
                                        <div>
                                            <p style={{ marginBottom: '0' }}>{res.text}</p>
                                            <div className='h1-div'>{res.title}</div>
                                            <p className='mt-5'>{res.info}</p>
                                            <div className='mt-5'>
                                                <button className='btn-sign-in me-xxl-5'>Learn More</button>
                                                <a href="" className='ms-xxl-5 dosw'>Download our Security Whitepaper <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_02;