import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {

  render() {
    return (
      <nav id='nav-bar'>
        <img className='nav-split' id='logo' src='/img/PersonalLogoInitials.png' alt='HR personal logo'></img>
        <div className='nav-split' id='nav-items'>
          <Link className='droplist' to='/'>Home</Link>
          <Link className='droplist' to='/about'>About</Link>
          <Link className='droplist' to='/portfolio'>Portfolio</Link>
          <Link className='droplist' to='/contact'>Contact</Link>
        </div>
      </nav>
    );
  }
  
}

export default Nav;