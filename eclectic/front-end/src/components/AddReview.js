import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { getToken } from '../helpers/auth.js'
import { FaStar } from 'react-icons/fa'


const AddReview = ({ id, setProduct, setStarRating, setHover, hover, starRating }) => {
  
  const [text, setText] = useState('')
  const [rating, setRating] = useState('')
  const [isError, setIsError] = useState(false)

  const getSingleProduct = async (id) => {
    const { data } = await axios.get(`/api/products/${id}/`)
    setProduct([data])
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      text,
      rating,
      product: id,
    }

    const config = {
      method: 'post',
      url: '/api/reviews/',
      headers: { 
        'Authorization': `Bearer ${getToken()}`, 
        'Content-Type': 'application/json',
      },
      data: data,
    }
    
    try {
      const response = await axios(config)
      console.log(response)
      setIsError(false)
      setText('')
      setRating('')
      setStarRating(null)
      getSingleProduct(id)
    
    } catch (err) {
      console.log(err)
      setIsError(true)    
    }

  }

  const handleTextChange = (event) => {
    setText(event.target.value)
  }
  const handleRatingChange = (event) => {
    setRating(event.target.value)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <div className='star-form'>
            <p className='rating-para'>Rating:</p>
            {[ ...Array(5)].map((star, i) => {
              const ratingValue = i + 1
              return (
                <label key={star} >
                  <input 
                    type="radio" 
                    name='rating' 
                    value={ratingValue} 
                    onClick={() => setStarRating(ratingValue)}
                    onChange={handleRatingChange}
                  />
                  <FaStar className='star' color={ratingValue <= (hover || starRating) ? '#ffc107' : '#e9e9e9'} size={20} 
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  /> 
                </label>     
              )         
            })}
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Review</Form.Label>
          <Form.Control onChange={handleTextChange} value={text} type='text' as='textarea' style={{ height: '200px' }} placeholder='Leave a review here' />
        </Form.Group>
        {isError ? ( <p className='error'>Error. You must have an account to review a product.</p>) : ( <></> )}
        <button className='review-button' value='post' type='submit'>REVIEW</button>
      </Form>     
    </div>
  )
}

export default AddReview
