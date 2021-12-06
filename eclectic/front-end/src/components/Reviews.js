import React from 'react'
import Card from 'react-bootstrap/Card'
import { FaStar } from 'react-icons/fa'


const Reviews = ({ reviewSet }) => {
  return (
    <div className='review-card'>
      {reviewSet.map((review) => (
        <Card style={{ width: '38vw' }} className='card' key={review.id}>
          <Card.Header>{[...Array(review.rating)].map((star) => {
            return (
              <FaStar key={star} />
            )
          })}
          </Card.Header>
          <Card.Body>
            <Card.Text className='text-card'>{review.text}</Card.Text>
          </Card.Body>  
          <Card.Footer className='foot' style={{ background: 'white' }}>{`Made by ${review.owner.username}`}</Card.Footer>  
        </Card>      
      ))}
    
    </div>  
  )
}

export default Reviews
