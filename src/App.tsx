import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Layout, Zap, Archive, FolderOpen, Shield,
  ArrowRight,
  Globe, Users, CheckCircle2
} from 'lucide-react'

function ChromeIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="12" y1="2" x2="12" y2="8" stroke="currentColor" strokeWidth="2" />
      <line x1="21.66" y1="17" x2="16.56" y2="14" stroke="currentColor" strokeWidth="2" />
      <line x1="2.34" y1="17" x2="7.44" y2="14" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
import BrowserMockup from './components/BrowserMockup'
import ProviderTape from './components/ProviderTape'
import PluriHubMark from './components/PluriHubMark'
import FeatureCard from './components/FeatureCard'
import ComparisonTable from './components/ComparisonTable'
import PricingCard from './components/PricingCard'
import FAQ from './components/FAQ'

const CHROME_STORE_URL = 'https://chrome.google.com/webstore/detail/plurihub/ID'

const FEATURES = [
  {
    icon: Layout,
    title: 'Persistent Sidebar',
    description: 'Follows you across every tab. Gmail to GitHub to Google Docs. Always there.',
  },
  {
    icon: Users,
    title: 'Multi-Account Support',
    description: 'Work ChatGPT + Personal Claude. Separated sessions, always accessible.',
  },
  {
    icon: Zap,
    title: 'Instant Switch',
    description: "Cmd+Shift+P to toggle. Faster than any tab switch you've ever done.",
  },
  {
    icon: Archive,
    title: 'Context Preservation',
    description: 'Every chat stays exactly where you left it. No re-explaining. No reloading.',
  },
  {
    icon: FolderOpen,
    title: 'Workspace Sync',
    description: 'Organize chats by project. Frontend, Backend, Research — all separated.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Zero data collection. Your chats never touch our servers. Ever.',
  },
]

const STEPS = [
  {
    step: '01',
    title: 'Install from Chrome Web Store',
    desc: 'One click. No signup required. Added instantly to your browser.',
    icon: ChromeIcon,
  },
  {
    step: '02',
    title: 'Sign in to your AI accounts',
    desc: "Use your existing ChatGPT, Claude, and Gemini logins. We don't touch credentials.",
    icon: CheckCircle2,
  },
  {
    step: '03',
    title: 'Press Cmd+Shift+P anywhere',
    desc: 'The sidebar appears on any website. Start chatting without leaving your workflow.',
    icon: Zap,
  },
]

