import React, { Component } from 'react'
import PropTypes from 'prop-types';
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
            <p className='full-name-single-view'>{this.state.singlePark.fullName}</p>
            <img className='individual-image' src={this.props.images[0].url} alt={this.props.images[0].altText} />
            <p>{this.props.images[0].caption}</p>
          </div>
        </article>
        <article className='single-park-details'>
          <div className='single-park-text'>
            <p className='info'><b>Info about {this.state.singlePark.fullName}: </b></p>
            <p>{this.state.singlePark.description}</p>
            <p className='location'><b>Location:</b></p>
            <p>{this.state.singlePark.directionsInfo}</p>
            <p className='weather'><b>Weather Info:</b></p>
            <p>{this.state.singlePark.weatherInfo}</p>
          </div>
        </article>
      </section>
    )
  }
}

export default SinglePark


SinglePark.propTypes = {
  parkToRender: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    directionsInfo: PropTypes.string.isRequired,
    weatherInfo: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      altText: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      credit: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url:  PropTypes.string.isRequired
    })).isRequired
  }
  ))
}


