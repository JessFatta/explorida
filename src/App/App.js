import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import { getAllFloridaParksData, getSingleParkData } from '../apiCalls.js'
import AllParks from '../AllParks/AllParks'
import Nav from '../Nav/Nav'
import SinglePark from '../SinglePark/SinglePark'
import FilteredParks from '../FilteredParks/FilteredParks';
import Footer from '../Footer/Footer';


class App extends Component {
  constructor() {
    super()
    this.state = {
      parks: [],
      error: null,
      filteredParks: [],
      selectedDesignation: null,
      //singlePark: []
    }
  }

  componentDidMount() {
    getAllFloridaParksData()
    .then(data => this.setState({parks: data.data}))
    .catch(error => this.setState({error: error}))

    
  }

  // getActivities = async (parks) => {
  //   const mappedActivities = []
  //   for(const park of parks)
  // }


  // getActivities = async (parks) => {
  //   const mappedActivities = []
  //   for(const parks of parks.activities) {
  //     const singlePark = await getSingleParkData()
  //     parks.activities = parks.activities.url
  //     mappedActivities.push(parks.activities)
  //   }
  //   this.setState({filteredParks: mappedActivities })
  //   console.log(this.state.filteredActivities)
  // }

  getDesignation = (designation) => {
    if (designation === 'All') {
      this.setState({filteredParks: this.state.parks, selectedDesignation: null})
      return
    }
    
    const filtered = this.state.parks.filter(park => park.designation.includes(designation))
    this.setState({filteredParks: filtered, selectedDesignation: designation})
  }

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


  render() {
    return (
      <div className="App">
        <Nav getDesignation={this.getDesignation}/>
        {this.state.error && <h2>{this.state.error.message}</h2>}
        <Route exact path='/' render={() => {
          return (
            <div>
              {this.state.selectedDesignation ? 
              
              <FilteredParks designation={this.state.selectedDesignation} filteredParks={this.state.filteredParks}/> :
              <AllParks parks={this.state.parks}  />}
            </div>
          )
        }} />
        <Route path='/:parkCode' render={({match}) => {
          let parkToRender = this.state.parks.find(park => park.parkCode === match.params.parkCode)
          return <SinglePark {...parkToRender} parkToRender={parkToRender}  />
        }} />
        <Footer />
      </div>
    );
  }
}

//parkCode={this.state.singlePark} was passed as props to singlePark but i dont think i need

export default App;
