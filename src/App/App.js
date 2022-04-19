import React, { Component } from 'react'
import './App.css';
import getAllFloridaParksData from '../apiCalls.js'
import Nav from '../Nav/Nav'


class App extends Component{
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  // componentDidMount() {
  //   getAllFloridaParksData()
  // }

  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
