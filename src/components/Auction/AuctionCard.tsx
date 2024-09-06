import { useLocation, useNavigate } from 'react-router-dom'
import { AuctionCardData } from '../../utils/AuctionInteface'
import { APIURL } from '../../utils/SignupInterface'
import { isAuctionStarted } from '../../functions/Auction/AuctionStatus'
const AuctionCard = ({ auction }: { auction: AuctionCardData }) => {
  const Location = useLocation()
  const Router = useNavigate()
  return (
    <div
      key={auction._id}
      className="bg-darkCharcoal text-softWhite rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative">
        <img
          src={
            auction.product?.image
              ? 'https://jang.com.pk/assets/uploads/updates/2024-08-31/19584_8076291_Hania-Aamir_updates.jpg'
              : `${APIURL}/${auction.product?.image}`
          }
          alt={auction.product?.productName}
          className=" w-fit"
        />
        {!Location.pathname.startsWith('/AuctionCard') && (
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
        )}
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
        {isAuctionStarted(auction.startDate) &&
          !Location.pathname.startsWith('/AuctionCard') && (
            <button
              onClick={() => Router(`/AuctionCard/${auction._id}`)}
              className="mt-4 bg-electricBlue text-softWhite px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Start Bidding
            </button>
          )}
      </div>
    </div>
  )
}
export default AuctionCard
