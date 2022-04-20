import React from 'react'
import './ParksCard.css'

const ParksCard = ({image, url, fullName}) => {
  return (
    <div className='parks-card'>
      <img src={image[1].url} alt={`${fullName}'s image`} className='parks-card-image' />
      <p>{fullName}</p>
    </div>
  )
}

export default ParksCard