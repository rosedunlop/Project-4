import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FeaturedProductView from '../components/FeaturedProductView.js'
import Articles from '../components/Articles.js'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'


const Home = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get('/api/products')
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
        <Carousel>
          <Carousel.Item>
            <img className='carousel-image' src='https://cdn.shopify.com/s/files/1/2601/7430/articles/LOW_NEW_GREEN_DINING_LANDSCAPE_3_1600x.jpg?v=1632994398'></img>           
          </Carousel.Item>
          <Carousel.Item >
            <img className='carousel-image' src='https://cdn.shopify.com/s/files/1/2601/7430/articles/LOW_DRAWING_ROOM_1_1600x.jpg?v=1631789761'></img>           
          </Carousel.Item>
          <Carousel.Item>
            <img className='carousel-image' src='https://cdn.shopify.com/s/files/1/2601/7430/articles/LOW_SNUG_SOFA_1600x.jpg?v=1633603401'></img>           
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='container'>
        <div className='home-info'>
          <p className='featured-title'>ECLECTIC</p>
          <h2>LUXURY HOMEWARE</h2>
          <p className='info-para'>Welcome to Eclectic. Eclectic is a place to go to inspire your interior mindset and introduce you to the trending homeware accessories right now.</p>  
        </div>
      </div>
      <div className='featured-cont'>
        <div className='featured-description'>
          <p>FEATURED PRODUCTS</p>
          <h2>HIGHLIGHTS</h2>
        </div>
      </div>
      <div className='home-featured'>
        <div className='featured-products'>
          {filteredProducts.map((product) => (
            <FeaturedProductView key={product.id} {...product}/>
          ))}  
        </div>
      </div>
      <div className='home-button'>
        <Link to='/products'><button>VIEW ALL PRODUCTS</button></Link>
      </div>
      <div className='article-cont'>
        <h2>TRENDING ARTICLES</h2>
      </div>
      <div className='articles-container'>
        <Articles />
      </div>
    </div>  
  )
}

export default Home
