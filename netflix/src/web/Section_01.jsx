import React, { useState } from 'react';
import './CSS/Section_01.css';
import API_01 from './API/NetflixAPI_01';

function Section_01(props) {
    const [api, setApi] = useState(API_01)
    return (
        <>
            <div className="container-fluid section_01">
                <div className="container">
                    {api.map(res => {
                        // console.log(res);
                        return (
                            <>
                                <div className="row">
                                    <div className="col-xl col-lg col-md-12 col-12 set-info">
                                        <h1>{res.title}</h1>
                                        <h4>{res.info}</h4>
                                    </div>
                                    <div className="col-xl col-lg col-md-12 mid-set col-12 ms-lg-3 mt-4">
                                        <div className='set-tv'>
                                            <img className='set-img' src={res.image} alt="" />
                                            <video className='set-videos' autoPlay loop playsInline muted>
                                                <source src={res.video} />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Section_01;