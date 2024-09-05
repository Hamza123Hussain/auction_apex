import React from 'react'

const UserFields = ({
  userDetails,
  setUserDetails,
}: {
  setUserDetails: any
  userDetails: any
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserDetails((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }
  // Handle file input for the image
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUserDetails((prev: any) => ({
        ...prev,
        image: file,
      }))
    }
    return (
      <form className="space-y-4">
        {/* Username */}
        <div>
          <label className="block text-sm font-bold mb-2 text-[#333333]">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-[#333333] focus:ring-2 focus:ring-[#1E90FF]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-bold mb-2 text-[#333333]">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-[#333333] focus:ring-2 focus:ring-[#1E90FF]"
            disabled
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-bold mb-2 text-[#333333]">
            Profile Image
          </label>
          <div className="flex items-center space-x-4">
            {/* Image Preview */}
            {/* {imagePreview && (
        <img
          src={imagePreview}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
      )} */}
            {/* File Input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-[#333333]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-[#1E90FF] text-[#F7F7F7] rounded-md hover:bg-[#39FF14] transition duration-300"
        >
          Update Profile
        </button>
      </form>
    )
  }
}
export default UserFields
