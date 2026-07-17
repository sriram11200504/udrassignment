import React, { useState } from 'react'

export default function OnboardingProfile({ email, onComplete }) {
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [error, setError] = useState(null)

  function submit(e) {
    e.preventDefault()
    setError(null)
    if (!company || !phone) {
      setError('Please enter company name and phone number.')
      return
    }
    const profile = { email, company, phone, address }
    // In a real app, POST profile to backend
    onComplete(profile)
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Create your partner profile</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Company name</label>
          <input value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address (optional)</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <div>
          <button className="w-full py-2 px-4 bg-udr-yellow text-black rounded-md font-medium">Create profile</button>
        </div>
      </form>
    </div>
  )
}
