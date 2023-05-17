import React, { useState } from 'react'
import Cardsdata from './CardsData'
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/action/action'

const Cards = () => {
    const [data, setData] = useState(Cardsdata);
    const dispatch = useDispatch();

    const send = (e) => {
        dispatch(ADD(e))
    }
    return (
        <>
            <div className="container mt-3">
                <h2 className='text-center'>Add to Cart Projects</h2>
                <div className="row">
                    {data.map((e, id) => {
                        return (
                            <>
                                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="card mx-auto mt-4 card_style" style={{ width: "18rem" }}>
                                        <img src={e.imgdata} className="card-img-top" alt="..." style={{ height: "16rem" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{e.rname}</h5>
                                            <p className="card-text">Price: ₹{e.price}</p>
                                            {/* onclick get the maped data from data veriable and send to action.js */}
                                            <a href="#" className="btn btn-primary col-12" onClick={() => send(e)}>Add to cart</a>
                                        </div>
                                    </div>
                                </div></>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Cards
