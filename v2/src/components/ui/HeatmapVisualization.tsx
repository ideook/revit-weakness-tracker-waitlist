'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface HeatmapCell {
  id: number
  intensity: number
  delay: number
}

export function HeatmapVisualization({ className = '' }: { className?: string }) {
  const [cells, setCells] = useState<HeatmapCell[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Create a 8x6 heatmap grid with fixed intensity pattern
    const intensityPattern = [
      0.9, 0.7, 0.3, 0.8, 0.2, 0.6, 0.4, 0.9,
      0.5, 0.8, 0.9, 0.1, 0.7, 0.3, 0.8, 0.4,
      0.2, 0.4, 0.6, 0.9, 0.3, 0.8, 0.1, 0.7,
      0.8, 0.2, 0.7, 0.5, 0.9, 0.4, 0.6, 0.3,
      0.4, 0.9, 0.1, 0.8, 0.6, 0.2, 0.7, 0.5,
      0.7, 0.3, 0.8, 0.4, 0.1, 0.9, 0.5, 0.6
    ]
    
    const newCells: HeatmapCell[] = []
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 8; col++) {
        const id = row * 8 + col
        newCells.push({
          id,
          intensity: intensityPattern[id],
          delay: (id * 0.03) % 1.5,
        })
      }
    }
    setCells(newCells)
  }, [])

  if (!mounted) {
    return <div className={`relative ${className} h-32`} />
  }

  const getIntensityColor = (intensity: number) => {
    if (intensity < 0.2) return 'bg-background-secondary/20'
    if (intensity < 0.4) return 'bg-accent-primary/20'
    if (intensity < 0.6) return 'bg-accent-primary/40'
    if (intensity < 0.8) return 'bg-accent-primary/60'
    return 'bg-accent-primary'
  }

  const getIntensityGlow = (intensity: number) => {
    if (intensity < 0.6) return ''
    return 'shadow-[0_0_8px_rgba(0,196,154,0.4)]'
  }

  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-8 gap-1 max-w-sm mx-auto">
        {cells.map((cell) => (
          <motion.div
            key={cell.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: cell.delay,
              duration: 0.5,
              type: 'spring',
            }}
            className={`
              aspect-square rounded-sm
              ${getIntensityColor(cell.intensity)}
              ${getIntensityGlow(cell.intensity)}
            `}
          >
            {cell.intensity > 0.7 && (
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: cell.delay + 1,
                }}
                className="w-full h-full bg-white/20 rounded-sm"
              />
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="mt-4 flex items-center justify-center gap-4 text-xs text-text-muted"
      >
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-background-secondary/20 rounded-sm" />
          <span>Low</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-accent-primary/40 rounded-sm" />
          <span>Medium</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-accent-primary rounded-sm" />
          <span>High</span>
        </div>
      </motion.div>
      
      {/* Command labels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="mt-4 text-center text-sm text-text-muted"
      >
        Command Usage Frequency
      </motion.div>
    </div>
  )
}