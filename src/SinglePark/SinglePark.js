import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import { getSingleParkData } from '../apiCalls'
import './SinglePark.css'

class SinglePark extends Component {
  constructor() {
    super()
    this.state = {
      singlePark: [],
    }
  }

  componentDidMount () {
    //console.log(this.props.parkToRender)
    getSingleParkData(`${this.props.parkToRender}`)
    .then(() => this.setState({singlePark: this.props.parkToRender}))
    //.then(() => console.log(this.state.singlePark))
  }

 



  render() {
    return (
      <section className='single-park-page'>
        <article className='single-park-image'>
          <div className='single-park-img-details'>
            <p>{this.state.singlePark.fullName}</p>
            <img className='individual-image' src={this.props.images[0].url} />
            <p>{this.state.singlePark.designation}</p> 
          </div>
        </article>
        <article className='single-park-details'>
          <div className='single-park-text'>
            <p>Info about {this.state.singlePark.fullName}: </p>
            <p>{this.state.singlePark.description}</p>
            <p>Location:</p>
            <p>{this.state.singlePark.directionsInfo}</p>
            <p>Weather Info:</p>
            <p>{this.state.singlePark.weatherInfo}</p>
          </div>
        </article>
      </section>
    )
  }
}

export default SinglePark


