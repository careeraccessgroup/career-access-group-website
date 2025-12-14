import React, { useEffect } from 'react'
import Hero from '../components/home/Hero'
import Introduction from '../components/home/Introduction'
import Values from '../components/home/Values'
import Partner from '../components/home/Partner'
import Footprint from '../components/home/Footprint'
import Testimony from '../components/home/Testimony'
import CallToAction from '../components/home/CallToAction'
import { updateMetaTags, pageMetadata } from '../utils/seo'

const Home = () => {
  useEffect(() => {
    updateMetaTags(pageMetadata.home)
  }, [])

  return (
    <div>
      <Hero />
      <Introduction />
      <Values />
      <Partner />
      <Footprint />
      <Testimony />
      <CallToAction />
    </div>
  )
}

export default Home
