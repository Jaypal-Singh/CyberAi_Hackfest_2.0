import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'
import Home from './Pages/Home/Home'
import Sponsors from './Pages/Sponsors/Sponsors'
import Events from './Pages/Events/Events'
import Timeline from './Pages/Timeline/Timeline'
import OurTeam from './Pages/OurTeam/OurTeam'
import Gallery from './Pages/Gallery/Gallery'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <div className="app-container relative min-h-screen text-white">
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/events" element={<Events />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
