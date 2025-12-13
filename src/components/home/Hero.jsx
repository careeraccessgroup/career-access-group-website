import React from 'react'
import heroImage from '../../assets/0V0A1760.jpg'

const Hero = () => (
  <section 
    className="relative h-screen flex items-center justify-start bg-cover bg-center"
    style={{ backgroundImage: `url(${heroImage})` }}
  >
    <div className="absolute inset-0 bg-primary-dark bg-opacity-70"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
        Empowering Africa's Next Generation: 
        <span className="text-accent-teal block mt-2 animate-fade-in-up-delay-1">
          Revolutionizing Career Education
        </span>
        <span className="block mt-2 animate-fade-in-up-delay-2">
          Through The Launch Pad
        </span>
      </h1>
      <p className="text-xl mb-8 max-w-2xl animate-fade-in-up-delay-3">
        Bridging the gap between ambition and achievement across the continent
      </p>
      <button className="bg-secondary-orange hover:bg-secondary-hover-100 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 animate-fade-in-up-delay-4 flex items-center gap-2">
        Discover The Launch Pad
        <span className="text-xl">→</span>
      </button>
    </div>
  </section>
)

export default Hero
