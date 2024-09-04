import React, { useEffect, useState } from 'react'
import { fetchAllProducts } from '../../functions/Product/GetAllProducts'
import { ProductCardData } from '../../utils/ProductInterface'
import ProductCard from './ProductCard'

const ProductPage = () => {
  const [Products, SetProducts] = useState<ProductCardData[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const Data = await fetchAllProducts()
      console.log('All Proudcts', Data)
      SetProducts(Data)
    }
    getProducts()
  }, [])

  return (
    <div className=" grid grid-cols-1 justify-center items-center gap-5  mx-auto sm:grid-cols-3">
      {Products.map((element) => (
        <ProductCard productdata={element} key={element._id} />
      ))}
    </div>
  )
}

export default ProductPage
