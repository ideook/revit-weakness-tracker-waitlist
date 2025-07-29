'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface PuzzlePiece {
  id: number
  x: number
  y: number
  filled: boolean
  delay: number
}

export function PuzzleVisualization({ className = '' }: { className?: string }) {
  const [pieces, setPieces] = useState<PuzzlePiece[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Create a 4x3 puzzle grid with fixed pattern
    const newPieces: PuzzlePiece[] = []
    const filledPattern = [true, false, true, true, false, true, false, true, true, false, true, false]
    const delayPattern = [0.1, 0.3, 0.5, 0.7, 0.2, 0.4, 0.6, 0.8, 0.15, 0.35, 0.55, 0.75]
    
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        const id = row * 4 + col
        newPieces.push({
          id,
          x: col,
          y: row,
          filled: filledPattern[id],
          delay: delayPattern[id],
        })
      }
    }
    setPieces(newPieces)
  }, [])

  if (!mounted) {
    return <div className={`relative ${className} h-32`} />
  }

  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
        {pieces.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: piece.delay,
              duration: 0.8,
              type: 'spring',
              stiffness: 100,
            }}
            className={`
              aspect-square rounded-lg border-2 relative overflow-hidden
              ${piece.filled 
                ? 'bg-gradient-heatmap border-accent-primary/50 shadow-[0_0_15px_rgba(255,221,0,0.3)]' 
                : 'bg-background-secondary/30 border-border-default border-dashed'
              }
            `}
          >
            {piece.filled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: piece.delay + 1,
                }}
                className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"
              />
            )}
            
            {!piece.filled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: piece.delay + 2,
                }}
                className="absolute inset-2 border border-accent-primary/20 rounded-md"
              />
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: 15, top: 20 },
          { left: 75, top: 35 },
          { left: 45, top: 80 },
          { left: 85, top: 60 },
          { left: 25, top: 90 },
          { left: 65, top: 15 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-primary/40 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>
    </div>
  )
}