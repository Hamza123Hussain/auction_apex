export interface InputValues {
  email: string
  password: string
  Name: string
  Image: File | null
}

export interface UserData {
  _id: string // Use String type for _id
  username: string
  email: string
  password: string
  image: string // Field for storing image URL or path
}

export const APIURL = 'http://localhost:5000'
