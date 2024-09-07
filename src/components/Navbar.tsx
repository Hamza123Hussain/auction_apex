import React, { useContext } from 'react'
import { UserContext } from '../utils/Context'
import ShowUser from './User/ShowUser'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const Router = useNavigate()
  const { userData } = useContext(UserContext)
  return (
    <div className="flex sm:justify-between items-center flex-col sm:flex-row w-full md:w-auto bg-electricBlue text-softWhite px-4  shadow-lg">
      <div
        onClick={() => Router('/')}
        className="text-xl font-bold cursor-pointer flex items-center "
      >
        <img src={'/LOGO.png'} alt="Logo" className=" w-20" />
        <span>AuctionApex</span>
      </div>

      {!userData._id ? (
        <a
          href="/Login"
          className="bg-brightCoral mt-4 mb-2 px-4 text-softWhite  rounded-lg hover:bg-brightRed"
        >
          Sign In
        </a>
      ) : (
        <ShowUser />
      )}
    </div>
  )
}
export default Navbar
