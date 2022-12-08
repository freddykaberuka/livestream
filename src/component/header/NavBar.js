import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Header2 from './Header2'

const NavBar=()=> {
    const links = [
        {
            id: 1,
            description: 'Home',
            path: '/',
        },
        {
            id: 2,
            description: 'News',
            path: '/news',
        },
        {
            id: 3,
            description: 'Sport',
            path: '/sport',
        },
        {
            id: 4,
            description: 'Reel',
            path: '/reel',
        },
    ]
  return (
    <div>
        <ul>
            {
                links.map((link)=>{
                    <li key={link.id}><Link to={link.path}>{link.description}</Link></li>
                })
            }
        </ul>
        <Header />
        <Header2 />
    </div>
  )
}

export default NavBar