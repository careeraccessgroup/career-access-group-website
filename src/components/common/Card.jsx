import React from 'react'

const Card = ({ children, className = '' }) => (
  <div className={`rounded-lg p-4 bg-white shadow-sm ${className}`}>{children}</div>
)

export default Card
