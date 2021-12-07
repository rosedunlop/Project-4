import React from 'react'
import Card from 'react-bootstrap/Card'

const WishList = ({ name, brand, imageOne, price }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={imageOne} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{brand}</Card.Text>
        <Card.Text>{`£${price}`}</Card.Text>    
      </Card.Body>              
    </Card>
  )
}

export default WishList
