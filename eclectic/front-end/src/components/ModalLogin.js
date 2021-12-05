import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { setToken } from '../helpers/auth.js'


const ModalLogin = ({ handleLoginClose, loginShow, setIsLoggedIn }) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)
  

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const data = {
      email,
      password,
    }

    const config = {
      method: 'post',
      url: 'api/auth/login/',
      headers: { 
        'Content-Type': 'application/json',
      },
      data: data,
    }

    try {
      const response = await axios(config)
      setToken(response.data.token)
      setIsLoggedIn(true)
      setIsError(false)
      handleLoginClose()    

    } catch (err) {
      console.error(err)
      setIsError(true)
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  
  return (   
    <Modal
      aria-labelledby="example-custom-modal-styling-title"
      centered
      show={loginShow}
      onHide={handleLoginClose}
      animation={false}
      dialogClassName="modal-90w"
      className='modal-container-login'
    >
      <Modal.Header className='modal-header' closeButton>
        <Modal.Title id="modal-title">
          LOGIN TO ECLECTIC
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className='login-form' type="text" placeholder="Enter email" onChange={handleEmailChange} value={email} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className='login-form' type="password" placeholder="Password" onChange={handlePasswordChange} value={password} />
          </Form.Group>
          {isError ? (
            <>
              <div>
                <p>Username or password are incorrect.</p>
              </div>
            </>
          ) : (
            <></>
          )}
          <button className='modal-button' value='login' type="submit">
             LOGIN
          </button>
        </Form>
      </Modal.Body>
      <Modal.Footer className='modal-footer'>      
      </Modal.Footer>
    </Modal>
  )
}

export default ModalLogin