const PRICING = [
  {
    plan: 'Free Forever',
    price: '$0',
    description: 'Everything you need to stop tab chaos. No credit card.',
    features: [
      'Unlimited AI chats',
      '3 workspace folders',
      'ChatGPT, Claude & Gemini',
      'Cmd+Shift+P toggle',
      'Context preservation',
    ],
    cta: 'Add to Chrome — Free',
    highlighted: false,
  },
  {
    plan: 'Pro',
    price: '$3.99',
    period: '/mo',
    description: 'For power users who live in AI tools all day.',
    features: [
      'Unlimited workspaces',
      'Custom keyboard shortcuts',
      'Multi-account per AI',
      'Priority support',
      'Early access to new integrations',
      'All Free features',
    ],
    cta: 'Start Pro Free Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
]


const PROBLEM_CARDS = [
  {
    icon: '🗂️',
    title: 'Tab Graveyard',
    body: '"ChatGPT tab 1, ChatGPT tab 2, ChatGPT (3)..." You\'ve lost track. Again.',
  },
  {
    icon: '🔍',
    title: 'Context Chaos',
    body: 'Which tab had that conversation about the API design? It\'s gone.',
  },
  {
    icon: '⏱️',
    title: 'Speed Tax',
    body: 'Cmd+Tab, hunt for tab, click, wait to load. Repeat 50 times a day.',
  },
]

function KbdShortcut() {
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPressed(true)
      setTimeout(() => setPressed(false), 600)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-flex items-center gap-1.5 font-mono">
      {['⌘', '⇧', 'P'].map((key, i) => (
        <motion.span
          key={key}
          animate={
            pressed
              ? { y: 2, scale: 0.95, backgroundColor: '#0EA5E9', color: '#fff' }
              : { y: 0, scale: 1, backgroundColor: '#1a1a1a', color: '#a1a1aa' }
          }
          transition={{ delay: i * 0.08, duration: 0.15 }}
          className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-[#2a2a2a] text-sm font-semibold shadow-sm cursor-default"
        >
          {key}
        </motion.span>
      ))}
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1e1e1e]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <PluriHubMark height={18} className="text-white" />
          <span className="font-semibold text-white text-sm">PluriHub</span>
          <span className="ml-1 text-[10px] text-[#0EA5E9] border border-[#0EA5E9]/30 rounded px-1.5 py-0.5 font-mono">
            BETA
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-[#52525b]">
          {['Features', 'How it Works', 'Pricing', 'FAQ'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="hover:text-white transition-colors hover-underline"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.a
          href={CHROME_STORE_URL}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <ChromeIcon size={14} />
          Add to Chrome
        </motion.a>
      </div>
    </motion.nav>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] dot-grid text-white overflow-x-hidden">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-20 px-6 text-center">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(14,165,233,0.15) 0%, transparent 65%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/8 text-[#0EA5E9] text-xs font-medium"
          >
            <ChromeIcon size={12} />
            Official Chrome Extension
            <span className="w-1.5 h-1.5 rounded-full bg-[#28C840] animate-pulse inline-block" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.05] tracking-tight mb-8">
            <span className="text-white">All your AI chats.</span>
            <br />
            <span className="text-gradient">One sidebar.</span>
            <br />
            <span className="text-white">Zero tab chaos.</span>
          </h1>

          <p className="text-[#a1a1aa] text-xl leading-relaxed mb-12 max-w-lg mx-auto">
            Save, organize, and revisit AI conversations from ChatGPT, Claude, Gemini, and{' '}
            <span className="text-white">8 more tools</span>
            {' '}— without juggling{' '}
            <span className="text-white line-through decoration-[#ef4444]/60">
              47 different tabs
            </span>
            .
          </p>

          <div className="flex items-center justify-center mb-10">
            <motion.a
              href={CHROME_STORE_URL}
              whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(14,165,233,0.45)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg transition-all"
            >
              <ChromeIcon size={18} />
              Add to Chrome — Free
              <ArrowRight size={16} />
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#52525b]">
            <span>Free forever. No credit card.</span>
            <span className="w-px h-3 bg-[#2a2a2a]" />
            <span>11 AI providers</span>
            <span className="w-px h-3 bg-[#2a2a2a]" />
            <span>Chrome desktop</span>
          </div>
        </motion.div>
      </section>

      {/* ─── PROVIDER TAPE ─── */}
      <ProviderTape />

      {/* ─── MOCKUP ─── */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <BrowserMockup />
        </motion.div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="py-28 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Your browser is not an AI workspace
            </h2>
            <p className="text-[#71717a] text-lg max-w-lg mx-auto">
              You built a workaround. It became a problem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {PROBLEM_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                whileHover={{ y: -3 }}
                className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-7 hover:border-[#ef4444]/25 transition-all group cursor-default"
              >
                <div className="text-4xl mb-5">{card.icon}</div>
                <h3 className="font-semibold text-white text-base mb-2.5 group-hover:text-[#ef4444] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#71717a] text-sm leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12 bg-[#0d0d0d] border border-[#1e1e1e] rounded-2xl p-7 flex flex-wrap items-center justify-center gap-2"
          >
            {Array.from({ length: 23 }, (_, i) => {
              const labels = ['ChatGPT', 'Claude', 'Gemini', 'Perplexity']
              const label = labels[i % labels.length]
              return (
                <span
                  key={i}
                  className="text-[10px] px-2.5 py-1 rounded-md bg-[#1a1a1a] border border-[#252525] text-[#52525b] font-mono whitespace-nowrap"
                >
                  {label} ({i + 1})
                </span>
              )
            })}
            <span className="text-xs text-[#ef4444] font-mono ml-3 whitespace-nowrap">← this is you right now</span>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="py-28 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#0EA5E9] text-xs font-mono uppercase tracking-widest mb-4 block">
              The solution
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              One sidebar. Every AI. Always there.
            </h2>
            <p className="text-[#71717a] text-lg max-w-md mx-auto">
              A persistent panel that follows you across the entire web.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 mb-14"
          >
            <p className="text-[#52525b] text-sm">Toggle the sidebar anywhere with</p>
            <KbdShortcut />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feat, i) => (
              <FeatureCard key={i} {...feat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-28 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#0EA5E9] text-xs font-mono uppercase tracking-widest mb-4 block">
              Dead simple
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Up and running in 30 seconds
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.15, duration: 0.45 }}
                className="relative bg-[#111] border border-[#1e1e1e] rounded-2xl p-7 flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/25 flex items-center justify-center glow-blue-sm">
                    <step.icon size={26} className="text-[#0EA5E9]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0a0a0a] border border-[#0EA5E9]/40 flex items-center justify-center">
                    <span className="text-[#0EA5E9] text-[10px] font-bold font-mono">
                      {step.step}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2.5 text-base">{step.title}</h3>
                <p className="text-[#71717a] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section className="py-28 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Before vs. after</h2>
            <p className="text-[#71717a] text-lg">Your workflow, fixed.</p>
          </motion.div>

          <ComparisonTable />
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-28 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#0EA5E9] text-xs font-mono uppercase tracking-widest mb-4 block">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Start free. Upgrade when ready.
            </h2>
            <p className="text-[#71717a] text-lg">No credit card. No commitment. Cancel anytime.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {PRICING.map((plan, i) => (
              <PricingCard key={i} {...plan} index={i} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[#52525b] text-xs mt-8"
          >
            Free plan included. Pro unlocks unlimited workspaces, prompts, and priority support.
          </motion.p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-28 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Common questions</h2>
            <p className="text-[#71717a] text-lg">Straight answers. No marketing speak.</p>
          </motion.div>

          <FAQ />
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-36 px-6 border-t border-[#1e1e1e] relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <div
            className="w-[600px] h-[300px]"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(14,165,233,0.12) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="max-w-2xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Stop tab-hopping.
              <br />
              <span className="text-gradient">Start building.</span>
            </h2>
            <p className="text-[#a1a1aa] text-xl mb-12 max-w-lg mx-auto leading-relaxed">
              Join 500+ users who closed their AI tabs and opened one sidebar.
            </p>

            <motion.a
              href={CHROME_STORE_URL}
              whileHover={{ scale: 1.04, boxShadow: '0 0 48px rgba(14,165,233,0.45)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white font-bold px-10 py-5 rounded-xl text-lg transition-all"
            >
              <ChromeIcon size={22} />
              Add to Chrome — Free
              <ArrowRight size={18} />
            </motion.a>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-[#52525b]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-[#0EA5E9]" />
                Free forever
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-[#0EA5E9]" />
                No credit card
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-[#0EA5E9]" />
                30-second setup
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#1e1e1e] py-12 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <PluriHubMark height={15} className="text-[#52525b]" />
            <span className="text-[#52525b] text-sm">PluriHub © 2026</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#52525b]">
            {['Privacy', 'Terms', 'Support', 'Chrome Store'].map(link => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition-colors hover-underline"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#52525b]">
            <Globe size={11} />
            Chrome desktop only
          </div>
        </div>
      </footer>
    </div>
  )
}
