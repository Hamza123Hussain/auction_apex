import React, { ChangeEvent, useContext } from 'react'
import { UserContext } from '../../utils/Context'
import { ProductData } from '../../utils/ProductInterface'

const ProductFields = () => {
  const { productdata, setproductdata } = useContext(UserContext)

  const handleChange = (e: any) => {
    if (e.target.type === 'file') {
      setproductdata((prev: any) => ({
        ...prev,
        image: e.target.files?.[0],
      }))
    } else {
      setproductdata((prev: ProductData) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
    }
  }

  return (
    <>
      <div className="flex flex-col space-y-2">
        <label htmlFor="productName" className="text-white">
          Product Name
        </label>
        <input
          type="text"
          name="productName"
          id="productName"
          value={productdata.productName}
          onChange={handleChange}
          className="p-2 rounded-lg border border-gray-300"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="description" className="text-white">
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={productdata.description}
          onChange={handleChange}
          className="p-2 rounded-lg border border-gray-300"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="price" className="text-white">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={productdata.price}
          onChange={handleChange}
          className="p-2 rounded-lg border border-gray-300"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="image" className="text-white">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
          className="p-2 rounded-lg border border-gray-300"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="auctionEndDate" className="text-white">
          Auction End Date
        </label>
        <input
          type="date"
          id="auctionEndDate"
          value={productdata.auctionEndDate}
          onChange={handleChange}
          className="p-2 rounded-lg border border-gray-300"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="status" className="text-white">
          Status
        </label>
        <select
          id="status"
          value={productdata.status}
          onChange={handleChange}
          className="p-2 rounded-lg border border-gray-300"
        >
          <option value="active">Active</option>
          <option value="sold">Sold</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>
    </>
  )
}

export default ProductFields
