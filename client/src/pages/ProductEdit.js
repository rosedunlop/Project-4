import React from 'react'
import EditProductForm from '../components/EditProductForm.js'

const ProductEdit = () => {
  return (
    <>
      <div className='post-heading-cont'>
        <div className='post-head'>
          <h3>EDIT PRODUCT</h3>
        </div>
      </div>
      <div className='form'>
        <EditProductForm />
      </div>
    </>
  )
}

export default ProductEdit

