import React, { useState } from 'react'
import InputField from '../Product/InputField'
import { inputFields } from './InputFieldArray'
import { CreateAuctions } from '../../functions/Auction/MakeAuction'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
const MakeAuctionForm = () => {
  const Router = useNavigate()
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
  })
  const { productId } = useParams()
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
      if (productId) {
        await CreateAuctions(productId, formData.startDate, formData.endDate)
        toast.success('Auction created successfully!')
        Router('/dashboard/user-auctions')
      }
    } catch (error) {
      toast.error('Failed to create auction')
    }
  }
  return (
    <div className="space-y-6 bg-gradient-to-t from-slate-800 to-darkCharcoal p-6 rounded-lg shadow-md">
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
                : `${productId}`
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
