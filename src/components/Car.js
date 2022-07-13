import React from 'react'
import '../components/Car.css'

const Car = (props) => {
  return (
    <div className='car'>
        <h1 className='car-name'>{props.name}</h1>
        <img src={props.image} alt="" />
         <h2 className='car-speed'>{props.speed}</h2>
        <h2 className='car-engine'> {props.engine}</h2>

  </div>
  )
}

export default Car