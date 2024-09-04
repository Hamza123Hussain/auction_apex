export const createProduct = async (
  productData: any,
  imageFile: File | null
) => {
  const formData = new FormData()

  // Append product data to the form
  formData.append('productName', productData.productName)
  formData.append('price', productData.price)
  formData.append('auctionEndDate', productData.auctionEndDate)
  formData.append('status', productData.status)
  formData.append('sellerId', `yOmtiVVUX8ToaFDOnSNzHQXWOok1`)

  // Append image file if available
  if (imageFile) {
    formData.append('image', imageFile)
  }

  try {
    const response = await fetch(
      'http://localhost:5000/API/Product/AddProduct',
      {
        method: 'POST',
        body: formData,
      }
    )

    if (response.ok) {
      const data = await response.json()
      console.log('Product created successfully:', data)
      return data
    } else {
      const errorData = await response.json()
      console.error('Error creating product:', errorData)
      alert(`Error: ${errorData.error}`)
    }
  } catch (error) {
    console.error('Error:', error)
    alert('An unexpected error occurred.')
  }
}
