import { useParams } from 'react-router-dom'
import { AuctionCardData } from '../../utils/AuctionInteface'
import { APIURL } from '../../utils/SignupInterface'
const AuctionCard = ({ auction }: { auction: AuctionCardData }) => {
  const isAuctionStarted = (startDate: string) => {
    const now = new Date()
    const start = new Date(startDate)
    return now >= start
  }
  return (
    <div
      key={auction._id}
      className="bg-darkCharcoal text-softWhite rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative">
        <img
          src={
            !auction.product?.image
              ? 'https://jang.com.pk/assets/uploads/updates/2024-08-31/19584_8076291_Hania-Aamir_updates.jpg'
              : `${APIURL}/${auction.product?.image}`
          }
          alt={auction.product?.productName}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 p-2">
          <span
            className={`px-3 py-1 rounded-lg text-sm font-bold uppercase ${
              isAuctionStarted(auction.startDate)
                ? 'bg-neonGreen'
                : 'bg-brightCoral'
            }`}
          >
            {isAuctionStarted(auction.startDate)
              ? 'Auction Started'
              : 'Upcoming'}
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
            ? `Highest Bidder: ${auction.highestBidder.username}`
            : 'No highest bidder yet'}
        </p>
        {isAuctionStarted(auction.startDate) && (
          <button className="mt-4 bg-electricBlue text-softWhite px-4 py-2 rounded-lg hover:bg-blue-700">
            Start Bidding
          </button>
        )}
      </div>
    </div>
  )
}
export default AuctionCard
