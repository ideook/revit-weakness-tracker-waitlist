'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { AnimationProps } from '@/types'

interface AnimatedSectionProps extends AnimationProps {
  children: ReactNode
  className?: string
}

const getVariants = (direction: AnimationProps['direction'] = 'up') => {
  const directions = {
    up: { x: 0, y: 20 },
    down: { x: 0, y: -20 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  }

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
}: AnimatedSectionProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.section
      ref={elementRef}
      className={className}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={getVariants(direction)}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
    >
      {children}
    </motion.section>
  )
}