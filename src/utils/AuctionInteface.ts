import { ProductCardData } from './ProductInterface'
import { UserData } from './SignupInterface'

export interface AuctionCreate {
  product: string
  startDate: string
  endDate: string
}
export interface AuctionCardData {
  currentBid: number
  endDate: string
  highestBidder: UserData
  product: ProductCardData
  startDate: string
  _id: string
}
