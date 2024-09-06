import React, { useEffect, useState } from 'react'
import { fetchAllProducts } from '../../functions/Product/GetAllProducts'
import { ProductCardData } from '../../utils/ProductInterface'
import ProductCard from './ProductCard'
import { GetUserProducts } from '../../functions/Product/GettingUserProduct'
import { useNavigate } from 'react-router-dom'

// Import icons from Material UI
import { AddCircleOutline, ShoppingCart } from '@mui/icons-material'

const ProductPage = ({ sellerID }: { sellerID: string }) => {
  const [Products, SetProducts] = useState<ProductCardData[]>([])
  const navigate = useNavigate() // Hook for navigation

  useEffect(() => {
    const getProducts = async () => {
      const Data = sellerID
        ? await GetUserProducts(sellerID)
        : await fetchAllProducts()
      if (Data) SetProducts(Data)
      else {
        SetProducts([])
      }
    }
    getProducts()
  }, [sellerID])

  if (Products.length === 0)
    return (
      <div className="text-softWhite flex flex-col justify-center items-center min-h-screen p-4">
        <ShoppingCart className="text-neonGreen text-6xl mb-4" />
        <h1 className="text-xl font-bold mb-2">No Products To Display</h1>
        <p className="text-base mb-4">
          It looks like there are no products available right now.
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-electricBlue text-softWhite px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <AddCircleOutline className="mr-2" />
          Create New Product
        </button>
      </div>
    )

  return (
    <div className="grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2">
      {Products.map((element) => (
        <ProductCard productdata={element} key={element._id} />
      ))}
    </div>
  )
}

export default ProductPage
