import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), { stiffness: 300, damping: 30 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mouseX.set(x)
    mouseY.set(y)
    ref.current?.style.setProperty('--mx', `${x * 100}%`)
    ref.current?.style.setProperty('--my', `${y * 100}%`)
  }

  function handleMouseLeave() {
    mouseX.set(0.5)
    mouseY.set(0.5)
    ref.current?.style.setProperty('--mx', '50%')
    ref.current?.style.setProperty('--my', '50%')
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      className="group relative bg-[#111] border border-[#1e1e1e] rounded-2xl p-7 hover:border-[#0EA5E9]/40 transition-colors duration-300 cursor-default"
    >
      {/* Edge glow follows mouse quadrant */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(14,165,233,0.08) 0%, transparent 60%)' }}
      />

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
