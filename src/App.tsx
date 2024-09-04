import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Auth/Login'
import Signup from './components/Auth/SignUp'
import ResetPassword from './components/Auth/ResetPassword'
import ProductAddForm from './components/Product/CreateProduct'
import ProductPage from './components/Product/ProductPage'

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow justify-center items-center p-4   my-10 ">
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/ResetPass" element={<ResetPassword />} />
          <Route path="/AddProduct" element={<ProductAddForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
