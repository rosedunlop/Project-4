import React from 'react'
import { Link } from 'react-router-dom'

const RelatedProducts = ({ name, imageOne, brand, price, id }) => {
  return (
    <div className='single-related'>
      <Link to={`/products/${id}`}><img src={imageOne} alt='image' /></Link>
      <p>{name.toUpperCase()}</p>
      <p>{brand.toUpperCase()}</p>
      <p>{`£${price}`}</p>     
    </div>
  )
}

export default RelatedProducts

