import { useRef, useState } from 'react'
import { useMotionValueEvent } from 'framer-motion'

export default function TagCard({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const ref = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!ref.current || !containerRef.current) return

    const cardRect = ref.current.getBoundingClientRect()
    const containerRect = containerRef.current.getBoundingClientRect()

    const cardTopRelativeToContainer = cardRect.top - containerRect.top
    const containerHeight = containerRect.height
    const triggerY = cardTopRelativeToContainer + 50
    const lineTipY = latest * containerHeight

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true)
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false)
    }
  })

  return (
    <div
      ref={ref}
      data-aos={aosType || 'fade-up'}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 p-2 relative flex flex-col items-center hover:-translate-y-1 transition-all duration-700 z-10 border ${className} ${
        isActive
          ? 'bg-orange border-orange shadow-[0_20px_50px_rgba(225,90,42,0.35)]'
          : 'bg-paper border-ink/15 shadow-[0_10px_30px_rgba(23,20,13,0.06)]'
      }`}
    >
      <div
        className={`absolute -top-3 left-4 bp-readout text-[9px] uppercase px-2 py-0.5 border transition-colors duration-700 ${
          isActive ? 'text-ink bg-orange border-ink/30' : 'text-ink-soft bg-paper border-ink/20'
        }`}
      >
        Step {number}
      </div>

      <div
        className={`w-full h-full mt-6 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
          isActive ? 'bg-ink/10' : 'bg-paper-2'
        }`}
      >
        <span
          className={`font-display text-3xl mb-2 transition-colors duration-700 ${
            isActive ? 'text-ink/40' : 'text-ink/20'
          }`}
        >
          {number}
        </span>

        <h3
          className={`font-display text-2xl uppercase mb-3 tracking-tight transition-colors duration-700 ${
            isActive ? 'text-ink' : 'text-ink'
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
            isActive ? 'text-ink/80' : 'text-ink-soft'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  )
}
