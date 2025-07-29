'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  isLoading: boolean
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer)
            return 100
          }
          return prev + Math.random() * 15
        })
      }, 100)

      return () => clearInterval(timer)
    }
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="text-center">
            {/* BIMSpark Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text">
                BIMSpark
              </h1>
            </motion.div>

            {/* Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative w-64 h-2 bg-white/10 rounded-full overflow-hidden mx-auto"
            >
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: [-64, 256] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-4 text-sm text-muted-foreground"
            >
              Initializing BIM Analytics...
            </motion.p>

            {/* Floating Orbs */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-1/3 left-1/4 w-16 h-16 bg-neon-blue/20 rounded-full blur-xl"
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-neon-purple/20 rounded-full blur-lg"
                animate={{ 
                  y: [0, 15, 0],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}