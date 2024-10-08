import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { tabs } from './TabsArray'
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value)
  return (
    <div className="flex flex-col space-y-4    items-center">
      <h1 className=" text-3xl md:text-6xl mb-4 text-softWhite lg:text-8xl font-extrabold">
        User DashBoard
      </h1>
      <div className=" flex flex-col sm:flex-row   p-4  justify-evenly w-[50vw] bg-darkCharcoal text-softWhite  rounded-lg ">
        {tabs.map((tab) => (
          <Link
            key={tab.value}
            to={`/dashboard/${tab.path}`}
            onClick={() => setActiveTab(tab.value)}
            className={`w-fit px-4 py-2 text-xs inline rounded-lg ${
              activeTab === tab.value
                ? 'bg-vibrantPurple'
                : 'hover:bg-brightCoral'
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div className=" w-[80vw]  mx-auto">
        <Outlet />
      </div>
    </div>
  )
}
export default Dashboard
