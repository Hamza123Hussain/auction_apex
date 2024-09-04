import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { APIURL } from '../../utils/SignupInterface'
import { normalizePath } from '../../functions/imagepath'

const AuctionsList = () => {
  const [auctions, setAuctions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axios.get(`${APIURL}/API/Auction/AllAuctions`)
        setAuctions(response.data)
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
    <div className="p-6 max-w-4xl mx-auto bg-softWhite rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-darkCharcoal mb-6">
        All Auctions
      </h1>
      {auctions.length === 0 ? (
        <p className="text-center text-gray-500">No auctions available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <div
              key={auction._id}
              className="bg-darkCharcoal text-softWhite rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                Uncomment and use image if available
                <img
                  src={
                    auction.product?.image
                      ? normalizePath(auction.product?.image)
                      : ''
                  }
                  alt={auction.product?.productName}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 p-2">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-bold uppercase ${
                      auction.highestBidder ? 'bg-neonGreen' : 'bg-brightCoral'
                    }`}
                  >
                    {auction.highestBidder ? 'Bidding' : 'Upcoming'}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
                  {auction.product?.productName}
                </h2>
                <p className="text-base mb-2">{auction.product?.description}</p>
                <p className="text-lg font-semibold mb-2 text-neonGreen">
                  ${auction.currentBid}
                </p>
                <p className="text-sm text-gray-400">
                  Start Date: {new Date(auction.startDate).toLocaleString()}
                </p>
                <p className="text-sm text-gray-400">
                  End Date: {new Date(auction.endDate).toLocaleString()}
                </p>
                <p className="text-sm text-gray-400">
                  {auction.highestBidder
                    ? `Highest Bidder: ${auction.highestBidder.name}`
                    : 'No highest bidder yet'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AuctionsList
