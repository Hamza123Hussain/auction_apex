import { useState, useEffect } from 'react'
import AuctionCard from './AuctionCard'
import { AuctionCardData } from '../../utils/AuctionInteface'
import { io } from 'socket.io-client'
const AuctionsList = () => {
  const [auctions, setAuctions] = useState<AuctionCardData[]>([])
  const [error, setError] = useState<any>(null)
  useEffect(() => {
    const socket = io('http://localhost:5000', {
      transports: ['websocket', 'polling'], // Explicitly specify transports
    })
    socket.emit('AuctionList')
    socket.on('connect_error', (error) => {
      console.error('Socket.IO connection error:', error)
      setError(error)
    })
    socket.on('error', (error) => {
      console.error('Socket.IO error:', error)
      setError(error)
    })
    socket.on('AuctionListReceived', (data: any) => {
      console.log('ALL AUCTIONS RECEIVED', data)
      setAuctions(data)
    })
    return () => {
      if (socket) {
        socket.disconnect()
      }
    }
  })
  if (error) {
    return <div className="text-center text-brightRed">{error}</div>
  }
  return (
    <div className="p-6 max-w-4xl mx-auto rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-brightRed mb-6">All Auctions</h1>
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
