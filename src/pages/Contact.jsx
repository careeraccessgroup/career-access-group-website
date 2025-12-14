import React, { useState } from 'react'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! We will get back to you soon.')
  }

  const locations = [
    { country: '🇷🇼 Rwanda', city: 'Kigali', email: 'rwanda@careeraccessgroup.org', phone: '+250 788 123 456' },
    { country: '🇰🇪 Kenya', city: 'Nairobi', email: 'kenya@careeraccessgroup.org', phone: '+254 700 123 456' },
    { country: '🇸🇸 South Sudan', city: 'Juba', email: 'southsudan@careeraccessgroup.org', phone: '+211 900 123 456' }
  ]

  return (
    <div>
      {/* Contact Hero */}
      <section className="py-20 bg-primary-dark text-white text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl">Let's Create Opportunities Together – Reach Out Today!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-textcolor-100">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold text-textcolor-100">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-textcolor-100">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-textcolor-100">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-textcolor-100">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium resize-none"
                    required
                  />
                </div>
                <button type="submit" className="w-full py-3 bg-secondary-orange hover:bg-secondary-hover-100 text-white font-semibold rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-textcolor-100">Our Locations</h2>
              
              <div className="space-y-6 mb-8">
                {locations.map((location, idx) => (
                  <div key={idx} className="p-6 bg-bgcolor-300 border border-bordercolor-100 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-primary-medium">{location.country}</h3>
                    <div className="space-y-2 text-textcolor-200">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-secondary-orange" />
                        <span>{location.city}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-secondary-orange" />
                        <span>{location.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-secondary-orange" />
                        <span>{location.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-primary-dark text-white rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-primary-medium rounded-full flex items-center justify-center hover:bg-secondary-orange transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-medium rounded-full flex items-center justify-center hover:bg-secondary-orange transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-medium rounded-full flex items-center justify-center hover:bg-secondary-orange transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
