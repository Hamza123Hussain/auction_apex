import { useState, useEffect, useContext } from 'react'
import AuctionCard from './AuctionCard'
import { AuctionCardData } from '../../utils/AuctionInteface'
import { io } from 'socket.io-client'
import Loader from '../Loader'
import { UserContext } from '../../utils/Context'
const AuctionsList = () => {
  const [auctions, setAuctions] = useState<AuctionCardData[]>([])
  const [error, setError] = useState<any>(null)
  const { flag } = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const socket = io('http://localhost:5000', {
      transports: ['websocket', 'polling'], // Explicitly specify transports
    })
    socket.emit('AuctionList')
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
    socket.on('AuctionListReceived', (data: any) => {
      console.log('ALL AUCTIONS RECEIVED', data)
      setAuctions(data)
      setLoading(false)
    })
    return () => {
      if (socket) {
        socket.disconnect()
        setLoading(false)
      }
    }
  }, [flag])
  if (loading)
    return (
      <div className=" min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    )
  if (error) {
    return <div className="text-center text-brightRed">{error}</div>
  }
  return (
    <div className="p-6 max-w-4xl mx-auto rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-green-400 mb-6">All Auctions</h1>
      {auctions.length === 0 ? (
        <p className="text-center text-gray-500">No auctions available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <AuctionCard auction={auction} key={auction._id} />
          ))}
        </div>
      )}
    </div>
  )
}
export default AuctionsList
