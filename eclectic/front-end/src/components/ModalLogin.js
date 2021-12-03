import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const ModalLogin = ({ handleLoginClose, loginShow }) => {
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
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className='login-form' type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: '#9e6c68' }}>Password</Form.Label>
            <Form.Control className='login-form' type="password" placeholder="Password" style={{ color: '#9e6c68' }} />
          </Form.Group>
          <button className='modal-button' variant="primary" type="submit">
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
