import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Articles = () => {
  const [articles, setArticles] = useState([])  
  
  useEffect(() => {
    const getArticles = async () => {
      const { data } = await axios.get('/api/articles')
      setArticles(data)
    }
    getArticles()    
  }, [])  
  console.log(articles)  
  return (
    <>
      {articles.length && (
        <>  
          <div className='article-one'>
            <img src={articles[0].imageOne}/>
            <div className='text-article'>
              <h4>{articles[0].name}</h4>
              <a href={articles[0].url}><button>VIEW ARTICLE</button></a>         
            </div>
          </div>
          <div className='article-two'>
            <img src={articles[1].imageOne}/>
            <div className='text-article'>
              <h4>{articles[1].name}</h4>
              <a href={articles[1].url}><button>VIEW ARTICLE</button></a>  
            </div>
          </div>
        </>       
      )}
    </>
  )
}

export default Articles
