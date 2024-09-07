import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuctionCardData } from '../../utils/AuctionInteface'
import AuctionCard from './AuctionCard'
import { UserContext } from '../../utils/Context'
import BidField from './BidField'
import GoHome from '../GoHome'
import { placeBid } from '../../functions/Auction/PlaceBid'
import toast from 'react-hot-toast'
import { io } from 'socket.io-client'
import Loader from '../Loader'
const SingleAuction = () => {
  const { inputVal, userData, flag, setflag } = useContext(UserContext)
  const { AuctionID } = useParams()
  const [error, setError] = useState<any>()
  const [auctiondata, setdata] = useState<AuctionCardData>()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const socket = io('http://localhost:5000', {
      transports: ['websocket', 'polling'], // Explicitly specify transports
    })
    socket.emit('SingleAuction', AuctionID)
    socket.on('connect_error', (error) => {
      console.error('Socket.IO connection error:', error)
      setError(error)
      setLoading(false)
    })
    socket.on('error', (error) => {
      console.error('Socket.IO error:', error)
      setError(error)
      setLoading(false)
    })
    socket.on('AuctionData', (data) => {
      setdata(data)
      setLoading(false)
    })
    return () => {
      if (socket) {
        socket.disconnect()
      }
    }
  }, [userData._id, AuctionID, flag]) // `flag` is included as a dependency
  if (error) {
    return <div className="text-center text-brightRed">{error}</div>
  }
  if (loading)
    return (
      <div className=" min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    )
  const handleBidSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!AuctionID || !inputVal?.bid || !userData?._id) {
      console.error('Missing AuctionID, bid, or userData.')
      return
    }
    try {
      if (auctiondata?.currentBid && inputVal.bid > auctiondata?.currentBid) {
        const Data = await placeBid(AuctionID, inputVal?.bid, userData._id)
        if (Data) {
          setflag((prevFlag: boolean) => !prevFlag)
        }
      } else {
        toast.error('BID IS LESS THAN CURRENT BID')
      }
    } catch (error) {
      console.error('Error placing bid:', error)
    }
  }
  return (
    <div className="flex flex-col mx-auto p-3 max-w-3xl rounded-lg">
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
