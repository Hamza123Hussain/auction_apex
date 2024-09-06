import axios from 'axios'
import { APIURL, InputValues } from '../../utils/SignupInterface'

export const Update_User = async (CurrentUser: InputValues) => {
  const formData = new FormData()
  formData.append('username', CurrentUser.username)
  formData.append('userID', CurrentUser._id)

  if (CurrentUser.Image) {
    formData.append('image', CurrentUser.Image)
  }

  try {
    const response = await axios.post(
      `${APIURL}/API/USER/UpdateUser`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )

    if (response.status === 200) {
      console.log('API responded:', response.data)
      return response.data
    }
  } catch (error) {
    console.error('Error updating user:', error)
  }
}
