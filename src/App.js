import React from 'react'
import Gallery from './pages/Gallery'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import More from './pages/More'

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/more/:id" element={<More />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
