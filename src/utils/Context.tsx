'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { InputValues, UserData } from './SignupInterface'
export const UserContext = createContext<any>(null)
const ContextProvider = ({ children }: { children: ReactNode }) => {
  // States
  const [inputVal, setInputVal] = useState<InputValues>({
    email: '',
    password: '',
    username: '',
    Image: null,
    image: '',
    _id: '',
    bid: 0,
  })
  const [flag, setflag] = useState(false)
  const [loading, setLoading] = useState(true) // Start with loading true
  const [userData, setUserData] = useState<UserData>(() => {
    try {
      const storedData = localStorage.getItem('userData')
      return storedData ? JSON.parse(storedData) : {} // Initialize with empty object
    } catch (error) {
      console.error('Failed to parse userData from localStorage:', error)
      return {} // Fallback to empty object
    }
  })
  // Effect for saving userData to local storage
  useEffect(() => {
    try {
      localStorage.setItem('userData', JSON.stringify(userData))
    } catch (error) {
      console.error('Failed to save userData to localStorage:', error)
    }
  }, [userData])
  // Effect for loading state and timer for demonstration purposes
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000) // Simulated delay
    return () => clearTimeout(timer) // Cleanup on unmount
  }, [])
  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        loading,
        setLoading,
        inputVal,
        setInputVal,
        flag,
        setflag,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export default ContextProvider
