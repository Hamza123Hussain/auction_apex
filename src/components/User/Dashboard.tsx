import React, { useState } from 'react'
import Login from '../Auth/Login'
import { Home } from 'lucide-react'
import Navbar from '../Navbar'
import ResetPassword from '../Auth/ResetPassword'

const tabs = [
  { name: 'Create Auction', value: 'CreateAuction', component: <Login /> },
  { name: 'Added Product', value: 'AddedProduct', component: <Home /> },
  { name: 'User Products', value: 'UserProducts', component: <Navbar /> },
  { name: 'User Auctions', value: 'UserAuctions', component: <footer /> },
]

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value)

  const renderTabContent = () => {
    const activeTabContent = tabs.find((tab) => tab.value === activeTab)
    return activeTabContent ? activeTabContent.component : <ResetPassword />
  }

  return (
    <div className="min-h-screen bg-electricBlue rounded-lg text-softWhite">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
        </div>
        <div className="mt-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4">
              <nav className="space-y-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`w-full text-left px-4 py-2 rounded-lg ${
                      activeTab === tab.value
                        ? 'bg-vibrantPurple'
                        : 'hover:bg-brightCoral'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
            <div className="md:w-3/4 mt-6 md:mt-0">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
