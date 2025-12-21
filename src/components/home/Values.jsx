import React, { useEffect, useState } from 'react'
import { Users, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react'
import { coreValues } from '../../data/coreValues'
import { Link } from 'react-router-dom'

const Values = () => {
  const icons = [Users, Lightbulb, TrendingUp]
  const colors = ['bg-accent-teal', 'bg-primary-medium', 'bg-secondary-orange']

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="py-20 bg-primary-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-2xl md:text-3xl font-bold text-white mb-4 transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            Our Core Values
          </h2>
          <p className={`text-white text-base transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: mounted ? '100ms' : '0ms' }}>
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {coreValues.map((value, index) => {
            const Icon = icons[index]
            return (
              <div
                key={value.id}
                className={`bg-white rounded-lg p-8 shadow-lg transform transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: mounted ? `${(index + 1) * 120}ms` : '0ms' }}
              >
                <div className={`w-16 h-16 ${colors[index]} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-1xl font-bold text-textcolor-100 mb-4">{value.title}</h3>
                <p className="text-base text-textcolor-200 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
        
        <div className="text-center">
          <Link to="/about" className={`text-white font-semibold flex items-center gap-2 transition-all mx-auto ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} hover:gap-3`} style={{ transitionDelay: mounted ? '480ms' : '0ms' }}>
            Learn More About Our Values <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Values
