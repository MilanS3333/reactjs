import React from 'react';
import { Link } from "react-router-dom";
import './SignIn.css'

function SignIn(props) {
    return (
        <>
            <div className="background">
                <Link className="navbar-brand" to="/">
                    <img className='img-fluid login-logo' src="images/logo.png" alt="" />
                </Link>
                <div className='text-white signin-form'>
                    <form>
                        <label>Sign In</label>
                        <input className='text' type="email" placeholder='Email or phone number' />
                        <input className='text' type="password" placeholder='Password' />
                        <button>Sign In</button>
                        <div className='check'>
                            <div><input className='chbox' type="checkbox" checked /> Remember me</div> <div><a href="" className='needhelp'>Need help?</a></div>
                        </div>
                    </form>
                    <p className='sign-netflix opsity'>
                        New to Netflix? <a href="" className='signup'>Sign up now.</a>
                    </p>
                    <p className='bot opsity'>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="" className='learn'>Learn more.</a>
                    </p>
                </div>
                <div className='foter'>
                    <div className='width'>
                        <p className='call'>Questions? Call <a href="">000-800-919-1694</a></p>
                        <div className='terms'>
                            <div><a href="">FAQ</a></div>
                            <div><a href="">Help Centre</a></div>
                            <div><a href="">Terms of Use</a></div>
                            <div><a href="">Privacy</a></div>
                            <div><a href="">Cookie Preferences</a></div>
                            <div><a href="">Corporate Information</a></div>
                        </div>
                        <div className='on-ft language language-2'>
                            <i className="fa-solid fa-globe"></i>
                            <select name="" id="" className='language-selection selection'>
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                            </select>
                            <i className="fa-solid fa-caret-down down"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;