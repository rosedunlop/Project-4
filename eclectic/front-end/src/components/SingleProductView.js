import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getToken, getUserId } from '../helpers/auth.js'
import { useNavigate } from 'react-router'
import AddReview from './AddReview.js'
import Reviews from './Reviews.js'



const SingleProductView = ({ name, brand, imageOne, imageTwo, price, url, colour, description, id, owner, reviewSet, setProduct }) => {
  
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [starRating, setStarRating] = useState(null)
  const [hover, setHover] = useState(null)

  const userId = getUserId()
  const ownerId = owner.id.toString()
  
  const handleDelete = async (event) => {
    event.preventDefault()
    
    const config = {
      method: 'delete',
      url: `/api/products/${id}/`,
      headers: {
        'Authorization': `Bearer ${getToken()}`,  
        'Content-Type': 'application/json',
      },
    }
    
    try {  
      const response = await axios(config)
      console.log(response.data)
      setError(false)
      navigate('/products')
      
    } catch (err) {
      console.log(err)
      setError(true)    
    }   
  }

  return (
    <>
      <div className='image-container'>
        <img src={imageOne} alt='image' id='image-one'/>
        <div className='second-image'>
          <img src={imageTwo} alt='image' />    
        </div>       
      </div>
      <div className='info-container'>
        <p className='brand'>{brand.toUpperCase()}</p>
        <h2 className='name'>{name.toUpperCase()}</h2>
        <p className='price'>{`£${price}`}</p>
        <p className='colour'>{colour.toUpperCase()}</p>
        <div className='description-container'>
          <p>{description}</p>  
          <a href={url}><button>GO TO WEBSITE</button></a>
        </div>
        {userId === ownerId ? (
          <div className='edit-div'>
            <Link to={`/products/${id}/edit`}><button>EDIT</button></Link>
            <button className='delete-button' onClick={handleDelete}>DELETE</button>  
          </div>
        ) : (
          <></>
        )}
        {error ? (
          <p className='error'>Something went wrong. You must own this product if you want to delete it.</p>
        ) : (
          <></>
        )}
      </div>
      <div className='reviews-head'>
        <h4>{`REVIEWS (${reviewSet.length})`}</h4>
      </div>
      <div className='post-review'>
        <div className='review-form'>
          <AddReview id={id} setProduct={setProduct} starRating={starRating} setStarRating={setStarRating} hover={hover} setHover={setHover} />
        </div>
      </div>
      <div className='review-list'>   
        <Reviews reviewSet={reviewSet} />
      </div>
    </>
  )
}

export default SingleProductView
