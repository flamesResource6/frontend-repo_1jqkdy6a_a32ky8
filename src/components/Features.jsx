import { motion } from 'framer-motion'
import { Bot, Sparkles, Workflow, Shield, Gauge, Headphones } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Voice Agents',
    desc: 'Natural, on-brand voice experiences that qualify leads, book meetings, and support customers 24/7.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Connect CRMs, inboxes, and back-office tools. We orchestrate steps so your team focuses on high-value work.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade',
    desc: 'SOC2-ready practices, role-based access, and data retention controls designed for regulated teams.'
  },
  {
    icon: Gauge,
    title: 'Performance-Driven',
    desc: 'A/B tests, analytics, and optimization loops to maximize conversion and minimize handle time.'
  },
  {
    icon: Sparkles,
    title: 'Custom Models',
    desc: 'We tune prompts, tools, and guardrails per use-case and brand tone to deliver measurable outcomes.'
  },
  {
    icon: Headphones,
    title: 'Concierge Support',
    desc: 'White-glove onboarding and ongoing iteration with a dedicated AI solutions partner.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_20%_10%,rgba(139,92,246,0.2),transparent),radial-gradient(600px_300px_at_80%_90%,rgba(79,70,229,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white text-center"
        >
          Build once, scale infinitely
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            >
              <div className="relative mb-4">
                <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-fuchsia-600/10 via-violet-600/10 to-indigo-600/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                  <f.icon size={22} />
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
