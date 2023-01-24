import React from 'react'
import loader from './loader.gif'

const spinner = () => {
  return (
    <div className='text-center my-3'>
      <img src={loader} alt="loading"></img>
    </div>
  )
}

export default spinner