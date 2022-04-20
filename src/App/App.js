import React, { Component } from 'react'
import './App.css';
import getAllFloridaParksData from '../apiCalls.js'
import AllParks from '../AllParks/AllParks'
import Nav from '../Nav/Nav'


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
    console.log(this.state.parks)
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <AllParks parks={this.state.parks} />
      </div>
    );
  }
}

export default App;
