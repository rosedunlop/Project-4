import React from 'react'

const FeaturedProductView = ({ imageOne, name, price }) => {
  const newName = name.toUpperCase()
  
  return (
    <div className='single-product'>
      <img src={imageOne} alt='image'/>
      <div className='textbox'>
        <h4>{newName}</h4>
        <p>{`£${price}`}</p>
      </div>
    </div>  
    
  )
}

export default FeaturedProductView
