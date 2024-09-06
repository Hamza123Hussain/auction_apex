import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSingleAuction } from '../../functions/Auction/GettingAsingleAuction'
import { AuctionCardData } from '../../utils/AuctionInteface'
import AuctionCard from './AuctionCard'
import { UserContext } from '../../utils/Context'
import BidField from './BidField'
import GoHome from '../GoHome'
const SingleAuction = () => {
  const { inputVal } = useContext(UserContext)
  const { AuctionID } = useParams()
  const [auctiondata, setdata] = useState<AuctionCardData>()
  const navigate = useNavigate()
  useEffect(() => {
    const GetAuctionData = async () => {
      const Data = await getSingleAuction(AuctionID)
      setdata(Data)
    }
    GetAuctionData()
  }, [AuctionID])
  const handleBidSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Logic to submit the bid goes here
    // e.g., await submitBid(AuctionID, bidAmount)
    // console.log('Bid submitted:', bidAmount)
  }
  return (
    <div className="flex flex-col mx-auto p-3 max-w-3xl">
      <div className="sm:w-1/2 mx-auto mb-6">
        {auctiondata && <AuctionCard auction={auctiondata} />}
      </div>
      <form onSubmit={handleBidSubmit} className="space-y-4">
        <BidField />
        <button
          type="submit"
          className="w-full p-3 bg-electricBlue text-softWhite rounded-md hover:bg-blue-700 transition duration-300"
        >
          Place Bid
        </button>
      </form>
      <GoHome />
    </div>
  )
}
export default SingleAuction
