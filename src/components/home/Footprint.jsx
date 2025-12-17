import React from 'react'
import { MapPin } from 'lucide-react'

const Footprint = () => {
  return (
    <section className="py-20 bg-bgcolor-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-textcolor-100 mb-4 animate-fade-in-up">
            Our Footprint: East Africa & Beyond
          </h2>
          <p className="text-textcolor-200 text-lg max-w-3xl mx-auto animate-fade-in-up-delay-1">
            With established operations in our core market while leveraging regional synergies
          </p>
        </div>
        
        <div className="bg-primary-darker rounded-2xl p-12 animate-fade-in-up-delay-2">
          <div className="flex justify-center mb-12">
            <div className="text-center text-white">
              <div className="w-24 h-24 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Rwanda</h3>
              <p className="text-accent-teal font-semibold mb-4">Established Operations</p>
            </div>
          </div>
          
          <div className="text-center text-white mb-8 max-w-3xl mx-auto">
            <p className="text-md leading-relaxed">
              We're deeply rooted in local contexts while leveraging regional synergies. Our teams understand the unique challenges and opportunities in each market, ensuring culturally relevant and impactful programming.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center text-white pt-8 border-t border-gray-600">
            <div>
              <div className="text-2xl font-bold text-accent-teal mb-2">1</div>
              <div className="text-gray-300">Strategic Hub</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-teal mb-2">Multiple</div>
              <div className="text-gray-300">Cities & Regions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-teal mb-2">10+</div>
              <div className="text-gray-300">Institutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footprint
