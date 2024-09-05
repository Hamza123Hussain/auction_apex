import axios from 'axios'
import { APIURL, InputValues } from '../../utils/SignupInterface'

export const Update_User = async (CurrentUser: InputValues) => {
  const formData = new FormData()
  try {
    formData.append('username', CurrentUser.username)
    formData.append('userID', CurrentUser._id)

    // Append image if it exists
    if (CurrentUser.Image) {
      formData.append('image', CurrentUser.Image)
    }

    // Send formData directly without wrapping it in an object
    const Response = await axios.put(
      `${APIURL}/API/USER/UpdateUser`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure the request is sent as form data
        },
      }
    )

    if (Response.status === 200) {
      console.log('API RESPONDED ', Response.data)
      return Response.data
    }
  } catch (error) {
    console.error('Error updating user:', error)
  }
}
