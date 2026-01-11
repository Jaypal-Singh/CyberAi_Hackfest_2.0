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
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

import ProblemStatements from './Pages/Home/HackathonTracks/ProblemStatements'

function App() {
  return (
    <div className="app-container relative min-h-screen text-white">
      <div className="relative z-10">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/events" element={<Events />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/tracks/:trackId" element={<ProblemStatements />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
