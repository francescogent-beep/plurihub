import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'plurihub_cookie_ok'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl"
        >
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-xl">
            <p className="text-sm text-[#a1a1aa] flex-1 leading-relaxed">
              This site uses a functional cookie only to remember your waitlist submission. No tracking or analytics.{' '}
              <Link to="/privacy" className="text-[#0EA5E9] hover:underline">
                Privacy policy
              </Link>
              .
            </p>
            <button
              onClick={dismiss}
              className="shrink-0 bg-[#0EA5E9] hover:bg-[#0284c7] text-white text-sm font-medium px-4 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Got it
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
