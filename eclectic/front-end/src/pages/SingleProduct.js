import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import SingleProductView from '../components/SingleProductView.js'
import { Spinner } from 'react-bootstrap'


const SingleProduct = ({ isLoggedIn, productList }) => {
  const [product, setProduct] = useState([])
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)  

  
  useEffect(() => {
    const getSingleProduct = async(id) => {
      const { data } = await axios.get(`/api/products/${id}/`)
      setProduct([data])
      setIsLoading(false)
    }
    getSingleProduct(id)
  }, [id])
  
  
  
  return (
    <>
      {!isLoading ? (
        <>
          {product.length && (
            <div className='one-product'>
              {product.map(((prod) => (
                <SingleProductView key={prod.id} {...prod} productList={productList} reviewSet={prod.review_set} isLoggedIn={isLoggedIn} setProduct={setProduct}/>  
              )))}  
            </div>
          )}
        </>    
      ) : (
        <div className='loading-container'>
          <Spinner animation='border' role='status' variant='secondary'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      )} 
    </>
  )
}

export default SingleProduct
