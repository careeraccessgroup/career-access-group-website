import React from 'react'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background Image Container */}
    <div className="absolute inset-0">
      <div 
        className="w-full h-full bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/0V0A1604.jpg')`, // Change this to your desired portrait image
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        {/* Mobile: Portrait image positioning */}
        <div className="block md:hidden w-full h-full bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/0V0A1604.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top'
          }}
        ></div>
        
        {/* Desktop: Better positioning for portrait images */}
        <div className="hidden md:block w-full h-full bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/0V0A1604.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        ></div>
      </div>
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-linear-to-r from-primary-dark/80 via-primary-dark/60 to-primary-dark/40"></div>
    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

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

export default Hero
