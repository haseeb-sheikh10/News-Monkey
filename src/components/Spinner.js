import React, { Component } from 'react'
import loader from './loader.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={loader} alt="loading"></img>
      </div>
    )
  }
}

export default spinner