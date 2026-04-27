const PROVIDERS = [
  {
    name: 'ChatGPT',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#10A37F" />
        <path d="M17.5 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" stroke="white" strokeWidth="1.4" fill="none" />
        <path d="M12 8v4l2.5 2.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Claude',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#D97706" />
        <path d="M12 6.5L8 17.5h2l.8-2.2h2.4l.8 2.2h2L12 6.5Zm-0.7 7L12 9.8l.7 3.7h-1.4Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Gemini',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#4A8CF7" />
        <path d="M12 5c0 3.9-3.1 7-7 7 3.9 0 7 3.1 7 7 0-3.9 3.1-7 7-7-3.9 0-7-3.1-7-7Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Perplexity',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#1a1a1a" />
        <path d="M12 4v16M4 12h16M6.34 6.34l11.32 11.32M17.66 6.34L6.34 17.66" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'NotebookLM',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#8B5CF6" />
        <rect x="7" y="6" width="10" height="13" rx="1.5" stroke="white" strokeWidth="1.4" fill="none" />
        <path d="M9 10h6M9 13h4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Grok',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#111" />
        <path d="M7 7l10 10M17 7L7 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'DeepSeek',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#2563EB" />
        <path d="M7 15c2-4 4-6 5-7 1 1 3 3 5 7" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Mistral',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#FF7000" />
        <rect x="6" y="7" width="4" height="4" rx="0.5" fill="white" />
        <rect x="14" y="7" width="4" height="4" rx="0.5" fill="white" />
        <rect x="10" y="11" width="4" height="4" rx="0.5" fill="white" />
        <rect x="6" y="15" width="4" height="2" rx="0.5" fill="white" />
        <rect x="14" y="15" width="4" height="2" rx="0.5" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Copilot',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#0EA5E9" />
        <path d="M8 10a4 4 0 0 1 8 0v2a4 4 0 0 1-8 0v-2Z" fill="white" opacity="0.9" />
        <circle cx="10" cy="10.5" r="1" fill="#0EA5E9" />
        <circle cx="14" cy="10.5" r="1" fill="#0EA5E9" />
        <path d="M10 16s2 1.5 4 0" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Meta AI',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#0081FB" />
        <path d="M6 12c0-2 .8-4 2-5s2.5-.5 3.5 1l.5 1 .5-1c1-1.5 2.3-2 3.5-1s2 3 2 5-1 4-3 4-3-2-3-4-1 4-3 4-3-2-3-4Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Poe',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#7C3AED" />
        <circle cx="9.5" cy="10.5" r="1.2" fill="white" />
        <circle cx="14.5" cy="10.5" r="1.2" fill="white" />
        <path d="M8 15s4 2 8 0" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 6v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
]

const SEPARATOR = (
  <span className="w-px h-4 bg-[#2a2a2a] mx-2 flex-shrink-0" aria-hidden="true" />
)

function TapeItem({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 flex-shrink-0">
      {icon}
      <span className="text-sm font-medium text-[#71717a] whitespace-nowrap">{name}</span>
      {SEPARATOR}
    </span>
  )
}

export default function ProviderTape() {
  const items = [...PROVIDERS, ...PROVIDERS]

  return (
    <div className="relative border-y border-[#1e1e1e] py-5 overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} />

      <div className="flex marquee-track w-max">
        {items.map((p, i) => (
          <TapeItem key={i} name={p.name} icon={p.icon} />
        ))}
      </div>
    </div>
  )
}
