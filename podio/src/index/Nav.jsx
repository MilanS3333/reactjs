import React from 'react';
import './css/Nav.css';
import { Link } from "react-router-dom";

function Nav(props) {
    return (
        <>
            {/* <div className='nam'>
                <div className='logo-container'>
                    <img className='logo' src="https://www.sharefile.com/content/dam/podio/images/logos/podio-logo.svg" alt="" />
                </div>
                <div className='rs-nav'>
                    <button id='btn'><i className="fa-solid fa-bars-staggered" style={{ color: "#000" }}></i></button>
                </div>
                <div className='menu' id='menu'>
                    <ul className='nav-list'>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Use Cases</a></li>
                        <li><a href="">Request a Demo</a></li>
                        <li className='hover-for-menu'><a href="">More <i className="fa-solid fa-angle-down"></i><i className="fa-solid fa-angle-up"></i></a>
                            <ul className='sub-menu'>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Support</a></li>
                                <li><a href="">Jobs</a></li>
                                <li><a href="">Partners</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='login'>
                    <button className='btn-login'>Login</button>
                    <button className='btn-sign-in media-btn'>Sign In</button>
                </div>
            </div> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand logo-container" href="#"><img className='logo' src="https://www.sharefile.com/content/dam/podio/images/logos/podio-logo.svg" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Use Cases</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Request a Demo</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Contact Us</a></li>
                                    <li><a class="dropdown-item" href="#">Support</a></li>
                                    <li><a class="dropdown-item" href="#">Jobs</a></li>
                                    <li><a class="dropdown-item" href="#">Partners</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <button className='btn btn-primary me-3'><Link to='/signin'>Login</Link></button>
                            <button class="btn btn-outline-primary" type="submit"><Link to='/signup'>Sign In</Link></button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;