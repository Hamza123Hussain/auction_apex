import axios from 'axios'
import { APIURL } from '../../utils/SignupInterface'

export const AllAuctions = async () => {
  const response = await axios.get(`${APIURL}/API/Auction/AllAuctions`)
  try {
    if (response.status === 200) {
      console.log(response.data)
      return response.data
    }
  } catch (error) {
    console.error('Error:', error)
    alert('An unexpected error occurred.')
  }
}
