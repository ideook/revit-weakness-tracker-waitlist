'use client'

import { motion, type Variants } from "framer-motion"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { 
  PuzzlePieceIcon, 
  ChartBarIcon, 
  SparklesIcon,
  CubeIcon,
  CommandLineIcon,
  UserGroupIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon
} from "@heroicons/react/24/outline"

// Mock data for heatmap visualization
const mockHeatmapData = [
  { command: "Wall", usage: 95, efficiency: 85, gradient: "from-neon-blue/60 to-neon-blue" },
  { command: "Door", usage: 78, efficiency: 92, gradient: "from-neon-green/60 to-neon-green" },
  { command: "Window", usage: 82, efficiency: 76, gradient: "from-neon-purple/60 to-neon-purple" },
  { command: "Room", usage: 65, efficiency: 88, gradient: "from-neon-pink/60 to-neon-pink" },
  { command: "Floor", usage: 71, efficiency: 81, gradient: "from-neon-blue/60 to-neon-blue" },
  { command: "Roof", usage: 43, efficiency: 94, gradient: "from-neon-green/60 to-neon-green" },
]

// Mock plugin recommendations
const mockPlugins = [
  { name: "Wall Optimizer Pro", match: 96, category: "Modeling", icon: CubeIcon },
  { name: "Quick Dimensions", match: 89, category: "Annotation", icon: CommandLineIcon },
  { name: "Family Manager", match: 84, category: "Content", icon: PuzzlePieceIcon },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const dashboardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
}

export default function FeatureHighlights() {
  const [activeFeature, setActiveFeature] = useState(0)
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -200px 0px'
  })

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,95,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,217,255,0.1),transparent_50%)]" />

      {/* Floating geometric elements */}
      <div className="absolute top-20 right-20 w-16 h-16 border border-neon-purple/30 rotate-45 animate-pulse" />
      <div className="absolute bottom-40 left-16 w-12 h-12 border border-neon-green/30 rotate-12 animate-pulse delay-700" />
      <div className="absolute top-1/2 right-32 w-8 h-8 bg-neon-pink/20 blur-sm animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Main headline */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">What if your BIM tools</span>
              <br />
              <span className="text-foreground">adapted to you?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stop fighting with Revit. Let BIMSpark reveal your hidden patterns, 
              optimize your workflow, and unlock your true potential.
            </p>
          </motion.div>

          {/* Interactive Dashboard Preview */}
          <motion.div 
            variants={dashboardVariants}
            className="mb-24"
          >
            <div className="glass-effect rounded-2xl p-8 max-w-6xl mx-auto relative overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                    <PuzzlePieceIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Your BIMSpark Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Live insights from your Revit workflow</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Live</span>
                </div>
              </div>

              {/* Command Heatmap Visualization */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium flex items-center">
                    <ChartBarIcon className="w-5 h-5 mr-2 text-neon-blue" />
                    Command Usage Heatmap
                  </h4>
                  <div className="space-y-3">
                    {mockHeatmapData.map((item, index) => (
                      <motion.div
                        key={item.command}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.usage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="relative"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{item.command}</span>
                          <span className="text-xs text-muted-foreground">{item.usage}% usage</span>
                        </div>
                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${item.gradient} rounded-full relative`}
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium flex items-center">
                    <SparklesIcon className="w-5 h-5 mr-2 text-neon-purple" />
                    AI Plugin Recommendations
                  </h4>
                  <div className="space-y-3">
                    {mockPlugins.map((plugin, index) => (
                      <motion.div
                        key={plugin.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="glass-effect rounded-lg p-4 hover:neon-glow transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-neon-green/20 to-neon-pink/20 rounded-lg flex items-center justify-center group-hover:from-neon-green/30 group-hover:to-neon-pink/30 transition-all duration-300">
                            <plugin.icon className="w-5 h-5 text-neon-green" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h5 className="font-medium">{plugin.name}</h5>
                              <span className="text-sm text-neon-green font-semibold">{plugin.match}% match</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{plugin.category}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Puzzle pieces animation overlay */}
              <div className="absolute top-4 right-4 opacity-20">
                <div className="relative w-24 h-24">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-8 h-8 border-2 border-neon-${i % 2 === 0 ? 'blue' : 'purple'}/50`}
                      style={{
                        top: `${Math.floor(i / 2) * 16}px`,
                        left: `${(i % 2) * 16}px`,
                      }}
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 0.95, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Visual Command Heatmaps */}
            <motion.div
              className="glass-effect rounded-xl p-8 hover:neon-glow transition-all duration-500 group cursor-pointer relative overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setActiveFeature(0)}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center mb-6 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all duration-300">
                  <ChartBarIcon className="w-8 h-8 text-neon-blue group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Visual Command Heatmaps
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  See exactly which Revit commands slow you down with beautiful, 
                  interactive visualizations that reveal your workflow patterns.
                </p>
                <div className="flex items-center text-neon-blue group-hover:text-neon-purple transition-colors duration-300">
                  <ArrowTrendingUpIcon className="w-5 h-5 mr-2" />
                  <span className="font-medium">Boost efficiency by 40%</span>
                </div>
              </div>
              
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-transparent" />
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-8 bg-neon-blue/30 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      bottom: "20px",
                    }}
                    animate={{
                      height: activeFeature === 0 ? [32, 48, 32] : 32,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Personalized Plugin Recommendations */}
            <motion.div
              className="glass-effect rounded-xl p-8 hover:neon-glow transition-all duration-500 group cursor-pointer relative overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setActiveFeature(1)}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-lg flex items-center justify-center mb-6 group-hover:from-neon-purple/30 group-hover:to-neon-pink/30 transition-all duration-300">
                  <SparklesIcon className="w-8 h-8 text-neon-purple group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Personalized Plugin Recommendations
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Get AI-powered suggestions for plugins that perfectly match your 
                  workflow patterns and productivity goals.
                </p>
                <div className="flex items-center text-neon-purple group-hover:text-neon-pink transition-colors duration-300">
                  <LightBulbIcon className="w-5 h-5 mr-2" />
                  <span className="font-medium">Smart recommendations</span>
                </div>
              </div>

              {/* Animated plugin icons */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent" />
                {[PuzzlePieceIcon, CubeIcon, CommandLineIcon].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: `${30 + i * 25}%`,
                      right: `${20 + i * 10}%`,
                    }}
                    animate={activeFeature === 1 ? {
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0],
                    } : {}}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    <Icon className="w-6 h-6 text-neon-purple/50" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Community-Powered Insights */}
            <motion.div
              className="glass-effect rounded-xl p-8 hover:neon-glow transition-all duration-500 group cursor-pointer relative overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setActiveFeature(2)}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-lg flex items-center justify-center mb-6 group-hover:from-neon-green/30 group-hover:to-neon-blue/30 transition-all duration-300">
                  <UserGroupIcon className="w-8 h-8 text-neon-green group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Community-Powered Insights
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Learn from anonymized data of thousands of BIM professionals 
                  and discover industry best practices.
                </p>
                <div className="flex items-center text-neon-green group-hover:text-neon-blue transition-colors duration-300">
                  <UserGroupIcon className="w-5 h-5 mr-2" />
                  <span className="font-medium">5,000+ professionals</span>
                </div>
              </div>

              {/* Animated network nodes */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-transparent" />
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-neon-green/50 rounded-full"
                    style={{
                      top: `${25 + i * 15}%`,
                      left: `${70 + (i % 2) * 15}%`,
                    }}
                    animate={activeFeature === 2 ? {
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
                {/* Connection lines */}
                {activeFeature === 2 && (
                  <svg className="absolute inset-0 w-full h-full">
                    {[...Array(3)].map((_, i) => (
                      <motion.line
                        key={i}
                        x1="75%"
                        y1={`${30 + i * 15}%`}
                        x2="85%"
                        y2={`${45 + i * 15}%`}
                        stroke="rgba(0, 255, 136, 0.3)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </svg>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-20"
          >
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your Revit workflow? Join the revolution of data-driven BIM professionals.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse" />
                Real-time analytics
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-2 animate-pulse delay-300" />
                AI-powered insights
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-2 animate-pulse delay-700" />
                Community driven
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}