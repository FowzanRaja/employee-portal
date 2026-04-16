import { useState } from 'react'
import fdmLogo from '../assets/fdmLogo.png'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'


export default function LoginForm(){
  const navigate = useNavigate()
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [firstSubmit, setFirstSubmit] = useState(true);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)

  const handleChange = (e) => {
    if (firstSubmit) return
    if (e.target.name === 'email') {
      setShowEmailError(!isValidEmail(e.target.value))
    } else {
      setShowPasswordError(!e.target.value || e.target.value.length === 0)
    }
  }

  const submit = (e) => {
    e.preventDefault()
    setFirstSubmit(false)
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')

    setShowEmailError(!isValidEmail(email))
    setShowPasswordError(!password || password.length === 0)
    const canSubmit = isValidEmail(email) && !!password

    if (canSubmit) {
      navigate('/dashboard')
    }
  }

  return (
    <section className="mx-auto flex h-screen w-full max-w-7xl items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <form onSubmit={submit} className="rounded-[28px] border border-[color:var(--fdm-border)] bg-[var(--fdm-surface)] p-10 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
          <div className="relative mb-6">
            <img src={fdmLogo} alt="FDM Logo" className="w-20 absolute left-2 top-1/2 -translate-y-1/2" />
            <h1 className="text-3xl font-black text-[var(--fdm-text)] text-center">Login</h1>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <div>
              <label className="text-xs text-[var(--fdm-text-muted)] mb-1 block">Email address</label>
              <input
                placeholder="you@example.com"
                name="email"
                onChange={handleChange}
                className={`w-full rounded-md border border-[color:var(--fdm-border)] bg-[#1a1a1a] px-4 py-3 text-base text-[var(--fdm-text)] focus:outline-none focus:ring-1 ${showEmailError ? 'border-red-500 focus:border-red-400 focus:ring-red-400' : 'focus:border-[var(--fdm-lime)] focus:ring-[var(--fdm-lime)]'}`}
              />
              {showEmailError && <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>}
            </div>

            <div>
              <label className="text-xs text-[var(--fdm-text-muted)] mb-1 block">Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
                className={`w-full rounded-md border border-[color:var(--fdm-border)] bg-[#1a1a1a] px-4 py-3 text-base text-[var(--fdm-text)] focus:outline-none focus:ring-1 ${showPasswordError ? 'border-red-500 focus:border-red-400 focus:ring-red-400' : 'focus:border-[var(--fdm-lime)] focus:ring-[var(--fdm-lime)]'}`}
              />
              {showPasswordError && <p className="text-red-500 text-xs mt-1">Please enter a password.</p>}
            </div>

            <div className="mt-6">
              <button type="submit" className={`fdm-btn fdm-btn-primary w-full py-3 text-lg ${!(firstSubmit === false && !showEmailError && !showPasswordError) ? 'opacity-90' : ''}`}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}