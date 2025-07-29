'use client'

import { motion } from 'framer-motion'
import { Shield, Wifi, Lock, CheckCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { TRUST_POINTS } from '@/lib/constants'

const iconMap = {
  Shield,
  Wifi,
  Lock,
}

export function TrustSection() {
  return (
    <section className="py-20 px-4 bg-background-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20 rounded-full"
          >
            🔒 Privacy & Security First
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-text-primary">Built for</span>
            <br />
            <span className="text-gradient">Enterprise Security</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Your project data stays yours. BIMSpark analyzes workflow patterns without 
            accessing sensitive project information.
          </p>
        </AnimatedSection>

        {/* Trust points */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {TRUST_POINTS.map((point, index) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap]
            
            return (
              <AnimatedSection
                key={point.title}
                delay={index * 0.2}
                direction="up"
              >
                <motion.div
                  className="text-center p-8 card-glow rounded-xl h-full"
                  whileHover={{ y: -5 }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <motion.div
                      className="w-16 h-16 mx-auto bg-accent-primary/10 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 15 }}
                    >
                      <Icon className="h-8 w-8 text-accent-primary" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-display text-text-primary mb-4">
                    {point.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {point.description}
                  </p>

                  {/* Check mark */}
                  <motion.div
                    className="mt-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-400 mx-auto" />
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Additional security details */}
        <AnimatedSection delay={0.8}>
          <motion.div
            className="max-w-4xl mx-auto p-8 card-glow rounded-xl"
            whileHover={{ scale: 1.01 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold font-display text-text-primary mb-4">
                  What We Analyze vs. What We Don&rsquo;t
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  BIMSpark focuses on workflow patterns and command usage to provide insights 
                  without compromising your project&rsquo;s confidentiality.
                </p>
              </div>
              
              <div className="space-y-4">
                {/* What we analyze */}
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-accent-primary flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    What We Analyze
                  </h4>
                  <ul className="text-sm text-text-secondary space-y-1 pl-7">
                    <li>• Command usage frequency</li>
                    <li>• Workflow patterns</li>
                    <li>• Tool usage statistics</li>
                    <li>• Performance metrics</li>
                  </ul>
                </div>
                
                {/* What we don't */}
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-red-400 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    What We Never Access
                  </h4>
                  <ul className="text-sm text-text-secondary space-y-1 pl-7">
                    <li>• 3D models or drawings</li>
                    <li>• File names or project data</li>
                    <li>• Client information</li>
                    <li>• Proprietary content</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Footer CTA */}
        <AnimatedSection delay={1.0} className="text-center mt-16">
          <motion.div
            className="max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold font-display text-text-primary mb-4">
              Ready to Get Started Securely?
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Join the waitlist for a platform designed with privacy and security at its core. 
              Perfect for enterprise environments and individual professionals alike.
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
              Join Secure Waitlist
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}