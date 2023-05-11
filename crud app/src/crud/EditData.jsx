import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetDetailsId, { NewAPIAction } from '../action';
import { useDispatch } from 'react-redux';

function EditData(props) {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');

    const dispatch = useDispatch();


    const HandleName = (name) => {
        setName(name.target.value);
    }
    const HandleEmail = (email) => {
        setEmail(email.target.value);
    }
    const HandlePhone = (phone) => {
        setPhone(phone.target.value);
    }
    const HandleCountry = (country) => {
        setCountry(country.target.value);
    }
    const [getdetails] = GetDetailsId(id);
    useEffect(() => {
        const data = () => {
            if (getdetails.data) {
                setName(getdetails.data.name);
                setEmail(getdetails.data.email);
                setPhone(getdetails.data.phone);
                setCountry(getdetails.data.country);
            }
        }
        data()
    }, [getdetails.data])



    const OnBtnClickEditData = (e) => {
        const editData = {
            name: name,
            email: email,
            phone: phone,
            country: country,
        };
        dispatch(NewAPIAction(editData, id))
    }
    return (
        <>
            <div className='container'>
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" onChange={(name) => HandleName(name)} defaultValue={name} />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" onChange={(email) => HandleEmail(email)} defaultValue={email} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="number" class="form-control" id="phone" onChange={(phone) => HandlePhone(phone)} defaultValue={phone} />
                    </div>
                    <div class="mb-3">
                        <label for="country" class="form-label">Country</label>
                        <input type="text" class="form-control" id="country" onChange={(country) => HandleCountry(country)} defaultValue={country} />
                    </div>
                    <button type="button" class="btn btn-primary" onClick={(e) => OnBtnClickEditData(e)}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default EditData;