import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { getToken } from '../helpers/auth.js'
import { useNavigate } from 'react-router'

const PostProductForm = () => {
  const [data, setData] = useState({
    name: '',
    type: '',
    description: '',
    imageOne: '',
    imageTwo: '',
    brand: '',
    url: '',
    price: null,
    colour: '',
  })
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()
    
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const config = {
      method: 'post',
      url: '/api/products/',
      headers: {
        'Authorization': `Bearer ${getToken()}`,  
        'Content-Type': 'application/json',
      },
      data,
    }
    try {
      const response = await axios(config)
      console.log(response.data)
      navigate(`/products/${response.data.id}`)
      setIsError(false)
        
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
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' value={data.name} placeholder="e.g. Blue LampShade" onChange={handleFormChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" name='type' value={data.type} placeholder="Lampshade" onChange={handleFormChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name='description' value={data.description} rows={3} placeholder='Blue Lampshade from ikea...' type='text' onChange={handleFormChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image One</Form.Label>
          <Form.Control type="text" name='imageOne' value={data.imageOne} placeholder="https://www.exampleimage.com/files/jpg" onChange={handleFormChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image Two</Form.Label>
          <Form.Control type="text" name='imageTwo' value={data.imageTwo} placeholder="https://www.exampleimage.com/files/jpg" onChange={handleFormChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" name='brand' value={data.brand} placeholder="Ikea" onChange={handleFormChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Website URL</Form.Label>
          <Form.Control type="text" name='url' value={data.url} placeholder="https://www.ikea.com" onChange={handleFormChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name='price' value={data.price} placeholder="55" onChange={handleFormChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Colour</Form.Label>
          <Form.Control type="text" name='colour' value={data.colour} placeholder="Blue" onChange={handleFormChange} />
        </Form.Group>
        <button variant="primary" type="submit">
          Submit
        </button>
        {isError ? (
          <>
            <p>Error. Please try again. You must be logged in to post a product.</p>
          </>
        ) : (
          <></>
        )}
      </Form>      
    </div>
  )
}

export default PostProductForm
