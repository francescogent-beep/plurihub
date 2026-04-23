import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const rows = [
  { without: '15+ AI tabs open', with: '1 persistent sidebar' },
  { without: 'Cmd+Tab → hunt → click → wait', with: 'Cmd+Shift+P → instant' },
  { without: 'Lost conversations everywhere', with: 'Organized workspaces' },
  { without: 'RAM-hungry tab hoard', with: 'Lightweight lazy panel' },
  { without: 'No context between AIs', with: 'Switch in one click' },
  { without: 'Start fresh each session', with: 'Chats persist forever' },
]

export default function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden rounded-xl border border-[#1e1e1e]"
    >
      {/* Header */}
      <div className="grid grid-cols-2 bg-[#111]">
        <div className="px-6 py-4 border-b border-r border-[#1e1e1e] flex items-center gap-2">
          <X size={14} className="text-[#ef4444]" />
          <span className="text-[#ef4444] font-semibold text-sm">Without PluriHub</span>
        </div>
        <div className="px-6 py-4 border-b border-[#1e1e1e] flex items-center gap-2">
          <Check size={14} className="text-[#0EA5E9]" />
          <span className="text-[#0EA5E9] font-semibold text-sm">With PluriHub</span>
        </div>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.35 }}
          className="grid grid-cols-2 group hover:bg-[#0EA5E9]/3 transition-colors"
        >
          <div className="px-6 py-3.5 border-b border-r border-[#1e1e1e] flex items-center gap-2">
            <X size={12} className="text-[#52525b] flex-shrink-0" />
            <span className="text-[#52525b] text-sm">{row.without}</span>
          </div>
          <div className="px-6 py-3.5 border-b border-[#1e1e1e] flex items-center gap-2">
            <Check size={12} className="text-[#0EA5E9] flex-shrink-0" />
            <span className="text-[#a1a1aa] text-sm group-hover:text-white transition-colors">{row.with}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
