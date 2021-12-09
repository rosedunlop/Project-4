import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <ul>
        <div className='created'>
          <li>Created by Rose Dunlop</li>
        </div>
        <div className='linked-in'>
          <a href='https://www.linkedin.com/in/rose-dunlop/'><FaGithub className='icon' /></a>
          <a href='https://github.com/rosedunlop'><FaLinkedin className='icon' /></a>
        </div>
      </ul>    
    </footer>
  )
}

export default Footer
