import React, { ChangeEvent, useContext } from 'react'
import { UserContext } from '../../utils/Context'
import { InputValues } from '../../utils/SignupInterface'
import FileField from './FileField'
const SignUpTextFields = () => {
  const { inputVal, setInputVal } = useContext(UserContext)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'file') {
      setInputVal((prev: any) => ({
        ...prev,
        Image: e.target.files?.[0],
      }))
    } else {
      setInputVal((prev: InputValues) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
    }
    console.log('INPUT VALUES', inputVal)
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        name="Name"
        value={inputVal.Name}
        onChange={handleChange}
        className="mb-3 p-2 rounded-lg text-xs sm:text-sm md:text-base bg-[#F7F7F7] text-[#1C1C1C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
      />
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={inputVal.email}
        onChange={handleChange}
        className="mb-3 p-2 text-xs sm:text-sm md:text-base rounded-lg bg-[#F7F7F7] text-[#1C1C1C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
      />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={inputVal.password}
        onChange={handleChange}
        className="mb-3 p-2 text-xs sm:text-sm md:text-base rounded-lg bg-[#F7F7F7] text-[#1C1C1C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
      />
      <FileField onChange={handleChange} Text="Add A Profile Image" />
    </>
  )
}

export default SignUpTextFields
