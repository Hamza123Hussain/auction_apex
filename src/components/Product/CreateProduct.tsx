import React, { useContext } from 'react'
import { UserContext } from '../../utils/Context'
import ProductFields from './ProductFields'
import { createProduct } from '../../functions/Product/CreateAProduct'
const ProductAddForm = () => {
  const { productdata } = useContext(UserContext)
  const handleSubmit = async () => {
    const Data = await createProduct(productdata)
    console.log('API HAS RESPONDED : ', Data)
  }
  return (
    <div className="flex flex-col bg-gradient-to-t from-[#333333] to-[#1E90FF] p-6 rounded-lg shadow-lg mx-auto w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-2xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white mb-6">
        Add Product
      </h2>
      <div className="space-y-4">
        <ProductFields />
        <button
          onClick={handleSubmit}
          className="bg-[#39FF14] hover:bg-[#2b9d0b] text-white font-medium py-2 rounded-lg shadow-md transition-all duration-300 mt-4 w-full"
        >
          Add Product
        </button>
      </div>
    </div>
  )
}
export default ProductAddForm
