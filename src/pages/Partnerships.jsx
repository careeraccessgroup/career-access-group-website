import { GraduationCap } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { FaBuilding, FaGlobe, FaGraduationCap } from 'react-icons/fa6'
import { RiGovernmentFill } from 'react-icons/ri'
import PartnershipForm from '../components/forms/PartnershipForm'
import Button from '../components/common/Button'
import useCountUp from '../hooks/useCountUp'

const Partnerships = () => {
  const benefits = [
    {
      id: 1,
      title: "Scale Impact",
      description: "Amplify your organization's reach and influence by connecting with thousands of talented African youth across multiple countries."
    },
    {
      id: 2,
      title: "Drive Innovation",
      description: "Access fresh perspectives and innovative solutions from emerging talent pools that can drive your organization forward."
    },
    {
      id: 3,
      title: "Strengthen Ecosystems",
      description: "Build robust professional networks and contribute to sustainable economic development across African markets."
    },
    {
      id: 4,
      title: "Demonstrate Commitment",
      description: "Showcase your organization's dedication to diversity, inclusion, and social responsibility on a global scale."
    },
    {
      id: 5,
      title: "Access Talent",
      description: "Connect directly with high-potential candidates who have been rigorously trained and vetted for excellence."
    }
  ]

  const [mounted, setMounted] = useState(false)
  const impactRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const el = impactRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const youthCount = useCountUp(5000, { duration: 1500, start: inView })
  const partnersCount = useCountUp(150, { duration: 1500, start: inView })
  const countriesCount = useCountUp(3, { duration: 1200, start: inView })
  const successCount = useCountUp(85, { duration: 1500, start: inView })

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-primary-dark text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className={`text-2xl md:text-3xl font-bold mb-6 transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>Partner With Us</h1>
          <p className={`text-base mb-8 max-w-3xl mx-auto transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: mounted ? '120ms' : '0ms' }}>
            Shape the Future of African Talent – Partner With Us Today!
          </p>
          <Button className={`bg-secondary-orange hover:bg-secondary-hover-100 px-8 py-4 rounded-full text-white font-semibold text-lg transition-colors ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: mounted ? '240ms' : '0ms' }}>
            Start Partnership Discussion
          </Button>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold text-textcolor-100 mb-4 transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>Why Partner With Us?</h2>
            <p className={`text-textcolor-200 text-base max-w-3xl mx-auto transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: mounted ? '100ms' : '0ms' }}>
              Join us in creating transformative opportunities that benefit your organization while making a lasting impact on African youth development.
            </p>
          </div>
          
          <div className="space-y-8  max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={benefit.id} className={`flex bg-bgcolor-300 items-start gap-6 border-l border-primary-medium p-6 rounded-lg transform transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: mounted ? `${(idx + 1) * 120}ms` : '0ms' }}>
                <div className="w-12 h-12 bg-primary-medium text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {benefit.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-medium mb-2">{benefit.title}</h3>
                  <p className="text-textcolor-200 text-base leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities Section */}
      <section className="py-20 bg-bgcolor-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold text-textcolor-100 mb-4 transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>Partnership Opportunities</h2>
            <p className={`text-textcolor-200 text-base max-w-3xl mx-auto transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: mounted ? '100ms' : '0ms' }}>
              We welcome diverse partnership models designed to create mutual value and lasting impact across various sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className={`bg-white p-8 shadow-lg text-center transform transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: mounted ? '160ms' : '0ms' }}>
              <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaGraduationCap className="text-2xl text-accent-teal" size={34}  />
              </div>
              <h3 className="text-xl font-bold text-textcolor-100 mb-4">Educational Institutions</h3>
              <p className="text-textcolor-200 text-base">
                Universities, colleges, and training centers looking to expand their global reach and impact.
              </p>
            </div>
            
            <div className={`bg-white p-8 shadow-lg text-center transform transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: mounted ? '260ms' : '0ms' }}>
              <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaBuilding className="text-2xl text-accent-teal" size={34}  />
              </div>
              <h3 className="text-xl font-bold text-textcolor-100 mb-4">Corporations & Businesses</h3>
              <p className="text-textcolor-200 text-base">
                Companies seeking to diversify their talent pipeline and expand into African markets.
              </p>
            </div>
            
            <div className={`bg-white p-8 shadow-lg text-center transform transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: mounted ? '360ms' : '0ms' }}>
              <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-6">
                <RiGovernmentFill className="text-2xl text-accent-teal" size={34}  />
              </div>
              <h3 className="text-xl font-bold text-textcolor-100 mb-4">Government Agencies</h3>
              <p className="text-textcolor-200 text-base">
                Public sector organizations focused on youth development and economic growth initiatives.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`bg-white p-8 shadow-lg text-center transform transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: mounted ? '460ms' : '0ms' }}>
              <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaGlobe className="text-2xl text-accent-teal" size={34}  />
              </div>
              <h3 className="text-xl font-bold text-textcolor-100 mb-4">Development Organizations</h3>
              <p className="text-textcolor-200 text-base">
                NGOs and international development agencies committed to sustainable growth and empowerment.
              </p>
            </div>
            
            <div className={`bg-white p-8 shadow-lg text-center transform transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: mounted ? '560ms' : '0ms' }}>
              <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-2xl text-accent-teal" size={34}  />
              </div>
              <h3 className="text-xl font-bold text-textcolor-100 mb-4">Foundations & Philanthropists</h3>
              <p className="text-textcolor-200 text-base">
                Impact-driven funders and foundations supporting education and career development initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-white" ref={impactRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold text-textcolor-100 mb-4 transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>Our Impact</h2>
            <p className={`text-textcolor-200 text-lg transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: mounted ? '120ms' : '0ms' }}>
              Measurable results that demonstrate the power of strategic partnerships
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className={`text-5xl font-bold text-accent-gold mb-2 transition-transform duration-500 ${inView ? 'scale-100' : 'scale-95'}`}>{youthCount.toLocaleString()}+</div>
              <div className="text-lg font-semibold text-textcolor-100 mb-2">Youth Reached</div>
              <div className="text-sm text-textcolor-200">Talented individuals empowered through our programs</div>
            </div>
            
            <div>
              <div className={`text-5xl font-bold text-accent-gold mb-2 transition-transform duration-500 ${inView ? 'scale-100' : 'scale-95'}`}>{partnersCount.toLocaleString()}+</div>
              <div className="text-lg font-semibold text-textcolor-100 mb-2">Partners Engaged</div>
              <div className="text-sm text-textcolor-200">Organizations collaborating for mutual success</div>
            </div>
            
            <div>
              <div className={`text-5xl font-bold text-accent-gold mb-2 transition-transform duration-500 ${inView ? 'scale-100' : 'scale-95'}`}>{countriesCount}</div>
              <div className="text-lg font-semibold text-textcolor-100 mb-2">Countries</div>
              <div className="text-sm text-textcolor-200">Geographic reach across the African continent</div>
            </div>
            
            <div>
              <div className={`text-5xl font-bold text-accent-gold mb-2 transition-transform duration-500 ${inView ? 'scale-100' : 'scale-95'}`}>{successCount}%</div>
              <div className="text-lg font-semibold text-textcolor-100 mb-2">Success Rate</div>
              <div className="text-sm text-textcolor-200">Participants achieving career advancement goals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <PartnershipForm />
    </div>
  )
}

export default Partnerships
