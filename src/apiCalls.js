const getAllFloridaParksData = () => {
  return fetch('https://developer.nps.gov/api/v1/parks?stateCode=fl&api_key=ikJQlV6Nf6rZWouLdPDfsJ4IG0kFDzKuSgMrFvLw')
  .then(response => response.json())
  //.then(data => console.log(data))
}

const getSingleParkData = (parkCode) => {
  return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=ikJQlV6Nf6rZWouLdPDfsJ4IG0kFDzKuSgMrFvLw`)
  .then(response => response.json())
  //.then(data => console.log(data))
}

const handleResponse = (response) => {
  if(!response.ok) {
    throw new Error('Something went wrong!')
  } else {
    return response.json()
  }
}

export { getAllFloridaParksData, getSingleParkData }