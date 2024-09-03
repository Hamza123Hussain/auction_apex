import axios from 'axios'
import { APIURL, InputValues } from '../../utils/SignupInterface'

export const LoginUser = async (userData: InputValues) => {
  const { password, email } = userData
  const Response = await axios.post(`${APIURL}/API/AUTH/Login`, {
    email,
    password,
  })
  try {
    if (Response.status === 200) {
      return Response.data
    }
  } catch (error) {
    console.log('THERE IS A ERRO IN FUNCTION ', error)
  }
}
