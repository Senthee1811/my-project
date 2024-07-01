import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {

   const [sticky,setSticky] = useState(false); 

   useEffect(() => {

    window.addEventListener('scroll',() => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
       
   },[])
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
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
