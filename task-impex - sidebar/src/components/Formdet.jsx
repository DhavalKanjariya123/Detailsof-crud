import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Formdet() {
  const navigation=useNavigate()

  function Logout() {
    alert("out")
    navigation("/login")
    
  }

  useEffect(()=>{
      let username=sessionStorage.getItem("username")
      if(username===""|| username===null){
        navigation("/login")
      }
  },[])


  return (
    <div>
      <h1>Dhaval</h1>
      <button type="button" onClick={Logout} >Log out</button>
    </div>
  )
}

export default Formdet
