import React, { useState } from 'react';
import './CSS/Section_04.css'
import API_04 from './API/NetflixAPI_04';
import { render } from '@testing-library/react';

function Section_04(props) {
    const [api, setapi] = useState(API_04)
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
                                    <div className="col-xl col-lg col-md-12 col-12 order-2 mt-md-5">
                                        <div>
                                            <img className='m-img' src={res.image} alt="" />
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

export default Section_04;