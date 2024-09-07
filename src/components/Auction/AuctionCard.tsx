import { useLocation } from 'react-router-dom'
import { AuctionCardData } from '../../utils/AuctionInteface'
import { APIURL } from '../../utils/SignupInterface'
import { isAuctionStarted } from '../../functions/Auction/AuctionStatus'
import ProductAndBidderDetails from './ProductAndBidderDetails'
const AuctionCard = ({ auction }: { auction: AuctionCardData }) => {
  const Location = useLocation()
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
          className=" h-[50dvh] w-full"
        />
        {!Location.pathname.startsWith('/AuctionCard') && (
          <div className="absolute -top-2 right-0 p-2 mb-2">
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
      <ProductAndBidderDetails auction={auction} />
    </div>
  )
}
export default AuctionCard
