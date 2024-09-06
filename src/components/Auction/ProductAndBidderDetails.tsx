import React from 'react'
import { isAuctionStarted } from '../../functions/Auction/AuctionStatus'
import { AuctionCardData } from '../../utils/AuctionInteface'
import { normalizePath } from '../../functions/Product/imagepath'
import { APIURL } from '../../utils/SignupInterface'
import { useLocation, useNavigate } from 'react-router-dom'

// Import icons from Material UI
import DollarIcon from '@mui/icons-material/AttachMoney'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PersonIcon from '@mui/icons-material/Person'

const ProductAndBidderDetails = ({ auction }: { auction: AuctionCardData }) => {
  const Location = useLocation()
  const Router = useNavigate()

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{auction.product?.productName}</h2>
      <p className="text-base mb-2">{auction.product?.description}</p>

      {/* Bid and Price */}
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg font-semibold mb-2 text-neonGreen flex items-center">
          <DollarIcon className="mr-2" />
          Current BID: ${auction.currentBid}
        </p>
        <p className="text-lg font-semibold mb-2 text-neonGreen flex items-center">
          <DollarIcon className="mr-2" />
          Original Price: ${auction.product?.price}
        </p>
      </div>

      {/* Highest Bidder */}
      <h1 className="text-sm text-gray-400 flex flex-col items-center my-2">
        <p className="flex items-center gap-2">
          <PersonIcon className="mr-2" />
          Highest Bidder
        </p>
        {auction.highestBidder ? (
          <div className="flex items-center gap-2">
            <img
              width={25}
              className="rounded-full"
              src={`${APIURL}/${normalizePath(auction.highestBidder.image)}`}
              alt=""
            />
            <span> {auction.highestBidder.username}</span>
          </div>
        ) : (
          <span>No highest bidder yet</span>
        )}
      </h1>

      {/* Auction Dates */}
      <div className="gap-2 mt-5 flex flex-col">
        <p className="text-sm text-gray-400 flex items-center">
          <CalendarTodayIcon className="mr-2" />
          Start Date: {new Date(auction.startDate).toDateString()}
        </p>
        <p className="text-sm text-gray-400 flex items-center">
          <CalendarTodayIcon className="mr-2" />
          End Date: {new Date(auction.endDate).toDateString()}
        </p>
      </div>

      {/* Start Bidding Button */}
      {isAuctionStarted(auction.startDate) &&
        !Location.pathname.startsWith('/AuctionCard') && (
          <button
            onClick={() => Router(`/AuctionCard/${auction._id}`)}
            className="mt-4 self-center bg-electricBlue text-softWhite px-4 py-2 w-full rounded-lg hover:bg-blue-700"
          >
            Start Bidding
          </button>
        )}
    </div>
  )
}

export default ProductAndBidderDetails
