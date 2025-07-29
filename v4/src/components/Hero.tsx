'use client'

import { Button } from "@/components/ui/button"
import WaitlistForm from "@/components/WaitlistForm"
import { ChartBarIcon, SparklesIcon, UsersIcon } from "@heroicons/react/24/outline"
import { motion, type Variants } from "framer-motion"
import { useParallax } from "@/hooks/useScrollAnimation"

const valueProps = [
  {
    icon: ChartBarIcon,
    title: "Visual Command Heatmaps",
    description: "See exactly which Revit commands slow you down with beautiful, interactive visualizations"
  },
  {
    icon: SparklesIcon,
    title: "Personalized Plugin Recommendations", 
    description: "Get AI-powered suggestions for plugins that match your workflow patterns"
  },
  {
    icon: UsersIcon,
    title: "Community-Powered Insights",
    description: "Learn from anonymized data of thousands of BIM professionals"
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function Hero() {
  const { offset: parallaxOffset } = useParallax(0.3)
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background effects with parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      />
      
      {/* Enhanced floating orbs with parallax movement */}
      <motion.div 
        className="absolute top-20 left-20 w-32 h-32 bg-neon-blue/20 rounded-full blur-xl"
        animate={{ 
          y: [0, -10, 0],
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
        style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-24 h-24 bg-neon-purple/20 rounded-full blur-xl"
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 0.95, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        style={{ transform: `translateY(${parallaxOffset * -0.1}px)` }}
      />
      <motion.div 
        className="absolute top-1/2 left-10 w-16 h-16 bg-neon-green/20 rounded-full blur-lg"
        animate={{ 
          y: [0, -8, 0],
          x: [0, 5, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.5
        }}
        style={{ transform: `translateY(${parallaxOffset * 0.15}px)` }}
      />
      
      {/* Additional ambient particles */}
      <div className="absolute top-32 right-32 w-8 h-8 bg-neon-pink/10 rounded-full blur-md animate-pulse" 
           style={{ transform: `translateY(${parallaxOffset * -0.05}px)` }} />
      <div className="absolute bottom-32 left-32 w-12 h-12 bg-neon-blue/10 rounded-full blur-lg animate-pulse delay-700" 
           style={{ transform: `translateY(${parallaxOffset * 0.08}px)` }} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero slogan */}
          <motion.p 
            className="text-lg md:text-xl text-neon-blue font-medium mb-4 tracking-wide"
            variants={itemVariants}
          >
            BIM used to be boring. Not anymore.
          </motion.p>
          
          {/* Main headline */}
          <motion.h1 
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 sm:mb-8 leading-tight px-4 sm:px-0"
            variants={itemVariants}
          >
            <span className="gradient-text">BIMSpark</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed px-4 sm:px-0"
            variants={itemVariants}
          >
            Transform your Revit workflow with AI-powered analytics that reveal hidden patterns, 
            boost productivity, and connect you with the BIM community.
          </motion.p>
          
          {/* Waitlist Form */}
          <motion.div 
            className="mb-20"
            variants={itemVariants}
          >
            <WaitlistForm />
          </motion.div>
          
          {/* Value propositions */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-0"
            variants={itemVariants}
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                className="glass-effect-enhanced rounded-xl p-6 interactive-glow group cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all duration-300">
                    <prop.icon className="w-8 h-8 text-neon-blue group-hover:text-neon-purple transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Additional CTA text */}
          <motion.p 
            className="text-sm text-muted-foreground mt-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join over <span className="text-neon-green font-semibold">5,000+</span> BIM professionals 
            already on the waitlist. Be the first to experience the future of Revit analytics.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}