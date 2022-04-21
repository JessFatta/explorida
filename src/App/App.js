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
      parks: [],
      error: null
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
        <Nav />
        {this.state.error && <h2>{this.state.error.message}</h2>}
        <Route exact path='/' render={() => {
          return (
            <AllParks parks={this.state.parks} parkCode={this.state.singlePark}  />
          )
        }} />
        <Route path='/:parkCode' render={({match}) => {
          let parkToRender = this.state.parks.find(park => park.parkCode === match.params.parkCode)
          return <SinglePark {...parkToRender} parkToRender={parkToRender} parkCode={this.state.singlePark} allParkCodes={this.mapParks}/>
        }} />
      </div>
    );
  }
}

export default App;
