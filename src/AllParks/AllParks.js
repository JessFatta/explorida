import React from 'react'
import PropTypes from 'prop-types';
import ParksCard from '../ParksCard/ParksCard'
import './AllParks.css'

const AllParks = ({parks}) => {
  const parkCards = parks.map(park => {
    return (
      <ParksCard 
        image={park.images}
        fullName={park.fullName}
        key={park.id}
        id={park.parkCode}
        parkCode={park.parkCode}
      />
    )
  })

  return (
    <div className='all-parks-wrapper'>
      <h2 className='explore-all-parks'>Explore Florida's Parks</h2>
      <div className='all-parks-container'>
        {parkCards}
      </div>
    </div>
  )
}


export default AllParks

AllParks.propTypes = {
  parks: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    }
  ))
}