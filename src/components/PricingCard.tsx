import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface PricingCardProps {
  plan: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  badge?: string
  index: number
}

export default function PricingCard({
  plan, price, period, description, features, highlighted, badge, index
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1, duration: 0.45 }}
      whileHover={{ y: -3 }}
      className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
        highlighted
          ? 'bg-[#0EA5E9]/8 border border-[#0EA5E9]/40 glow-blue-sm'
          : 'bg-[#111] border border-[#1e1e1e] hover:border-[#2a2a2a]'
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-7">
        <h3 className={`font-semibold text-sm mb-2 ${highlighted ? 'text-[#0EA5E9]' : 'text-[#a1a1aa]'}`}>{plan}</h3>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-bold text-white">{price}</span>
          {period && <span className="text-[#52525b] text-base">{period}</span>}
        </div>
        <p className="text-[#71717a] text-sm leading-relaxed">{description}</p>
      </div>

      <ul className="space-y-3">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check size={15} className={`mt-0.5 flex-shrink-0 ${highlighted ? 'text-[#0EA5E9]' : 'text-[#52525b]'}`} />
            <span className="text-[#a1a1aa] text-sm leading-relaxed">{feat}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
