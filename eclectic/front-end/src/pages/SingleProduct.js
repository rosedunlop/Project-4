import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import SingleProductView from '../components/SingleProductView.js'


const SingleProduct = ( ) => {
  const [product, setProduct] = useState([])
  const { id } = useParams()  

  
  useEffect(() => {
    const getSingleProduct = async(id) => {
      const { data } = await axios.get(`/api/products/${id}/`)
      setProduct([data])
    }
    getSingleProduct(id)
  }, [id])
  
  
  
  return (
    <> 
      {product.length && (
        <div className='one-product'>
          {product.map(((prod) => (
            <SingleProductView key={product.id} {...prod} reviewSet={prod.review_set} setProduct={setProduct}/>  
          )))}  
        </div>
      )}
    </>
  )
}

export default SingleProduct
