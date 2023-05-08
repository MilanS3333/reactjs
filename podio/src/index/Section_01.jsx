import React, { useState } from 'react';
import './css/Section_01.css';
import API_01 from './api/API_01';
import API_02 from './api/API_02';
import API_03 from './api/API_03';

function Section_01(props) {
    const [api, setapi] = useState(API_01);
    const [api_02, setapi_02] = useState(API_02);
    const [api_03, setapi_03] = useState(API_03);
    return (
        <>
            <div className="container section_01">
                <div className="row my-5">
                    <div className="col-lg-6 col-12 media-margin">
                        <div className='me-lg-5 my-lg-5'>
                            <img src="images/pc.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        {api.map(res => {
                            // console.log(res);
                            return (
                                <>
                                    <div className="s1-info mt-sm-5">
                                        <p style={{ fontSize: '15px' }}>{res.heading}</p>
                                        <h1>{res.title}</h1>
                                        <p className='fs-5'>{res.info}</p>
                                        <button className='btn-sign-in mt-sm-3'>Learn more</button>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className='mt-5 pt-lg-0 pt-sm-5 text-center'>
                    {api_02.map(res => {
                        return (
                            <>
                                <div className='durability'>
                                    <p style={{ fontSize: '15px' }}>{res.heading}</p>
                                    <h1>
                                        {res.title}
                                    </h1>
                                    <p className='durability-4 fs-5'>
                                        {res.info}
                                    </p>
                                </div>
                            </>
                        )
                    })}
                    <div className="row mt-lg-4 mt-md-3 mt-sm-3">
                        {api_03.map(res => {
                            return (
                                <>
                                    <div className="col-lg-4 col-12">
                                        <div className='fs-3'>{res.heading}</div>
                                        <div className="img mt-4">
                                            <img src={res.img} alt="" />
                                        </div>
                                        <p className='text-start my-4 fs-5'>{res.info}</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section_01;