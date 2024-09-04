import React from 'react'
import { ProductCardData } from '../../utils/ProductInterface'
import { normalizePath } from '../../functions/imagepath'
import { APIURL } from '../../utils/SignupInterface'

const ProductCard = ({ productdata }: { productdata: ProductCardData }) => {
  const statusColors: { [key: string]: string } = {
    active: 'bg-electricBlue',
    sold: 'bg-brightRed',
    canceled: 'bg-brightCoral',
  }
  const imageurl = normalizePath(productdata.image)

  return (
    <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 bg-darkCharcoal text-softWhite">
      <div className="relative">
        <img
          className="w-full object-cover"
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
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3">{productdata.productName}</h2>
        <p className="text-base mb-4">{productdata.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-neonGreen font-semibold text-lg">
            ${productdata.price}
          </span>
        </div>
        <p className="text-sm text-softWhite mt-2">
          Auction ends on:{' '}
          {new Date(productdata.auctionEndDate).toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default ProductCard
