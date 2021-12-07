import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductView from '../components/ProductView.js'
import OffCanvas from '../components/OffCanvas.js'

const ProductList = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [products, setProducts] = useState([])  
  const [isFilter, setIsFilter] = useState(false)
  
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('api/products/')
      setProducts(data.filter(p => p.owner.id === 1))
    }
    getProducts()
  }, [])
  
  const [userProducts, setUserProducts] = useState([])  
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('api/products/')
      setUserProducts(data.filter(p => p.owner.id !== 1))
    }
    getProducts()
  }, [])

  const handleClickCushion = () => {
    const filterProducts = products.filter(p => p.type === 'Cushion')
    setProducts(filterProducts)
    handleClose()
    setIsFilter(true)
  }
  const handleClickLamp = () => {
    const filterProducts = products.filter(p => p.type === 'Lampshade')
    setProducts(filterProducts)
    handleClose()
    setIsFilter(true)
  }
  const handleClickRug = () => {
    const filterProducts = products.filter(p => p.type === 'Rug')
    setProducts(filterProducts)
    handleClose()
    setIsFilter(true)
  }
  const handleClickTable = () => {
    const filterProducts = products.filter(p => p.type === 'Tableware')
    setProducts(filterProducts)
    handleClose()
    setIsFilter(true)
  }
  const handleRemoveFilter = async () => {
    const { data } = await axios.get('api/products/')
    setProducts(data.filter(p => p.owner.id === 1))
    handleClose()
    setIsFilter(false)
  }

  return (
    <> 
      {products.length && (
        <div className='products-container'>
          <div className='products'>
            <h3>ALL PRODUCTS</h3>
            <p>View the full range of products, ranging from cushions to rugs, lampshades to throws and tableware.</p>                                                                          
          </div>
          <div className='details'>
            <p>{`${products.length} products`}</p>
            <button onClick={handleShow}>FILTER</button>
            <OffCanvas isFilter={isFilter} show={show} setShow={setShow} handleRemoveFilter={handleRemoveFilter} handleClose={handleClose} handleClickRug={handleClickRug} handleClickLamp={handleClickLamp} handleClickTable={handleClickTable} handleClickCushion={handleClickCushion} />  
          </div>
          <div className='products-list'>
            {products.map((product) => (
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
