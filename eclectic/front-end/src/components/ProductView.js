import React from 'react'

const ProductView = ({ name, imageOne, price, brand }) => {
  return (
    <div className='single-product'>
      <img src={imageOne}/>
      <h4>{name}</h4>
      <p>{brand}</p>
      <p>{price}</p>            
    </div>
  )
}

export default ProductView
