import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Gallery from './pages/Gallery'
import About from './pages/About'
import { Spinner } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [photos, setPhotos] = useState()
  console.log(photos)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then(({ data }) => {
      setPhotos(data)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      {/* <Spinner animation="border" variant="warning" style={{ width: '60px', height: '60px' }} /> */}
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
