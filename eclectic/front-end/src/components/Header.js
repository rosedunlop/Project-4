import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav-container'>
      <div className='nav-title'>
        <h1>ECLECTIC</h1>
      </div>  
      <ul>
        <li><Link to='/products'>PRODUCTS</Link></li>
        <li>POST</li>
        <li>TRENDING</li>
        <li>WISHLIST</li>
        <li>ABOUT</li>
        <li>LOGIN</li>
        <li>REGISTER</li>
      </ul>         
    </nav>
  )
}

export default Header
