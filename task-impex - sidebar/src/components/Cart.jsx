import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cart() {
    var total = 0
    var ftotal = 0
    const [cartproduct, setCartproduct] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:5000/cart")
            .then((res) => {
                setCartproduct(res.data)
            })
    })
    return (
        <>
           <div className="cart-table" >
           <Table className="table table-striped table-dark w-25 m-auto mt-5">
                <thead>
                    <tr>

                        <td>Product</td>
                        <td>Price</td>
                        <td>Qty</td>
                        <td>Total</td>
                        <td>Action</td>
                    </tr>
                </thead>

                {cartproduct && cartproduct.map((item, cartindex) => {
                    total = item.price * 1
                    ftotal += total
                    return (

                        <>
                            <tbody>
                                <tr>
                                    <td style={{ "width": "150px" }} ><img className="img-fluid img-product" src={item.imgurl} alt="not found" /></td>

                                    <td>{item.price}</td>
                                    <td>

                                        <input type="number" value="1" />

                                    </td>
                                    <td>{total}</td>
                                    <td onClick={() => navigate(`/deletecartproduct/${item.id}`)} ><b className="bi bi-trash" ></b></td>

                                    <td onClick={() => navigate(`/updateproduct/${item.id}`)} ><b className="bi bi-pencil" ></b></td>
                                </tr>
                            </tbody>
                        </>
                    )

                })

                }

            </Table>

            <h2>Total price of product : {ftotal}</h2>
           </div>
        </>
    )
}

export default Cart;