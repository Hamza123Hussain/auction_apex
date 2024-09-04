import axios from 'axios'
import { APIURL } from '../../utils/SignupInterface'

export const GetUserProducts = async (sellerID: string) => {
  const Response = await axios.get(
    `${APIURL}/API/Product/GetUserProducts?sellerID=${sellerID}`
  )
  try {
    if (Response.status === 200) {
      //   console.log('product data ', Response.data)
      return Response.data
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    alert('An error occurred while fetching the products.')
    return []
  }
}
