import React from 'react'
import { Star } from 'lucide-react'

const Testimony = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The career guidance sessions helped me discover my true passion and gave me a clear roadmap to achieve my goals. I now feel confident about my future!",
      name: "Sarah Johnson",
      role: "Student",
      avatar: "/0V0A1479.jpg"
    },
    {
      id: 2,
      quote: "Their mentorship program connected me with industry professionals who provided invaluable insights into my chosen field. It completely changed my perspective.",
      name: "Michael Chen",
      role: "Student",
      avatar: "/0V0A1486.jpg"
    },
    {
      id: 3,
      quote: "The skills assessment and career planning workshop helped me identify my strengths and build a strategic plan for my professional development.",
      name: "Emily Rodriguez",
      role: "Student",
      avatar: "/0V0A1604.jpg"
    }
  ]

  return (
    <section className="py-14 bg-bgcolor-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-textcolor-100 mb-4 animate-fade-in-up">
            What Our Clients Say
          </h2>
          <p className="text-base text-textcolor-200 animate-fade-in-up-delay-1">
            Success stories from professionals we've helped
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`bg-white rounded-lg p-6 shadow-lg animate-fade-in-up-delay-${index + 2}`}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-textcolor-200 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-textcolor-100">{testimonial.name}</h4>
                  <p className="text-sm text-textcolor-200">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimony
