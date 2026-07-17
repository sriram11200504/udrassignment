import React from 'react'

export default function Landing({ onProceed }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-udr-yellow-50">
      <div className="w-full max-w-3xl">
        <div className="bg-udr-yellow rounded-xl px-6 py-6 text-center shadow-md">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black udr-hero-title">Welcome to UdrCrafts®</h1>
        </div>

        <div className="mt-6 space-y-6">
          <p className="text-center text-gray-700">Choose how you want to continue — download the mobile app, explore the product webpage, open the seller panel, or search for nearby UdrCrafts shops around your location.</p>

          {/* Card 1 */}
          <div className="udr-card bg-white p-5 shadow-sm border">
            <h3 className="text-lg font-semibold">Download app</h3>
            <p className="text-sm text-gray-600 mt-2">Mobile shopping experience</p>
            <div className="mt-4">
              <button aria-label="View app download page" className="udr-cta">View app download page</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="udr-card bg-white p-5 shadow-sm border">
            <h3 className="text-lg font-semibold">Visit site</h3>
            <p className="text-sm text-gray-600 mt-2">Explore UdrCrafts online</p>
            <div className="mt-4">
              <button aria-label="Open udrcrafts.com" className="udr-cta">Open udrcrafts.com</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="udr-card bg-white p-5 shadow-sm border">
            <h3 className="text-lg font-semibold">Seller panel</h3>
            <p className="text-sm text-gray-600 mt-2">Explore seller tools</p>
            <div className="mt-4">
              <button aria-label="Open seller panel" className="udr-cta">Open seller.udrcrafts.com</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="udr-card bg-white p-5 shadow-sm border">
            <h3 className="text-lg font-semibold">Find nearby shops</h3>
            <p className="text-sm text-gray-600 mt-2">Locate UdrCrafts around you</p>
            <div className="mt-4">
              <button aria-label="Search shops near me" className="udr-cta">Search registered shops near me</button>
            </div>
          </div>

          <div className="text-center mt-2">
            <button onClick={onProceed} className="inline-block px-4 py-2 bg-udr-yellow text-black font-medium rounded-md">Partner login</button>
          </div>

          <div className="text-center text-sm text-gray-500 mt-2">© UdrCrafts®. All rights reserved.</div>
        </div>
      </div>
    </div>
  )
}
