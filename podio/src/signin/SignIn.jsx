import React from 'react';
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
            </div>
            <div className='form mt-4'>
                <form action="">
                    <div class="mb-4">
                        <label for="formGroupExampleInput" class="form-label">Your work email address*</label>
                        <input type="email" class="form-control" id="formGroupExampleInput" />
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
                    <button type="button" class="btn btn-primary mt-5" style={{ width: '100%' }}>Sign In</button>
                </form>
                {/* <p className='text-center fw-bolder'>Sign up with</p> */}
                <p className='mt-3'>Don't have an account? <Link to='/signup' className='link---'>Sign up</Link></p>
            </div>
        </>
    );
}

export default SignIn;