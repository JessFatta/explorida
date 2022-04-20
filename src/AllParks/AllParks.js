import React from 'react'
import ParksCard from '../ParksCard/ParksCard'
import './AllParks.css'

const AllParks = ({parks}) => {
  const parkCards = parks.map(park => {
    return (
      <ParksCard 
        image={park.images}
        fullName={park.fullName}
        key={park.id}
        id={park.id}
      />
    )
  })

  return (
    <div className='all-parks-wrapper'>
      <h2>All Parks</h2>
      <div className='all-parks-container'>
        {parkCards}
      </div>
    </div>
  )
}

export default AllParks