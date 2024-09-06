import axios from 'axios'
import { APIURL } from '../../utils/SignupInterface'

// Fetches user products based on sellerID
export const GetUserProducts = async (sellerID: string) => {
  try {
    // Make a GET request to the backend with the sellerID as a query parameter
    const response = await axios.get(`${APIURL}/API/Product/GetUserProducts`, {
      params: { sellerID },
    })

    // Check if the response status is OK (200)
    if (response.status === 200) {
      return response.data
    } else {
      return [] // Return an empty array if status is not 200
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    alert('An error occurred while fetching the products.')
    return [] // Return an empty array in case of an error
  }
}
