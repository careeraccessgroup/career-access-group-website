import React from 'react'
import { MapPin } from 'lucide-react'

const Footprint = () => {
  return (
    <section className="py-20 bg-bgcolor-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-textcolor-100 mb-4 animate-fade-in-up">
            Our Footprint Across Africa
          </h2>
          <p className="text-textcolor-200 text-lg max-w-3xl mx-auto animate-fade-in-up-delay-1">
            Building career pathways across the continent with established operations and growing reach
          </p>
        </div>
        
        <div className="bg-primary-darker rounded-2xl p-12 animate-fade-in-up-delay-2">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent-teal" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Rwanda</h3>
              <p className="text-gray-300">Established Operations</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent-teal" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Kenya</h3>
              <p className="text-gray-300">Active Programs</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent-teal" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">South Sudan</h3>
              <p className="text-gray-300">Growing Presence</p>
            </div>
          </div>
          
          <div className="text-center text-white mb-12">
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              With established operations in Rwanda and expanding reach across Kenya and South Sudan, we're building a pan-African network of opportunity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold text-accent-teal mb-2">3</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-teal mb-2">15+</div>
              <div className="text-gray-300">Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-teal mb-2">50+</div>
              <div className="text-gray-300">Institutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footprint
