import React from 'react'
import { Users, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react'
import { coreValues } from '../../data/coreValues'

const Values = () => {
  const icons = [Users, Lightbulb, TrendingUp]
  const colors = ['bg-accent-teal', 'bg-primary-medium', 'bg-secondary-orange']

  return (
    <section className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Our Core Values
          </h2>
          <p className="text-white text-lg animate-fade-in-up-delay-1">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {coreValues.map((value, index) => {
            const Icon = icons[index]
            return (
              <div key={value.id} className={`bg-white rounded-lg p-8 shadow-lg animate-fade-in-up-delay-${index + 2}`}>
                <div className={`w-16 h-16 ${colors[index]} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textcolor-100 mb-4">{value.title}</h3>
                <p className="text-textcolor-200 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
        
        <div className="text-center animate-fade-in-up-delay-4">
          <button className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all mx-auto">
            Learn More About Our Values <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Values
