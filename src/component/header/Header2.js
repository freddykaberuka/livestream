import React from 'react'
import image1 from '../../assets/logo2.svg';

const Header2=()=> {
  return (
    <div className='header2'>
        <div className='player-img'>
            <img src={image1} alt='' />
        </div>
        <div className='nav-links2'>
            <ul>
                <li>Channels</li>
                <li>Categories</li>
                <li>A-Z</li>
                <li>TV Guide</li>
                <li>My Programmes</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Header2