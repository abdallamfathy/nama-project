import React from 'react'
import { Products , Footer } from '.'
import Navbar from './Navbar'
import Slider from './Slider'

const Main = () => {
  return (
    <div>
        <div className='container mx-auto -mt-5'>
        <Navbar/>
    </div>
        <Slider/>
        <div >
        <Products/>
        <Footer/>
        </div>
    </div>
  )
}

export default Main