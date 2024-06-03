

// import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import ResumePage from './components/pages/ResumePage'
import PortfolioPage from './components/pages/PortfolioPage'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App(){
  return(
    
    <div className="viewport">
      
    <Header />

    <div className="px-5">
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </BrowserRouter>
    </div>

    <Footer />

    
  </div>
  )
}