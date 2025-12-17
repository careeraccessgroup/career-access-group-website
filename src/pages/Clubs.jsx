import React, { useEffect } from 'react'
import { updateMetaTags } from '../utils/seo'
import { Heart, Wrench, Users, FileText, Search, Building2 } from 'lucide-react'

const Clubs = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Clubs',
      description: 'Join our vibrant clubs and communities. Connect with like-minded individuals and develop your interests and skills.',
      image: 'https://careeraccessgroup.com/0V0A1776.jpg'
    })
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-primary-dark text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-in-up">Clubs & Extracurricular Activities</h1>
          <p className="text-base sm:text-md animate-fade-in-up-delay-1">Transforming Career Exploration Through Student Engagement</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-4 text-textcolor-100">Career Laboratories for High School Students</h2>
            <p className="text-textcolor-200 max-w-4xl mx-auto leading-relaxed">
              Clubs and extracurricular activities play a transformative role in helping high school students explore career paths, develop essential skills, and make informed decisions about their futures. They serve as career laboratories where students experiment, fail, succeed, and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-12 bg-bgcolor-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8 text-textcolor-100 text-center animate-fade-in-up">How Clubs Contribute to Career Identification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Exploration of Interests & Passions',
                points: [
                  'Low-risk experimentation in diverse fields',
                  'Exposure to new career areas like law, diplomacy, arts',
                  'Discover passions without academic pressure'
                ],
                Icon: Heart,
                color: 'bg-accent-teal'
              },
              {
                title: 'Skill Development for Future Careers',
                points: [
                  'Hard skills: programming, engineering, writing',
                  'Soft skills: leadership, teamwork, communication',
                  'Real-world application through projects'
                ],
                Icon: Wrench,
                color: 'bg-accent-teal'
              },
              {
                title: 'Networking & Mentorship',
                points: [
                  'Industry connections through guest speakers',
                  'Peer networks and future professional contacts',
                  'Alumni insights and career guidance'
                ],
                Icon: Users,
                color: 'bg-accent-teal'
              },
              {
                title: 'Building a Competitive Profile',
                points: [
                  'Strengthen college applications',
                  'Resume building through leadership roles',
                  'Portfolio development for job applications'
                ],
                Icon: FileText,
                color: 'bg-accent-teal'
              },
              {
                title: 'Clarifying Career Goals',
                points: [
                  'Test aptitudes in various fields',
                  'Eliminate unsuitable career options',
                  'Specialize in niche interests'
                ],
                Icon: Search,
                color: 'bg-accent-teal'
              },
              {
                title: 'Personal Growth & Confidence',
                points: [
                  'Build resilience through challenges',
                  'Identity formation and self-discovery',
                  'Develop time management skills'
                ],
                Icon: Building2,
                color: 'bg-accent-teal'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up p-5 h-full flex flex-col" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center mb-3">
                  <div className={`w-10 h-10 ${benefit.color} rounded-full flex items-center justify-center mr-3 shrink-0`}>
                    <benefit.Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-textcolor-100">{benefit.title}</h3>
                </div>
                <ul className="space-y-2 grow">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-textcolor-200">
                      <span className="text-accent-teal mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8 text-textcolor-100 text-center animate-fade-in-up">Examples of Career Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { club: 'Robotics Club', careers: 'Engineering, Computer Science', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop' },
              { club: 'Debate Team', careers: 'Law, Politics, Consulting', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop' },
              { club: 'Environmental Club', careers: 'Sustainability, Environmental Science', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop' },
              { club: 'School Newspaper', careers: 'Journalism, Marketing, Communications', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop' },
              { club: 'Volunteer Club', careers: 'Nonprofit Management, Social Work', image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop' },
              { club: 'Drama Club', careers: 'Theater, Arts Management, Entertainment', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' }
            ].map((pathway, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="h-42 overflow-hidden">
                  <img 
                    src={pathway.image}
                    alt={pathway.club}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-primary-dark mb-2">{pathway.club}</h3>
                  <p className="text-sm text-textcolor-200">{pathway.careers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      <section className="py-12 bg-bgcolor-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-6 text-textcolor-100 text-center animate-fade-in-up">Key Considerations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-lg animate-fade-in-up">
              <h3 className="font-bold text-accent-teal mb-2">Quality Over Quantity</h3>
              <p className="text-sm text-textcolor-200">Deep engagement in 1–2 activities is more impactful than superficial involvement in many.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-lg animate-fade-in-up-delay-1">
              <h3 className="font-bold text-secondary-orange mb-2">Student-Led Initiatives</h3>
              <p className="text-sm text-textcolor-200">Creating a club around unique interests showcases innovation and leadership.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-lg animate-fade-in-up-delay-2">
              <h3 className="font-bold text-accent-gold mb-2">Balance</h3>
              <p className="text-sm text-textcolor-200">Ensure activities complement academics without causing burnout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 bg-primary-dark text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4 animate-fade-in-up">Bridging Education and Career Readiness</h2>
          <p className="text-base leading-relaxed mb-6 animate-fade-in-up-delay-1">
            Clubs and extracurriculars transform abstract career concepts into tangible experiences, empowering students to make confident, informed choices about their futures. By fostering self-awareness, skills, and connections, these activities bridge the gap between education and career readiness.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="bg-secondary-orange hover:bg-secondary-hover-100 px-6 py-2 rounded-full font-semibold transition-colors text-sm">Explore Clubs</button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-dark px-6 py-2 rounded-full font-semibold transition-colors text-sm">Get Involved</button>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default Clubs