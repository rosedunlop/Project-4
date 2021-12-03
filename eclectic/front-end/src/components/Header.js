import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalLogin from './ModalLogin.js'
import  ModalRegister  from './ModalRegister.js'

const Header = () => {
  const [loginShow, setLoginShow] = useState(false)
  const handleShowLogin = () => setLoginShow(true)
  const handleLoginClose = () => setLoginShow(false)

  const [registerShow, setRegisterShow] = useState(false)
  const handleShowRegister = () => setRegisterShow(true)
  const handleRegisterClose = () => setRegisterShow(false)
  
  return (
    <nav className='nav-container'>
      <div className='nav-title'>
        <Link to='/'><h1>ECLECTIC</h1></Link>
      </div>  
      <ul>
        <li><Link to='/products'>PRODUCTS</Link></li>
        <li>POST</li>
        <li>TRENDING</li>
        <li>WISHLIST</li>
        <li>ABOUT</li>
        <button className='login-button' onClick={handleShowLogin}>LOGIN</button>
        <ModalLogin handleLoginClose={handleLoginClose} handleShowLogin={handleShowLogin} loginShow={loginShow}/>
        <button className='login-button' onClick={handleShowRegister}>REGISTER</button>
        <ModalRegister registerShow={registerShow} handleRegisterClose={handleRegisterClose}/>
      </ul>         
    </nav>
  )
}

export default Header
