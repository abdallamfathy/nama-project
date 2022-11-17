import './index.css'
import  {Main, Navbar}  from './components'
import { Footer } from 'flowbite-react'
import PartnersPage from './pages/PartnersPage'
import AboutPage from './pages/AboutPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App" id='app'>
      <Router>
        <Routes>
      <Route  path="/"  element={<Main/>} />
      <Route  path="/partners"  element={<PartnersPage/>} />
      <Route  path="/about"  element={<AboutPage/>} />
      </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
