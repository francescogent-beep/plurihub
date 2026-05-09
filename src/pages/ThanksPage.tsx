import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import logoIcon from '../assets/plurihub-icon.jpg'

const CONFETTI_COLORS = ['#1d1d1f', '#a1a1a6', '#d1d1d6', '#e5e5ea', '#6e6e73', '#0EA5E9']

function Confetti() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const pieces = Array.from({ length: 48 }, () => {
      const el = document.createElement('span')
      const size = 5 + Math.random() * 6
      el.style.cssText = `
        position:absolute;
        top:-20px;
        left:${Math.random() * 100}%;
        width:${size}px;
        height:${size}px;
        border-radius:2px;
        background:${CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]};
        animation:confetti-fall ${2 + Math.random() * 2}s ${Math.random() * 1.5}s linear forwards;
      `
      container.appendChild(el)
      return el
    })

    return () => pieces.forEach(el => el.remove())
  }, [])

  return (
    <>
      <style>{`
        @keyframes confetti-fall {
          0%   { transform: translateY(0)     rotate(0deg);   opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
      <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-0" />
    </>
  )
}

export default function ThanksPage() {
  useEffect(() => {
    document.title = 'Welcome to Premium — PluriHub'
    // Prevent search engines from indexing the post-payment confirmation page
    const robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null
    const prev = robotsMeta?.content ?? ''
    if (robotsMeta) robotsMeta.content = 'noindex, nofollow'
    return () => { if (robotsMeta) robotsMeta.content = prev }
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12 text-center font-sans">
      <Confetti />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-12">
          <img src={logoIcon} alt="PluriHub" style={{ width: 32, height: 32, borderRadius: 6 }} />
          <span className="font-bold text-[#1d1d1f] text-[1.05rem] tracking-tight">PluriHub</span>
        </div>

        {/* Animated check */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.05 }}
          className="w-[72px] h-[72px] rounded-full bg-[#1d1d1f] flex items-center justify-center mb-8"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <motion.path
              d="M9 16.5L14 21.5L23 11.5"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.35, ease: 'easeOut' }}
            />
          </svg>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-[-0.03em] text-[#1d1d1f] mb-2.5"
        >
          You're Premium now.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-[#6e6e73] text-[1.05rem] leading-relaxed max-w-[420px] mb-9"
        >
          Thanks for upgrading. Everything is unlocked — unlimited chats, prompts, workspaces, Split View and Compare are all yours.
        </motion.p>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[0.8rem] text-[#a1a1a6] max-w-[360px] leading-relaxed"
        >
          The extension will automatically refresh.<br />
          You can now close this window.<br /><br />
          Questions?{' '}
          <a href="mailto:info@plurihub.com" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors underline-offset-2 hover:underline">
            info@plurihub.com
          </a>
        </motion.p>
      </div>
    </div>
  )
}
