import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Products , Footer , Contact } from '.'
import Certificates from './Certificates'
import Navbar from './Navbar'
import Partners from './Partners'
import Quality from './Quality'
import Slider from './Slider'
import About from './About'


const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Products />
      <About />
      <Certificates />
      <Quality />
      <Partners />
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