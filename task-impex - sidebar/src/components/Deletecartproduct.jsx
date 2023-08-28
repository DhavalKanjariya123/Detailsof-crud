import axios from "axios";
import React, { useState } from "react"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Deletecartproduct() {

    const [deletecartproduct, setDeletecartproduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.delete(`http://localhost:5000/cart/${id}`)
            .then((res) => {
                setDeletecartproduct(res.data)
                alert("successfully deleted")
                window.location = "/"
            })
    }, []);


    return (
        <>

        </>
    )
}

export default Deletecartproduct;