import axios from 'axios'
import { APIURL } from '../../utils/SignupInterface'

export const ResetPass = async (email: string) => {
  const Response = await axios.post(`${APIURL}/API/AUTH/Reset`, { email })
  try {
    if (Response.data === 200) {
      return Response.data
    }
  } catch (error: any) {
    // Log the error for debugging purposes
    console.error('Error during sign out:', error)

    // Return a meaningful error message
    return {
      success: false,
      message:
        error.response?.data?.message || 'Sign out failed. Please try again.',
    }
  }
}
