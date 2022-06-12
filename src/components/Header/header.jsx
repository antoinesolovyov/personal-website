import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Link to='/'>TONY GALE</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/photos">PHOTOS</Link></li>
          <li><Link to='/videos'>VIDEOS</Link></li>
          <li><Link to='/movies'>MOVIES</Link></li>
          <li><Link to='/books'>BOOKS</Link></li>
          <li><Link to='/music'>MUSIC</Link></li>
        </ul>
      </nav>
      <div className='theme'>
        WHITE
      </div>
    </header>
  )
}

export default Header
