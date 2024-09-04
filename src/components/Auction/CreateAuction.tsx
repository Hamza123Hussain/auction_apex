import React, { useState } from 'react'
import axios from 'axios'
import InputField from '../Product/InputField'
import { inputFields } from './InputFieldArray'
import { CreateAuctions } from '../../functions/Auction/MakeAuction'
const MakeAuctionForm = () => {
  const [formData, setFormData] = useState({
    product: '',
    startDate: '',
    endDate: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await CreateAuctions(formData)
  }
  return (
    <div className="space-y-6 bg-gradient-to-t from-[#fdfbfb9c] to-[#465d74] p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-darkCharcoal mb-4">
        Create Auction
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {inputFields.map((field) => (
          <InputField
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            name={field.id}
            value={
              field.id === 'endDate'
                ? formData.endDate
                : field.id === 'startDate'
                ? formData.startDate
                : formData.product
            }
            onChange={handleChange}
            required={field.required}
          />
        ))}
        <button
          type="submit"
          className="w-full p-2 bg-electricBlue text-softWhite rounded-md hover:bg-blue-700 transition duration-300"
        >
          Create Auction
        </button>
      </form>
    </div>
  )
}
export default MakeAuctionForm
