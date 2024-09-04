import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ResetPass } from '../../functions/Auth/ResetPass'
import toast from 'react-hot-toast'
const ResetPassword = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const Router = useNavigate()
  const handleResetPassword = async () => {
    setLoading(true)
    await ResetPass(email)
    toast.success('Email Has Been Sent To Reset Password.')
    setLoading(false)
    Router('/Login')
  }
  return (
    <div className="flex flex-col bg-gradient-to-t from-[#333333] to-[#1E90FF] p-6 rounded-lg shadow-lg mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl sm:p-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white mb-6">
        Reset Password
      </h2>
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-3 p-2 text-xs sm:text-sm md:text-base rounded-lg bg-[#F2F2F2] text-[#1C1C1C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
      />
      <button
        onClick={handleResetPassword}
        className="bg-[#39FF14] hover:bg-[#2b9d0b] text-white font-medium py-2 rounded-lg shadow-md transition-all duration-300 mt-4 text-xs w-[10vw] mx-auto"
      >
        Reset Password
      </button>
    </div>
  )
}
export default ResetPassword
