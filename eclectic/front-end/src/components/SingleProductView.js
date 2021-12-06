import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getToken } from '../helpers/auth.js'
import { useNavigate } from 'react-router'



const SingleProductView = ({ name, brand, imageOne, imageTwo, price, url, colour, description, id }) => {
  
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  
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
        <div className='edit-div'>
          <Link to={`/products/${id}/edit`}><button>EDIT</button></Link>
          <button className='delete-button' onClick={handleDelete}>DELETE</button>  
        </div>
        {error ? (
          <p className='error'>Something went wrong. You must own this product if you want to delete it.</p>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default SingleProductView
