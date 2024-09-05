import React, { ChangeEvent, useContext } from 'react'
import { UserContext } from '../../utils/Context'
import { APIURL, InputValues } from '../../utils/SignupInterface'
import FileField from './FileField'
import { useLocation } from 'react-router-dom'
import { normalizePath } from '../../functions/imagepath'

const TextFields = () => {
  const { inputVal, setInputVal } = useContext(UserContext)
  const location = useLocation() // get the current location

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
      {/* Username Input */}
      <input
        type="text"
        placeholder="Enter Name"
        name="username"
        value={inputVal.username}
        onChange={handleChange}
        className="mb-3 p-2 rounded-lg text-xs sm:text-sm md:text-base bg-[#F7F7F7] text-[#1C1C1C] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
      />

      {/* Email Input */}
      {location.pathname !== '/Profile' && (
        <>
          {' '}
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
        </>
      )}
      {/* File Input for Profile Image */}
      <FileField onChange={handleChange} Text="Add A Profile Image" />
      {location.pathname === '/Profile' && (
        <div className=" flex flex-col font-extrabold my-2 justify-center items-center text-xl">
          <h1>User Image</h1>
          <img
            src={`${APIURL}/${normalizePath(inputVal.image)}`}
            alt="profile"
            className=" w-24 self-center"
          />
        </div>
      )}
    </>
  )
}

export default TextFields
