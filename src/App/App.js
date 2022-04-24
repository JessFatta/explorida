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
    }
  }

  componentDidMount() {
    getAllFloridaParksData()
    .then(data => this.setState({parks: data.data}))
    .catch(error => this.setState({error: error}))
  }

  getDesignation = (designation) => {
    if (designation === 'All') {
      this.setState({filteredParks: this.state.parks, selectedDesignation: null})
      return
    }
    
    const filtered = this.state.parks.filter(park => park.designation.includes(designation))
    this.setState({filteredParks: filtered, selectedDesignation: designation})
  }


  render() {
    return (
      <div className="App">
        <Nav getDesignation={this.getDesignation}/>
        {this.state.error && <h2 className='loading-error-message'>{this.state.error.message}</h2>}
        <Route exact path='/' render={() => {
          return (
            <div>
              {this.state.selectedDesignation ? 
              
              <FilteredParks designation={this.state.selectedDesignation} filteredParks={this.state.filteredParks}/> :
              <AllParks parks={this.state.parks} />}
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

export default App;
