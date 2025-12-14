import React from 'react'

const SectionHeader = ({ title, subtitle }) => (
  <header className="text-center mb-6">
    <h2 className="text-2xl font-bold">{title}</h2>
    {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
  </header>
)

export default SectionHeader
