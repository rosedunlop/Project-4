import React from 'react'
import { Link } from 'react-router-dom'

const ProductView = ({ name, imageOne, imageTwo, price, brand, id }) => {
  
  return (
  
    <div className='single-product'>
      <Link to={`/products/${id}/`}><img src={imageOne} onMouseOver={e => (e.currentTarget.src = imageTwo)} onMouseLeave={e => (e.currentTarget.src = imageOne)}/></Link>
      <h4>{name.toUpperCase()}</h4>
      <p>{brand.toUpperCase()}</p>
      <p>{`£${price}`}</p>            
    </div>
      
    
  )
}

export default ProductView
