import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import axios from 'axios'


export const ModalRegister = ({ registerShow, handleRegisterClose, handleShowLogin }) => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
  })
  const [isError, setIsError] = useState(false)
 

  const handleRegisterSubmit = async (event) => {
    event.preventDefault()

    const config = {
      method: 'post',
      url: 'api/auth/register/',
      headers: { 
        'Content-Type': 'application/json',
      },
      data,
    }

    try {
      const response = await axios(config)
      console.log(response)
      setIsError(false)
      handleRegisterClose()
      handleShowLogin()
      
    } catch (err) {
      console.error(err)
      setIsError(true)    
    }
  }

  

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value, 
    })
  }
  
  
  return (
    <Modal
      aria-labelledby="example-custom-modal-styling-title"
      centered
      show={registerShow}
      onHide={handleRegisterClose}
      animation={false}
      dialogClassName="modal-90w"
      className='modal-container-register'
    >
      <Modal.Header className='modal-header' closeButton>
        <Modal.Title className="modal-title">
          REGISTER AN ACCOUNT
        </Modal.Title>
      </Modal.Header>
      <div className='register-para'>
        <p>
          Register an account with Eclectic to post your favourite home accessories and add some of Electics favourite products to your wishlist!  
        </p>
      </div>
      <Modal.Body>
        <Form onSubmit={handleRegisterSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" name='username' value={data.username} onChange={handleFormChange} />
            
          </Form.Group>  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' value={data.email} onChange={handleFormChange} />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control type="text" placeholder="Enter image url" name='profile_image' value={data.profile_image} onChange={handleFormChange} />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={data.password} onChange={handleFormChange} />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirmation Password</Form.Label>
            <Form.Control type="password" placeholder="Confirmation Password" name='password_confirmation' value={data.password_confirmation} onChange={handleFormChange} />
            
          </Form.Group>
          <button className="register-button" variant="primary" type="submit">
             REGISTER
          </button>
          {isError ? <p>Error, something went wrong. Passwords must be 8 characters long.</p> : <></>}
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalRegister
