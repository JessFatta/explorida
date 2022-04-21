import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import { getSingleParkData } from '../apiCalls'
import './SinglePark.css'

class SinglePark extends Component {
  constructor() {
    super()
    this.state = {
      singlePark: '',
      //parks: []
    }
  }

  componentDidMount() {
    getSingleParkData(`${this.props.parkCode}`)
    .then(data => this.setState({singlePark: data}))
    .then(() => console.log('HIII', this.state.singlePark))
    .then(() => console.log('HEY', this.props.parkCode))
  }

  // displayPark(parkCode) {
  //   console.log(this.props.parkCode)
  //   let findCode = this.props.parkCode.find(code => code.code === parkCode)
  //   console.log(findCode)
  //   // getSingleParkData(`${findCode}`)
  //   // .then(data => this.setState({singlePark: data.data}))
  // }

  // displayParkDetails() {
  //   this.getParkCodes()
  //   .then((data) => this.setState({singlePark: data}))
  // }


  render() {
    return (
      <section className='single-park-page'>
        <article className='single-park-image'>
          <div className='single-park-img-details'>
            <p>hey</p>
            <p>image here</p>
            <p>image details here</p>
          </div>
        </article>
        <article className='single-park-details'>
          <div className='single-park-text'>
            <p>yo</p>
            <p>heyyy</p>
            <p>helloooooooooo</p>
          </div>
        </article>
      </section>
    )
  }
}

export default SinglePark