import axios from 'axios'
import { APIURL, InputValues } from '../../utils/SignupInterface'

// http://localhost:5000/API/AUTH/SignIn
export const RegisterUser = async (userData: InputValues) => {
  try {
    // Prepare form data for sending a file
    const formData = new FormData()
    formData.append('username', userData.username)
    formData.append('email', userData.email)
    formData.append('password', userData.password)
    if (userData.Image) {
      formData.append('image', userData.Image)
    }

    // Send POST request to the sign-in endpoint
    const response = await axios.post(`${APIURL}/API/AUTH/SignIn`, formData)

    // Handle successful response
    console.log('Sign up successful:', response.data)
    return response.data
  } catch (error: any) {
    // Handle errors
    console.error('Sign up error:', error.response?.data || error.message)
    throw error
  }
}
