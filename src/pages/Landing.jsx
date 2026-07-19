import React from 'react'

export default function Landing({ onProceed }) {
  return (
    <div className="min-h-screen bg-transparent text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <section className="udr-hero-panel overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6 max-w-2xl">
              <span className="udr-step-badge">Partner access</span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Partner login and onboarding for UdrCrafts.</h1>
              <p className="mt-5 text-lg leading-8 text-slate-100/85">Sign in, verify your email, and finish your profile in a clean flow designed for partner growth, shipping efficiency, and strong vendor collaboration.</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button onClick={onProceed} className="udr-cta">Partner login</button>
                <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-slate-100 shadow-sm">Ready in 3 easy steps</span>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/15 bg-slate-950/10 p-7 text-slate-100 shadow-[0_20px_60px_-26px_rgba(15,23,42,0.45)]">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-200">Quick overview</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Designed for your team</h2>
              <ul className="mt-6 space-y-4 text-sm text-slate-200">
                <li>• Clean partner onboarding with guided flow</li>
                <li>• Secure verification across every step</li>
                <li>• Smarter access to shipping and seller tools</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="udr-feature-card border-l-4 border-amber-400/90">
            <h2 className="text-xl font-semibold text-slate-950">Sign in</h2>
            <p className="mt-3 text-sm text-slate-600">Start with your partner credentials and jump into the onboarding flow.</p>
          </div>
          <div className="udr-feature-card border-l-4 border-sky-500/90">
            <h2 className="text-xl font-semibold text-slate-950">Verify</h2>
            <p className="mt-3 text-sm text-slate-600">Confirm your email quickly so you can move on to setup.</p>
          </div>
          <div className="udr-feature-card border-l-4 border-emerald-500/90">
            <h2 className="text-xl font-semibold text-slate-950">Profile</h2>
            <p className="mt-3 text-sm text-slate-600">Complete your business profile with company and contact details.</p>
          </div>
          <div className="udr-feature-card border-l-4 border-violet-500/90">
            <h2 className="text-xl font-semibold text-slate-950">Complete</h2>
            <p className="mt-3 text-sm text-slate-600">Finish setup and access the full partner dashboard with confidence.</p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="udr-card">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">How it works</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">A structured onboarding flow for partners.</h2>
            <p className="mt-4 text-slate-600">Our flow is designed to help partners sign in, verify securely, complete their profile, and start using shipping tools without confusion.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-5 shadow-[0_14px_32px_-24px_rgba(15,23,42,0.12)]">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Step 1</p>
                <p className="mt-2 text-base font-semibold text-slate-950">Sign in with your partner details.</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-[0_14px_32px_-24px_rgba(15,23,42,0.12)]">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Step 2</p>
                <p className="mt-2 text-base font-semibold text-slate-950">Verify your email and continue.</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-[0_14px_32px_-24px_rgba(15,23,42,0.12)]">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">Step 3</p>
                <p className="mt-2 text-base font-semibold text-slate-950">Complete your partner profile.</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-[0_14px_32px_-24px_rgba(15,23,42,0.12)]">
                <p className="text-sm uppercase tracking-[0.3em] text-violet-500">Step 4</p>
                <p className="mt-2 text-base font-semibold text-slate-950">Access the dashboard and tools.</p>
              </div>
            </div>
          </div>
          <div className="udr-card bg-slate-50/95 text-slate-950">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Partner perks</p>
              <div className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_-26px_rgba(15,23,42,0.08)]">
                <h3 className="text-xl font-semibold text-slate-950">Win trust faster</h3>
                <p className="mt-2 text-sm text-slate-600">A polished onboarding experience reassures partners from the first click.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_-26px_rgba(15,23,42,0.08)]">
                <h3 className="text-xl font-semibold text-slate-950">Clear progress</h3>
                <p className="mt-2 text-sm text-slate-600">The flow is easy to follow on desktop and mobile with clear step markers.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
