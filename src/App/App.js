import React, { Component } from 'react'
import './App.css';
import { getAllFloridaParksData, getSingleParkData } from '../apiCalls.js'
import AllParks from '../AllParks/AllParks'
import Nav from '../Nav/Nav'
import SinglePark from '../SinglePark/SinglePark'


class App extends Component {
  constructor() {
    super()
    this.state = {
      parks: []
    }
  }

  componentDidMount() {
    getAllFloridaParksData()
    .then(data => this.setState({parks: data.data}))
    //.then(() => console.log(this.state.parks.parkCode))
  }

  mapParks() {
    const allParkCodes = this.state.parks.map(park => {
      return park.parkCode
    })
    return allParkCodes
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <AllParks parks={this.state.parks} />
        <SinglePark parkCode={this.mapParks()} />
      </div>
    );
  }
}

export default App;
