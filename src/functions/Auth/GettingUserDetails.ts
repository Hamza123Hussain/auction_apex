import axios from 'axios'
import { APIURL } from '../../utils/SignupInterface'

export const GetUser = async (userID: string) => {
  const Response = await axios.get(
    `${APIURL}/API/USER/GetUser?userID=${userID}`
  )
  if (Response.status === 200) {
    // console.log('USER DETAILS :', Response.data)
    return Response.data
  }
  try {
  } catch (error: any) {
    // Handle errors
    console.error('Sign up error:', error.response?.data || error.message)
    throw error
  }
}
