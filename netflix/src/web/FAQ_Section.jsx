import React, { useState } from 'react';
import "../web/CSS/FAQ_Section.css"
import API_05 from './API/NetflixAPI_05';

function FAQ_Section(props) {
    const [api, setapi] = useState(API_05);
    return (
        <>
            <div className="container-fluid faq pb-4">
                <h1 className='mt-5 text-center text-white'>Frequently Asked Questions</h1>
                <div className="container mt-5">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        {api.map(res => {
                            // console.log(api);
                            return (
                                <div className="accordion-item mb-2 border">
                                    <h2 className="accordion-header" id={res.id}>
                                        <button className="accordion-button collapsed bg-color" type="button" data-bs-toggle="collapse" data-bs-target={res.dataBsTarget} aria-expanded="false" aria-controls={res.ariaControls}>
                                            {res.title}
                                        </button>
                                    </h2>
                                    <div id={res.id2} className="accordion-collapse collapse" aria-labelledby={res.ariaLabelledby} data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body acc-body">{res.info}</div>
                                    </div>
                                </div>
                            )
                        })}
                        <h4 className='text-white text-center mt-5'>Ready to watch? Enter your email to create or restart your membership.</h4>
                        <form className="d-flex clas-flex mt-3 mb-5">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn custome-btn" style={{ marginLeft: 0 }} type="submit">Get Stated <i className="fa-solid fa-angle-right"></i></button>
                        </form>
                        {/* <form className="d-flex clas-flex mt-3">
                            <input className="form-control me-2" type="search" placeholder="Email address" aria-label="Search" />
                            <button className="btn custome-btn" style={{ marginLeft: 0 }} type="submit">Get Stated <i className="fa-solid fa-angle-right"></i></button>
                        </form> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQ_Section;