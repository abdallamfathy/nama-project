import React from 'react'
import { Products } from '.'
import Navbar from './Navbar'
import Slider from './Slider'

const Main = () => {
  return (
    <div>
        <div className='container mx-auto -mt-5'>
        <Navbar/>
    </div>
        <Slider/>
        <div className=''>
        <Products/>
        </div>
    </div>
  )
}

export default Main