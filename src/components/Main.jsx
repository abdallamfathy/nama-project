import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Products , Footer , Contact } from '.'
import Navbar from './Navbar'
import Partners from './Partners'
import Quality from './Quality'
import Slider from './Slider'


const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className='container mx-auto'>
      <Products />
      <Quality />
      <Partners />
      <Contact />
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