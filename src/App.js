import './App.css'
import Gallery from './pages/Gallery'
import About from './pages/About'
import { Spinner } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
const url = 'https://jsonplaceholder.typicode.com/photos'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Spinner animation="border" variant="warning" style={{ width: '60px', height: '60px' }} />

      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
