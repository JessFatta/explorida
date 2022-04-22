import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import { getAllFloridaParksData, getSingleParkData } from '../apiCalls.js'
import AllParks from '../AllParks/AllParks'
import Nav from '../Nav/Nav'
import SinglePark from '../SinglePark/SinglePark'
import FilterActivities from '../FilterActivities/FilterActivities';
import Footer from '../Footer/Footer';


class App extends Component {
  constructor() {
    super()
    this.state = {
      parks: [],
      error: null,
      filteredParks: [],
      selectedActivity: null
      //singlePark: []
    }
  }

  componentDidMount() {
    getAllFloridaParksData()
    .then(data => this.setState({parks: data.data}))
    .catch(error => this.setState({error: error}))
    //.then(() => this.mapParks())
    // this.mapParks()
    // .then(data => this.setState({singlePark: data}))
    
  }

  // getActivities = async (activities) => {
  //   const mappedActivities = []
  //   for(const activity of activities.activities) {
  //     const singlePark = await getSingleParkData()
  //     activity.activities = park.activities.name
  //     mappedActivities.push(activity)
  //   }
  //   this.setState({filteredParks: mappedActivities })
  // }

  // filterActivities = (activity) => {
  //   if (activity === 'All') {
  //     this.setState({filteredParks: this.state.parks, selectedActivity: null})
  //     return
  //   }

  //   const filteredParks = this.state.parks.filter(park => park.activities.includes(activity))
  //   this.setState({filteredParks: filteredParks, selectedActivity: activity})
  // }


  // mapParks = () => {
  //   let allParkCodes = this.state.parks.map(park => {
  //     return park.parkCode
  //   })
  //   console.log(allParkCodes)

  //   let oneCode = allParkCodes.filter(code => {
  //     console.log(code)
  //     return code === code
  //   })
  //   console.log(oneCode)
    
  //   //return oneCode

  // }


  // mapForImages = () => {
  //   let getImages = this.state.parks.find(park => {
  //     return park.images[0].url
  //   })
  //   console.log(getImages)
  //   return getImages[0]
  // }


  render() {
    return (
      <div className="App">
        <Nav filteredActivities={this.filteredActivities}/>
        {this.state.error && <h2>{this.state.error.message}</h2>}
        <Route exact path='/' render={() => {
          return (
            <AllParks parks={this.state.parks}  />
          )
        }} />
        <Route path='/:parkCode' render={({match}) => {
          let parkToRender = this.state.parks.find(park => park.parkCode === match.params.parkCode)
          return <SinglePark {...parkToRender} parkToRender={parkToRender}  mapForImages={this.mapForImages}/>
        }} />
        <Footer />
      </div>
    );
  }
}

//parkCode={this.state.singlePark} was passed as props to singlePark but i dont think i need

export default App;
