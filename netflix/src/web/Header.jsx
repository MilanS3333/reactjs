import React, { useState } from 'react';
import '../web/CSS/Header.css';
import NetflixAPI from './API/NetflixAPI';
import { Link } from "react-router-dom";


function Header(props) {
    const [api, setApi] = useState(NetflixAPI)
    // console.log(api);



    return (
        <>
            <header>
                <section className='header-section container-fluid'>
                    <nav className="navbar navbar-expand navbar-dark container">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img className='img-fluid logo' src="images/logo.png" alt="" /></a>
                            <div className='d-flex'>
                                <div className='language'>
                                    <i className="fa-solid fa-globe"></i>
                                    <select name="" id="" className='language-selection'>
                                        <option value="english">English</option>
                                        <option value="hindi">Hindi</option>
                                    </select>
                                    <i className="fa-solid fa-caret-down"></i>
                                </div>
                                <button className="btn custome-btn" type="submit"><Link to="/signin" style={{ color: "white", textDecoration: "none" }}>Sign In</Link></button>
                            </div>
                        </div>
                    </nav>
                    <div className='container text-center text-white get-started'>
                        <div className='get-started-set'>
                            {api.map((res) => {
                                // console.log(res);
                                return (
                                    <>
                                        <h1>{res.title}</h1>
                                        <h3 className='mt-3'>{res.tagline}</h3>
                                        <h5 className='mt-3'>{res.info}</h5>
                                    </>
                                )
                            })}
                            {/* <h1>Unlimited movies, TV shows and more.</h1>
                            <h3 className='mt-3'>Watch anywhere. Cancel anytime.</h3>
                            <h5 className='mt-3'>Ready to watch? Enter your email to create or restart your membership.</h5> */}
                            <form className="d-flex clas-flex mt-3">
                                <input className="form-control me-2" type="search" placeholder="Email address" aria-label="Search" />
                                <button className="btn custome-btn" style={{ marginLeft: 0 }} type="submit">Get Stated <i className="fa-solid fa-angle-right"></i></button>
                            </form>
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
}

export default Header;