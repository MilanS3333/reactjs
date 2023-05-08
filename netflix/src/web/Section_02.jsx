import React, { useState } from 'react';
import './CSS/Section_02.css';
import API_02 from './API/NetflixAPI_02';

function Section_02(props) {
    const [api, setapi] = useState(API_02);
    // console.log(api);
    return (
        <>
            <div className="container-fluid section_01">
                <div className="container">
                    {api.map(res => {
                        // console.log(res);
                        return (
                            <>
                                <div className="row">
                                    <div className="col-xl col-lg col-md-12 col-12 order-2">
                                        <div className='s2-img-holder'>
                                            <img className='m-img' src={res.image} alt="" />
                                            <div className='s2-holder'>
                                                <div>
                                                    <img className='s2-img' src={res.image1} alt="" />
                                                </div>
                                                <div>
                                                    <div className='movie-name'>Stranger Things</div>
                                                    <div className='download'>Downloading...</div>
                                                </div>
                                                <div>
                                                    <div className='gif'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl col-lg col-md-12 col-12 set-info for-set order-1">
                                        <div>
                                            <h1>{res.title}</h1>
                                            <h4>{res.info}</h4>
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

export default Section_02;