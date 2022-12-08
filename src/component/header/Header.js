import React from 'react'
import image1 from '../../assets/logo.svg';
import profile from '../../assets/account.jpeg'
import './header.scss'

const Header=()=> {
  return (
    <div className='header'>
      <div className="logo">
        <img src={image1} alt="" id='logo-image'/>
        <div className='login'><img src={profile} alt='login'id='header-login'/><p>Sign In</p></div>
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

export default Header