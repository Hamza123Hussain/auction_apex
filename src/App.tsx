import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Auth/Login'
import Signup from './components/Auth/SignUp'
import ResetPassword from './components/Auth/ResetPassword'

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow px-4 my-10 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <Routes>
          <Route path="/" />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/ResetPass" element={<ResetPassword />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
