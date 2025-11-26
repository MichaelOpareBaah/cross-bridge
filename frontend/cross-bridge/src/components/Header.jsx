import React from 'react'
import logo from '../assets/logo.JPG'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
   
      <header>
        <NavLink to='/'>
            <img className='logo' src={logo} alt='logo'/>
        </NavLink>
        
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about-us'>About Us</NavLink>
          <NavLink to='courses'>Courses</NavLink>
          <NavLink to='alumni-news'>Alumni News</NavLink>
          <NavLink to='contact-us'>Contact Us</NavLink>
        </nav>
      </header>
   
  )
}
