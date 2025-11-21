import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#070311] text-white">
      <div className="fixed inset-0 -z-0 opacity-60" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_-10%,rgba(139,92,246,0.25),transparent),radial-gradient(900px_500px_at_90%_110%,rgba(79,70,229,0.18),transparent)]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
