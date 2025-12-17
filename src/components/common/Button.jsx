import React from 'react'

const Button = ({ children, className = '', disabled = false, ...props }) => {
  return (
    <button 
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
