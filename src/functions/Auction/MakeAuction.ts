import axios from 'axios'

export const CreateAuctions = async (formData: any) => {
  try {
    const response = await axios.post('/api/make-auction', formData)
    if (response.status === 200) {
      console.log('DATA HAS BEEN RETURNED ', response.data)
    }
  } catch (error) {
    console.error('Error:', error)
    alert('An unexpected error occurred.')
  }
}
