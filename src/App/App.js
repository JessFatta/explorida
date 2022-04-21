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
      singlePark: ''
    }
  }

  componentDidMount() {
    getAllFloridaParksData()
    .then(data => this.setState({parks: data.data}))
    .then(() => this.mapParks())
  }

  mapParks() {
    let allParkCodes = this.state.parks.map(park => {
      return park.parkCode
    })
    console.log(allParkCodes)

    let oneCode = allParkCodes.filter(code => {
      console.log(code)
      return code === code
    })
    console.log(oneCode)
    this.setState({singlePark: oneCode})
    //console.log(this.state.singlePark)
    //return oneCode
    // getSingleParkData(oneCode)
    // .then(data => this.setState({singlePark: data}))
    // .then(() => console.log(this.state.singlePark))

  }

  // displayPark(code) {
  //   const eachPark = this.state.singlePark.filter(park => park.parkCode === code)
  //   this.setState({singlePark: eachPark})
  //   console.log(this.state.singlePark)
  // }

  // displayPark(parkCode) {
  //   let findCode = this.state.parks.find(code => code.code === parkCode)
  //   console.log(findCode)
  //   // getSingleParkData(`${findCode}`)
  //   // .then(data => this.setState({singlePark: data.data}))
  // }


  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path='/' render={() => {
          return (
            <AllParks parks={this.state.parks} parkCode={this.state.singlePark}  />
          )
        }} />
        <Route path='/:parkCode' render={({match}) => {
          let id = this.state.parks.find(code => code === match.params.parkCode)

          return <SinglePark parkCode={this.state.singlePark}  />
        }} />
      </div>
    );
  }
}

export default App;
