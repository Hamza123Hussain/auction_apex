import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleAuction } from '../../functions/Auction/GettingAsingleAuction'

const SingleAuction = () => {
  const { AuctionID } = useParams()
  useEffect(() => {
    const GetAuctionData = async () => {
      const Data = await getSingleAuction(AuctionID)
      console.log('DATA OF SINGLE AUCTION ', Data)
    }
    GetAuctionData()
  }, [])
  return <div className=" text-white">h11111111</div>
}

export default SingleAuction
