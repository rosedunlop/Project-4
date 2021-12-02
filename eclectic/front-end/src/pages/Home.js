import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FeaturedProductView from '../components/FeaturedProductView.js'


const Home = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get('/api/products')
        console.log(data)
        setProducts(data)

              
      } catch (err) {
        console.log(err)       
      }
    }
    getAllProducts()     
  }, [])  
  
  const filteredProducts = products.slice(0, 3)

  return (
    <div className='home-container'> 
      <div className='home-image'>
        <img src='https://cdn.shopify.com/s/files/1/0004/4630/0222/files/HOW_TO_DECORATE_A_LARGE_LIVING_ROOM_-_Large_lounge_room_decorating_ideas_-_LuxDeco.com_2.jpg?v=1597237159'></img>           
      </div>
      <div className='home-info'>
        <p>ECLECTIC</p>
        <h3>LUXURY HOMEWARE</h3>
        <p>Welcome to Eclectic. Eclectic is a place to go to inspire your interior mindset and introduce you to the trending homeware accessories right now.</p>  
      </div>
      <div className='home-featured'>
        <p>Featured Products</p>
        <h3>HIGHLIGHTS</h3>
        <div className='featured-products'>
          {filteredProducts.map((product) => (
            <FeaturedProductView key={product.name} {...product}/>
          ))}  
        </div>
      </div>
    </div>  
  )
}

export default Home
