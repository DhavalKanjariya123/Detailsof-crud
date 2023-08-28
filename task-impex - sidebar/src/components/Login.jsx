import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate()

    const [emaildet, setEmaildet] = useState("")

    const [passworddet, setPassword] = useState("")

    const Handelemail=(e)=> {
        setEmaildet(e.target.value)
    }

    const Handelpassword=(e)=> {
        setPassword(e.target.value)
    }

    useEffect(()=>{
        sessionStorage.clear()
    },[])

    const Handleapi=()=> {
        fetch("http://localhost:5000/Logindetail/" + emaildet)
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                if (Object.keys(resp).length === 0) {
                    alert("please enter valid username and password")
                }
                else {
                    if (resp.password === passworddet) {
                        sessionStorage.setItem("username",emaildet)
                        alert("login success")
                        navigate("/login/formdet")
                    }
                    else {
                        alert("please enter valid username and password")
                    }
                }

            })
            .catch((err) => {
                alert("login failed" + err.massage)
            })

    }




    return (
        <>
            <Form className='w-50 m-auto' >
                <label>Email</label>
                <input className='form-control' type="email" onChange={(Handelemail)} />

                <label>Password</label>
                <input className='form-control' type="password" onChange={Handelpassword} />

                <button type="button" className="btn btn-info mt-5" onClick={Handleapi}>Log In</button>
            </Form>
        </>
    )
}

export default Login;
