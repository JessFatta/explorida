import React, { Component } from 'react'
import { Route } from 'react-router-dom'
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
        <Route exact path='/' render={() => {
          return (
            <AllParks parks={this.state.parks} />

          )
        }} />
        <Route exact path='/:fullName' render={({match}) => {
          let name = parseInt(match.params.fullName)
          return <SinglePark parkCode={this.mapParks()} singleParkName={name} />
        }} />
      </div>
    );
  }
}

export default App;
