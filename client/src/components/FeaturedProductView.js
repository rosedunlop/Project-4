import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedProductView = ({ imageOne, name, price, id }) => {
  const newName = name.toUpperCase()
  
  return (
    <div className='single-product'>
      <Link to={`/products/${id}`}><img src={imageOne} alt='image'/></Link>
      <div className='textbox'>
        <h4>{newName}</h4>
        <p>{`£${price}`}</p>
      </div>
    </div>  
    
  )
}

export default FeaturedProductView
