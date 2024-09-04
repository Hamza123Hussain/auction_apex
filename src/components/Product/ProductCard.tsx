import React from 'react'
import { ProductCardData } from '../../utils/ProductInterface'
import { normalizePath } from '../../functions/imagepath'
import { APIURL } from '../../utils/SignupInterface'
import { useLocation } from 'react-router-dom'

const ProductCard = ({ productdata }: { productdata: ProductCardData }) => {
  const statusColors: { [key: string]: string } = {
    active: 'bg-electricBlue',
    sold: 'bg-brightRed',
    canceled: 'bg-brightCoral',
  }

  const imageurl = normalizePath(productdata.image)
  const location = useLocation() // Get the current pathname

  return (
    <div className="rounded-lg  overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-darkCharcoal text-softWhite">
      <div className="relative">
        <img
          className=" w-full aspect-auto  object-cover"
          src={`${APIURL}/${imageurl}`}
          alt={productdata.productName}
        />
        <span
          className={`absolute top-2 right-2 px-3 py-1 rounded-lg text-sm font-bold uppercase ${
            statusColors[productdata.status]
          }`}
        >
          {productdata.status}
        </span>
      </div>
      <div className="p-6 text-left">
        <h2 className="text-2xl font-bold mb-3">{productdata.productName}</h2>
        <p className="text-base mb-4">{productdata.description}</p>

        <span className="text-neonGreen font-semibold text-lg ">
          Price ${productdata.price}
        </span>

        <p className="text-sm text-right text-softWhite mt-2">
          Auction ends on:{' '}
          {new Date(productdata.auctionEndDate).toLocaleString()}
        </p>
      </div>

      {/* Conditionally render Create Auction button */}
      {location.pathname === '/dashboard/user-products' && (
        <div className="p-6 flex justify-end">
          <button className="bg-electricBlue text-softWhite px-4 py-2 rounded-lg hover:bg-neonGreen transition duration-300">
            Create Auction
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductCard
