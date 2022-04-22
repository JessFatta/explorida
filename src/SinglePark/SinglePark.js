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

  // mapForImages = () => {
  //   let getImages = this.state.singlePark.find(park => {
  //     return park.images[0].url
  //   })
  //   console.log(getImages)
  //   return getImages[0]
  // }



  render() {
    return (
      <section className='single-park-page'>
        <article className='single-park-image'>
          <div className='single-park-img-details'>
            <p>{this.state.singlePark.fullName}</p>
            {/* <div>
              {this.state.singlePark.find(park => {
                return <img src={park.images[0].url} />
              })}
            </div> */}
            {/* <img src={this.props.mapForImages()}/> */}
            {/* <img src={() => this.mapForImages()}/> */}
            {/* <img src={this.state.singlePark.images.url} /> */}
            <p>{this.state.singlePark.designation}</p> 
          </div>
        </article>
        <article className='single-park-details'>
          <div className='single-park-text'>
            <p>{this.state.singlePark.description}</p>
            <p>{this.state.singlePark.directionsInfo}</p>
            <p>{this.state.singlePark.weatherInfo}</p>
          </div>
        </article>
      </section>
    )
  }
}

export default SinglePark

/* <div className='current-park-image' style={{backgroundImage: url(this.mapForImages())}}>
</div> */

