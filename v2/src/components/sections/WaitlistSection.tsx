'use client'

import { motion } from 'framer-motion'
import { Users, Zap, TrendingUp } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { WaitlistForm } from '@/components/ui/WaitlistForm'

const benefits = [
  {
    icon: Users,
    title: 'Early Access',
    description: 'Be among the first to experience BIMSpark when it launches',
  },
  {
    icon: Zap,
    title: 'Beta Features',
    description: 'Get exclusive access to new features before general release',
  },
  {
    icon: TrendingUp,
    title: 'Priority Support',
    description: 'Direct line to our team for feedback and feature requests',
  },
]

export function WaitlistSection() {
  return (
    <section id="waitlist" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20 rounded-full"
          >
            🚀 Join the Beta
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-text-primary">Ready to Make</span>
            <br />
            <span className="text-gradient">BIM Work Fun?</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Join our waitlist and be the first to transform your BIM productivity. 
            No spam, just updates on our launch progress.
          </p>
        </AnimatedSection>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={benefit.title}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                className="text-center p-6 card-glow rounded-xl"
                whileHover={{ y: -3 }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto bg-accent-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-accent-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {benefit.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Waitlist form */}
        <AnimatedSection delay={0.4}>
          <motion.div
            className="max-w-md mx-auto p-8 card-glow rounded-xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold font-display text-text-primary mb-2">
                Join the Waitlist
              </h3>
              <p className="text-text-secondary">
                Get notified when BIMSpark launches
              </p>
            </div>
            
            <WaitlistForm />
            
            <div className="mt-6 text-center">
              <p className="text-xs text-text-muted">
                By joining, you agree to receive product updates. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Social proof */}
        <AnimatedSection delay={0.6} className="text-center mt-12">
          <motion.div
            className="inline-flex items-center gap-4 px-6 py-3 bg-background-secondary/30 border border-border-default rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-accent rounded-full border-2 border-background-primary flex items-center justify-center text-xs font-semibold text-white"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-sm text-text-secondary">
              <span className="text-accent-primary font-semibold">100+</span> professionals already joined
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}