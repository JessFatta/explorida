// import React from 'react'
// import './FilterActivities.css'

// const FilterAllActivities = ({filterActivities}) => {
//   const handleChange = (activity) => {
//     filterActivities(activity)
//   }

//   return (
//     <div className='activity-filter'>
//       <label className='filter-label' name='activity'>Browse By Activity</label>
//       <select className='activity' name='activity' onChange={({target: {value}}) => handleChange(value)}>
//         <option value='All'>All</option>
//         <option value='Biking'>Biking</option>
//         <option value='Bird Watching'>Bird Watching</option>
//         <option value='Boating'>Boating</option>
//         <option value='Boat Tour'>Boat Tour</option>
//         <option value='Camping'>Camping</option>
//         <option value='Canoeing'>Canoeing</option>
//         <option value='Fishing'>Fishing</option>
//         <option value='Hiking'>Hiking</option>
//         <option value='Museum Exhibits'>Museum Exhibits</option>
//         <option value='Shopping'>Shopping</option>
//         <option value='Snorkeling'>Snorkeling</option>
//         <option value='Swimming'>Swimming</option>
//         <option value='Wildlife Watching'>Wildlife Watching</option>
//       </select>
//     </div>
//   )
// }

// export default FilterAllActivities