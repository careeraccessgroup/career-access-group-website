import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import LaunchPad from '../pages/LaunchPad'
import Partnerships from '../pages/Partnerships'
import Careers from '../pages/Careers'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Gallery from '../pages/Gallery'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/launchpad" element={<LaunchPad />} />
    <Route path="/partnerships" element={<Partnerships />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRoutes
