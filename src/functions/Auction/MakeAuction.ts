import axios from 'axios'
import { APIURL } from '../../utils/SignupInterface'

export const CreateAuctions = async (
  product: string,
  startDate: any,
  endDate: any
) => {
  try {
    const response = await axios.post(`${APIURL}/API/Auction/MakeAuction`, {
      product,
      startDate,
      endDate,
    })
    if (response.status === 201) {
      console.log('DATA HAS BEEN RETURNED ', response.data)
    }
  } catch (error) {
    console.error('Error:', error)
    alert('An unexpected error occurred.')
  }
}
