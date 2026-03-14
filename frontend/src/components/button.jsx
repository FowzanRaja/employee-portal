// Needs to be actually made
// Just a placeholder for example

import React from 'react'

export default function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded ${className}`}
    >
      {children}
    </button>
  )
}
