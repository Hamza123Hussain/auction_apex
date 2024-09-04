import React, { useEffect, useState } from 'react'
import { fetchAllProducts } from '../../functions/Product/GetAllProducts'
import { ProductCardData } from '../../utils/ProductInterface'
import ProductCard from './ProductCard'
import { GetUserProducts } from '../../functions/Product/GettingUserProduct'

const ProductPage = ({ sellerID }: { sellerID: string }) => {
  const [Products, SetProducts] = useState<ProductCardData[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const Data = sellerID
        ? await GetUserProducts(sellerID)
        : await fetchAllProducts()
      if (Data) SetProducts(Data)
    }
    getProducts()
  }, [])

  return (
    <div className=" grid grid-cols-1 justify-center items-center gap-5  mx-auto sm:grid-cols-2">
      {Products.map((element) => (
        <ProductCard productdata={element} key={element._id} />
      ))}
    </div>
  )
}

export default ProductPage
