import React from 'react'

import { FaUsers,FaHandshake,FaShieldAlt,FaGlobe } from 'react-icons/fa'
import { Lightbulb } from 'lucide-react';
import { FaChartLine } from "react-icons/fa6";
import CallToAction from '../components/home/CallToAction';
import Footprint from '../components/home/Footprint';
import Team from '../components/Team';

const About = () => (
  <div className="min-h-screen bg-bgcolor-100">
    {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary-dark to-primary-medium text-textcolor-300 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in-up">About Us</h1>
          <p className="text-base max-w-3xl mx-auto animate-fade-in-up-delay-1">
            Measuring success through meaningful outcomes
          </p>
        </div>
      </section>
    
    {/* Hero Section */}
    <section className="py-20 bg-bgcolor-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-textcolor-100 mb-6">About Us</h1>
            <p className="text-textcolor-200 text-base leading-relaxed">
              Career Access Africa Group is a leading youth empowerment organization revolutionizing career education across the continent. Founded on the principle that every young African deserves the tools to succeed professionally, we combine innovative technology, localized expertise, and strategic partnerships through our flagship program, The Launch Pad. With a strong presence in Rwanda, we are committed to building a generation of confident, skilled, and purpose-driven leaders.
            </p>
          </div>
          <div>
            <img src="/001.jpg" alt="Career Access Group Team" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </div>
    </section>

    {/* Vision & Mission Section */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-primary-medium mb-6">Our Vision</h2>
            <p className="text-textcolor-200 text-base leading-relaxed">
              A future where every young African is equipped with the knowledge, skills, and confidence to pursue meaningful careers that contribute to sustainable economic growth and social impact across the continent.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-medium mb-6">Our Mission</h2>
            <p className="text-textcolor-200 text-base leading-relaxed">
              To revolutionize career education in Africa by providing accessible, innovative, and impactful guidance that bridges the gap between academic learning and professional success, empowering young people to unlock their potential and drive positive change in their communities.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values Section */}
    <section className="py-20 bg-primary-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Core Values</h2>
          <p className="text-white text-base">
            These principles guide every decision we make and every program we deliver
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUsers className="text-white" size={32} />
            </div>
            <h3 className="text-1xl font-bold text-textcolor-100 mb-4">Youth-Centric</h3>
            <p className="text-textcolor-200 text-base leading-relaxed">
              Putting young people at the heart of everything we do
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="text-white" size={32} />
            </div>
            <h3 className="text-1xl font-bold text-textcolor-100 mb-4">Innovation</h3>
            <p className="text-textcolor-200 text-base leading-relaxed">
              Embracing creative solutions and cutting-edge approaches
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHandshake className="text-white" size={32} />
            </div>
            <h3 className="text-1xl font-bold text-textcolor-100 mb-4">Collaboration</h3>
            <p className="text-textcolor-200 text-base leading-relaxed">
              Building partnerships for greater collective impact
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="text-white" size={32} />
            </div>
            <h3 className="text-1xl font-bold text-textcolor-100 mb-4">Integrity</h3>
            <p className="text-textcolor-200 text-base leading-relaxed">
              Maintaining the highest ethical standards in all our work
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <FaChartLine className="text-white" size={32} />

            </div>
            <h3 className="text-1xl font-bold text-textcolor-100 mb-4">Impact-Driven</h3>
            <p className="text-textcolor-200 text-base leading-relaxed">
              Measuring success through meaningful outcomes
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <FaGlobe className="text-white" size={32} />
            </div>
            <h3 className="text-1xl font-bold text-textcolor-100 mb-4">Global Perspective</h3>
            <p className="text-textcolor-200 text-base leading-relaxed">
              Local impact with a global mindset and reach
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* The Launch Pad Section */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-medium mb-8">
            The Launch Pad: Innovation in Action
          </h2>
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-textcolor-200 text-base leading-relaxed">
              Our flagship program, The Launch Pad, represents the culmination of our mission in action. This comprehensive career development platform combines cutting-edge technology with personalized mentorship to create transformative learning experiences. Through interactive workshops, industry partnerships, and practical skill-building modules, The Launch Pad serves as the bridge between academic achievement and professional success.
            </p>
            <p className="text-textcolor-200 text-base leading-relaxed">
              By focusing on real-world applications and emerging industry trends, we ensure that every participant graduates not just with knowledge, but with the confidence and capabilities needed to thrive in today's dynamic job market.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* <Footprint /> */}
    {/* Team Section */}
    <Team />
  </div>
)

export default About
