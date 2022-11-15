import React from 'react'
import { Products , Footer } from '.'
import Navbar from './Navbar'
import Slider from './Slider'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <div >
        <Products/>
        <Footer/>
        </div>
    </div>
  )
}

export default Main