import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Products , Footer , Contact } from '.'
import Certificates from './Certificates'
import Navbar from './Navbar'
import Partners from './Partners'
import Quality from './Quality'
import Slide from './Slide'
import Slider from './Slider'


const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className=''>
      <Products />
      <Certificates />
      <Quality />
      <Partners />
      <Contact />
      <Slide />
      </div>
      <Footer />
    </div>
  )
}

export default Main

{/* <BrowserRouter>
<Routes>
  <Route  path="/"  element={<Navbar/>} />
  <Route path="/"   element={<Slider/>} /> 
  <Route  path="/"  element={<Contact/>} />
  <Route  path="/"  element={<Products/>} />
  <Route  path="/"  element={<Footer/>} />

</Routes>
</BrowserRouter> */}