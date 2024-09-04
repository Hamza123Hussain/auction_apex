import React, { useState } from 'react'
import InputField from './InputField'
import SelectField from './SelectField'
import FileInput from './FileInput'
import { createProduct } from '../../functions/Product/CreateAProduct'
const ProductForm = () => {
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [productData, setProductData] = useState({
    productName: '',
    price: '',
    auctionEndDate: '',
    status: 'active',
  })

  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target

    if (type === 'file' && files && files[0]) {
      setImageFile(files[0])
    } else {
      setProductData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createProduct(productData, imageFile)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gradient-to-t from-[#4b46469c] to-[#1E90FF] p-6 rounded-lg shadow-md"
    >
      <InputField
        id="productName"
        label="Product Name"
        type="text"
        name="productName"
        value={productData.productName}
        onChange={handleChange}
        required
      />

      <InputField
        id="price"
        label="Price"
        type="number"
        name="price"
        value={productData.price}
        onChange={handleChange}
        required
      />

      <InputField
        id="auctionEndDate"
        label="Auction End Date"
        type="date"
        name="auctionEndDate"
        value={productData.auctionEndDate}
        onChange={handleChange}
        required
      />

      <SelectField
        id="status"
        label="Status"
        name="status"
        value={productData.status}
        onChange={handleChange}
        options={[
          { value: 'active', label: 'Active' },
          { value: 'sold', label: 'Sold' },
          { value: 'canceled', label: 'Canceled' },
        ]}
      />

      <FileInput
        id="image"
        label="Image"
        name="image"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Create Product
      </button>
    </form>
  )
}

export default ProductForm
