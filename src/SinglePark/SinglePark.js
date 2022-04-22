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

  componentDidMount() {
    getSingleParkData(`${this.props.parkToRender}`)
    .then(() => this.setState({singlePark: this.props.parkToRender}))
  }


  render() {
    return (
      <section className='single-park-page'>
        <article className='single-park-image'>
          <div className='single-park-img-details'>
            <p>{this.state.singlePark.fullName}</p>
            <img className='individual-image' src={this.props.images[0].url} alt={this.props.images[0].altText} />
            <p>{this.props.images[0].caption}</p>
          </div>
        </article>
        <article className='single-park-details'>
          <div className='single-park-text'>
            <p><b>Info about {this.state.singlePark.fullName}: </b></p>
            <p>{this.state.singlePark.description}</p>
            <p><b>Location:</b></p>
            <p>{this.state.singlePark.directionsInfo}</p>
            <p><b>Weather Info:</b></p>
            <p>{this.state.singlePark.weatherInfo}</p>
          </div>
        </article>
      </section>
    )
  }
}

export default SinglePark


