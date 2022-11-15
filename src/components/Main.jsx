import React from 'react'
import { Products , Footer , Contact } from '.'
import Navbar from './Navbar'
import Slider from './Slider'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Products/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Main