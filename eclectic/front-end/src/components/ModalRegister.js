import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


export const ModalRegister = ({ registerShow, handleRegisterClose }) => {
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
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" />
          </Form.Group>  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control type="text" placeholder="Enter image url" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirmation Password</Form.Label>
            <Form.Control type="password" placeholder="Confirmation Password" />
          </Form.Group>
          <button className="register-button" variant="primary" type="submit">
             Register
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalRegister
