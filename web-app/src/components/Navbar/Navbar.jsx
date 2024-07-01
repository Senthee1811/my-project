import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Programms</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimounials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
