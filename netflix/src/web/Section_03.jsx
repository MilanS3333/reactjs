import React, { useState } from 'react';
import './CSS/Section_03.css';
import API_03 from './API/NetflixAPI_03';

function Section_03(props) {
    const [api, setApi] = useState(API_03)
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
                                    <div className="col-xl col-lg col-md-12 mid-set col-12 ms-lg-3 mt-5">
                                        <div className='s3-set-tv'>
                                            <img className='s3-set-img' src={res.image} alt="" />
                                            <video className='s3-set-videos' autoPlay loop playsInline muted>
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

export default Section_03;