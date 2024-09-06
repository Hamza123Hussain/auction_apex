import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleAuction } from '../../functions/Auction/GettingAsingleAuction'
import { AuctionCardData } from '../../utils/AuctionInteface'
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
  return (
    <div className=" flex flex-col mx-auto p-3">
      <div className=" sm:w-1/2 mx-auto">
        {auctiondata && <AuctionCard auction={auctiondata} />}
      </div>
    </div>
  )
}

export default SingleAuction
