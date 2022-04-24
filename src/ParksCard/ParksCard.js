import React from 'react'
import { NavLink } from 'react-router-dom'
import './ParksCard.css'

const ParksCard = ({image, parkCode, fullName}) => {
  return (
    <div className='parks-card'>
      <NavLink to={`/${parkCode}`}>
      <img src={image[1].url} alt={image[1].altText} className='parks-card-image' />
      <p className='full-name'>{fullName}</p>
      </NavLink>
    </div>
  )
}


export default ParksCard