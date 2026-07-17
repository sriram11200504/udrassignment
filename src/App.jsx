import React, { useState } from 'react'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Verification from './pages/Verification'
import OnboardingProfile from './pages/OnboardingProfile'
import Complete from './pages/Complete'

export default function App() {
  const [flow, setFlow] = useState({ step: 'landing' })

  return (
    <div>
      {flow.step === 'landing' && (
        <Landing onProceed={() => setFlow({ step: 'login' })} />
      )}

      {flow.step !== 'landing' && (
        <div className="min-h-screen bg-udr-yellow-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
            <header className="bg-udr-yellow p-4 text-center">
              <h1 className="text-2xl font-bold text-black">Welcome to UdrCrafts</h1>
            </header>
            <main className="p-6">
              {flow.step === 'login' && (
                <Login
                  onVerifyRequested={(email) => setFlow({ step: 'verify', email })}
                />
              )}

              {flow.step === 'verify' && (
                <Verification
                  email={flow.email}
                  onVerified={() => setFlow({ step: 'profile', email: flow.email })}
                />
              )}

              {flow.step === 'profile' && (
                <OnboardingProfile
                  email={flow.email}
                  onComplete={(profile) => setFlow({ step: 'complete', profile })}
                />
              )}

              {flow.step === 'complete' && <Complete profile={flow.profile} />}
            </main>
            <footer className="bg-black text-white text-center p-3">© UdrCrafts®. All rights reserved.</footer>
          </div>
        </div>
      )}
    </div>
  )
}
