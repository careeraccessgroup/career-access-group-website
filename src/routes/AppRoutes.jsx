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
import TheLaunchPad from '../pages/TheLaunchPad'
import CommunityService from '../pages/CommunityService'
import Clubs from '../pages/Clubs'
import CareerFair from '../pages/CareerFair'
import Scholars from '../pages/Scholars'
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/launchpad" element={<LaunchPad />} />
    <Route path="/partnerships" element={<Partnerships />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/activities/the-launchpad" element={<TheLaunchPad />} />
    <Route path="/activities/community-service" element={<CommunityService />} />
    <Route path="/activities/clubs" element={<Clubs />} />
    <Route path="/activities/career-fairs" element={<CareerFair />} />
    <Route path="/activities/scholars-program" element={<Scholars />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRoutes
