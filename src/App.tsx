import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import {
  Layout, Zap, Archive, FolderOpen, Shield,
  Globe, Users, CheckCircle2, Heart, Keyboard, Star
} from 'lucide-react'
import BrowserMockup from './components/BrowserMockup'
import ProviderTape from './components/ProviderTape'
import PluriHubMark from './components/PluriHubMark'
import FeatureCard from './components/FeatureCard'
import ComparisonTable from './components/ComparisonTable'
import FAQ from './components/FAQ'
import CookieBanner from './components/CookieBanner'

export const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/nlgembofcnkejdilolmphpikokljokdk'

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

const FEATURES = [
  {
    icon: Layout,
    title: 'Persistent Sidebar',
    description: 'Follows you across every tab. Gmail to GitHub to Google Docs. Always there, never in the way.',
  },
  {
    icon: Globe,
    title: '11 AI Providers',
    description: 'ChatGPT, Claude, Gemini, Perplexity, Grok, DeepSeek, Mistral, NotebookLM, Copilot, Meta AI, Poe.',
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
    title: 'Unlimited Workspaces',
    description: 'Organize chats by project. Frontend, Backend, Research — all separated. No folder limits.',
  },
  {
    icon: Users,
    title: 'Multi-Account Support',
    description: 'Work ChatGPT + Personal Claude. Different accounts per AI, all in one place.',
  },
  {
    icon: Keyboard,
    title: 'Custom Shortcuts',
    description: 'Set your own keyboard shortcut. Make PluriHub fit your workflow, not the other way around.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your conversations never touch our servers. Only metadata is stored — never chat content.',
  },
  {
    icon: Star,
    title: 'Early Access',
    description: 'Be first to try new integrations and features as we expand to more AI tools.',
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

const ORBIT_ICONS = [
  { color: '#10A37F', label: 'ChatGPT',    x: '8%',   y: '18%',  size: 28, delay: 0    },
  { color: '#D97706', label: 'Claude',     x: '88%',  y: '12%',  size: 24, delay: 1.2  },
  { color: '#4A8CF7', label: 'Gemini',     x: '5%',   y: '70%',  size: 22, delay: 0.7  },
  { color: '#1a1a1a', label: 'Perplexity', x: '92%',  y: '65%',  size: 20, delay: 2.1  },
  { color: '#8B5CF6', label: 'NotebookLM', x: '78%',  y: '82%',  size: 18, delay: 1.6  },
  { color: '#111',    label: 'Grok',       x: '18%',  y: '88%',  size: 18, delay: 0.4  },
  { color: '#2563EB', label: 'DeepSeek',   x: '50%',  y: '92%',  size: 16, delay: 2.8  },
  { color: '#FF7000', label: 'Mistral',    x: '72%',  y: '8%',   size: 20, delay: 1.9  },
  { color: '#0081FB', label: 'Meta AI',    x: '30%',  y: '6%',   size: 16, delay: 3.2  },
  { color: '#7C3AED', label: 'Poe',        x: '95%',  y: '38%',  size: 16, delay: 0.9  },
  { color: '#0EA5E9', label: 'Copilot',    x: '3%',   y: '42%',  size: 18, delay: 2.4  },
]

function FloatingOrbit() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {ORBIT_ICONS.map(({ color, label, x, y, size, delay }) => (
        <motion.div
          key={label}
          className="absolute rounded-full opacity-30"
          style={{ left: x, top: y, width: size, height: size, background: color,
            boxShadow: `0 0 ${size}px ${color}66` }}
          animate={{ y: [0, -14, 0], x: [0, 6, 0], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
        />
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
          {['How it Works', 'Support', 'FAQ'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="hover:text-white transition-colors hover-underline"
            >
              {item}
            </a>
          ))}
          <Link to="/blog" className="hover:text-white transition-colors hover-underline">
            Blog
          </Link>
        </div>

        <motion.a
          href={CHROME_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
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

const SHIMMER_DOTS = [
  { x: '12%',  y: '8%'  }, { x: '35%',  y: '3%'  }, { x: '62%',  y: '11%' },
  { x: '85%',  y: '5%'  }, { x: '5%',   y: '28%' }, { x: '92%',  y: '22%' },
  { x: '22%',  y: '45%' }, { x: '48%',  y: '38%' }, { x: '75%',  y: '42%' },
  { x: '15%',  y: '62%' }, { x: '58%',  y: '58%' }, { x: '88%',  y: '55%' },
  { x: '30%',  y: '75%' }, { x: '70%',  y: '72%' }, { x: '8%',   y: '85%' },
  { x: '45%',  y: '88%' }, { x: '82%',  y: '80%' }, { x: '95%',  y: '92%' },
]

function GridShimmer() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
      {SHIMMER_DOTS.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#0EA5E9]"
          style={{ left: pos.x, top: pos.y }}
          animate={{ opacity: [0, 0.7, 0], scale: [1, 1.8, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 3 + (i * 1.3) % 7,
            ease: 'easeInOut',
            delay: (i * 0.7) % 6,
          }}
        />
      ))}
    </div>
  )
}

function ProblemCard({ icon, title, body, index }: { icon: string; title: string; body: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 300, damping: 30 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mouseX.set(x)
    mouseY.set(y)
    ref.current?.style.setProperty('--mx', `${x * 100}%`)
    ref.current?.style.setProperty('--my', `${y * 100}%`)
  }

  function handleMouseLeave() {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1, duration: 0.45 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      className="relative bg-[#111] border border-[#1e1e1e] rounded-2xl p-7 hover:border-[#ef4444]/30 transition-colors duration-300 group cursor-default"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(239,68,68,0.07) 0%, transparent 60%)' }}
      />
      <div className="text-4xl mb-5">{icon}</div>
      <h3 className="font-semibold text-white text-base mb-2.5 group-hover:text-[#ef4444] transition-colors">{title}</h3>
      <p className="text-[#71717a] text-sm leading-relaxed">{body}</p>
    </motion.div>
  )
}

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const orbX = useSpring(useTransform(mouseX, [0, 1], [-60, 60]), { stiffness: 60, damping: 20 })
  const orbY = useSpring(useTransform(mouseY, [0, 1], [-40, 40]), { stiffness: 60, damping: 20 })
  const orb2X = useSpring(useTransform(mouseX, [0, 1], [40, -40]), { stiffness: 40, damping: 20 })
  const orb2Y = useSpring(useTransform(mouseY, [0, 1], [30, -30]), { stiffness: 40, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <section ref={sectionRef} onMouseMove={handleMouseMove}
      className="relative pt-40 pb-20 px-6 text-center overflow-hidden">

      {/* Floating provider orbits */}
      <FloatingOrbit />

      {/* Main blue orb — follows cursor */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none orb-breathe"
        style={{ x: orbX, y: orbY,
          background: 'radial-gradient(ellipse at center, rgba(14,165,233,0.18) 0%, transparent 65%)' }}
      />

      {/* Secondary purple orb */}
      <motion.div
        className="absolute top-2/3 left-1/3 w-[600px] h-[400px] pointer-events-none orb-drift"
        style={{ x: orb2X, y: orb2Y,
          background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.10) 0%, transparent 65%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/8 text-[#0EA5E9] text-xs font-medium"
        >
          <ChromeIcon size={12} />
          Chrome Extension · Now Live
          <span className="w-1.5 h-1.5 rounded-full bg-[#28C840] animate-pulse inline-block" />
        </motion.div>

        <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.05] tracking-tight mb-8">
          <span className="text-white">All your AI chats.</span>
          <br />
          <span className="text-gradient-shimmer">One sidebar.</span>
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

        <div className="flex justify-center mb-10">
          <motion.a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] hover:from-[#0284C7] hover:to-[#0EA5E9] text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-[#0EA5E9]/20 transition-all"
          >
            <ChromeIcon size={18} />
            Add to Chrome — Free
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
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] dot-grid text-white overflow-x-hidden">
      <GridShimmer />
      <Navbar />

      {/* ─── HERO ─── */}
      <HeroSection />

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
              <ProblemCard key={i} {...card} index={i} />
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

      {/* ─── ALL FEATURES ─── */}
      <section id="support" className="py-28 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#0EA5E9] text-xs font-mono uppercase tracking-widest mb-4 block">
              100% Free
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Everything included.<br />No plans, no paywalls.
            </h2>
            <p className="text-[#71717a] text-lg max-w-md mx-auto mb-8">
              PluriHub is completely free. Every feature, every user, forever.
              If it saves your sanity daily, consider buying us a coffee.
            </p>

            <motion.a
              href="https://donate.stripe.com/4gM5kFa5A1f6gopepo2Fa01"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-[#111] hover:bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#0EA5E9]/40 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
            >
              <Heart size={16} className="text-[#ef4444]" />
              Support PluriHub
            </motion.a>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feat, i) => (
              <FeatureCard key={i} {...feat} index={i} />
            ))}
          </div>
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
              Live on the Chrome Web Store. Free to install. No credit card.
            </p>

            <div className="flex justify-center">
              <motion.a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] hover:from-[#0284C7] hover:to-[#0EA5E9] text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-[#0EA5E9]/20 transition-all"
              >
                <ChromeIcon size={18} />
                Add to Chrome — Free
              </motion.a>
            </div>

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
            <Link to="/blog" className="hover:text-white transition-colors hover-underline">
              Blog
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors hover-underline">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors hover-underline">
              Terms
            </Link>
            <a href="mailto:info@plurihub.com" className="hover:text-white transition-colors hover-underline">
              Support
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#52525b]">
            <Globe size={11} />
            Chrome desktop only
          </div>
        </div>
      </footer>

      <CookieBanner />
    </div>
  )
}
