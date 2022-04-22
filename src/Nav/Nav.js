import React from 'react'
import { NavLink } from 'react-router-dom'
import FilterActivities from '../FilterActivities/FilterActivities'
import './Nav.css'

const Nav = ({FilterActivities}) => {
  return (
    <div className='nav-container'>
      <NavLink to='/'>
        <div className='title'>Explorida</div>
      </NavLink>
      {/* <FilterActivities FilterActivities={FilterActivities} /> */}
    </div>
  )
}

export default Nav