import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import ProductList from './pages/ProductList.js'
import SingleProduct from './pages/SingleProduct.js'
import { getToken } from './helpers/auth.js'
import PostProduct from './pages/PostProduct.js'
import ProductEdit from './pages/ProductEdit.js'
import About from './pages/About.js'
import Account from './pages/Account.js'


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
          <Route path= 'products/:id/edit' element={<ProductEdit />} />
          <Route path = '/products/:id' element={<SingleProduct isLoggedIn={isLoggedIn} />} />
          <Route path = '/products/post' element={<PostProduct />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/account' element={<Account />} />
          <Route path='/about' element={<About />} />
          <Route exact path ='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )

}

export default App
