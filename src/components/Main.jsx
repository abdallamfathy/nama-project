import React from 'react'
import { Products , Footer } from '.'
import Navbar from './Navbar'
import Slider from './Slider'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Main