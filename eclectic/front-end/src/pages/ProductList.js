import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductView from '../components/ProductView.js'

const ProductList = () => {
  const [products, setProducts] = useState([])  
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('api/products/')
      setProducts(data)
    }
    getProducts()
  }, [])
  
  

  return (
    <div className='products-container'>
      <div className='products'>
        <h2>ALL PRODUCTS</h2>
        <p>View the full range of products, ranging from cushions to rugs, lampshades to throws and tableware.</p>                                                                          
      </div>
      <div className='products-list'>
        {products.map((product) => (
          <ProductView key={product.id} {...product} />
        ))}    
            
      </div>
            
    </div>
  )
}

export default ProductList
