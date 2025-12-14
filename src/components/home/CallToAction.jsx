import React from 'react'
import { Calendar, Handshake } from 'lucide-react'
import { FaHandshake } from 'react-icons/fa6'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8 animate-fade-in-up">
          <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-8">
            <FaHandshake className="text-secondary-orange" size={52} />
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up-delay-1">
          Shape the Future of African Talent
        </h2>
        
        <p className="text-white text-lg max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up-delay-2">
          Partner with us today and be part of a movement that's transforming lives, building careers, and driving Africa's economic future.
        </p>
        
        <Link to="/partnerships">
        <Button className="bg-secondary-orange hover:bg-secondary-hover-100 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 animate-fade-in-up-delay-3 flex items-center gap-2 mx-auto mb-6">
          <Calendar size={20} />
          Schedule a Partnership Discussion
        </Button>
        </Link>
        
        <p className="text-white text-sm animate-fade-in-up-delay-4">
          Join 10+ organizations already making an impact
        </p>
      </div>
    </section>
  )
}

export default CallToAction