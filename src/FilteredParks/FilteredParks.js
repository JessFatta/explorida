import React from 'react'
import ParksCard from '../ParksCard/ParksCard'
import './FilteredParks.css'


const FilteredParks = ({filteredParks, designation}) => {
  const filteredParksCards = filteredParks.map(park => {
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
      <h2 className='explore-all-parks'>{designation}</h2>
      <div className='filtered-parks-container'>
        {filteredParksCards}
      </div>
    </div>
  )
}

export default FilteredParks