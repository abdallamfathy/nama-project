import './index.css'
import  {Main}  from './components'
import PartnersPage from './pages/PartnersPage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import QualityPage from './pages/QualityPage'
import ProductsWhite from './pages/ProductsWhite'
import ProductsNormal from './pages/ProductsNormal'
import ProductsBlue from './pages/ProductsBlue'

function App() {
  return (
    <div className="App " id="app">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/products/white" element={<ProductsWhite />} />
          <Route path="/products/normal" element={<ProductsNormal />} />
          <Route path="/products/blue" element={<ProductsBlue />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
