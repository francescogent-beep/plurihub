import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'Does this slow down my browser?',
    a: 'No. PluriHub lazy-loads each AI chat only when you open it. The sidebar itself is a lightweight panel — it adds less than 30ms to page load time. Your RAM-hungry tab habit was the problem, not the solution.',
  },
  {
    q: 'Can I use it with my ChatGPT Plus account?',
    a: "Yes. PluriHub uses your existing browser sessions — it doesn't create new accounts or store your credentials. Just sign in to ChatGPT, Claude, or Gemini once in the sidebar, and it remembers your session.",
  },
  {
    q: 'Does it work on all websites?',
    a: 'Almost all. The sidebar appears on any site you visit. The only exception is the Chrome Web Store itself (Chrome security policy prevents extensions from injecting into the store page).',
  },
  {
    q: 'What data do you collect?',
    a: "None. PluriHub is a fully client-side extension. Your conversations go directly to OpenAI, Anthropic, and Google — they never touch our servers. We don't even have analytics. Zero telemetry.",
  },
  {
    q: 'What about mobile?',
    a: "Chrome extensions only work on desktop Chrome. PluriHub is desktop-only for now. A Safari extension for macOS is on the roadmap, and we're tracking demand for mobile use cases.",
  },
  {
    q: 'Can I use multiple accounts for the same AI?',
    a: 'Pro plan supports multiple account profiles per AI. You can have Work ChatGPT and Personal ChatGPT as separate sessions — switch between them from the sidebar header.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-2">
      {FAQS.map((item, i) => {
        const isOpen = open === i
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            className={`rounded-xl border transition-all duration-200 ${
              isOpen ? 'border-[#0EA5E9]/30 bg-[#0EA5E9]/5' : 'border-[#1e1e1e] bg-[#111] hover:border-[#2a2a2a]'
            }`}
          >
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className={`font-medium text-sm ${isOpen ? 'text-white' : 'text-[#a1a1aa]'}`}>
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className={`flex-shrink-0 ml-4 ${isOpen ? 'text-[#0EA5E9]' : 'text-[#52525b]'}`}
              >
                <Plus size={16} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4">
                    <p className="text-[#52525b] text-sm leading-relaxed">{item.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
