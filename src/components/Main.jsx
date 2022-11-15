import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Products , Footer , Contact } from '.'
import Navbar from './Navbar'
import Slider from './Slider'


const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Products />
      <Contact />
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