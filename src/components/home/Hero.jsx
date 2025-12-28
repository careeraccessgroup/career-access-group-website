import React, { useState, useEffect } from 'react'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const heroImage = '/0V0A1604.jpg'

  useEffect(() => {
    // Preload hero image
    const img = new Image()
    img.onload = () => setImageLoaded(true)
    img.src = heroImage
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="w-full h-full bg-gradient-to-br from-primary-dark to-primary-light animate-pulse" />
        )}
        
        {/* Optimized background image */}
        <div 
          className={`w-full h-full bg-center bg-no-repeat transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/60 to-primary-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
              Empowering Africa's
              <span className="text-accent-teal block animate-fade-in-up-delay-1">
                Next Generation
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 animate-fade-in-up-delay-2">
                Through Innovative Curricula
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed animate-fade-in-up-delay-3 opacity-95">
              Bridging the gap between ambition and achievement across the continent
            </p>
            
            <div className="animate-fade-in-up-delay-4">
              <Link to="/activities/the-launchpad">
                <Button className="bg-secondary-orange hover:bg-secondary-hover-100 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 flex items-center gap-3 hover:scale-105 shadow-lg hover:shadow-xl">
                  Discover Our Curriculum
                  <span className="text-xl">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
