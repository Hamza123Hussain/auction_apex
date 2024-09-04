export interface ProductData {
  productName: string
  description: string
  price: number
  image: File | null | string
  auctionEndDate: Date | null
  status: string
}
export interface ProductCardData {
  _id: string
  sellerId: string
  productName: string
  description: string
  price: number
  image: string
  auctionEndDate: string
  status: string
}
