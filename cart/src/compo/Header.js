import React, { useEffect, useState } from 'react'
import CartIcone from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELET } from '../redux/action/action';
const Header = () => {
    const [price, setPrice] = useState(0);
    const getdata = useSelector(state => state.cartreducer.carts)
    const dispatch = useDispatch()

    // mui menu code
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // mui menu code ends here

    const del = (id) => {
        dispatch(DELET(id))
    }

    const total = () => {
        let price = 0;
        getdata.map(e => price = e.price * e.qnty + price);
        setPrice(price);
    }

    useEffect(() => total(), [total]);
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <ul className="d-flex">
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Add to cart</Link>
                        </li>
                    </ul>
                    <div className='text-white me-3'>
                        <Badge badgeContent={getdata.length} color="primary" id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                            <CartIcone style={{ cursor: "pointer", fontSize: "28px" }} />
                        </Badge></div>
                    <Menu id="basic-menu" anchorEl={anchorEl} open={open} MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
                        {
                            getdata.length ? <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <Link onClick={handleClose} to={`/cart/${e.id}`}><img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" /></Link>
                                                            </td>
                                                            <td>
                                                                <p>{e.rname}</p>
                                                                <p>Price : ₹{e.price}</p>
                                                                <p>Quantity : {e.qnty}</p>
                                                                <p className='smalltrash' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => del(e.id)}>
                                                                    <DeleteIcon />
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className='mt-5 largetrash' onClick={() => del(e.id)}><DeleteIcon style={{ color: "red", fontSize: 20, cursor: "pointer" }} /></p>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className='text-center'>Total : ₹{price}</p>
                                    </tbody>
                                </table>
                            </div> : <div className="card-details d-flex justify-content-center align-items-center" style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <CloseIcon style={{ position: "absolute", top: 2, right: 20, fontSize: "23px", cursor: "pointer" }} onClick={handleClose} />
                                <p style={{ fontSize: "22px" }}>Your carts is empty</p>
                                <img src="images/cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                        }
                    </Menu>
                </div>
            </nav>
        </>
    )
}

export default Header
