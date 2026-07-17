import React, { useState } from 'react'

export default function Verification({ email, onVerified }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState(null)

  function submit(e) {
    e.preventDefault()
    setError(null)
    // In a real app, verify code via backend. Here accept 123456 as valid.
    if (code === '123456') {
      onVerified()
    } else {
      setError('Invalid verification code. Use 123456 to continue in demo.')
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Email verification</h2>
      <p className="text-sm text-gray-600">A verification code was sent to <strong>{email}</strong>. (Demo: enter 123456)</p>
      <form onSubmit={submit} className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Verification code</label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-udr-yellow focus:border-udr-yellow"
            required
          />
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <div>
          <button className="w-full py-2 px-4 bg-udr-yellow text-black rounded-md font-medium">Verify</button>
        </div>
      </form>
    </div>
  )
}
