import React, { useEffect } from 'react';
import { GetAPIAction, DeleteAPIAction } from '../action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function ShowData(props) {
    const dispatch = useDispatch();
    const returnData = useSelector((state) => state.reducer.details)
    const deleteData = useSelector((state) => state.reducer.isDataDeleted)
    console.log(deleteData);
    useEffect(() => {
        dispatch(GetAPIAction())
    }, [dispatch])
    // GetAPIAction()
    if (deleteData) {
        window.location.reload(false)
    }


    const result = returnData ? returnData.map((res) => {
        return <>
            <tr>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.phone}</td>
                <td>{res.country}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => dispatch(DeleteAPIAction(res.id))}>Delete</button>
                    <Link to={`/EditData/${res.id}`}><button className='btn btn-primary ms-2'>Edit</button></Link>
                </td>
            </tr>
        </>
    }) : null;
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <center>
                        <h1 className="text-danger">Welcome to Redux CRUD Application</h1>
                        <div className="col">
                            <table className="table">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Countery</th>
                                <th>Action</th>
                                <tbody>
                                    {result}
                                </tbody>
                            </table>
                        </div>
                    </center>
                </div>
            </div>
        </>
    );
}

export default ShowData;