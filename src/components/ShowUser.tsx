import React, { useContext } from 'react'
import { UserContext } from '../utils/Context'
import { APIURL } from '../utils/SignupInterface'

const ShowUser = () => {
  const { userData } = useContext(UserContext)
  return (
    <div className=" flex items-center gap-2">
      <img
        src={`${APIURL}/${userData.imageurl}`}
        className=" rounded-full w-12"
        alt={userData.Name}
      />
      <h6 className=" font-extrabold">{userData.Name}</h6>
    </div>
  )
}

export default ShowUser
