import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import FilterForm from '../FilterForm/FilterForm'
import './Nav.css'

const Nav = ({getDesignation}) => {
  return (
    <div className='nav-container'>
      <NavLink to='/'>
        <div className='title'>Explorida</div>
      </NavLink>
      <FilterForm getDesignation={getDesignation}/>
    </div>
  )
}

export default Nav

Nav.propTypes = {
  getDesignation: PropTypes.func.isRequired
}