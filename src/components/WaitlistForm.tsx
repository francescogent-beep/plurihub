import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

// TODO: replace with your Formspree endpoint → https://formspree.io/f/<your-id>
const WAITLIST_ENDPOINT = 'https://formspree.io/f/REPLACE_ME'

interface Props {
  size?: 'sm' | 'lg'
}

export default function WaitlistForm({ size = 'lg' }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setEmail('')
    } catch {
      setStatus('error')
    }
  }

  const isLg = size === 'lg'

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 size={20} className="text-[#28C840]" />
            <span className="font-semibold text-white">You're on the list.</span>
          </div>
          <p className="text-[#52525b] text-sm">We'll email you the moment it's live on the Chrome Web Store.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3 w-full max-w-md"
        >
          <div className={`flex w-full ${isLg ? 'gap-2' : 'gap-1.5'}`}>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className={`flex-1 bg-[#111] border border-[#2a2a2a] rounded-xl text-white placeholder-[#52525b] focus:outline-none focus:border-[#0EA5E9]/60 transition-colors ${isLg ? 'px-4 py-3.5 text-sm' : 'px-3 py-2.5 text-sm'}`}
            />
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white font-bold rounded-xl whitespace-nowrap transition-opacity disabled:opacity-60 ${isLg ? 'px-6 py-3.5 text-sm' : 'px-4 py-2.5 text-sm'}`}
            >
              {status === 'loading' ? 'Joining…' : <>{isLg ? 'Notify me' : 'Join'} <ArrowRight size={14} /></>}
            </motion.button>
          </div>
          {status === 'error' && (
            <p className="text-[#ef4444] text-xs">Something went wrong. Try again or email <a href="mailto:info@plurihub.com" className="underline">info@plurihub.com</a>.</p>
          )}
          <p className="text-[#52525b] text-xs">No spam. One email when we launch on the Chrome Web Store.</p>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
