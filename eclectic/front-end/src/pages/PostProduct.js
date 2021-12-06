import React from 'react'
import PostProductForm from '../components/PostProductForm.js'


const PostProduct = () => {
 
  return (
    <>
      <div className='post-heading-cont'>
        <div className='post-head'>
          <h3>POST A PRODUCT</h3>
          <p>Post a product to our library of homeware accessories that you have enjoyed and can recommend to the Eclectic community. Please ensure you add plenty of details!</p>
        </div>
      </div> 
      <div className='form'>
        <PostProductForm/>            
      </div>
    </>
  )
}

export default PostProduct
