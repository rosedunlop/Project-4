import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { removeToken, removeUserId } from '../helpers/auth.js'
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
    removeUserId()
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
        <li><Link to='/about'>ABOUT</Link></li>
        {isLoggedIn ? (
          <>
            <button className='logout-button' onClick={handleLogout}>LOGOUT</button>
            <li><Link to='/account'>ACCOUNT</Link ></li>
          </>
        ) : (
          <>
            <button className='login-button' onClick={handleShowLogin}>LOGIN</button>
            <ModalLogin setIsLoggedIn={setIsLoggedIn} handleLoginClose={handleLoginClose} handleShowLogin={handleShowLogin} loginShow={loginShow}/>
            <button className='register-button' onClick={handleShowRegister}>REGISTER</button>
            <ModalRegister registerShow={registerShow} handleRegisterClose={handleRegisterClose} handleShowLogin={handleShowLogin}/>
          </>
        )}
      </ul>         
    </nav>
  )
}

export default Header
