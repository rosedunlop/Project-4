import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getToken } from '../helpers/auth.js'
import Image from 'react-bootstrap/Image'
import WishList from '../components/WishList.js'

const Account = () => {
  const [account, setAccount] = useState([])  
  
  useEffect(() => {
    const getAccountDetails = async () => {
        
      const config = {
        method: 'get',
        url: '/api/auth/',
        headers: { 
          'Authorization': `Bearer ${getToken()}`,
        },
      }
        
      const { data } = await axios(config)
      setAccount(data)      
    } 
    getAccountDetails()
  }, [])
  

    
  return (
    <>
      <div className='title-account'>
        <h2>ACCOUNT</h2>
      </div>
      <div className='account-container'>
        {account.profile_image ? (
          <div className='profile-pic'>
            <Image className='picture' src={account.profile_image} roundedCircle />  
          </div>
  
        ) : (
          <div className='profile-pic'>
            <Image className='picture' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' roundedCircle />  
          </div>
        )}       
        <div className='account-details'>
          <p>{`Username: ${account.username}`}</p>
          <p>{`Email: ${account.email}`}</p>
          <p>Password: ••••••••</p> 
        </div>
      </div>
      <div className='wish-list-account'>
        <div className='title-wish'>
          <h4>WISHLIST</h4>
        </div>
        {account.wish_list ? (
          <div className='single-wish'>
            {account.wish_list.map((list) => (
              <WishList key={account.wish_list.id} {...list} setAccount={setAccount} />  
            ))}  
          </div>
        ) : (
          <>
            <p className='para-wish'>You have not added anything to your wish list yet...</p>
          </>
        )}  
      </div>
    </>
  )
}

export default Account
