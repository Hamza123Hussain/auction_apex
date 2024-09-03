import React, { ChangeEvent, useContext } from 'react'
import { UserContext } from '../../utils/Context'
import { InputValues } from '../../utils/SignupInterface'

const LoginTextFields = () => {
  const { inputVal, setInputVal } = useContext(UserContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal((prev: InputValues) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={inputVal.email}
        onChange={handleChange}
        className="mb-3 p-2 text-xs sm:text-sm md:text-base rounded-lg bg-[#F2F2F2] text-[#1C1C1C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
      />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={inputVal.password}
        onChange={handleChange}
        className="mb-3 p-2 text-xs sm:text-sm md:text-base rounded-lg bg-[#F2F2F2] text-[#1C1C1C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
      />
    </>
  )
}

export default LoginTextFields
