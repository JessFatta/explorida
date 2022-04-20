import React from 'react'
import { Link } from 'react-router-dom'
import './ParksCard.css'

const ParksCard = ({image, fullName}) => {
  return (
    <div className='parks-card'>
      <Link to={`/${fullName}`} >
      <img src={image[0].url} alt={`${fullName}'s image`} className='parks-card-image' />
      <p>{fullName}</p>
      </Link>
    </div>
  )
}

export default ParksCard