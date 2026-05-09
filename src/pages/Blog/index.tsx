import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import PluriHubMark from '../../components/PluriHubMark'
import { POSTS } from './posts'

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

function setMetaDescription(content: string) {
  let el = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.name = 'description'
    document.head.appendChild(el)
  }
  el.content = content
}

export default function BlogIndex() {
  useEffect(() => {
    const prevTitle = document.title
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? ''
    const prevCanonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? 'https://plurihub.com/'

    document.title = 'PluriHub Blog — AI Productivity Tips & Guides'
    setMetaDescription('Guides and tips for AI power users. Learn how to organise your ChatGPT, Claude, and Gemini conversations, build prompt libraries, and get more out of every AI tool.')
    setCanonical('https://plurihub.com/blog')

    return () => {
      document.title = prevTitle
      setMetaDescription(prevDesc)
      setCanonical(prevCanonical)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-[#1e1e1e] sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-md z-10">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <PluriHubMark height={18} className="text-white" />
            <span className="font-semibold text-white text-sm">PluriHub</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs text-[#52525b] hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            Back to site
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-14">
        <div className="mb-12">
          <p className="text-[#0EA5E9] text-[10px] font-mono uppercase tracking-widest mb-3">PluriHub</p>
          <h1 className="text-3xl font-bold text-white mb-3">Blog</h1>
          <p className="text-[#71717a] text-base">
            Guides for AI power users. How to stop losing conversations, organise your workflow, and get more from every model.
          </p>
        </div>

        <ul className="space-y-px">
          {POSTS.map((post, i) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group flex items-start justify-between gap-6 py-7 border-b border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <time className="text-[#3f3f46] text-xs font-mono block mb-2">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <h2 className="text-white font-semibold text-base leading-snug mb-2 group-hover:text-[#0EA5E9] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#52525b] text-sm leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[#3f3f46] group-hover:text-[#0EA5E9] group-hover:translate-x-0.5 transition-all mt-1 shrink-0"
                />
              </Link>
            </motion.li>
          ))}
        </ul>
      </main>

      <footer className="border-t border-[#1e1e1e] py-10 px-6 mt-10">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <PluriHubMark height={14} className="text-[#52525b]" />
            <span className="text-[#52525b] text-sm">PluriHub © 2026</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-[#52525b]">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
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
