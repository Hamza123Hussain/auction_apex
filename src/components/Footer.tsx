import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-darkCharcoal text-softWhite py-4 px-6 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          <p>
            &copy; {new Date().getFullYear()} AuctionApex. All rights reserved.
          </p>
        </div>
        <div className="space-x-4 text-sm">
          <a href="#" className="hover:text-neonGreen">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-neonGreen">
            Terms of Service
          </a>
          <a href="#" className="hover:text-neonGreen">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
