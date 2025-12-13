import React from 'react'

const Footer = () => (
  <footer className="w-full mt-12" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'var(--color-textcolor-300)' }}>
    <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm">
      © {new Date().getFullYear()} Career Access Group. All rights reserved.
    </div>
  </footer>
)

export default Footer
