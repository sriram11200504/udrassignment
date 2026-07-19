import React, { useState } from 'react'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Verification from './pages/Verification'
import OnboardingProfile from './pages/OnboardingProfile'
import Complete from './pages/Complete'

export default function App() {
  const [flow, setFlow] = useState({ step: 'landing' })

  return (
    <div className="min-h-screen bg-white text-slate-950">
      {flow.step === 'landing' && (
        <Landing onProceed={() => setFlow({ step: 'login' })} />
      )}

      {flow.step !== 'landing' && (
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="udr-hero-panel">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="udr-step-badge">Partner access</span>
                <span className="text-sm text-slate-500">Secure portal • 24/7 support</span>
              </div>
              <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">A smarter partner dashboard for shipping and seller growth.</h1>
              <p className="mt-5 max-w-xl text-slate-600">Use the portal to verify your account, set up your partner profile, and access shipping tools in one polished interface.</p>

              <div className="mt-10 space-y-4 rounded-[28px] border border-slate-200 bg-slate-50/90 p-6 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.08)]">
                <div className="flex items-start gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Instant partner onboarding</p>
                    <p className="text-sm text-slate-600">Secure verification and profile setup in minutes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Actionable insights</p>
                    <p className="text-sm text-slate-600">Track partner activity and seller performance inside the portal.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="udr-card">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Partner steps</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-950">Continue with your account</h2>
                </div>
                <div className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950">Secure</div>
              </div>

              <div className="mt-8 text-slate-400">
                {flow.step === 'login' && <p>Enter your login details to start verification and profile setup.</p>}
                {flow.step === 'verify' && <p>Confirm your email with the code we sent and continue onboarding.</p>}
                {flow.step === 'profile' && <p>Complete your partner profile so your account is ready for new opportunities.</p>}
                {flow.step === 'complete' && <p>Welcome aboard! Your partner account is configured and ready.</p>}
              </div>

              <div className="mt-8 text-center text-sm text-slate-500">Need help? Contact partner support anytime.</div>
            </section>
          </div>

          <div className="mt-6 rounded-[32px] border border-slate-200 bg-slate-50/95 p-6 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            {flow.step === 'login' && (
              <Login onVerifyRequested={(email) => setFlow({ step: 'verify', email })} />
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
          </div>
        </div>
      )}
    </div>
  )
}
