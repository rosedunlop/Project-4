import React from 'react'
import Card from 'react-bootstrap/Card'
import { getToken } from '../helpers/auth.js'
import axios from 'axios'
import { Link } from 'react-router-dom'

const WishList = ({ setAccount, name, brand, imageOne, price, id }) => {
  
  const handleRemove = async () => {
    const config = {
      method: 'put',
      url: `/api/auth/${id}/`,
      headers: { 
        'Authorization': `Bearer ${getToken()}`,
      },
    }
    const { data } = await axios(config)
    setAccount(data)
  }
  
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/products/${id}`}><Card.Img variant='top' src={imageOne} /></Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{brand}</Card.Text>
        <Card.Text>{`£${price}`}</Card.Text>
        <button className='remove-button' onClick={handleRemove} >REMOVE</button>    
      </Card.Body>              
    </Card>
  )
}

export default WishList
