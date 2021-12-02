import React from 'react'
// import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'

function App() {
  // React.useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get('/api/products/') // * <-- replace with your endpoint
  //     console.log(res.data)
  //   }
  //   getData()
  // })
  
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
