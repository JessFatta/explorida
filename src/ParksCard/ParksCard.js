import React from 'react'
import { NavLink } from 'react-router-dom'
import './ParksCard.css'

const ParksCard = ({image, parkCode, id, fullName, displayPark}) => {
  return (
    <div className='parks-card'  >
      <NavLink to={`/${parkCode}`}>
      <img src={image[1].url} alt={`${fullName}'s image`} className='parks-card-image' />
      <p>{fullName}</p>
      </NavLink>
    </div>
  )
}
//onClick={(event) => displayPark(event.target.value)} 

export default ParksCard