import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELET, ADD, REMOVE } from './redux/action/action';


const CardDetails = () => {
    // intialization of empty arry
    const [data, setData] = useState([]);

    // get the id from url
    const { id } = useParams()

    // to redirect page to home page after deletion
    const history = useNavigate()

    // to trigger action in action.js
    const dispatch = useDispatch();

    // gets data from reducer.js after state first one is reducer function name and then inside initial state variable that we definerd in initial state object and store in getdata veriable
    const getdata = useSelector(state => state.cartreducer.carts)

    // function for compering id
    const compare = () => {
        // filter same data from same id and return to comparedata veriable
        let comparedata = getdata.filter(e => { return e.id == id });
        // set the new value in over empty arry that we defined earlier
        setData(comparedata);
    }

    // add data
    const send = (e) => {
        // console.log(e);
        // dispach data to add function in action.js
        dispatch(ADD(e))
    }

    // get the id from map data from down and pass in delet
    const del = (id) => {
        // get the id that pass in del function and trigher delet action in action.js
        dispatch(DELET(id));
        history("/");
    }

    // remove one item from quntety
    const remove = (item) => {
        dispatch(REMOVE(item))
    }

    useEffect(() => {
        // copmpare function is called when new id is get from over const id that we defined earlier and set the new data to over empty arry that we defined earlier
        compare();
    }, [id])


    return (
        <>
            <div className="container mt-2">
                <h2 className='text-center'>Iteams Details Page</h2>
                <section className='container mt-3'>
                    <div className="iteamsdetails">
                        {/* map the data of over arry */}
                        {
                            data.map((e) => {
                                return (
                                    <>
                                        <div className="items_img">
                                            <img src={e.imgdata} alt="" />
                                        </div>
                                        <div className="details">
                                            <table className='table'>
                                                <tr>
                                                    <td>
                                                        <p><strong>Restaurant :</strong> {e.rname}</p>
                                                        <p><strong>Price :</strong> ₹{e.price}</p>
                                                        <p><strong>Dishes :</strong> {e.address}</p>
                                                        <p><strong>Total :</strong>  ₹{e.price * e.qnty}</p>
                                                        <div className="mt-5 d-flex justify-content-between align-items-center" style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                            <span style={{ fontSize: 24 }} onClick={e.qnty <= 1 ? () => del(e.id) : () => remove(e)}>-</span>
                                                            <span style={{ fontSize: 22 }}>{e.qnty}</span>
                                                            <span style={{ fontSize: 24 }} onClick={() => send(e)}>+</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p><strong>Rating : </strong><span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{e.rating} ★</span></p>
                                                        <p><strong>Order Review :</strong> {e.somedata}</p>
                                                        <p><strong>Remove :</strong><span><DeleteIcon onClick={() => del(e.id)} style={{ color: "red", fontSize: "20px", cursor: "pointer" }} /></span></p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </section>
            </div>
        </>
    )
}

export default CardDetails
