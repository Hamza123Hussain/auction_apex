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
import MakeAuctionForm from './components/Auction/CreateAuction'
import AuctionsList from './components/Auction/AllAuctions'
import Profile from './components/User/Profile'
import SingleAuction from './components/Auction/SingleAuction'
const App = () => {
  const { userData } = useContext(UserContext)
  // Determine if the user is authenticated
  const renderRoute = (Component: React.ElementType) =>
    userData._id ? <AuctionsList /> : <Component />
  return (
    <div className="App flex flex-col min-h-screen bg-slate-900">
      <Navbar />
      <main className="flex-grow p-4 my-10">
        <Routes>
          <Route path="/" element={<AuctionsList />} />
          <Route path="/Login" element={renderRoute(Login)} />
          <Route path="/register" element={renderRoute(Signup)} />
          <Route path="/ResetPass" element={renderRoute(ResetPassword)} />
          <Route path="/AddProduct" element={<ProductAddForm />} />
          <Route path="/Profile" element={<Profile />} />
          <Route
            path="/dashboard"
            element={userData._id ? <Dashboard /> : <AuctionsList />}
          >
            <Route
              path="create-auction/:productId"
              element={<MakeAuctionForm />}
            />
            <Route path="" element={<ProductForm />} />
            <Route
              path="user-products"
              element={<ProductPage sellerID={userData._id} />}
            />
            <Route path="user-auctions" element={<AuctionsList />} />
          </Route>
          <Route path="/AuctionCard/:AuctionID" element={<SingleAuction />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
