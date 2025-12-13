import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full bg-primary-dark text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Career Access Group Logo" className="h-8 w-8 rounded-full" />
          <Link to="/" className="text-xl font-bold">Career Access Group</Link>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/" className="text-secondary-orange hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-secondary-orange transition-colors">About</Link>
          <Link to="/partnerships" className="hover:text-secondary-orange transition-colors">Partnership</Link>
          <Link to="/contact" className="hover:text-secondary-orange transition-colors">Contact</Link>
          <button className="bg-secondary-orange hover:bg-secondary-hover-100 px-6 py-2 rounded-full text-white font-medium transition-colors">
            Partner With Us
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
