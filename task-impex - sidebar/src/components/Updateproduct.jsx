import axios from "axios";
import React from "react"
import { useRef } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";


function Updateproduct() {

    const price = useRef("")
    const { id } = useParams("")

    useEffect(() => {
        axios.get(`http://localhost:5000/cart/${id}`)
            .then((res) => {
                price.current.value = res.data.price
            })
    }, [])

    function Updproduct() {
        var Upd = {
            price: price.current.value
        }
        axios.put(`http://localhost:5000/cart/${id}`, Upd)
            .then(() => {
                alert("Successfully updated")
                window.location = "/cart"
            })

    }


    return (
        <>
            <input type="number" ref={price} placeholder="Update Price of Food" />
            <Button onClick={Updproduct}>Save</Button>
        </>
    )

}

export default Updateproduct;