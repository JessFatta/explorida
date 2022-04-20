import React from 'react'
import { Link } from 'react-router-dom'
import './ParksCard.css'

const ParksCard = ({image, id, fullName}) => {
  return (
    <div className='parks-card'>
      <Link to={`/${id}`} >
      <img src={image[1].url} alt={`${fullName}'s image`} className='parks-card-image' />
      <p>{fullName}</p>
      </Link>
    </div>
  )
}

export default ParksCard