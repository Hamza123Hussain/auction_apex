import React, { useState } from 'react'
import InputField from '../Product/InputField'
import { inputFields } from './InputFieldArray'
import { CreateAuctions } from '../../functions/Auction/MakeAuction'
import toast from 'react-hot-toast'
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
    const { startDate, endDate } = formData
    const start = new Date(startDate)
    const end = new Date(endDate)
    const now = new Date()
    // Validate dates
    if (start >= end) {
      toast.error('End date must be after the start date')
      return
    }
    if (start < now) {
      toast.error('Start date cannot be in the past')
      return
    }
    try {
      await CreateAuctions(formData)
      toast.success('Auction created successfully!')
    } catch (error) {
      toast.error('Failed to create auction')
    }
  }
  return (
    <div className="space-y-6 bg-gradient-to-t from-softWhite to-darkCharcoal p-6 rounded-lg shadow-md">
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
          className="w-full p-2 bg-electricBlue text-softWhite rounded-md hover:bg-vibrantPurple transition duration-300"
        >
          Create Auction
        </button>
      </form>
    </div>
  )
}
export default MakeAuctionForm
