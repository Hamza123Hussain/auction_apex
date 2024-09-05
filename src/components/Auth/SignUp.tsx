import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../utils/Context'
import { RegisterUser } from '../../functions/Auth/Register'
import TextFields from './SignupFields'
const SignUp = () => {
  const Router = useNavigate()
  const context = useContext(UserContext)
  const { inputVal, setInputVal, loading, setLoading, setUserData } = context
  const HandleSignup = async () => {
    setLoading(true)
    const Data = await RegisterUser(inputVal)
    console.log('API RESPONSED : ', Data)
    setUserData()
    setInputVal({
      email: '',
      password: '',
      Name: '',
      Image: null,
    })
    setLoading(false)
  }
  const location = useLocation() // get the current location
  // if (loading) return <Loader />
  return (
    <div className="flex flex-col bg-gradient-to-t from-[#333333] to-[#1E90FF] p-6 rounded-lg shadow-lg mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white mb-6">
        {location.pathname === '/Profile' ? 'Update Profile' : 'Sign Up'}
      </h2>
      <TextFields />
      <button
        onClick={HandleSignup}
        className="bg-[#39FF14] hover:bg-[#2b9d0b] text-white font-medium py-2 rounded-lg shadow-md transition-all duration-300 mt-4 text-xs sm:text-sm md:text-base w-full max-w-xs mx-auto"
      >
        {location.pathname === '/Profile' ? 'Update Profile' : 'Sign Up'}
      </button>
      {location.pathname === '/Profile' ? (
        ''
      ) : (
        <h6 className="text-xs sm:text-sm md:text-base text-center text-gray-400 mt-4">
          Already Have An Account? Click Here To{' '}
          <span
            onClick={() => Router('/Login')}
            className="underline cursor-pointer text-[#FF6F61] hover:text-[#FF3B30] transition-all duration-300"
          >
            Log In
          </span>
        </h6>
      )}
    </div>
  )
}
export default SignUp
