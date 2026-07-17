import React, { useState } from 'react'

export default function Login({ onVerifyRequested }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  function submit(e) {
    e.preventDefault()
    setError(null)
    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }
    // In a real app, authenticate with backend here. We'll simulate success and request email verification.
    onVerifyRequested(email)
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Partner Login</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-udr-yellow focus:border-udr-yellow"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-udr-yellow focus:border-udr-yellow"
            required
            minLength={6}
          />
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <div>
          <button className="w-full py-2 px-4 bg-udr-yellow text-black rounded-md font-medium">Log in</button>
        </div>
      </form>
    </div>
  )
}
