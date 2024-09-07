import React, { useEffect, useState } from 'react'
import { fetchAllProducts } from '../../functions/Product/GetAllProducts'
import { ProductCardData } from '../../utils/ProductInterface'
import ProductCard from './ProductCard'
import { GetUserProducts } from '../../functions/Product/GettingUserProduct'
import { useNavigate } from 'react-router-dom'
import { AddCircleOutline, ShoppingCart } from '@mui/icons-material'
import Loader from '../Loader'
const ProductPage = ({ sellerID }: { sellerID: string }) => {
  const [Products, SetProducts] = useState<ProductCardData[]>([])
  const navigate = useNavigate() // Hook for navigation
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getProducts = async () => {
      const Data = sellerID
        ? await GetUserProducts('GuFl4e57s9YnpbAg3JMl8Qa4Z8x2')
        : await fetchAllProducts()
      if (Data) {
        SetProducts(Data)
        setLoading(false)
      } else {
        SetProducts([])
        setLoading(false)
      }
    }
    getProducts()
  }, [sellerID])
  if (Products.length === 0)
    return (
      <div className="text-softWhite flex flex-col justify-center items-center  p-4">
        <ShoppingCart className="text-neonGreen text-6xl mb-4" />
        <h1 className="text-sm font-bold mb-2">No Products To Display</h1>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-electricBlue text-xs text-softWhite px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <AddCircleOutline className="mr-2" />
          Create New Product
        </button>
      </div>
    )
  if (loading)
    return (
      <div className=" min-h-screen flex justify-center items-center">
        <Loader />
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
