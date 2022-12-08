import React from 'react'
import japan from '../../assets/Japan_national_football_team_crest.svg.png';
import croatia from '../../assets/croatia2.jpeg'
import japanvcroation from '../../assets/japanvcroatia.jpeg'
import './highlight.scss'

const Highlight =()=> {
  return (
    <div className='highlight'>
        <div>
            <h2>FIFA World Cup 2022</h2>
            <p>Live coverage comes from the last 16 match between japan and croatia</p>
            <h3>Japan v Croatia</h3>
            <button>Watch now</button>
            <p>View all of FIFA World Cup 2022</p>
        </div>
        <div className='team-logo'>
          <div className='home-team'><img src={japan} alt='home team' /></div>
          <div className='vs'><p>V</p></div>
          <div className='away-team'><img src={croatia} alt='away team' /></div>
        </div>
        <div>
          <img src={japanvcroation} alt='' />
        </div>
    </div>
  )
}

export default Highlight