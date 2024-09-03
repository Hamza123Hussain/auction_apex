import axios from 'axios'

export const createProduct = async (productData: any) => {
  const formData = new FormData()
  // Append product data to the form
  formData.append('productName', productData.productName)
  formData.append('price', productData.price)
  formData.append('auctionEndDate', productData.auctionEndDate)
  formData.append('status', productData.status)
  formData.append('sellerId', `yOmtiVVUX8ToaFDOnSNzHQXWOok1`)
  if (productData.image) {
    formData.append('image', productData.image)
  }
  try {
    const response = await axios.post(
      'http://localhost:5000/API/Product/AddProduct'
    )

    if (response.status === 200) {
      console.log('Product created successfully:', response.data)
      return response.data
    }
  } catch (error) {
    console.error('Error:', error)
    alert('An unexpected error occurred.')
  }
}
