'use client'

import { motion } from 'framer-motion'
import { BarChart3, Flame, Zap } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PuzzleVisualization } from '@/components/ui/PuzzleVisualization'
import { HeatmapVisualization } from '@/components/ui/HeatmapVisualization'
import { FEATURE_CARDS } from '@/lib/constants'

const iconMap = {
  BarChart3,
  Flame,
  Zap,
}

const visualMap = {
  productivity: PuzzleVisualization,
  heatmap: HeatmapVisualization,
  plugins: null, // Will show animated plugin cards
}

function PluginRecommendations() {
  const plugins = [
    { name: 'Smart Copy', usage: 'High' },
    { name: 'Quick Select', usage: 'Medium' },
    { name: 'Batch Edit', usage: 'Recommended' },
  ]

  return (
    <div className="space-y-3 max-w-xs mx-auto">
      {plugins.map((plugin, index) => (
        <motion.div
          key={plugin.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex items-center justify-between p-3 bg-background-secondary/30 border border-border-default rounded-lg"
        >
          <span className="text-sm text-text-primary">{plugin.name}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            plugin.usage === 'High' ? 'bg-accent-primary/20 text-accent-primary' :
            plugin.usage === 'Medium' ? 'bg-accent-secondary/20 text-accent-secondary' :
            'bg-accent-tertiary/20 text-accent-tertiary'
          }`}>
            {plugin.usage}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export function FeatureSection() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-gradient">Three Ways to Transform</span>
            <br />
            <span className="text-text-primary">Your BIM Workflow</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Data-driven insights, personalized recommendations, and community-powered solutions
          </p>
        </AnimatedSection>

        {/* Feature cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {FEATURE_CARDS.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            const Visual = feature.id === 'plugins' ? PluginRecommendations : visualMap[feature.id as keyof typeof visualMap]

            return (
              <AnimatedSection
                key={feature.id}
                delay={index * 0.2}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full card-glow rounded-xl p-8 text-center"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <motion.div
                      className="w-16 h-16 mx-auto bg-accent-primary/10 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon className="h-8 w-8 text-accent-primary" />
                    </motion.div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-2xl font-bold font-display mb-4 text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Visual */}
                  <div className="mt-8">
                    {Visual && <Visual />}
                  </div>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                  />
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.8} className="text-center mt-16">
          <motion.div
            className="inline-block p-6 card-glow rounded-xl"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold font-display mb-4 text-text-primary">
              Ready to Complete Your Puzzle?
            </h3>
            <p className="text-text-secondary mb-6">
              Join the waitlist and be among the first to experience BIMSpark
            </p>
            <motion.button
              onClick={() => {
                const waitlistSection = document.getElementById('waitlist')
                waitlistSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Early Access
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}