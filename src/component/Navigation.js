import React from 'react'
import image1 from '../assets/logo.svg';
import './header.scss'

const Navigation=()=> {
  return (
    <div className='header'>
      <div className="logo">
        <img src={image1} alt=""/>
        <p>Sign In</p>
      </div>
      <div className="nav-links">
        <ul>
            <li>Home</li>
            <li>News</li>
            <li>Sport</li>
            <li>Reel</li>
            <li>Worklife</li>
            <li>Future</li>
            <li>Culture</li>
        </ul>
      </div>
      <div className="nav-search">
        <input type='text' placeholder='Search iPlayer'/>
      </div>
    </div>
  )
}

export default Navigation