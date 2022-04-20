import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getSingleParkData } from '../apiCalls'
import './SinglePark.css'

class SinglePark extends Component {
  constructor() {
    super()
    this.state = {
      singlePark: []
    }
  }

  getParkCodes(parkCode) {
    this.props.parkCode.map(code => getSingleParkData(code))
  }

  render() {
    return (
      <section className='single-park-page'>
        <article className='single-park-details'>
          <div className='single-park-text'>
            <p>{this.state.singlePark.fullName}</p>
          </div>
        </article>
      </section>
    )
  }
}

export default SinglePark