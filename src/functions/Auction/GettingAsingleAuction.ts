import axios from 'axios'
import { APIURL } from '../../utils/SignupInterface'

export const getSingleAuction = async (AuctionID: any) => {
  try {
    const response = await axios.get(`${APIURL}/API/Auction/SingleAuction`, {
      params: {
        AuctionID, // Pass AuctionID as a query parameter
      },
    })

    if (response.status === 200) {
      console.log('Auction details:', response.data)
      return response.data
    }
  } catch (error) {
    console.error('Failed to retrieve auction:', error)
    throw error // Re-throw the error for further handling in the UI
  }
}
