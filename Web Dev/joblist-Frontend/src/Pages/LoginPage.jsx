import React from 'react'
import Login from '../Components/Login/Login'
import img from "../assets/register.png"

function LoginPage() {
  return (
    <div style={{ display: 'flex' }}>
      <Login />
      <div>
        <h2 style={{
          color: "#ffffff", position: "absolute", top: "3rem",
          fontSize: "2em", textAlign: "center", marginLeft: "13rem"
        }}>
          Your Personal Job Finder</h2>
        <img src={img} alt="" style={{ maxHeight: "100vh", width: "50vw" }} />
      </div>
    </div>
  )
}

export default LoginPage