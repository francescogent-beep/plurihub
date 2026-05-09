import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Globe } from 'lucide-react'
import PluriHubMark from '../components/PluriHubMark'
import { TermsContent } from '../components/LegalContent'

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (el) {
    el.href = href
  } else {
    el = document.createElement('link')
    el.rel = 'canonical'
    el.href = href
    document.head.appendChild(el)
  }
}

export default function TermsPage() {
  useEffect(() => {
    const prevTitle = document.title
    const prevCanonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? 'https://plurihub.com/'
    document.title = 'Terms of Service — PluriHub'
    setCanonical('https://plurihub.com/terms')
    return () => {
      document.title = prevTitle
      setCanonical(prevCanonical)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#1e1e1e] sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-md z-10">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <PluriHubMark height={18} className="text-white" />
            <span className="font-semibold text-white text-sm">PluriHub</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs text-[#52525b] hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            Back
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-14">
        <div className="mb-10">
          <p className="text-[#0EA5E9] text-[10px] font-mono uppercase tracking-widest mb-2">PluriHub</p>
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
        </div>

        <TermsContent />

        <p className="text-[#2a2a2a] text-xs text-center mt-14 pt-6 border-t border-[#1a1a1a]">
          PluriHub · Individual developer · Spain · info@plurihub.com
        </p>
      </main>

      <footer className="border-t border-[#1e1e1e] py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <PluriHubMark height={14} className="text-[#52525b]" />
            <span className="text-[#52525b] text-sm">PluriHub © 2026</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-[#52525b]">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="text-[#0EA5E9]">Terms</Link>
            <a href="mailto:info@plurihub.com" className="hover:text-white transition-colors">Support</a>
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
