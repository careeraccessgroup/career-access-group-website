import React from 'react'
import Button from '../common/Button'

const Hero = () => (
  <section 
    className="
    relative min-h-screen flex items-center
    bg-no-repeat bg-center
    bg-contain md:bg-cover
  "
    style={{ backgroundImage: `url('/0V0A1760.jpg')`,backgroundSize: "110% auto", }}
  >
    {/* <div className="absolute inset-0  bg-opacity-70"></div> */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A4F8A]/70 to-[#1A4F8A]/40"></div>

    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 animate-fade-in-up">
        Empowering Africa's Next Generation: 
        <span className="text-accent-teal block mt-2 animate-fade-in-up-delay-1">
          Revolutionizing Career Education
        </span>
        <span className="block mt-2 animate-fade-in-up-delay-2">
          Through The Launch Pad
        </span>
      </h1>
      <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl animate-fade-in-up-delay-3">
        Bridging the gap between ambition and achievement across the continent
      </p>
      <Button className="bg-secondary-orange hover:bg-secondary-hover-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg transition-all duration-300 animate-fade-in-up-delay-4 flex items-center gap-2">
        Discover The Launch Pad
        <span className="text-lg sm:text-xl">→</span>
      </Button>
    </div>
  </section>
)

export default Hero
