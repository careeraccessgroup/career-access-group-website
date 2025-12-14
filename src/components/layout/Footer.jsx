import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => (
  <footer className="bg-primary-darker text-white">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.svg" alt="Career Access Group Logo" className="h-8 w-8 rounded-full" />
            <span className="text-xl font-bold">Career Access Group</span>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Empowering professionals to achieve their career aspirations through personalized guidance and strategic development.
          </p>
          <div className="flex gap-4">
            <Linkedin className="w-5 h-5 text-accent-teal hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 text-accent-teal hover:text-white cursor-pointer" />
            <Facebook className="w-5 h-5 text-accent-teal hover:text-white cursor-pointer" />
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-accent-teal font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <Link to="/" className="block text-gray-300 hover:text-white">Home</Link>
            <Link to="/about" className="block text-gray-300 hover:text-white">About Us</Link>
            <Link to="/partnerships" className="block text-gray-300 hover:text-white">Partnership</Link>
            {/* <Link to="/contact" className="block text-gray-300 hover:text-white">Contact</Link> */}
          </div>
        </div>
        
        {/* Contact Us */}
        <div>
          <h3 className="text-accent-teal font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary-orange" />
              <span className="text-gray-300">info@careeraccessgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary-orange" />
              <span className="text-gray-300">+250 788 123 456</span>
            </div>
          </div>
        </div>
        
        {/* Our Locations */}
        <div>
          <h3 className="text-accent-teal font-semibold mb-4">Our Locations</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary-orange" />
              <span className="text-gray-300">Kigali, Rwanda</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary-orange" />
              <span className="text-gray-300">Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary-orange" />
              <span className="text-gray-300">Juba, South Sudan</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Border and Copyright */}
      <div className="border-t border-gray-600 mt-8 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Career Access Group. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
