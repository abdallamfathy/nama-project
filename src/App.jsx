import './index.css'
import  {Main, Navbar}  from './components'
import { Footer } from 'flowbite-react'
import PartnersPage from './pages/PartnersPage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App" id='app'>
      <Router>
        <Routes>
      <Route  path="/"  element={<Main/>} />
      <Route  path="/partners"  element={<PartnersPage/>} />
      <Route  path="/about"  element={<AboutPage/>} />
      <Route  path="/products"  element={<ProductsPage/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
