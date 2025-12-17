import React, { useEffect } from 'react'
import { updateMetaTags } from '../utils/seo'

const TheLaunchPad = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'The Launch Pad',
      description: 'Transform your career with our comprehensive Launch Pad program. Gain skills, mentorship, and opportunities to succeed in today\'s job market.',
      image: 'https://careeraccessgroup.com/0V0A1604.jpg'
    })
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-primary-dark text-white text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">The Launch Pad: A Toolkit to Kickstart Your Career</h1>
          <p className="text-lg sm:text-xl">Empowering Students to Navigate Their Future with Confidence</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-6 text-textcolor-100">About The Launch Pad</h2>
          <div className="space-y-4 text-textcolor-200">
            <p className="text-textcolor-200">The Launch Pad is a comprehensive career guidance toolkit designed specifically for high school students preparing to transition into higher education and the professional world. Created by career development experts Adeline Mahoro and Caroline Kaari Mwangangi, this first edition publication provides a structured approach to career exploration, skill development, and future planning.</p>
            <p className="text-textcolor-200">In today's rapidly evolving job market, students face unprecedented challenges and opportunities. The Launch Pad addresses these complexities by offering practical guidance, self-assessment tools, and strategic frameworks that help students make informed decisions about their academic and professional futures.</p>
          </div>
        </div>
      </section>

      {/* Who Is This Book For */}
      <section className="py-16 bg-bgcolor-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-6 text-textcolor-100">Who Is This Book For?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary-orange rounded-full mt-2"></div>
                <p className="text-textcolor-200"><strong>High School Students</strong> exploring career paths and post-secondary options</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary-orange rounded-full mt-2"></div>
                <p className="text-textcolor-200"><strong>Educators and Counselors</strong> seeking structured career guidance resources</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary-orange rounded-full mt-2"></div>
                <p className="text-textcolor-200"><strong>Parents</strong> wanting to support their children's career development journey</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary-orange rounded-full mt-2"></div>
                <p className="text-textcolor-200"><strong>Mentors</strong> working with youth on professional readiness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-6 text-textcolor-100 animate-fade-in-up">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Comprehensive Career Development Framework organized into three progressive levels',
              'Self-Assessment Tools to identify strengths, interests and personality traits',
              'Practical Skill Development for academic, professional and personal growth',
              'Industry Exploration across traditional and emerging career sectors',
              'College Preparation Guidance including application strategies and scholarship resources',
              'Real-World Application with networking strategies and internship preparation',
              'Digital Wellness Focus addressing online safety and digital career opportunities'
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-bgcolor-200 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-8 h-8 bg-secondary-orange rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-textcolor-200 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Structure */}
      <section className="py-16 bg-bgcolor-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8 text-textcolor-100 animate-fade-in-up">Book Structure</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Level 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-t-4 border-accent-teal">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-teal rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary-dark">LEVEL 1: FOUNDATION</h3>
              </div>
              <ul className="space-y-3 text-sm text-textcolor-200">
                <li className="flex items-start gap-2"><span className="text-accent-teal">•</span> Planning for Post-Secondary Education and Employment</li>
                <li className="flex items-start gap-2"><span className="text-accent-teal">•</span> Self-Assessment: Understanding Your Personality</li>
                <li className="flex items-start gap-2"><span className="text-accent-teal">•</span> Exploring Self-Esteem</li>
                <li className="flex items-start gap-2"><span className="text-accent-teal">•</span> Exploring Assertiveness</li>
                <li className="flex items-start gap-2"><span className="text-accent-teal">•</span> Understanding Skills: The Foundation of Professional Competence</li>
                <li className="flex items-start gap-2"><span className="text-accent-teal">•</span> Exploring the Concept and Dynamics of Work</li>
                <li className="flex items-start gap-2"><span className="text-accent-teal">•</span> Exploring Career Clusters and Pathways</li>
                <li className="flex items-start gap-2"><span className="text-accent-teal">•</span> Researching Careers in Digital Wellness and Online Safety</li>
              </ul>
            </div>
            
            {/* Level 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up-delay-1 border-t-4 border-secondary-orange">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-secondary-orange rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary-dark">LEVEL 2: DEVELOPMENT</h3>
              </div>
              <ul className="space-y-3 text-sm text-textcolor-200">
                <li className="flex items-start gap-2"><span className="text-secondary-orange">•</span> Professional Networking</li>
                <li className="flex items-start gap-2"><span className="text-secondary-orange">•</span> The Principles of Effective Networking</li>
                <li className="flex items-start gap-2"><span className="text-secondary-orange">•</span> Communication Skills</li>
                <li className="flex items-start gap-2"><span className="text-secondary-orange">•</span> Networking</li>
                <li className="flex items-start gap-2"><span className="text-secondary-orange">•</span> Beyond Labels: Understanding Gender, Sex and Sexuality</li>
                <li className="flex items-start gap-2"><span className="text-secondary-orange">•</span> Time Management and Organization</li>
                <li className="flex items-start gap-2"><span className="text-secondary-orange">•</span> College Preparation and Scholarship Application</li>
                <li className="flex items-start gap-2"><span className="text-secondary-orange">•</span> USA College Applications Guide</li>
                <li className="flex items-start gap-2"><span className="text-secondary-orange">•</span> Academic and Career Planning</li>
                <li className="flex items-start gap-2"><span className="text-secondary-orange">•</span> Entrepreneurial Practice</li>
              </ul>
            </div>
            
            {/* Level 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up-delay-2 border-t-4 border-accent-gold">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary-dark">LEVEL 3: ADVANCEMENT</h3>
              </div>
              <ul className="space-y-3 text-sm text-textcolor-200">
                <li className="flex items-start gap-2"><span className="text-accent-gold">•</span> Mental Health and Wellness</li>
                <li className="flex items-start gap-2"><span className="text-accent-gold">•</span> Community Involvement</li>
                <li className="flex items-start gap-2"><span className="text-accent-gold">•</span> Navigating Cultures Around the World</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8 text-textcolor-100 animate-fade-in-up">About the Author</h2>
          <div className="bg-linear-to-r from-primary-dark to-primary-medium rounded-2xl p-8 text-white animate-fade-in-up-delay-1">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <img 
                  src="/CAA Profile photo/394A0573@0.5x.jpg" 
                  alt="Adeline Mahoro" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Adeline Mahoro</h3>
                <p className="text-secondary-orange font-semibold mb-4">Education Innovator & Career Development Expert</p>
                <p className="leading-relaxed opacity-90">Adeline Mahoro is a passionate education innovator committed to revolutionizing career guidance for African youth. Her approach was inspired by the African Leadership Academy (ALA), which forged their commitment to developing solutions for pressing African challenges. The authors first partnered with NU Vision High School in Kigali, Rwanda to implement systematic career guidance programs, making it their "first born" initiative. Their dedication stems from a desire to equip young people with the tools to discover their passions and carve unique professional paths.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Readers Will Gain */}
      <section className="py-16 bg-bgcolor-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-6 text-textcolor-100">What Readers Will Gain</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Clarity about personal strengths and career interests',
              'Confidence in making academic and professional decisions',
              'Practical Skills for workplace success and personal development',
              'Strategic Approach to college applications and scholarship opportunities',
              'Professional Network building capabilities',
              'Resilience to navigate challenges in career development',
              'Global Perspective on career opportunities and cultural competence'
            ].map((gain, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-teal rounded-full mt-2"></div>
                <p className="text-textcolor-200">{gain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Your Copy */}
      <section className="py-16 bg-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-6">Get Your Copy Today</h2>
          <p className="text-lg mb-8">The Launch Pad is more than a book – it's a comprehensive toolkit that will transform how students approach their future. With practical exercises, real-world examples, and expert guidance, this resource is essential for anyone serious about career development.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary-orange hover:bg-secondary-hover-100 px-8 py-3 rounded-full font-semibold transition-colors">Order Now</button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-dark px-8 py-3 rounded-full font-semibold transition-colors">Educator Resources</button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-dark px-8 py-3 rounded-full font-semibold transition-colors">Contact Authors</button>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      {/* <section className="py-8 bg-bgcolor-200 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-textcolor-200 text-sm">Published by Besta Publishers | ISBN: 9789997705808 | © Copyright May 2025</p>
        </div>
      </section> */}
    </div>
  )
}

export default TheLaunchPad