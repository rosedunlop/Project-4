import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path ='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )

}

export default App
