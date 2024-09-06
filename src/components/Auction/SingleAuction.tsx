import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleAuction } from '../../functions/Auction/GettingAsingleAuction'
import { AuctionCardData, AuctionCreate } from '../../utils/AuctionInteface'
import AuctionCard from './AuctionCard'

const SingleAuction = () => {
  const { AuctionID } = useParams()
  const [auctiondata, setdata] = useState<AuctionCardData>()
  useEffect(() => {
    const GetAuctionData = async () => {
      const Data = await getSingleAuction(AuctionID)
      // console.log('DATA OF SINGLE AUCTION ', Data)
      setdata(Data)
    }
    GetAuctionData()
  }, [AuctionID])
  return <>{auctiondata && <AuctionCard auction={auctiondata} />}</>
}

export default SingleAuction
