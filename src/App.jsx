import './index.css'
import  {Main, Navbar}  from './components'
import { Footer } from 'flowbite-react'
import PartnersPage from './pages/PartnersPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App" id='app'>
      <Router>
        <Routes>
      <Route exact path="/"  element={<Main/>} />
      <Route  path="/:partners"  element={<PartnersPage/>} />
      {/* < /> */}
      </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
