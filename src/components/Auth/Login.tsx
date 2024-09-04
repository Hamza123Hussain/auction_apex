import React, { useContext } from 'react'
import LoginTextFields from './LoginFields'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../utils/Context'
import { LoginUser } from '../../functions/Auth/Login'

const Login = () => {
  const Router = useNavigate()
  const { inputVal, setInputVal, loading, setLoading, setUserData } =
    useContext(UserContext)

  const HandleLogin = async () => {
    setLoading(true)
    const Data = await LoginUser(inputVal)
    if (Data) {
      console.log('API HAS RESPONSDED : ', Data.user)
      setUserData(Data.user)
      setInputVal({
        email: '',
        password: '',
      })
      setLoading(false)
      //   Router('/')
    }
  }

  //   if (loading) return <Loader />

  return (
    <div className="flex flex-col bg-gradient-to-t from-[#333333] to-[#1E90FF] p-6 rounded-lg shadow-lg mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl sm:p-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white mb-6">
        Log In
      </h2>
      <LoginTextFields />
      <button
        onClick={HandleLogin}
        className="bg-[#39FF14] hover:bg-[#2b9d0b] text-white font-medium py-2 rounded-lg shadow-md transition-all duration-300 mt-4 text-xs w-[10vw] mx-auto"
      >
        Log In
      </button>
      <h6 className="text-xs  text-gray-400 mr-2 text-right">
        Forgot Your Password? Click Here To{' '}
        <span
          onClick={() => Router('/Resetpass')}
          className="underline cursor-pointer text-[#FF6F61] hover:text-[#FF3B30] transition-all duration-300"
        >
          Reset It
        </span>
      </h6>
      <h6 className="text-xs text-center text-gray-400 mt-4">
        Don't Have An Account? Click Here To{' '}
        <span
          onClick={() => Router('/register')}
          className="underline cursor-pointer text-[#FF6F61] hover:text-[#FF3B30] transition-all duration-300"
        >
          Sign Up
        </span>
      </h6>
    </div>
  )
}

export default Login
