import React, { useContext, useEffect } from 'react'
import { GetUser } from '../../functions/Auth/GettingUserDetails'
import { UserContext } from '../../utils/Context'
import SignUpTextFields from '../Auth/SignupFields'
import SignUp from '../Auth/SignUp'
const Profile = () => {
  const { userData, inputVal, setInputVal } = useContext(UserContext)
  useEffect(() => {
    const GetUserData = async () => {
      const Data = await GetUser(userData._id)
      setInputVal(Data)
      if (Data) {
        console.log('INPUT DATA : ', inputVal)
      }
    }
    GetUserData()
  }, [])

  return (
    <>
      <SignUp />
    </>
  )
}

export default Profile
