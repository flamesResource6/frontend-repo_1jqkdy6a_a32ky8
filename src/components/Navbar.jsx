import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = 'text-sm md:text-base text-white/80 hover:text-white transition-colors'

  return (
    <header className="relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="w-full rounded-2xl border border-violet-500/20 bg-[#0a0612]/60 backdrop-blur supports-[backdrop-filter]:bg-[#0a0612]/50 px-5 py-3 shadow-[0_0_50px_rgba(139,92,246,0.25)]">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 rounded-full opacity-30 blur-md" />
                <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                  <Sparkles size={18} />
                </div>
              </div>
              <span className="font-semibold tracking-tight text-white text-lg">Svolta AI Agency</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className={navLink}>Features</a>
              <a href="#solutions" className={navLink}>Solutions</a>
              <a href="#pricing" className={navLink}>Pricing</a>
              <a href="#contact" className={navLink}>Contact</a>
              <a href="#cta" className="ml-2 rounded-lg bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 text-white px-4 py-2 text-sm shadow-[0_0_30px_rgba(139,92,246,0.35)] transition hover:shadow-[0_0_45px_rgba(139,92,246,0.6)]">Get a Demo</a>
            </nav>

            <button className="md:hidden text-white/90" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden mt-4 border-t border-white/10 pt-4 grid gap-3">
              <a href="#features" className={navLink}>Features</a>
              <a href="#solutions" className={navLink}>Solutions</a>
              <a href="#pricing" className={navLink}>Pricing</a>
              <a href="#contact" className={navLink}>Contact</a>
              <a href="#cta" className="rounded-lg bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 text-white px-4 py-2 text-sm text-center">Get a Demo</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
