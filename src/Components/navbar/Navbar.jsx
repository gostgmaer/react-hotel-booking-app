import React from 'react'
import './styles.scss'

const Navbar = () => {
  return (
    <div className='Navbar'>

    <div className="navContainer">
        <span className="logo">gostbooking</span>
        <div className="navItem">
            <button className="register">Register</button>
            <button className="login">Login</button>
        </div>
        </div>    
    </div>
  )
}

export default Navbar