import React from 'react'

export default function Landing({ onProceed }) {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:px-8">
        <header className="udr-hero-panel">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Partner login and onboarding for UdrCrafts.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">Sign in, verify your email, and finish your profile in a clean flow.</p>
            <div className="mt-8">
              <button onClick={onProceed} className="udr-cta">Partner login</button>
            </div>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="udr-feature-card">
            <h2 className="text-xl font-semibold text-white">Sign in</h2>
            <p className="mt-3 text-sm text-slate-400">Start with your partner credentials.</p>
          </div>
          <div className="udr-feature-card">
            <h2 className="text-xl font-semibold text-white">Verify</h2>
            <p className="mt-3 text-sm text-slate-400">Confirm your email before continuing.</p>
          </div>
          <div className="udr-feature-card">
            <h2 className="text-xl font-semibold text-white">Profile</h2>
            <p className="mt-3 text-sm text-slate-400">Add a company name and contact details.</p>
          </div>
          <div className="udr-feature-card">
            <h2 className="text-xl font-semibold text-white">Complete</h2>
            <p className="mt-3 text-sm text-slate-400">Finish setup and access partner tools.</p>
          </div>
        </section>

        <section className="udr-card grid gap-6 lg:grid-cols-[1.35fr_0.9fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">How it works</p>
            <h2 className="mt-3 text-3xl font-bold text-white">A straightforward partner flow.</h2>
            <p className="mt-4 text-slate-300">Sign in, verify your email, and complete your profile in a clean sequence.</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6 text-slate-300">
            <h3 className="text-xl font-semibold text-white">Get started</h3>
            <p className="mt-3 text-sm">Press the login button and move through the portal step by step.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
