import React, { useEffect } from 'react'
import { updateMetaTags } from '../utils/seo'
import { Building2, Wrench, Heart, Search, Users, FileText } from 'lucide-react'

const CommunityService = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Community Service',
      description: 'Making a positive impact through community service initiatives across Africa. Join our efforts to give back and create lasting change.',
      image: 'https://careeraccessgroup.com/0V0A1640.jpg'
    })
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in-up">Community Service</h1>
          <p className="text-md sm:text-lg animate-fade-in-up-delay-1">The Role of Community Service in Career Identification for High School Students</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fade-in-up">
              <img 
                src="/0V0A1640.jpg" 
                alt="Community Service" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 animate-fade-in-up-delay-1">
              <h2 className="text-2xl font-bold mb-6 text-textcolor-100">Creating Positive Impact Through Service</h2>
              <p className="text-textcolor-200 leading-relaxed mb-4">
                Community service plays a vital role in helping high school students explore and identify potential career paths. This experiential learning opportunity extends beyond the classroom, offering real-world insights that can significantly influence future career decisions.
              </p>
              <p className="text-textcolor-200 leading-relaxed">
                Through meaningful service, students discover their passions, develop essential skills, and build connections that shape their professional futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-bgcolor-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-12 text-textcolor-100 text-center animate-fade-in-up">How Community Service Contributes to Career Identification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {[
              {
                title: 'Exposure to Diverse Professional Environments',
                description: 'Community service places students in various settings - hospitals, schools, environmental organizations, government offices, and non-profits - allowing them to observe professionals in action and understand workplace dynamics.',
                Icon: Building2,
                color: 'bg-accent-teal'
              },
              {
                title: 'Skill Development and Assessment',
                description: 'Students develop transferable skills such as communication, teamwork, problem-solving, and time management while discovering which skills they enjoy using and excel at.',
                Icon: Wrench,
                color: 'bg-accent-teal'
              },
              {
                title: 'Clarification of Interests and Passions',
                description: 'Working with different populations or causes helps students identify what genuinely motivates them, whether it\'s teaching, environmental conservation, or social justice.',
                Icon: Heart,
                color: 'bg-accent-teal'
              },
              {
                title: 'Low-Risk Career Exploration',
                description: 'Community service offers a no-pressure environment to test potential careers, allowing students to "try on" different roles without significant investment.',
                Icon: Search,
                color: 'bg-accent-teal'
              },
              {
                title: 'Networking Opportunities',
                description: 'Students connect with professionals who can provide mentorship, advice, and potentially future job or internship opportunities.',
                Icon: Users,
                color: 'bg-accent-teal'
              },
              {
                title: 'Enhanced Applications',
                description: 'Community service strengthens college applications and resumes, demonstrating initiative, commitment, and social responsibility.',
                Icon: FileText,
                color: 'bg-accent-teal'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up p-6 h-full flex flex-col" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 ${benefit.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                    <benefit.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-textcolor-100 leading-tight">{benefit.title}</h3>
                </div>
                <p className="text-textcolor-200 leading-relaxed flex-grow">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Identity Development */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-6 text-textcolor-100">Development of Professional Identity</h2>
              <p className="text-textcolor-200 leading-relaxed mb-6">
                By taking on responsibilities and seeing projects through to completion, students begin to envision themselves as professionals, building confidence in their ability to contribute meaningfully to society.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent-teal rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-textcolor-200">Build leadership and responsibility skills</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent-teal rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-textcolor-200">Develop professional confidence and identity</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent-teal rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-textcolor-200">Experience meaningful contribution to society</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in-up-delay-1">
              <img 
                src="/0V0A1658.jpg" 
                alt="Professional Development" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Informed Decision Making */}
      <section className="py-16 bg-linear-to-r from-primary-dark to-primary-medium text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="lg:w-1/2 animate-fade-in-up-delay-1">
              <img 
                src="/0V0A1843.jpg" 
                alt="Professional Development" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-6">Informed Decision-Making</h2>
              <p className="text-md leading-relaxed mb-6">
                Perhaps most importantly, community service helps students make more informed decisions about their future. By experiencing different work environments, students can eliminate certain career paths or confirm their interest in others.
              </p>
              <p className="text-secondary-orange font-semibold">
                This reduces the likelihood of changing majors or careers later, saving time, money, and ensuring greater career satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Conclusion */}
      <section className="py-16 bg-bgcolor-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-8 text-textcolor-100 animate-fade-in-up">A Bridge to Your Future</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-up-delay-1">
            <p className="text-textcolor-200 leading-relaxed text-md mb-6">
              Community service serves as a bridge between academic learning and real-world application, offering high school students invaluable insights into potential careers.
            </p>
            <p className="text-textcolor-100 font-semibold text-md">
              It's a powerful tool for self-discovery that can shape educational and professional trajectories in meaningful ways.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-secondary-orange text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-6 animate-fade-in-up">Start Your Service Journey Today</h2>
          <p className="text-md mb-8 animate-fade-in-up-delay-1">Ready to explore your career path through community service? Join our programs and discover your potential.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="bg-white text-secondary-orange hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors">Find Opportunities</button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-secondary-orange px-8 py-3 rounded-full font-semibold transition-colors">Learn More</button>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default CommunityService