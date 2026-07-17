import React from 'react'

export default function Complete({ profile }) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4">All set!</h2>
      <p className="mb-4">Your partner profile has been created.</p>
      <pre className="text-left bg-gray-50 p-3 rounded-md text-sm">{JSON.stringify(profile, null, 2)}</pre>
    </div>
  )
}
