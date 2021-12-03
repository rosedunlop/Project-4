import React from 'react'


const SingleProductView = ({ name, brand, imageOne, imageTwo, price, url, colour, description }) => {
  

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
      </div>
    </>
  )
}

export default SingleProductView
