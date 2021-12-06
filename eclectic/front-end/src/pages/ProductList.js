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

  
  const adminProducts = products.filter(p => p.owner.username === 'rosedunlop')
  
  const userProducts = products.filter(p => p.owner.username !== 'rosedunlop')


  return (
    <> 
      {products.length && (
        <div className='products-container'>
          <div className='products'>
            <h3>ALL PRODUCTS</h3>
            <p>View the full range of products, ranging from cushions to rugs, lampshades to throws and tableware.</p>                                                                          
          </div>
          <div className='details'>
            <p><b>{products.length}</b> products</p>
            <button>FILTER</button>  
          </div>
          <div className='products-list'>
            {adminProducts.map((product) => (
              <ProductView key={product.id} {...product} />
            ))}        
          </div>
          <div className='recommended-details'>
            <h3>RECOMMENDED BY YOU</h3>
            <p>Products posted by our members that they would like to share with the Eclectic community.</p>
          </div>
          <div className='products-list'>
            {userProducts.map((product) => (
              <ProductView key={product.id} {...product} />
            ))}        
          </div>        
        </div>
      )}  
    </>
  )
}

export default ProductList
