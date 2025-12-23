import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import TheLaunchPad from '../pages/TheLaunchPad'
import Partnerships from '../pages/Partnerships'
import Careers from '../pages/Careers'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Gallery from '../pages/Gallery'
import CommunityService from '../pages/CommunityService'
import Clubs from '../pages/Clubs'
import CareerFair from '../pages/CareerFair'
import Scholars from '../pages/Scholars'
import Services from '../pages/Services'
import UniversityFair from '../pages/UniversityFair'
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/curricula/the-launchpad" element={<TheLaunchPad />} />
    <Route path="/partnerships" element={<Partnerships />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/programs/community-service" element={<CommunityService />} />
    <Route path="/programs/clubs" element={<Clubs />} />
    <Route path="/programs/career-fairs" element={<CareerFair />} />
    <Route path="/programs/university-fairs" element={<UniversityFair />} />
    <Route path="/programs/scholars-program" element={<Scholars />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRoutes
