import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav-container'>
      <NavLink to='/'>
        <div className='title'>Explorida</div>
      </NavLink>
    </div>
  )
}

export default Nav