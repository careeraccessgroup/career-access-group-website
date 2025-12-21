import React, { useEffect, useState } from 'react'
import { updateMetaTags } from '../utils/seo'
import { Users, Target, Lightbulb, Building2, Stethoscope, Briefcase, Palette, GraduationCap, User, Phone, Mail, MapPin } from 'lucide-react'

const CareerFair = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    profession: '',
    company: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.contact.trim()) newErrors.contact = 'Contact number is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.profession.trim()) newErrors.profession = 'Profession is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };
  useEffect(() => {
    updateMetaTags({
      title: 'Career Fair',
      description: 'Bridging the gap between high school education and real-world career pathways through direct exposure to diverse professions.',
      image: 'https://careeraccessgroup.com/0V0A1486.jpg'
    })
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-primary-dark text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in-up">Career Fair</h1>
          <p className="text-base sm:text-md animate-fade-in-up-delay-1">Bridging the Gap Between Education and Real-World Career Pathways</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-4 text-textcolor-100">Igniting Aspirations Through Direct Exposure</h2>
            <p className="text-textcolor-200 max-w-3xl mx-auto leading-relaxed">
              Career fairs play a pivotal role in bridging the gap between high school education and real-world career pathways. At Career Access Group, we offer students direct exposure to diverse professions, demystify industries, and ignite aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Role of Career Fairs */}
      <section className="py-12 bg-bgcolor-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8 text-textcolor-100 text-center animate-fade-in-up">The Role of Career Fairs in High Schools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Career Exploration & Awareness',
                points: [
                  'Broadening Horizons: Introduces students to careers beyond traditional fields',
                  'Industry Insights: Professionals share day-to-day realities and required skills',
                  'Pathway Clarity: Shows how academic subjects translate to specific careers'
                ],
                Icon: Target,
                color: 'bg-primary-medium'
              },
              {
                title: 'Skill Development & Networking',
                points: [
                  'Professional Communication: Students practice introducing themselves',
                  'Mentorship Opportunities: Connections can lead to job shadowing and internships',
                  'Resume Building: Students learn to present their skills effectively'
                ],
                Icon: Users,
                color: 'bg-secondary-orange'
              },
              {
                title: 'Motivation & Goal Setting',
                points: [
                  'Inspiration: Hearing success stories fuels ambition',
                  'Academic Relevance: Students see the "why" behind subjects',
                  'Informed Decisions: Helps choose college majors and career paths'
                ],
                Icon: Lightbulb,
                color: 'bg-accent-teal'
              },
              {
                title: 'Community & Industry Partnerships',
                points: [
                  'Local Engagement: Strengthens ties between schools and businesses',
                  'Workforce Development: Industries invest in shaping future talent pipelines',
                  'Economic Growth: Creates sustainable career development ecosystems'
                ],
                Icon: Building2,
                color: 'bg-accent-gold'
              }
            ].map((role, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up p-6" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${role.color} rounded-full flex items-center justify-center mr-4 shrink-0`}>
                    <role.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-md font-bold text-textcolor-100">{role.title}</h3>
                </div>
                <ul className="space-y-3">
                  {role.points.map((point, idx) => (
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

      {/* Who We Invite */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-4 text-textcolor-100">Who We Invite to Our Career Fair</h2>
            <p className="text-textcolor-200">Diverse professionals from various industries to inspire and guide our students</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'STEM Fields',
                professionals: 'Doctors, engineers, scientists, architects, IT specialists, researchers, and innovators shaping the future through technology and science',
                Icon: Stethoscope,
                color: 'bg-accent-teal',
                image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
              },
              {
                category: 'Government & Public Service',
                professionals: 'Mayors, ministers, diplomats, military and police officers, policy makers, and civil servants working for national development',
                Icon: Building2,
                color: 'bg-accent-teal',
                image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=300&fit=crop'
              },
              {
                category: 'Business & Entrepreneurship',
                professionals: 'Company founders, CEOs, managers, economists, marketers, and financial experts driving economic growth',
                Icon: Briefcase,
                color: 'bg-accent-teal',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
              },
              {
                category: 'Entertainment & Creative Industries',
                professionals: 'Musicians, actors, filmmakers, fashion designers, content creators, and media professionals influencing culture and storytelling',
                Icon: Palette,
                color: 'bg-accent-teal',
                image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
              },
              {
                category: 'Education & Social Impact',
                professionals: 'Teachers, university lecturers, counselors, psychologists, NGO leaders, and community development specialists empowering others through knowledge and service',
                Icon: GraduationCap,
                color: 'bg-accent-teal',
                image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop'
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="h-45 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.category}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center mr-3 shrink-0`}>
                      <category.Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-md font-bold text-textcolor-100">{category.category}</h3>
                  </div>
                  <p className="text-sm text-textcolor-200 leading-relaxed">{category.professionals}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 bg-bgcolor-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Briefcase className="text-primary-medium w-8 h-8" />
              <h3 className="text-2xl font-bold text-primary-dark">Join Our Career Fair</h3>
            </div>
            
            {isSubmitted && (
              <div className="bg-successcolor-100/10 border border-successcolor-100 text-successcolor-100 p-4 rounded-lg mb-6">
                Registration submitted successfully! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-3 py-3 border rounded-lg transition-all ${errors.name ? 'border-errorcolor-100' : 'border-bordercolor-100 focus:border-primary-medium'}`}
                />
                {errors.name && <p className="text-errorcolor-100 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-3 py-3 border rounded-lg transition-all ${errors.contact ? 'border-errorcolor-100' : 'border-bordercolor-100 focus:border-primary-medium'}`}
                />
                {errors.contact && <p className="text-errorcolor-100 text-sm mt-1">{errors.contact}</p>}
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-3 py-3 border rounded-lg transition-all ${errors.email ? 'border-errorcolor-100' : 'border-bordercolor-100 focus:border-primary-medium'}`}
                />
                {errors.email && <p className="text-errorcolor-100 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
                  <input
                    type="text"
                    name="profession"
                    placeholder="Profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-3 py-3 border rounded-lg transition-all ${errors.profession ? 'border-errorcolor-100' : 'border-bordercolor-100 focus:border-primary-medium'}`}
                  />
                  {errors.profession && <p className="text-errorcolor-100 text-sm mt-1">{errors.profession}</p>}
                </div>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-3 py-3 border rounded-lg transition-all ${errors.company ? 'border-errorcolor-100' : 'border-bordercolor-100 focus:border-primary-medium'}`}
                  />
                  {errors.company && <p className="text-errorcolor-100 text-sm mt-1">{errors.company}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary-orange hover:bg-secondary-hover-100 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
              >
                Register as Professional
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-12 bg-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4 animate-fade-in-up">Ready to Explore Your Future?</h2>
          <p className="text-base mb-6 animate-fade-in-up-delay-1">
            Join our next career fair and discover the endless possibilities that await you. Connect with industry professionals and take the first step toward your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="bg-secondary-orange hover:bg-secondary-hover-100 px-6 py-3 rounded-full font-semibold transition-colors">Register for Next Fair</button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-dark px-6 py-3 rounded-full font-semibold transition-colors">Learn More</button>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default CareerFair