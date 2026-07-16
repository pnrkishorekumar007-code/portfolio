import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="bp-grid fixed inset-0 w-full h-screen bg-paper z-[100000] flex flex-col items-center justify-center"
        >
          <div className="bp-readout absolute top-8 left-8 text-[10px] uppercase text-ink/40">
            System.Status: <span className="text-orange">Booting</span>
          </div>
          <div className="bp-readout absolute top-8 right-8 text-[10px] uppercase text-ink/40">
            Build: {new Date().getFullYear()}.01
          </div>

          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative font-display text-5xl md:text-7xl uppercase tracking-tight"
          >
            <div className="text-ink/15">
              Kishore Kumar<span className="text-orange/30">.</span>
            </div>

            <motion.div
              className="absolute top-0 left-0 text-ink overflow-hidden whitespace-nowrap"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
            >
              Kishore Kumar<span className="text-orange">.</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="mt-8 h-[2px] bg-orange max-w-[220px] w-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
