import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import ProductList from './pages/ProductList.js'
import SingleProduct from './pages/SingleProduct.js'
import { getToken } from './helpers/auth.js'
import PostProduct from './pages/PostProduct.js'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (getToken()){
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])
  
  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>
        <Routes>
          <Route path = '/products/post' element={<PostProduct />} />
          <Route path = '/products/:id' element={<SingleProduct />} />
          <Route path='/products' element={<ProductList />} />
          <Route exact path ='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )

}

export default App
