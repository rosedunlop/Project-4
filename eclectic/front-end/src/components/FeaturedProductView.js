import React from 'react'

const FeaturedProductView = ({ imageOne, name, price }) => {
  return (
    <>
      <img src={imageOne} alt='image'/>
      <h4>{name}</h4>
      <p>{`£${price}`}</p>
    </>  
    
  )
}

export default FeaturedProductView
