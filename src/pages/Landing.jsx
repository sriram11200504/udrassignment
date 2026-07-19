import React from 'react'

export default function Landing({ onProceed }) {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:px-8">
        <header className="udr-hero-panel">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Partner login and onboarding for UdrCrafts.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">Sign in, verify your email, and finish your profile in a clean flow.</p>
            <div className="mt-8">
              <button onClick={onProceed} className="udr-cta">Partner login</button>
            </div>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="udr-feature-card">
            <h2 className="text-xl font-semibold text-slate-950">Sign in</h2>
            <p className="mt-3 text-sm text-slate-600">Start with your partner credentials.</p>
          </div>
          <div className="udr-feature-card">
            <h2 className="text-xl font-semibold text-slate-950">Verify</h2>
            <p className="mt-3 text-sm text-slate-600">Confirm your email before continuing.</p>
          </div>
          <div className="udr-feature-card">
            <h2 className="text-xl font-semibold text-slate-950">Profile</h2>
            <p className="mt-3 text-sm text-slate-600">Add a company name and contact details.</p>
          </div>
          <div className="udr-feature-card">
            <h2 className="text-xl font-semibold text-slate-950">Complete</h2>
            <p className="mt-3 text-sm text-slate-600">Finish setup and access partner tools.</p>
          </div>
        </section>

        <section className="udr-card grid gap-6 lg:grid-cols-[1.35fr_0.9fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">How it works</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">A straightforward partner flow.</h2>
            <p className="mt-4 text-slate-600">Sign in, verify your email, and complete your profile in a clean sequence.</p>
          </div>
          <div className="rounded-[24px] border border-slate-200 bg-slate-50/95 p-6 text-slate-950">
            <h3 className="text-xl font-semibold text-slate-950">Get started</h3>
            <p className="mt-3 text-sm">Press the login button and move through the portal step by step.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
