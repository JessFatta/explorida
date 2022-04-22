import React from 'react'
import './FilterForm.css'

const FilterDesignations = ({getDesignation}) => {
  const handleChange = (designation) => {
    getDesignation(designation)
  }

  return (
    <div className='designation-filter'>
      <label className='filter-label' name='designation'>Browse By Park Designation </label>
      <select className='designation' name='designation' onChange={({target: {value}}) => handleChange(value)}>
        <option value='All'>All Parks</option>
        <option value="Ecological &amp; Historic Preserve">Ecological &amp; Historic Preserve</option>
        <option value='National Memorial'>National Memorial</option>
        <option value='National Monument'>National Monument</option>
        <option value='National Park'>National Park</option>
        <option value='National Preserve'>National Preserve</option>
        <option value='National Seashore'>National Seashore</option>
      </select>
    </div>
  )
}

export default FilterDesignations