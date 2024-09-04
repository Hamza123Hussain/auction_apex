import React, { useContext, useState } from 'react'
import { Activity, Annoyed, Lock, LockOpen } from 'lucide-react'
import { UserContext } from '../utils/Context'
import ShowUser from './ShowUser'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { userData } = useContext(UserContext)
  return (
    <nav className="bg-electricBlue text-softWhite py-4 px-6 flex flex-col md:flex-row md:justify-between items-center shadow-lg">
      <div className="flex justify-between w-full md:w-auto">
        <div className="text-xl font-bold">AuctionApex</div>
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? <Lock /> : <LockOpen />}
        </button>
      </div>
      <ul
        className={`flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <li>
          <a href="#" className="hover:text-neonGreen">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-neonGreen">
            Auctions
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-neonGreen">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-neonGreen">
            Contact
          </a>
        </li>
      </ul>
      <div className="mt-4 md:mt-0">
        {!userData._id ? (
          <a
            href="/Login"
            className="bg-brightCoral text-softWhite px-4 py-2 rounded hover:bg-brightRed"
          >
            Sign In
          </a>
        ) : (
          <ShowUser />
        )}
      </div>
    </nav>
  )
}

export default Navbar
