import React from 'react';
import './SignUp.css'
import { Link } from "react-router-dom";


function SignIn(props) {
    return (
        <>
            <div className='text-center'>
                <Link to='/'>
                    <div className='fs-1 mt-5'>
                        citrix | Podio
                    </div>
                </Link>
                <p className='fw-bold mt-3'>Good decision.</p>
                <div>Create your free account and join over 500,000 teams getting their work done on Podio.</div>
            </div>
            <div className='form mt-4'>
                <form action="">
                    <div class="mb-4">
                        <label for="formGroupExampleInput" class="form-label">Your work email address*</label>
                        <input type="email" class="form-control" id="formGroupExampleInput" />
                    </div>
                    <div class="mb-4">
                        <label for="formGroupExampleInput2" class="form-label">Your full name*</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" />
                    </div>
                    <div class="mb-4">
                        <label for="formGroupExampleInput2" class="form-label">Create a password*</label>
                        <input type="password" class="form-control" id="formGroupExampleInput2" />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            I'm not a robot
                        </label>
                    </div>
                    <button type="button" class="btn btn-primary mt-5" style={{ width: '100%' }}>Sign Up</button>
                </form>
                <p className='mt-3'>By clicking, I accept the <a href="" className='link---'>Terms of Service</a> Your <a href="" className='link---'>privacy</a> is protected.</p>
                {/* <p className='text-center fw-bolder'>Sign up with</p> */}
                <p>Already have an account? <Link to='/signin' className='link---'>Log in here</Link></p>
            </div>
        </>
    );
}

export default SignIn;