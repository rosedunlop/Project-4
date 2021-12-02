import React from 'react'
import axios from 'axios'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/products/') // * <-- replace with your endpoint
      console.log(res.data)
    }
    getData()
  })


}

export default App
