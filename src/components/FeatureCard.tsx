import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="group relative bg-[#111] border border-[#1e1e1e] rounded-2xl p-7 hover:border-[#0EA5E9]/30 transition-all duration-300 cursor-default"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#0EA5E9]/10 to-transparent rounded-2xl" />
      </div>

      <div className="w-11 h-11 rounded-xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center mb-5 group-hover:bg-[#0EA5E9]/15 group-hover:border-[#0EA5E9]/40 transition-all duration-300">
        <Icon size={20} className="text-[#0EA5E9]" />
      </div>

      <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#0EA5E9] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#71717a] text-sm leading-relaxed group-hover:text-[#a1a1aa] transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  )
}
