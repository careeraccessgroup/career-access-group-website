import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../common/Button'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [activitiesOpen, setActivitiesOpen] = useState(false)
  const [desktopActivitiesOpen, setDesktopActivitiesOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 })
  const buttonRef = useRef(null)
  const timeoutRef = useRef(null)
  const location = useLocation()

  const handleToggle = () => setOpen((v) => !v)
  const handleClose = () => {
    setOpen(false)
    setActivitiesOpen(false)
  }
  const handleActivitiesToggle = () => setActivitiesOpen((v) => !v)
  
  const handleDesktopActivitiesEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setDesktopActivitiesOpen(true)
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setDropdownPosition({
        top: rect.bottom + 4,
        left: rect.left + rect.width / 2
      })
    }
  }
  
  const handleDesktopActivitiesLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopActivitiesOpen(false)
    }, 150)
  }

  return (
    <nav className="w-full bg-white text-primary-dark px-4 sm:px-6 py-2 border-b border-primary-medium shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 sm:gap-4 hover:opacity-90 transition-opacity">
          <img 
            src="/logo.png" 
            alt="Career Access Group Logo" 
            className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-cover rounded-full drop-shadow-lg" 
          />
          <span className="text-base sm:text-md md:text-1xl lg:text-2xl font-bold leading-tight">
            Career Access Group
          </span>
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link to="/" className={`${location.pathname === '/' ? 'text-secondary-orange' : 'text-primary-dark hover:text-secondary-orange'} transition-colors text-sm lg:text-base`}>Home</Link>
          <Link to="/about" className={`${location.pathname === '/about' ? 'text-secondary-orange' : 'text-primary-dark hover:text-secondary-orange'} transition-colors text-sm lg:text-base`}>About</Link>
          <Link to="/services" className={`${location.pathname === '/services' ? 'text-secondary-orange' : 'text-primary-dark hover:text-secondary-orange'} transition-colors text-sm lg:text-base`}>Services</Link>
          <Link to="/partnerships" className={`${location.pathname === '/partnerships' ? 'text-secondary-orange' : 'text-primary-dark hover:text-secondary-orange'} transition-colors text-sm lg:text-base`}>Partnership</Link>
          <Link to="/gallery" className={`${location.pathname === '/gallery' ? 'text-secondary-orange' : 'text-primary-dark hover:text-secondary-orange'} transition-colors text-sm lg:text-base`}>Gallery</Link>
          <Link to="/the-launchpad" className={`${location.pathname === '/launchpad' ? 'text-secondary-orange' : 'text-primary-dark hover:text-secondary-orange'} transition-colors text-sm lg:text-base`}>Launch Pad</Link>
          {/* Activities Dropdown with Fixed Positioning */}
          <div onMouseEnter={handleDesktopActivitiesEnter} onMouseLeave={handleDesktopActivitiesLeave}>
            <button 
              ref={buttonRef}
              className={`${location.pathname.startsWith('/activities') ? 'text-secondary-orange' : 'text-primary-dark hover:text-secondary-orange'} transition-colors text-sm lg:text-base flex items-center gap-1`}
            >
              Activities
              <svg className={`w-4 h-4 transition-transform ${desktopActivitiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <Link to="/contact">
            <Button className="bg-secondary-orange hover:bg-secondary-hover-100 px-4 lg:px-6 py-2 rounded-full text-white font-medium transition-colors text-sm lg:text-base">
              Contact Us
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
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Dropdown - Rendered at root level with fixed positioning */}
      {desktopActivitiesOpen && (
        <div 
          className="hidden md:block"
          onMouseEnter={handleDesktopActivitiesEnter} 
          onMouseLeave={handleDesktopActivitiesLeave}
          style={{
            position: 'fixed',
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            transform: 'translateX(-50%)',
            zIndex: 9999,
            width: '12rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            border: '1px solid #e5e7eb'
          }}
        >
          <Link 
            to="/activities/community-service" 
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary-orange transition-colors"
            onClick={() => setDesktopActivitiesOpen(false)}
          >
            Community Service
          </Link>
          <Link 
            to="/activities/clubs" 
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary-orange transition-colors rounded-b-md"
            onClick={() => setDesktopActivitiesOpen(false)}
          >
            Clubs
          </Link>
          <Link to="/activities/scholars-program" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary-orange transition-colors rounded-b-md"
            onClick={() => setDesktopActivitiesOpen(false)}>Scholars Program</Link>
          <Link to="/activities/career-fairs" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary-orange transition-colors rounded-b-md"
            onClick={() => setDesktopActivitiesOpen(false)}>Career Fairs</Link>
            <Link 
            to="/activities/university-fairs" 
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-secondary-orange transition-colors rounded-t-md"
            onClick={() => setDesktopActivitiesOpen(false)}
          >
            University Fairs
          </Link>
        </div>
      )}

      {/* mobile menu panel */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-4 pb-6 space-y-3 border-t" style={{ borderColor: 'var(--color-bordercolor-100)' }}>
          <Link to="/" onClick={handleClose} className={`block text-primary-dark ${location.pathname === '/' ? 'text-secondary-orange' : ''}`}>Home</Link>
          <Link to="/about" onClick={handleClose} className={`block text-primary-dark ${location.pathname === '/about' ? 'text-secondary-orange' : ''}`}>About</Link>
          <Link to="/services" onClick={handleClose} className={`block text-primary-dark ${location.pathname === '/services' ? 'text-secondary-orange' : ''}`}>Services</Link>
            <Link to="/the-launchpad" onClick={handleClose} className={`block text-primary-dark ${location.pathname === '/launchpad' ? 'text-secondary-orange' : ''}`}>Launch Pad</Link>
          <div>
            
            <button onClick={handleActivitiesToggle} className="flex items-center justify-between w-full text-left text-primary-dark">
              Activities
              <svg className={`w-4 h-4 transition-transform ${activitiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activitiesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/activities/community-service" onClick={handleClose} className="block text-sm text-primary-dark hover:text-secondary-orange">Community Service</Link>
                <Link to="/activities/clubs" onClick={handleClose} className="block text-sm text-primary-dark hover:text-secondary-orange">Clubs</Link>
                <Link to="/activities/scholars-program" onClick={handleClose} className="block text-sm text-primary-dark hover:text-secondary-orange">Scholars Program</Link>
                <Link to="/activities/career-fairs" onClick={handleClose} className="block text-sm text-primary-dark hover:text-secondary-orange">Career Fairs</Link>
                <Link to="/activities/university-fairs" onClick={handleClose} className="block text-sm text-primary-dark hover:text-secondary-orange">University Fairs</Link>
              </div>
            )}
          </div>
          <Link to="/partnerships" onClick={handleClose} className={`block text-primary-dark ${location.pathname === '/partnerships' ? 'text-secondary-orange' : ''}`}>Partnership</Link>
          <Link to="/gallery" onClick={handleClose} className={`block text-primary-dark ${location.pathname === '/gallery' ? 'text-secondary-orange' : ''}`}>Gallery</Link>
          <div className="pt-2">
            <Button onClick={() => { handleClose(); window.location.href = '/contact' }} className="w-full bg-secondary-orange px-4 py-2 rounded-full text-white font-medium text-sm">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar