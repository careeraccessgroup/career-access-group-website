import React, { useEffect, useState } from 'react'
import { Target, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Partner = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-2xl md:text-2xl font-bold text-textcolor-100 mb-4 transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            Why Partner With Us?
          </h2>
          <p className={`text-textcolor-200 text-base transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: mounted ? '100ms' : '0ms' }}>
            Join us in shaping Africa's future workforce and creating lasting impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`bg-bgcolor-200 rounded-lg p-8 shadow-lg transform transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: mounted ? '180ms' : '0ms' }}>
            <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mb-6">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-1xl font-bold text-textcolor-100 mb-4">Scale Your Impact</h3>
            <p className="text-base text-textcolor-200 leading-relaxed mb-6">
              Partner with us to reach thousands of talented young Africans across multiple countries. Your investment multiplies as we expand our proven programs to new communities and regions.
            </p>
            {/* <div className="flex gap-8">
              <div>
                <div className="text-2xl font-bold text-accent-gold">5,000+</div>
                <div className="text-sm text-textcolor-200">Youth Reached</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-gold">1</div>
                <div className="text-sm text-textcolor-200">Country</div>
              </div>
            </div> */}
          </div>
          
          <div className={`bg-bgcolor-200 rounded-lg p-8 shadow-lg transform transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: mounted ? '300ms' : '0ms' }}>
            <div className="w-16 h-16 bg-accent-teal rounded-full flex items-center justify-center mb-6">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-1xl font-bold text-textcolor-100 mb-4">Access Top Talent</h3>
            <p className="text-base text-textcolor-200 leading-relaxed mb-6">
              Gain direct access to a pipeline of highly skilled, motivated graduates who have been trained specifically to meet industry needs. Build your team with Africa's brightest minds.
            </p>
            {/* <div className="flex gap-8">
              <div>
                <div className="text-2xl font-bold text-accent-teal">85%</div>
                <div className="text-sm text-textcolor-200">Employment Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-teal">200+</div>
                <div className="text-sm text-textcolor-200">Partner Companies</div>
              </div>
            </div> */}
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/partnerships">
          <button className={`text-primary-medium font-semibold flex items-center gap-2 transition-all mx-auto ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} hover:gap-3`} style={{ transitionDelay: mounted ? '420ms' : '0ms' }}>
            Explore Full Partnership Benefits <ArrowRight size={16} />
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Partner
