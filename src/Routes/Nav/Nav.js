import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {

  render() {
    return (
      <nav id='nav-bar'>
        <img class='nav-split' id='logo' src='/img/PersonalLogoInitials.png' alt='HR personal logo'></img>
        <div class='nav-split' id='nav-items'>
          <Link class='droplist' to='/'>Home</Link>
          <Link class='droplist' to='/about'>About</Link>
          <Link class='droplist' to='/portfolio'>Portfolio</Link>
          <Link class='droplist' to='/contact'>Contact</Link>
        </div>
      </nav>
    );
  }
  
}

export default Nav;