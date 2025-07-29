'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PuzzleVisualization } from '@/components/ui/PuzzleVisualization'
import { MAIN_HEADLINE, MAIN_SUBHEADLINE } from '@/lib/constants'

export function HeroSection() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    featuresSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <AnimatedSection delay={0.2}>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20 rounded-full"
          >
            <span className="relative">
              Where BIM meets insight, speed, and fun
              <motion.div
                className="absolute inset-0 bg-accent-primary/20 rounded-full blur-sm"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.div>
        </AnimatedSection>

        {/* Main headline */}
        <AnimatedSection delay={0.4}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight">
            <span className="block text-gradient">
              {MAIN_HEADLINE}
            </span>
          </h1>
        </AnimatedSection>

        {/* Subheadline */}
        <AnimatedSection delay={0.6}>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            {MAIN_SUBHEADLINE}
          </p>
        </AnimatedSection>

        {/* Slogan */}
        <AnimatedSection delay={0.8}>
          <div className="mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-lg md:text-xl text-text-muted italic"
            >
              &ldquo;BIM used to be boring. Not anymore.&rdquo;
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Puzzle visualization */}
        <AnimatedSection delay={1.0}>
          <div className="mb-12">
            <PuzzleVisualization className="mb-8" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-text-muted text-sm"
            >
              Discover the missing pieces in your workflow
            </motion.p>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={1.2}>
          <motion.button
            onClick={scrollToFeatures}
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Explore Features
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-border-default rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 bg-accent-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}