import React, { Component } from 'react'
import './App.css';
import Nav from '../Nav/Nav'

class App extends Component{
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  render() {

    return (
      <div className="App">
        <h1> heyyyyy</h1>
        <Nav />
      </div>
    );
  }
}

export default App;
