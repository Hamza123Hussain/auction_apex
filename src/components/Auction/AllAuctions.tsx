import { useState, useEffect } from 'react'
import { AllAuctions } from '../../functions/Auction/GettingAllAuctions'
import AuctionCard from './AuctionCard'
import { AuctionCardData } from '../../utils/AuctionInteface'
const AuctionsList = () => {
  const [auctions, setAuctions] = useState<AuctionCardData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const Data = await AllAuctions()
        setAuctions(Data)
        setLoading(false)
      } catch (error) {
        setError('Failed to fetch auctions')
        setLoading(false)
      }
    }
    fetchAuctions()
  }, [])
  if (loading) {
    return <div className="text-center text-electricBlue">Loading...</div>
  }
  if (error) {
    return <div className="text-center text-brightRed">{error}</div>
  }
  return (
    <div className="p-6 max-w-4xl mx-auto  rounded-lg shadow-lg">
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
