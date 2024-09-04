import axios from 'axios'

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(
      'http://localhost:5000/API/Product/ALLPRODUCTS'
    )

    if (response.status === 200) {
      console.log('Products fetched successfully:', response.data)
      return response.data
    } else {
      console.log('No products found.')
      return []
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    alert('An error occurred while fetching the products.')
    return []
  }
}
