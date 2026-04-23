import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, Lock, Plus } from 'lucide-react'
import PluriHubMark from './PluriHubMark'

const AI_TABS = [
  { id: 'chatgpt', label: 'ChatGPT', color: '#10B981', icon: '✦' },
  { id: 'claude', label: 'Claude', color: '#D97706', icon: '◆' },
  { id: 'gemini', label: 'Gemini', color: '#6366F1', icon: '✧' },
  { id: 'perplexity', label: 'Perplexity', color: '#0EA5E9', icon: '⊕' },
]

const CHAT_PREVIEWS: Record<string, { user: string; ai: string }[]> = {
  chatgpt: [
    { user: 'Can you review this React component?', ai: 'Sure! I can see a few potential optimizations. First, you could use useMemo to memoize the filtered list, and consider extracting the...' },
    { user: 'How do I handle async errors in useEffect?', ai: "Great question. You can't make useEffect itself async, but you can define an async function inside it:\n\nasync function fetchData() {...}" },
  ],
  claude: [
    { user: 'Write a technical spec for a REST API', ai: "# REST API Technical Specification\n\n## Overview\nThis document outlines the design for a RESTful API following HTTP standards and best practices..." },
    { user: 'What are the tradeoffs of microservices?', ai: 'Microservices offer independent scaling and deployment, but introduce complexity: network latency, distributed tracing, and operational overhead. For teams under 50 engineers, a well-structured monolith often wins.' },
  ],
  gemini: [
    { user: 'Analyze this data and find patterns', ai: "I've identified 3 key patterns in your dataset:\n1. Peak activity occurs between 9-11am UTC\n2. Conversion rates drop 40% on weekends\n3. Mobile users show 2.3x higher bounce rates..." },
    { user: "Generate a week's worth of content ideas", ai: 'Here are 7 content ideas for your developer blog:\n\n1. **Monday**: "The hidden cost of premature abstraction"\n2. **Tuesday**: "5 Git workflows that scale"...' },
  ],
  perplexity: [
    { user: 'Latest news on AI coding tools?', ai: '**Recent developments** (April 2025):\n\n• GitHub Copilot Workspace now supports multi-file edits\n• Cursor raised Series B at $9B valuation\n• JetBrains AI Assistant added inline chat...' },
    { user: "What's the best Vector DB in 2025?", ai: 'Based on recent benchmarks and community adoption:\n\n**Pinecone** leads in managed solutions, **Qdrant** tops open-source performance benchmarks, and **pgvector** wins for existing Postgres users.' },
  ],
}

const BROWSER_TABS = [
  { label: 'GitHub - plurih-hub', favicon: '⬡' },
  { label: 'localhost:3000', favicon: '◎' },
  { label: 'Vercel Dashboard', favicon: '▲' },
]

export default function BrowserMockup() {
  const [activeAI, setActiveAI] = useState('chatgpt')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const chats = CHAT_PREVIEWS[activeAI]
  const activeTab = AI_TABS.find(t => t.id === activeAI)!

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Glow behind mockup */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] rounded-3xl" />

      {/* Browser window */}
      <div className="rounded-xl overflow-hidden border border-[#2a2a2a] shadow-2xl bg-[#111]">
        {/* Title bar */}
        <div className="bg-[#1a1a1a] px-4 pt-3 pb-0 border-b border-[#222]">
          {/* Traffic lights */}
          <div className="flex items-center gap-2 mb-3">
            <button className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF3B30] transition-colors" />
            <button className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:bg-[#FF9F0A] transition-colors" />
            <button className="w-3 h-3 rounded-full bg-[#28C840] hover:bg-[#34C759] transition-colors" />
            <div className="flex-1 mx-4">
              {/* Address bar */}
              <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-md px-3 py-1 flex items-center gap-2 max-w-sm mx-auto">
                <Lock size={10} className="text-[#52525b]" />
                <span className="text-[#52525b] text-xs font-mono">github.com/plurih-hub</span>
              </div>
            </div>
            {/* Toggle sidebar button */}
            <motion.button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              whileTap={{ scale: 0.9 }}
              className="ml-auto text-[10px] px-2 py-1 rounded border border-[#0EA5E9]/40 text-[#0EA5E9] font-mono hover:bg-[#0EA5E9]/10 transition-colors"
            >
              {sidebarOpen ? '⌘⇧P Hide' : '⌘⇧P Show'}
            </motion.button>
          </div>

          {/* Browser tabs */}
          <div className="flex items-end gap-0.5">
            {BROWSER_TABS.map((tab, i) => (
              <div
                key={i}
                className={`px-3 py-1.5 text-[11px] font-medium rounded-t-md flex items-center gap-1.5 cursor-default ${
                  i === 0
                    ? 'bg-[#111] text-white border-t border-l border-r border-[#2a2a2a]'
                    : 'text-[#52525b] hover:text-[#a1a1aa]'
                }`}
              >
                <span className="text-[9px]">{tab.favicon}</span>
                <span>{tab.label}</span>
                {i === 0 && <X size={10} className="ml-1 text-[#52525b] hover:text-white" />}
              </div>
            ))}
            <div className="p-1 text-[#52525b] hover:text-white cursor-pointer">
              <Plus size={12} />
            </div>
          </div>
        </div>

        {/* Browser content area */}
        <div className="flex" style={{ height: '440px' }}>
          {/* Main content (blurred website) */}
          <div className="flex-1 bg-[#0d0d0d] p-6 relative overflow-hidden">
            {/* Fake GitHub-style content */}
            <div className="opacity-30 select-none pointer-events-none">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#2a2a2a]" />
                <div>
                  <div className="h-3 w-32 bg-[#2a2a2a] rounded mb-1" />
                  <div className="h-2 w-24 bg-[#1a1a1a] rounded" />
                </div>
              </div>
              <div className="h-6 w-64 bg-[#2a2a2a] rounded mb-2" />
              <div className="flex gap-2 mb-4">
                {['JavaScript', 'React', 'TypeScript'].map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-[#2a2a2a] text-[#52525b]">{t}</span>
                ))}
              </div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`h-2 rounded mb-2 bg-[#1e1e1e]`} style={{ width: `${60 + Math.sin(i) * 30}%` }} />
              ))}
            </div>

            {/* Sidebar toggle hint when hidden */}
            {!sidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
              >
                <div className="bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded-lg p-3 text-center">
                  <p className="text-[#0EA5E9] text-xs font-mono">⌘⇧P</p>
                  <p className="text-[#a1a1aa] text-[10px] mt-1">Open sidebar</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* PluriHub Sidebar */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 280, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="border-l border-[#1e1e1e] bg-[#0e0e0e] flex flex-col overflow-hidden"
                style={{ minWidth: 0 }}
              >
                {/* Sidebar header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#1e1e1e]">
                  <div className="flex items-center gap-1.5">
                    <PluriHubMark height={13} className="text-white" />
                    <span className="text-[11px] font-semibold text-white">PluriHub</span>
                  </div>
                  <span className="text-[9px] text-[#0EA5E9] font-mono px-1.5 py-0.5 rounded bg-[#0EA5E9]/10 border border-[#0EA5E9]/20">Pro</span>
                </div>

                {/* AI tabs */}
                <div className="flex border-b border-[#1e1e1e] bg-[#0a0a0a]">
                  {AI_TABS.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveAI(tab.id)}
                      className={`flex-1 py-2 text-[9px] font-medium transition-all relative ${
                        activeAI === tab.id ? 'text-white' : 'text-[#52525b] hover:text-[#a1a1aa]'
                      }`}
                    >
                      <span className="block">{tab.icon}</span>
                      <span className="block">{tab.label}</span>
                      {activeAI === tab.id && (
                        <motion.div
                          layoutId="ai-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5"
                          style={{ background: tab.color }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Chat messages */}
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeAI}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      {chats.map((msg, i) => (
                        <div key={i} className="space-y-2">
                          {/* User bubble */}
                          <div className="flex justify-end">
                            <div className="bg-[#0EA5E9]/15 border border-[#0EA5E9]/20 rounded-lg rounded-tr-sm px-2.5 py-1.5 text-[10px] text-white max-w-[85%] leading-relaxed">
                              {msg.user}
                            </div>
                          </div>
                          {/* AI bubble */}
                          <div className="flex justify-start">
                            <div className="flex gap-1.5 max-w-[90%]">
                              <div
                                className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center text-[8px] font-bold"
                                style={{ background: activeTab.color + '33', color: activeTab.color }}
                              >
                                {activeTab.icon}
                              </div>
                              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg rounded-tl-sm px-2.5 py-1.5 text-[10px] text-[#a1a1aa] leading-relaxed">
                                {msg.ai.length > 120 ? msg.ai.slice(0, 120) + '...' : msg.ai}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Chat input */}
                <div className="p-2 border-t border-[#1e1e1e]">
                  <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-2 flex items-center gap-2">
                    <span className="text-[10px] text-[#52525b] flex-1 font-mono">Ask {activeTab.label}...</span>
                    <div className="w-5 h-5 rounded bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                      <ChevronRight size={10} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Label below */}
      <div className="flex items-center justify-center gap-6 mt-4 text-xs text-[#52525b]">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#28C840] inline-block" />
          Sidebar active
        </span>
        <span className="flex items-center gap-1.5">
          <span className="font-mono text-[#0EA5E9]">⌘⇧P</span>
          toggle anywhere
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#0EA5E9] inline-block" />
          4 AIs loaded
        </span>
      </div>
    </div>
  )
}
