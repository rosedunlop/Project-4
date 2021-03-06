import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getToken, getUserId } from '../helpers/auth.js'
import { useNavigate } from 'react-router'
import AddReview from './AddReview.js'
import Reviews from './Reviews.js'
import Carousel from 'react-bootstrap/Carousel'
import RelatedProducts from './RelatedProducts.js'


const SingleProductView = ({ productList, isLoggedIn, name, brand, imageOne, imageTwo, price, url, colour, description, id, owner, reviewSet, setProduct, type }) => {
  
  const relatedProducts = productList.filter(prod => prod.type === type).slice(0, 4)

  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [starRating, setStarRating] = useState(null)
  const [hover, setHover] = useState(null)

  const userId = getUserId()
  const ownerId = owner.id.toString()
  const [isAdded, setIsAdded] = useState(false)
  

  const handleWishAdd = async (event) => {
    event.preventDefault()

    const config = {
      method: 'post',
      url: `/api/products/${id}/`,
      headers: { 
        'Authorization': `Bearer ${getToken()}`,
      },
    }
    try {
      const response = await axios(config)
      console.log(response)
      setIsAdded(true)
    } catch (err){
      console.log(err)
      setIsAdded(false)
    }
  }
  
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
        <Carousel variant="dark" fade className='carousel-single'>
          <Carousel.Item className='carousel-item' interval={20000}>
            <img className="d-block w-100" src={imageOne} alt='First Slide' style={{ objectFit: 'cover' }} />
          </Carousel.Item>
          <Carousel.Item className='carousel-item' interval={20000}>
            <img className="d-block w-100" src={imageTwo} alt='Second Slide' style={{ objectFit: 'cover' }}  />
          </Carousel.Item>
        </Carousel>       
      </div>
      <div className='info-container'>
        <p className='brand'>{brand.toUpperCase()}</p>
        <h2 className='name'>{name.toUpperCase()}</h2>
        <p className='price'>{`??${price}`}</p>
        <p className='colour'>{colour.toUpperCase()}</p>
        <div className='description-container'>
          <p>{description}</p>  
          <a href={url}><button>GO TO WEBSITE</button></a>
          {isLoggedIn ? (
            <>
              {isAdded ? (
                <button className='wishlist-button' >ADDED TO WISHLIST</button>
              ) : (
                <button className='wishlist-button' onClick={handleWishAdd}>ADD TO WISHLIST</button>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
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
      <div className='container-related'>
        <div className='related-title'>
          <h4>RELATED PRODUCTS</h4>
        </div>
        <div className='related-prods'>
          {relatedProducts.map((product) => (
            <RelatedProducts key={product.id} {...product} />
          ))}
        </div>
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
