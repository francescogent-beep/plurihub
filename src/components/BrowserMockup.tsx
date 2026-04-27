import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, Lock, Plus, LayoutGrid, MessageSquare, FolderOpen,
  BookOpen, Settings, ChevronRight, RefreshCw, Search, Trash2,
  ExternalLink, Maximize2, GitCompare, Star, Copy, Crown,
  Wifi, LogOut, Mail, Shield
} from 'lucide-react'
import PluriHubMark from './PluriHubMark'

// ── Provider icons ──────────────────────────────────────────────────────────

function ChatGPTIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#10A37F" />
      <path d="M17.5 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" stroke="white" strokeWidth="1.4" fill="none" />
      <path d="M12 8v4l2.5 2.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function ClaudeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#D97706" />
      <path d="M12 6.5L8 17.5h2l.8-2.2h2.4l.8 2.2h2L12 6.5Zm-0.7 7L12 9.8l.7 3.7h-1.4Z" fill="white" />
    </svg>
  )
}

function GeminiIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#4A8CF7" />
      <path d="M12 5c0 3.9-3.1 7-7 7 3.9 0 7 3.1 7 7 0-3.9 3.1-7 7-7-3.9 0-7-3.1-7-7Z" fill="white" />
    </svg>
  )
}

function PerplexityIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1a1a1a" />
      <path d="M12 4v16M4 12h16M6.34 6.34l11.32 11.32M17.66 6.34L6.34 17.66" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function GrokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#111" />
      <path d="M7 7l10 10M17 7L7 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function DeepSeekIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#2563EB" />
      <path d="M7 15c2-4 4-6 5-7 1 1 3 3 5 7" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1.5" fill="white" />
    </svg>
  )
}

function MistralIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#FF7000" />
      <rect x="6" y="7" width="4" height="4" rx="0.5" fill="white" />
      <rect x="14" y="7" width="4" height="4" rx="0.5" fill="white" />
      <rect x="10" y="11" width="4" height="4" rx="0.5" fill="white" />
      <rect x="6" y="15" width="4" height="2" rx="0.5" fill="white" />
      <rect x="14" y="15" width="4" height="2" rx="0.5" fill="white" />
    </svg>
  )
}

function CopilotIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#0EA5E9" />
      <path d="M8 10a4 4 0 0 1 8 0v2a4 4 0 0 1-8 0v-2Z" fill="white" opacity="0.9" />
      <circle cx="10" cy="10.5" r="1" fill="#0EA5E9" />
      <circle cx="14" cy="10.5" r="1" fill="#0EA5E9" />
      <path d="M10 16s2 1.5 4 0" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function MetaAIIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#0081FB" />
      <path d="M6 12c0-2 .8-4 2-5s2.5-.5 3.5 1l.5 1 .5-1c1-1.5 2.3-2 3.5-1s2 3 2 5-1 4-3 4-3-2-3-4-1 4-3 4-3-2-3-4Z" fill="white" />
    </svg>
  )
}

function NotebookLMIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#8B5CF6" />
      <rect x="7" y="6" width="10" height="13" rx="1.5" stroke="white" strokeWidth="1.4" fill="none" />
      <path d="M9 10h6M9 13h4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function PoeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#7C3AED" />
      <circle cx="9.5" cy="10.5" r="1.2" fill="white" />
      <circle cx="14.5" cy="10.5" r="1.2" fill="white" />
      <path d="M8 15s4 2 8 0" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 6v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

// ── Data ────────────────────────────────────────────────────────────────────

type NavId = 'board' | 'chats' | 'spaces' | 'prompts' | 'settings'

const NAV_ITEMS: { id: NavId; label: string; Icon: React.ComponentType<{ size?: number }> }[] = [
  { id: 'board', label: 'Board', Icon: LayoutGrid },
  { id: 'chats', label: 'Chats', Icon: MessageSquare },
  { id: 'spaces', label: 'Spaces', Icon: FolderOpen },
  { id: 'prompts', label: 'Prompts', Icon: BookOpen },
  { id: 'settings', label: 'Settings', Icon: Settings },
]

const CHATS = [
  { id: 'gemini', title: 'Unifying AI Chat Experiences - Google Gemini', provider: 'Gemini', Icon: GeminiIcon },
  { id: 'chatgpt', title: 'How PluriHub Works', provider: 'ChatGPT', Icon: ChatGPTIcon },
  { id: 'claude', title: 'Greeting plurihub - Claude', provider: 'Claude', Icon: ClaudeIcon },
]

const PROMPTS = [
  { title: 'Concise answer', tags: ['Default', 'writing'], desc: 'Answer in a concise, high-signal way. Use short paragraphs and avoid filler.' },
  { title: 'Debug partner', tags: ['Default', 'coding'], desc: 'Act like a senior engineer. Identify root causes first, list concrete findings, then propose fixes.' },
  { title: 'Summarize notes', tags: ['Default', 'productivity'], desc: 'Summarize the content into key points, open questions, and next actions.' },
  { title: 'Rewrite cleanly', tags: ['Default', 'writing'], desc: 'Rewrite this text so it sounds polished, natural, and clear without changing the meaning.' },
  { title: 'Meeting notes to action plan', tags: ['Default', 'productivity'], desc: 'Turn these notes into a clean action plan with owners, deadlines, risks and next steps.' },
]

const PROVIDERS = [
  { name: 'ChatGPT', Icon: ChatGPTIcon },
  { name: 'Claude', Icon: ClaudeIcon },
  { name: 'Gemini', Icon: GeminiIcon },
  { name: 'Perplexity', Icon: PerplexityIcon },
  { name: 'NotebookLM', Icon: NotebookLMIcon },
  { name: 'Grok', Icon: GrokIcon },
  { name: 'DeepSeek', Icon: DeepSeekIcon },
  { name: 'Mistral', Icon: MistralIcon },
  { name: 'Copilot', Icon: CopilotIcon },
  { name: 'Meta AI', Icon: MetaAIIcon },
  { name: 'Poe', Icon: PoeIcon },
]

const SPLIT_PANELS = [
  {
    id: 'chatgpt',
    title: 'How PluriHub Works',
    provider: 'ChatGPT',
    Icon: ChatGPTIcon,
    providerLabel: 'ChatGPT',
    userMsg: 'this is how purihub works',
    aiMsg: 'How PluriHub works:\n1. Install the browser extension.\n2. Browse websites normally.\n3. When you find useful information, PluriHub lets you save, organize, and reuse it instantly.',
  },
  {
    id: 'gemini',
    title: 'Unifying AI Chat Experiences - Google Gemini',
    provider: 'Gemini',
    Icon: GeminiIcon,
    providerLabel: 'Gemini',
    userMsg: 'all your ai chats in one place',
    aiMsg: null,
  },
]

// ── Shared: unsupported page notice ─────────────────────────────────────────

function UnsupportedNotice() {
  return (
    <div className="mx-3 mt-2 flex items-center gap-2 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg px-2.5 py-2">
      <Search size={10} className="text-[#9ca3af] flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-medium text-[#374151]">Unsupported page</p>
        <p className="text-[9px] text-[#9ca3af] leading-tight">PluriHub can only save chats from compatible AI providers.</p>
      </div>
      <button className="flex-shrink-0 p-1 border border-[#e5e7eb] rounded text-[#9ca3af] hover:bg-white">
        <RefreshCw size={8} />
      </button>
      <button className="flex-shrink-0 text-[9px] bg-[#111] text-white rounded-md px-2 py-1 flex items-center gap-0.5 font-medium">
        <Plus size={8} /> Save
      </button>
    </div>
  )
}

// ── Split view panel ─────────────────────────────────────────────────────────

function SplitChatPanel({
  panel,
  onClose,
}: {
  panel: typeof SPLIT_PANELS[number]
  onClose: () => void
}) {
  return (
    <div className="flex flex-col border-r border-[#e5e7eb] last:border-r-0 overflow-hidden" style={{ flex: 1 }}>
      <div className="flex items-center gap-1.5 px-2.5 py-2 border-b border-[#e5e7eb] bg-[#f9fafb]">
        <panel.Icon size={14} />
        <span className="text-[10px] font-medium text-[#374151] flex-1 truncate">{panel.title}</span>
        <div className="flex items-center gap-1 text-[#9ca3af]">
          <button className="hover:text-[#374151] transition-colors"><RefreshCw size={10} /></button>
          <button className="hover:text-[#374151] transition-colors"><ExternalLink size={10} /></button>
          <button className="hover:text-[#374151] transition-colors"><Maximize2 size={10} /></button>
          <button onClick={onClose} className="hover:text-[#374151] transition-colors"><X size={10} /></button>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        <div className="px-3 py-2 border-b border-[#f0f0f0] flex items-center gap-2">
          <panel.Icon size={14} />
          <span className="text-[11px] font-semibold text-[#111]">{panel.providerLabel}</span>
          <span className="text-[#9ca3af] text-[10px]">↓</span>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
          <div className="flex justify-end">
            <div className="bg-[#f3f4f6] rounded-2xl rounded-tr-sm px-3 py-2 text-[10px] text-[#111] max-w-[80%]">
              {panel.userMsg}
            </div>
          </div>
          {panel.aiMsg ? (
            <div className="text-[10px] text-[#374151] leading-relaxed whitespace-pre-line">{panel.aiMsg}</div>
          ) : (
            <div className="border border-[#e5e7eb] rounded-xl px-3 py-3 text-[10px] text-[#9ca3af]">
              Chiedi a Gemini
            </div>
          )}
        </div>
        <div className="px-3 py-2 border-t border-[#f0f0f0]">
          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-3 py-2 flex items-center gap-2">
            <Plus size={11} className="text-[#9ca3af]" />
            <span className="flex-1 text-[10px] text-[#9ca3af]">Ask anything</span>
            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 19V5M5 12l7-7 7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────

const BROWSER_TABS = ['Google', 'ChatGPT', 'Claude']

export default function BrowserMockup() {
  const [activeNav, setActiveNav] = useState<NavId>('chats')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [splitView, setSplitView] = useState(false)

  function handleNavClick(id: NavId) {
    setActiveNav(id)
    setSplitView(false)
  }

  const navActive = splitView ? 'chats' : activeNav

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] rounded-3xl" />

      {/* Browser chrome */}
      <div className="rounded-xl overflow-hidden border border-[#2a2a2a] shadow-2xl bg-[#111]">
        {/* Title bar */}
        <div className="bg-[#1a1a1a] px-4 pt-3 pb-0 border-b border-[#222]">
          <div className="flex items-center gap-2 mb-3">
            <button className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <button className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <button className="w-3 h-3 rounded-full bg-[#28C840]" />
            <div className="flex-1 mx-4">
              <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-md px-3 py-1 flex items-center gap-2 max-w-xs mx-auto">
                <Lock size={10} className="text-[#52525b]" />
                <span className="text-[#52525b] text-xs font-mono">google.com</span>
              </div>
            </div>
            <motion.button
              onClick={() => { setSidebarOpen(v => !v); setSplitView(false) }}
              whileTap={{ scale: 0.9 }}
              className="text-[10px] px-2 py-1 rounded border border-[#0EA5E9]/40 text-[#0EA5E9] font-mono hover:bg-[#0EA5E9]/10 transition-colors"
            >
              {sidebarOpen ? '⌘⇧P Hide' : '⌘⇧P Show'}
            </motion.button>
          </div>
          <div className="flex items-end gap-0.5">
            {BROWSER_TABS.map((tab, i) => (
              <div
                key={tab}
                className={`px-3 py-1.5 text-[11px] font-medium rounded-t-md flex items-center gap-1.5 cursor-default whitespace-nowrap ${
                  i === 0
                    ? 'bg-white text-[#111] border-t border-l border-r border-[#ddd]'
                    : 'text-[#52525b] hover:text-[#a1a1aa]'
                }`}
              >
                {tab}
                {i === 0 && <X size={10} className="ml-1 text-[#52525b]" />}
              </div>
            ))}
            <div className="p-1.5 text-[#52525b]"><Plus size={12} /></div>
          </div>
        </div>

        {/* Page + Extension */}
        <div className="flex" style={{ height: '460px' }}>
          {/* Google page */}
          <AnimatePresence>
            {!splitView && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1 bg-white flex flex-col items-center justify-center overflow-hidden select-none pointer-events-none"
              >
                <div className="text-[42px] font-light mb-5 leading-none" style={{ letterSpacing: '-1px' }}>
                  <span style={{ color: '#4285F4' }}>G</span>
                  <span style={{ color: '#EA4335' }}>o</span>
                  <span style={{ color: '#FBBC05' }}>o</span>
                  <span style={{ color: '#4285F4' }}>g</span>
                  <span style={{ color: '#34A853' }}>l</span>
                  <span style={{ color: '#EA4335' }}>e</span>
                </div>
                <div className="w-56 h-9 rounded-full border border-[#ddd] shadow-sm flex items-center px-4 gap-2 mb-5">
                  <Search size={13} className="text-[#9aa0a6]" />
                </div>
                <div className="flex gap-2.5">
                  <div className="px-3 py-1.5 bg-[#f8f9fa] rounded text-[11px] text-[#3c4043]">Google Search</div>
                  <div className="px-3 py-1.5 bg-[#f8f9fa] rounded text-[11px] text-[#3c4043]">I'm Feeling Lucky</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* PluriHub panel */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                key="panel"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: splitView ? '100%' : 330, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                className="border-l border-[#e5e7eb] bg-white flex overflow-hidden flex-shrink-0"
                style={{ minWidth: 0 }}
              >
                {/* Left icon nav */}
                <div className="w-[64px] border-r border-[#e5e7eb] flex flex-col items-center pt-3 pb-4 gap-1 bg-white flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center mb-3 flex-shrink-0">
                    <PluriHubMark height={18} className="text-white" />
                  </div>
                  {NAV_ITEMS.map(({ id, label, Icon }) => (
                    <button
                      key={id}
                      onClick={() => handleNavClick(id)}
                      className={`w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all ${
                        navActive === id
                          ? 'bg-black text-white'
                          : 'text-[#9ca3af] hover:text-[#374151] hover:bg-[#f3f4f6]'
                      }`}
                    >
                      <Icon size={15} />
                      <span className="text-[7.5px] font-medium leading-none">{label}</span>
                    </button>
                  ))}
                  <div className="mt-auto flex flex-col items-center">
                    <span className="text-[7px] font-semibold text-[#9ca3af] uppercase tracking-widest">PLAN</span>
                    <span className="text-[10px] font-bold text-[#111]">Pro</span>
                  </div>
                </div>

                {/* Content pane */}
                <div className="flex-1 flex flex-col overflow-hidden min-w-0">
                  <AnimatePresence mode="wait">

                    {/* ── SPLIT VIEW ── */}
                    {splitView && (
                      <motion.div key="split" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="flex flex-col flex-1 overflow-hidden">
                        <div className="flex items-center gap-2 px-3 py-2.5 border-b border-[#e5e7eb] bg-[#f9fafb]">
                          <LayoutGrid size={12} className="text-[#6b7280]" />
                          <div>
                            <p className="text-[11px] font-semibold text-[#111] leading-none">Split View</p>
                            <p className="text-[9px] text-[#9ca3af] mt-0.5">2 of 3 panels open</p>
                          </div>
                          <div className="ml-auto flex items-center gap-1.5">
                            <button className="flex items-center gap-1 text-[9px] text-[#6b7280] border border-[#e5e7eb] rounded-md px-2 py-1 bg-white hover:bg-[#f9fafb]">
                              <GitCompare size={9} /> Compare
                            </button>
                            <button onClick={() => setSplitView(false)} className="flex items-center gap-1 text-[9px] text-[#6b7280] border border-[#e5e7eb] rounded-md px-2 py-1 bg-white hover:bg-[#f9fafb]">
                              <X size={9} /> Exit
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-1 overflow-hidden">
                          {SPLIT_PANELS.map(panel => (
                            <SplitChatPanel key={panel.id} panel={panel} onClose={() => setSplitView(false)} />
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* ── CHATS ── */}
                    {!splitView && activeNav === 'chats' && (
                      <motion.div key="chats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.12 }} className="flex flex-col flex-1 overflow-hidden">
                        <div className="px-3 pt-3 pb-2 border-b border-[#f0f0f0]">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-sm font-semibold text-[#111]">Chats</span>
                            <div className="flex items-center gap-1.5">
                              <button onClick={() => setSplitView(true)} className="flex items-center gap-1 text-[9px] text-[#6b7280] border border-[#e5e7eb] rounded px-1.5 py-0.5 hover:bg-[#f9fafb] transition-colors">
                                <LayoutGrid size={8} /> Split
                              </button>
                              <span className="text-[9px] text-[#059669] border border-[#d1fae5] rounded px-1.5 py-0.5 bg-[#ecfdf5] font-medium">Synced</span>
                            </div>
                          </div>
                          <p className="text-[10px] text-[#9ca3af]">Your saved AI conversations.</p>
                        </div>
                        <div className="px-3 py-2 border-b border-[#f5f5f5]">
                          <div className="flex items-center gap-2 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg px-2.5 py-1.5">
                            <Search size={10} className="text-[#9ca3af]" />
                            <span className="text-[10px] text-[#9ca3af]">Search chats</span>
                          </div>
                        </div>
                        <UnsupportedNotice />
                        <div className="flex-1 overflow-y-auto mt-1">
                          {CHATS.map(chat => (
                            <div key={chat.id} className="flex items-center gap-2.5 px-3 py-2.5 hover:bg-[#f9fafb] cursor-pointer border-b border-[#f5f5f5] group transition-colors">
                              <div className="flex-shrink-0"><chat.Icon size={22} /></div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[11px] font-medium text-[#111] truncate">{chat.title}</p>
                                <p className="text-[9px] text-[#9ca3af] mt-0.5">{chat.provider}</p>
                              </div>
                              <ChevronRight size={12} className="text-[#d1d5db] group-hover:text-[#9ca3af] flex-shrink-0" />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* ── SPACES ── */}
                    {!splitView && activeNav === 'spaces' && (
                      <motion.div key="spaces" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.12 }} className="flex flex-col flex-1 overflow-y-auto">
                        <div className="px-3 pt-3 pb-2 border-b border-[#f0f0f0]">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-sm font-semibold text-[#111]">Spaces</span>
                            <span className="text-[9px] text-[#059669] border border-[#d1fae5] rounded px-1.5 py-0.5 bg-[#ecfdf5] font-medium">Synced</span>
                          </div>
                          <p className="text-[10px] text-[#9ca3af]">Grouped by project or context.</p>
                        </div>
                        <div className="px-3 py-2 border-b border-[#f5f5f5]">
                          <div className="flex items-center gap-2 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg px-2.5 py-1.5">
                            <Search size={10} className="text-[#9ca3af]" />
                            <span className="text-[10px] text-[#9ca3af]">Search workspaces</span>
                          </div>
                        </div>
                        <UnsupportedNotice />
                        <div className="mx-3 mt-2.5 border border-[#e5e7eb] rounded-xl p-3">
                          <p className="text-[10px] font-semibold text-[#111] mb-0.5">New space</p>
                          <p className="text-[9px] text-[#9ca3af] mb-2">Group chats by project, client or topic.</p>
                          <div className="border border-[#e5e7eb] rounded-lg px-2.5 py-1.5 text-[10px] text-[#9ca3af] mb-2">Space name</div>
                          <div className="flex gap-1.5 mb-2.5">
                            {['#111111', '#6b7280', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'].map((c, i) => (
                              <div key={c} className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: c, boxShadow: i === 0 ? '0 0 0 2px white, 0 0 0 3px #111' : undefined }} />
                            ))}
                          </div>
                          <button className="w-full text-[10px] border border-[#e5e7eb] rounded-lg py-1.5 text-[#6b7280] flex items-center justify-center gap-1 hover:bg-[#f9fafb] transition-colors">
                            <Plus size={10} /> Create space
                          </button>
                        </div>
                        <div className="mx-3 mt-2.5 mb-3 border border-[#e5e7eb] rounded-xl overflow-hidden">
                          <div className="flex items-center gap-2 px-3 py-2 bg-[#f9fafb] border-b border-[#e5e7eb]">
                            <div className="w-2 h-2 rounded-full bg-[#111] flex-shrink-0" />
                            <span className="text-[10px] font-semibold text-[#111] flex-1">PluriHub workspace</span>
                            <span className="text-[9px] text-[#9ca3af] mr-1">3</span>
                            <button className="text-[9px] text-[#6b7280] border border-[#e5e7eb] bg-white rounded px-1.5 py-0.5">Select</button>
                            <Trash2 size={10} className="text-[#d1d5db] ml-1 cursor-pointer hover:text-[#ef4444] transition-colors" />
                          </div>
                          {CHATS.slice().reverse().map(chat => (
                            <div key={chat.id} className="flex items-center gap-2 px-3 py-2 hover:bg-[#f9fafb] border-b border-[#f5f5f5] last:border-0 cursor-pointer transition-colors">
                              <chat.Icon size={18} />
                              <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-medium text-[#111] truncate">{chat.title}</p>
                                <p className="text-[9px] text-[#9ca3af]">{chat.provider}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* ── PROMPTS ── */}
                    {!splitView && activeNav === 'prompts' && (
                      <motion.div key="prompts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.12 }} className="flex flex-col flex-1 overflow-hidden">
                        <div className="px-3 pt-3 pb-2 border-b border-[#f0f0f0]">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-sm font-semibold text-[#111]">Prompts</span>
                            <span className="text-[9px] text-[#059669] border border-[#d1fae5] rounded px-1.5 py-0.5 bg-[#ecfdf5] font-medium">Synced</span>
                          </div>
                          <p className="text-[10px] text-[#9ca3af]">Reusable prompt library.</p>
                        </div>
                        <div className="px-3 py-2 border-b border-[#f5f5f5]">
                          <div className="flex items-center gap-2 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg px-2.5 py-1.5">
                            <Search size={10} className="text-[#9ca3af]" />
                            <span className="text-[10px] text-[#9ca3af]">Search prompts</span>
                          </div>
                        </div>
                        <UnsupportedNotice />
                        {/* Stats + New */}
                        <div className="flex items-center gap-2 px-3 mt-2.5 mb-1">
                          <button className="text-[9px] bg-[#f3f4f6] rounded-full px-2.5 py-1 text-[#374151] font-medium">5 total</button>
                          <button className="text-[9px] bg-[#f3f4f6] rounded-full px-2.5 py-1 text-[#374151] font-medium">0 starred</button>
                          <button className="ml-auto text-[9px] bg-black text-white rounded-full px-3 py-1 flex items-center gap-1 font-medium">
                            <Plus size={9} /> New
                          </button>
                        </div>
                        {/* Prompt list */}
                        <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-2 mt-1">
                          {PROMPTS.map(p => (
                            <div key={p.title} className="border border-[#e5e7eb] rounded-xl p-2.5">
                              <div className="flex items-start justify-between gap-2 mb-1">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="text-[11px] font-semibold text-[#111]">{p.title}</span>
                                  {p.tags.map(t => (
                                    <span key={t} className="text-[8px] border border-[#e5e7eb] rounded-full px-1.5 py-0.5 text-[#6b7280]">{t}</span>
                                  ))}
                                </div>
                                <Star size={11} className="text-[#d1d5db] flex-shrink-0 mt-0.5 hover:text-[#f59e0b] cursor-pointer" />
                              </div>
                              <p className="text-[9px] text-[#6b7280] leading-relaxed mb-2">{p.desc}</p>
                              <button className="flex items-center gap-1 text-[9px] border border-[#e5e7eb] rounded-lg px-2 py-1 text-[#6b7280] hover:bg-[#f9fafb] transition-colors">
                                <Copy size={9} /> Copy
                              </button>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* ── SETTINGS ── */}
                    {!splitView && activeNav === 'settings' && (
                      <motion.div key="settings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.12 }} className="flex flex-col flex-1 overflow-y-auto">
                        <div className="px-3 pt-3 pb-2 border-b border-[#f0f0f0]">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-sm font-semibold text-[#111]">Settings</span>
                            <span className="text-[9px] text-[#059669] border border-[#d1fae5] rounded px-1.5 py-0.5 bg-[#ecfdf5] font-medium">Synced</span>
                          </div>
                          <p className="text-[10px] text-[#9ca3af]">Account, plan and preferences.</p>
                        </div>
                        <UnsupportedNotice />

                        {/* Account */}
                        <div className="mx-3 mt-2.5 border border-[#e5e7eb] rounded-xl p-3 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-[#111]">Account</span>
                            <button className="flex items-center gap-1 text-[8px] border border-[#e5e7eb] rounded-full px-2 py-0.5 text-[#6b7280]">
                              <Wifi size={8} /> Sync on
                            </button>
                          </div>
                          <p className="text-[9px] text-[#9ca3af]">you@email.com</p>
                          <button className="w-full flex items-center justify-center gap-1 border border-[#e5e7eb] rounded-lg py-1.5 text-[9px] text-[#374151] hover:bg-[#f9fafb] transition-colors">
                            <Mail size={9} /> Send password reset email
                          </button>
                          <button className="w-full flex items-center justify-center gap-1 border border-[#fecaca] rounded-lg py-1.5 text-[9px] text-[#ef4444] hover:bg-[#fef2f2] transition-colors">
                            <LogOut size={9} /> Sign out
                          </button>
                        </div>

                        {/* Plan */}
                        <div className="mx-3 mt-2 border border-[#e5e7eb] rounded-xl p-3">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[11px] font-semibold text-[#111]">Plan</span>
                            <Crown size={13} className="text-[#9ca3af]" />
                          </div>
                          <p className="text-[9px] text-[#9ca3af] mb-2">All limits unlocked.</p>
                          <div className="space-y-1 text-[9px]">
                            {[['Saved chats', '3 / ∞'], ['Spaces', '1 / ∞'], ['Custom prompts', '0 / ∞'], ['Workspace documents', '0 / ∞']].map(([k, v]) => (
                              <div key={k} className="flex items-center justify-between text-[#374151]">
                                <span>{k}</span><span className="text-[#9ca3af]">{v}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#f0f0f0] text-[9px]">
                            <span className="text-[#9ca3af]">Current period ends</span>
                            <span className="font-semibold text-[#111]">24 May 2026</span>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div>
                              <p className="text-[10px] font-medium text-[#111]">Manage subscription</p>
                              <p className="text-[8px] text-[#9ca3af]">Open billing portal to update your plan.</p>
                            </div>
                            <button className="text-[9px] border border-[#e5e7eb] rounded-lg px-2.5 py-1 text-[#374151] hover:bg-[#f9fafb]">Manage</button>
                          </div>
                        </div>

                        {/* Sync strategy */}
                        <div className="mx-3 mt-2 border border-[#e5e7eb] rounded-xl p-3 flex items-start gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#f3f4f6] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <RefreshCw size={12} className="text-[#6b7280]" />
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold text-[#111] mb-0.5">Sync strategy</p>
                            <p className="text-[8.5px] text-[#9ca3af] leading-relaxed">Local-first. Changes save instantly to this device, then sync to the cloud. Offline edits resume on next load.</p>
                          </div>
                        </div>

                        {/* Compatible providers */}
                        <div className="mx-3 mt-2 mb-3 border border-[#e5e7eb] rounded-xl p-3">
                          <div className="flex items-start gap-2 mb-3">
                            <div className="w-7 h-7 rounded-lg bg-[#f3f4f6] flex items-center justify-center flex-shrink-0">
                              <Shield size={12} className="text-[#6b7280]" />
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold text-[#111]">Compatible providers</p>
                              <p className="text-[8.5px] text-[#9ca3af] leading-relaxed">Save real chat links from the providers currently supported by PluriHub.</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            {PROVIDERS.map(p => (
                              <div key={p.name} className="flex items-center gap-2 border border-[#e5e7eb] rounded-lg px-2 py-1.5">
                                <p.Icon size={16} />
                                <div>
                                  <p className="text-[9px] font-medium text-[#111]">{p.name}</p>
                                  <p className="text-[7.5px] text-[#9ca3af]">Ready</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Caption */}
      <div className="flex items-center justify-center gap-6 mt-4 text-xs text-[#52525b]">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#28C840] inline-block" />
          Works on any page
        </span>
        <span className="flex items-center gap-1.5">
          <span className="font-mono text-[#0EA5E9]">⌘⇧P</span>
          toggle anywhere
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#0EA5E9] inline-block" />
          ChatGPT · Claude · Gemini
        </span>
      </div>
    </div>
  )
}
