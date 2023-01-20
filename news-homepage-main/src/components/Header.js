import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-menu.svg'
import closedHamburger from '../assets/images/icon-menu-close.svg'

function Header() {
  const [ clicked, setClicked ] = useState(false)

  return (
    <header>
        <picture>
            <img src={Logo} alt="logo for newspaper" />
        </picture>

        <nav className={ clicked ? 'open' : 'closed'}>
          <button className='close-menu-button' onClick={ () => setClicked(false) }>
            <img src={ closedHamburger } alt="menu button" />
          </button>
          <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/">New</Link>
            <Link to="/">Popular</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Categories</Link>
          </div>
        </nav>
        <button className='menu-button' onClick={ () => setClicked(true) }>
          <img src={ hamburger } alt="menu button" />
        </button>
    </header>
  )
}

export default Header