import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen((v) => !v)
  const handleClose = () => setOpen(false)

  return (
    <nav className="w-full bg-primary-dark text-white px-4 sm:px-6 py-4 border-b border-primary-medium shadow-md ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src="/logo.png" alt="Career Access Group Logo" className="h-6 w-6 sm:h-8 sm:w-8 rounded-full" />
          <Link to="/" className="text-lg sm:text-xl font-bold">Career Access Group</Link>
        </div>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link to="/" className="text-secondary-orange hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-secondary-orange transition-colors">About</Link>
          <Link to="/partnerships" className="hover:text-secondary-orange transition-colors">Partnership</Link>
          <Link to="/gallery" className="hover:text-secondary-orange transition-colors">Gallery</Link>
          {/* <Link to="/contact" className="hover:text-secondary-orange transition-colors">Contact</Link> */}
          <Link to="/partnerships">
          <Button className="bg-secondary-orange hover:bg-secondary-hover-100 px-4 lg:px-6 py-2 rounded-full text-white font-medium transition-colors text-sm lg:text-base">
            Partner With Us
          </Button>
          </Link>
        </div>

        {/* mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
          >
            {open ? (
              // close icon
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // hamburger
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-4 pb-6 space-y-3 border-t" style={{ borderColor: 'var(--color-bordercolor-100)' }}>
          <Link to="/" onClick={handleClose} className="block text-secondary-orange">Home</Link>
          <Link to="/about" onClick={handleClose} className="block">About</Link>
          <Link to="/partnerships" onClick={handleClose} className="block">Partnership</Link>
          <Link to="/contact" onClick={handleClose} className="block">Contact</Link>
          <div className="pt-2">
            <Button onClick={() => { handleClose(); window.location.href = '/contact' }} className="w-full bg-secondary-orange px-4 py-2 rounded-full text-white font-medium text-sm">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
