import React from 'react';
import './CSS/Footer.css'

function Footer(props) {
    return (
        <>
            <div className="container mt-5 opecity">
                <p className='text-white ms-xxl-5'>Questions? <a href="" className='text-white'>Call 000-800-919-1694</a></p>
                <div className='footer ms-xxl-5 mt-4'>
                    <div><a href="">FAQ</a></div>
                    <div><a href="">Gift Card Items</a></div>
                    <div><a href="">Help Centre</a></div>
                    <div><a href="">Account</a></div>
                    <div><a href="">Media Centre</a></div>
                    <div><a href="">Investor Relations</a></div>
                    <div><a href="">Jobs</a></div>
                    <div><a href="">Ways to Watch</a></div>
                    <div><a href="">Terms of Use</a></div>
                    <div><a href="">Privacy</a></div>
                    <div><a href="">Cookie Preferences</a></div>
                    <div><a href="">Corporate Information</a></div>
                    <div><a href="">Contact Us</a></div>
                    <div><a href="">Speed Test</a></div>
                    <div><a href="">Legal Notices</a></div>
                    <div><a href="">Only on Netflix</a></div>
                </div>
                <div className='language language-2 ms-xxl-5 mt-5'>
                    <i className="fa-solid fa-globe"></i>
                    <select name="" id="" className='language-selection selection'>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                    </select>
                    <i className="fa-solid fa-caret-down down"></i>
                </div>
                <div className="text-white ms-xxl-5 mt-4 mb-5">Netflix India</div>
            </div>
        </>
    );
}

export default Footer;