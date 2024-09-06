import React, { useContext } from 'react'
import { UserContext } from '../../utils/Context'
import { InputValues } from '../../utils/SignupInterface'

const BidField = () => {
  const { inputVal, setInputVal } = useContext(UserContext)

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal((prev: InputValues) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div>
      <label className="block text-sm font-bold mb-2 text-darkCharcoal">
        Enter Your Bid
      </label>
      <input
        type="number"
        value={inputVal.bid > 0 ? inputVal.bid : 0}
        onChange={HandleChange}
        placeholder="Bid amount"
        name="bid"
        className="w-full p-2 border border-gray-300 rounded-md text-darkCharcoal bg-softWhite focus:ring-2 focus:ring-electricBlue"
        required
      />
    </div>
  )
}

export default BidField
