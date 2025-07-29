'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { USER_STORIES } from '@/lib/constants'

export function UserStorySection() {
  return (
    <section className="py-20 px-4 bg-background-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-text-primary">Real Stories from</span>
            <br />
            <span className="text-gradient">BIM Professionals</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how understanding workflow patterns transforms daily productivity
          </p>
        </AnimatedSection>

        {/* Story cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {USER_STORIES.map((story, index) => (
            <AnimatedSection
              key={story.id}
              delay={index * 0.2}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                className="h-full card-glow rounded-xl p-8 relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                {/* Quote icon */}
                <div className="mb-6">
                  <motion.div
                    className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 15 }}
                  >
                    <Quote className="h-6 w-6 text-accent-primary" />
                  </motion.div>
                </div>

                {/* Quote */}
                <blockquote className="text-lg font-medium text-text-primary mb-6 leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                {/* Insight */}
                <div className="border-l-2 border-accent-primary/30 pl-4">
                  <p className="text-text-secondary italic">
                    {story.insight}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <motion.div
                    className="w-20 h-20 border border-accent-primary/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                </div>

                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom insight */}
        <AnimatedSection delay={0.8} className="text-center mt-16">
          <motion.div
            className="max-w-4xl mx-auto p-8 card-glow rounded-xl"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-2xl font-bold font-display mb-4 text-text-primary">
              Your Story Could Be Next
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Every BIM professional has unique patterns and untapped potential. 
              BIMSpark reveals the insights hidden in your daily work, helping you 
              optimize workflows you didn&rsquo;t even know existed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-primary rounded-full" />
                Productivity Insights
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-secondary rounded-full" />
                Workflow Optimization
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-tertiary rounded-full" />
                Skill Development
              </span>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}