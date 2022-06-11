import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        TONY GALE
      </div>
      <nav>
        <ul>
          <li><a href='#'>PHOTOS</a></li>
          <li><a href='#'>VIDEOS</a></li>
          <li><a href='#'>MOVIES</a></li>
          <li><a href='#'>BOOKS</a></li>
          <li><a href='#'>MUSIC</a></li>
        </ul>
      </nav>
      <div className='theme'>
        WHITE
      </div>
    </header>
  )
}

export default Header
