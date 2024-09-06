import React, { useContext, useState } from 'react'
import { UserContext } from '../../utils/Context'
import { APIURL } from '../../utils/SignupInterface'
import { useNavigate } from 'react-router-dom'
import UserDropdown from './UserDropdown'

const ShowUser = () => {
  const { userData } = useContext(UserContext)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  return (
    <div className="relative">
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          src={`${APIURL}/${userData.imageurl}`}
          className="rounded-full w-8"
          alt={userData.Name}
        />
        <h6 className="font-extrabold">{userData.Name}</h6>
      </div>
      <UserDropdown
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      />
    </div>
  )
}

export default ShowUser
