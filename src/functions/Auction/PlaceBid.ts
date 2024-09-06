import axios from 'axios'
import { APIURL } from '../../utils/SignupInterface'

export const placeBid = async (
  auctionID: string,
  bid: number,
  UserID: string
) => {
  try {
    const response = await axios.post(`${APIURL}/API/Auction/SingleBid`, {
      AuctionID: auctionID, // Ensure keys match the backend's expectation
      Bid: bid, // Make sure this matches backend spelling (e.g., `Bid`)
      UserID: UserID,
    })

    if (response.status === 200) {
      console.log('Bid placed successfully:', response.data)
      return response.data
    } else {
      console.error('Failed to place bid:', response.data)
      return null
    }
  } catch (error) {
    console.error('Error placing bid:', error)
    return null
  }
}
