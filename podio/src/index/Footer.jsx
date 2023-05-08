import React from 'react';
import './css/Footer.css'

function Footer(props) {
    return (
        <>
            <div className="mt-4">
                <div className="container-xxl container-xl container-lg mx-auto row _res">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 o-2">
                        <div className='logo-container'>
                            <img className='logo footer-logo' src="https://www.sharefile.com/content/dam/podio/images/logos/podio-logo.svg" alt="" />
                        </div>
                    </div>
                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 footer-list o-3">
                        <a href="">Privacy and legal terms <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        <span className='space'>|</span>
                        <a href="">Leagal note</a>
                        <span className='space'>|</span>
                        <a href="">Podio status <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        <span className='space'>|</span>
                        <a href="">Sitemap</a>
                        <span className='space'>|</span>
                        <a href="">Cookie preferences</a>
                        <span className='space'>|</span>
                        <a href="">Do Not Sell My Personal Information <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 o-1">
                        <select name="language" id="lan">
                            <option value="volvo">English</option>
                            <option value="saab">Nederlands</option>
                            <option value="opel">Espanol</option>
                            <option value="audi">Dansk</option>
                            <option value="audi">Francais</option>
                            <option value="audi">Portugues</option>
                            <option value="audi">Deutsch</option>
                        </select>
                    </div>
                </div>
                <p className='container mb-5 _inp'>© 2023, Cloud Software Group, Inc. All rights reserved.</p>
            </div>
        </>
    );
}

export default Footer;