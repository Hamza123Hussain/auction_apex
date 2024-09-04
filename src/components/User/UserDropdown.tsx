import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Signout } from '../../functions/Auth/Signout'
import { UserContext } from '../../utils/Context'
const UserDropdown = ({
  dropdownOpen,
  setDropdownOpen,
}: {
  dropdownOpen: boolean
  setDropdownOpen: any
}) => {
  const { setUserData } = useContext(UserContext)
  const ByeBye = async () => {
    const UserGone = await Signout()
    if (UserGone) {
      setUserData({})
    }
  }
  //   const navigate = useNavigate()
  return (
    <>
      {dropdownOpen && (
        <div
          onMouseLeave={() => setDropdownOpen(false)}
          className="absolute ml-2  w-full  bg-darkCharcoal text-softWhite shadow-lg rounded-lg z-10 "
        >
          {/* <a href="" className="block px-4 py-2 text-sm hover:bg-brightCoral">
            My Profile
          </a> */}
          <a
            href="/Dashboard"
            className="block px-4 py-2 text-sm hover:bg-brightCoral"
          >
            Dashboard
          </a>
          <button
            onClick={ByeBye}
            className="w-full text-left block px-4 py-2 text-sm bg-brightRed hover:bg-red-700 text-softWhite rounded-b-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </>
  )
}

export default UserDropdown
