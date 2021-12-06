import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { removeToken } from '../helpers/auth.js'
import ModalLogin from './ModalLogin.js'
import  ModalRegister  from './ModalRegister.js'
import { useNavigate } from 'react-router-dom'

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [loginShow, setLoginShow] = useState(false)
  const handleShowLogin = () => setLoginShow(true)
  const handleLoginClose = () => setLoginShow(false)

  const [registerShow, setRegisterShow] = useState(false)
  const handleShowRegister = () => setRegisterShow(true)
  const handleRegisterClose = () => setRegisterShow(false)

  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    setIsLoggedIn(false)
    navigate('/')
    
  }
  
  return (
    <nav className='nav-container'>
      <div className='nav-title'>
        <Link to='/'><h1>ECLECTIC</h1></Link>
      </div>  
      <ul>
        <li><Link to='/products'>PRODUCTS</Link></li>
        <li><Link to='/products/post'>POST</Link></li>
        <li>TRENDING</li>
        <li>WISHLIST</li>
        <li>ABOUT</li>
        {isLoggedIn ? (
          <button className='logout-button' onClick={handleLogout}>LOGOUT</button>
        ) : (
          <>
            <button className='login-button' onClick={handleShowLogin}>LOGIN</button>
            <ModalLogin setIsLoggedIn={setIsLoggedIn} handleLoginClose={handleLoginClose} handleShowLogin={handleShowLogin} loginShow={loginShow}/>
          </>
        )}
        <button className='login-button' onClick={handleShowRegister}>REGISTER</button>
        <ModalRegister registerShow={registerShow} handleRegisterClose={handleRegisterClose} handleShowLogin={handleShowLogin}/>
      </ul>         
    </nav>
  )
}

export default Header
