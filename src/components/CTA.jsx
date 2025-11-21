import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_250px_at_center,rgba(139,92,246,0.15),transparent)]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-violet-500/30 bg-[#0b0615]/70 backdrop-blur px-8 py-12 shadow-[0_0_60px_rgba(139,92,246,0.25)]"
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-white">Ready to transform with AI?</h3>
          <p className="mt-3 text-white/70 text-lg">Book a strategy call to identify quick wins and build your roadmap.</p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 justify-center">
            <input type="email" required placeholder="Work email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/60" />
            <button className="rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 text-white px-6 py-3 font-medium shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] transition">Get My Plan</button>
          </form>

          <p className="mt-4 text-xs text-white/50">No spam. We’ll reach out with a tailored plan within 24 hours.</p>
        </motion.div>
      </div>
    </section>
  )
}
