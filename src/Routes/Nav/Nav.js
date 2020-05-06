import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {

  render() {
    return (
      <nav id='nav-bar'>
        <Link class='droplist' to='/'>Home</Link>
        <Link class='droplist' to='/about'>About</Link>
        <Link class='droplist' to='/portfolio'>Portfolio</Link>
        <Link class='droplist' to='/contact'>Contact</Link>
      </nav>
    );
  }
  
}

export default Nav;