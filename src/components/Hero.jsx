import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),rgba(76,29,149,0.15)_40%,transparent_70%)]" />
        <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-10 md:pt-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Scale with intelligent automations
              <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent"> powered by Svolta AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 text-lg md:text-xl text-white/70"
            >
              We build voice agents, chat copilots, and workflow orchestrations that convert more leads and reduce costs. Beautifully branded, enterprise secure, and fast to launch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 text-white px-6 py-3 text-base font-medium shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] transition">
                Get a Strategy Call
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white px-6 py-3 text-base font-medium hover:bg-white/10 transition">
                Explore Features
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 flex items-center gap-6 text-white/60"
            >
              <div className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_20px_rgba(232,121,249,0.9)]" />
              <p className="text-sm">Trusted by growing startups and forward-thinking enterprises</p>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 relative h-[420px] md:h-[560px] rounded-3xl border border-violet-500/20 bg-[#090313]/60 overflow-hidden shadow-[0_0_80px_rgba(139,92,246,0.25)]">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090313] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
