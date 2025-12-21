import React from 'react'
import { CheckCircle, Rocket, Briefcase, ArrowRight,Compass } from 'lucide-react'

import { FaCompass,FaRocket,FaBriefcase } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Introduction = () => (
  <section className="py-20 bg-bgcolor-200">
    <div className="max-w-5xl mx-auto px-6">
      {/* Welcome Header */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-textcolor-100 mb-4">
          Welcome to <span className="text-primary-medium">CAREER<br />ACCESS GROUP</span>
        </h2>
        <div className="w-20 h-1 bg-secondary-orange mx-auto mb-6"></div>
      </div>
      
      {/* Content Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="animate-fade-in-up ">
          <p className="text-textcolor-200 mb-4 leading-relaxed  text-base">
            Welcome to <strong>CAREER ACCESS GROUP</strong> – where potential meets opportunity. We are dedicated to transforming the career landscape for Africa's youth by providing innovative programs that empower students and young professionals to navigate their career journeys with confidence.
          </p>
          <p className="text-textcolor-200 mb-4 leading-relaxed text-base">
            Through our flagship program, <span className="text-primary-medium font-semibold">The Launch Pad</span>, we bridge the gap between ambition and achievement, equipping young Africans with the skills, knowledge, and networks they need to thrive in today's competitive job market.
          </p>
          <p className="text-textcolor-200 mb-4 leading-relaxed text-base">
            Our mission is simple yet powerful: to unlock the potential of Africa's next generation and create pathways to meaningful, sustainable careers that drive both individual success and continental progress.
          </p>
          <Link to={"/about"} className="text-primary-medium font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Learn More About Us <ArrowRight size={16} />
          </Link>
        </div>
        <div className="animate-fade-in-up-delay-1">
          <img src="/001.jpg" alt="Career Access Group Team" className="bg-linear-to-br from-gray-300 to-gray-400 rounded-2xl shadow-lg w-full" />
        </div>
      </div>

      {/* Launch Pad Section */}
      <div className="text-center mb-16 animate-fade-in-up-delay-2">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-medium mb-4">
          THE LAUNCH PAD:
          <span className="block">Innovation in Action</span>
        </h2>
        <p className="text-base text-textcolor-200 text-md max-w-2xl mx-auto">
          Our flagship program designed to accelerate career success for Africa's ambitious youth
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="animate-fade-in-up-delay-4">
          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-accent-teal h-full flex flex-col">
            <div className="w-12 h-12 bg-accent-teal rounded-full flex items-center justify-center mb-6">
              <FaCompass className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-textcolor-100 mb-4">Personalized Career<br />Navigation</h3>
            <p className="text-textcolor-200 leading-relaxed text-base grow">
              Tailored guidance and mentorship that helps each participant identify their unique strengths, interests, and career pathways aligned with market demands.
            </p>
          </div>
        </div>
        
        {/* Feature 2 */}
        <div className="animate-fade-in-up-delay-4">
          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-primary-medium h-full flex flex-col">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <FaRocket className="text-primary-medium" size={24} />
            </div>
            <h3 className="text-lg font-bold text-textcolor-100 mb-4">Skills Acceleration</h3>
            <p className="text-textcolor-200 leading-relaxed text-base grow">
              Intensive training programs that rapidly build in-demand technical and soft skills, ensuring participants are job-ready and competitive in the global marketplace.
            </p>
          </div>
        </div>
        
        {/* Feature 3 */}
         <div className="animate-fade-in-up-delay-4">
          <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-secondary-orange h-full flex flex-col">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <FaBriefcase className="text-secondary-orange" size={24} />
            </div>
            <h3 className="text-lg font-bold text-textcolor-100 mb-4">Real-World Exposure</h3>
            <p className="text-textcolor-200 leading-relaxed text-base grow">
              Direct connections with industry leaders, internship opportunities, and practical projects that provide hands-on experience and professional networking.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Introduction
