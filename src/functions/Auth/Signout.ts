import axios from 'axios'
import { APIURL } from '../../utils/SignupInterface'

export const Signout = async () => {
  try {
    const response = await axios.get(`${APIURL}/API/AUTH/SignOut`)
    if (response.status === 200) {
      return response.data
    } else {
      // Handle cases where the status code is not 200
      throw new Error(`Unexpected status code: ${response.status}`)
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
