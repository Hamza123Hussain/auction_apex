import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoHome = () => {
  const Navigate = useNavigate()
  return (
    <button
      onClick={() => Navigate('/')}
      className="mt-4 w-full p-3 bg-brightCoral text-softWhite rounded-md hover:bg-red-600 transition duration-300"
    >
      Go Back to Home
    </button>
  )
}

export default GoHome
