import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Auth/Login'
import Signup from './components/Auth/SignUp'
import ResetPassword from './components/Auth/ResetPassword'
import ProductAddForm from './components/Product/CreateProduct'
import ProductPage from './components/Product/ProductPage'
import { UserContext } from './utils/Context'
import Dashboard from './components/User/Dashboard'
import ProductForm from './components/Product/CreateProduct'
const App = () => {
  const { userData } = useContext(UserContext)
  // Determine if the user is authenticated
  const renderRoute = (Component: React.ElementType) =>
    userData._id ? <ProductPage /> : <Component />
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4 my-10">
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/Login" element={renderRoute(Login)} />
          <Route path="/register" element={renderRoute(Signup)} />
          <Route path="/ResetPass" element={renderRoute(ResetPassword)} />
          <Route path="/AddProduct" element={<ProductAddForm />} />
          <Route
            path="/dashboard"
            element={userData._id ? <Dashboard /> : <ProductPage />}
          >
            {/* <Route path="create-auction" element={<CreateAuction />} /> */}
            <Route path="" element={<ProductForm />} />
            {/* <Route path="user-products" element={<ProductCard />} /> */}
            {/**<Route path="user-auctions" element={<UserAuctions />} /> */}
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
