import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'What does PluriHub actually do?',
    a: 'PluriHub is a Chrome extension that lets you save and organize AI conversations from ChatGPT, Claude, Gemini, and 8 other providers in one place. Open any AI chat, hit Save, and it shows up in your sidebar — organized by space, searchable, and accessible from any website.',
  },
  {
    q: 'Does this slow down my browser?',
    a: 'No. PluriHub is a lightweight side panel — it adds less than 30ms to page load time. It only activates when you open it, so it has zero impact while you browse normally.',
  },
  {
    q: 'Do I need to sign up for new AI accounts?',
    a: 'No. PluriHub works with your existing accounts. Just open ChatGPT, Claude, Gemini, or any supported provider as you normally would, and save conversations directly from their pages. We never touch your credentials or session data.',
  },
  {
    q: 'Does it work on all websites?',
    a: 'The PluriHub panel is accessible from any website. Saving chats works on the supported AI provider pages (ChatGPT, Claude, Gemini, and 8 others). The only exception is the Chrome Web Store itself, where Chrome security policy blocks extension injection.',
  },
  {
    q: 'What data do you collect?',
    a: "None of your chat content. PluriHub saves links and metadata locally and syncs them to your account. Your actual conversations stay between you and the AI provider — they never pass through our servers. Zero telemetry.",
  },
  {
    q: 'What about mobile?',
    a: "Chrome extensions only work on desktop Chrome. PluriHub is desktop-only for now. A Safari extension for macOS is on the roadmap.",
  },
  {
    q: 'Can I use multiple accounts for the same AI?',
    a: 'Pro plan lets you save chats from multiple accounts per AI provider — for example, a work ChatGPT and a personal ChatGPT — and organize them into separate spaces.',
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
