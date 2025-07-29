'use client'

import { motion, type Variants } from "framer-motion"
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  EyeSlashIcon,
  ServerStackIcon,
  UsersIcon,
  SparklesIcon,
  TrophyIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  CubeIcon
} from "@heroicons/react/24/outline"

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
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const shieldVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const roadmapFeatures = [
  {
    icon: PuzzlePieceIcon,
    title: "Plugin Store",
    description: "Tagged by behavior, not just name",
    gradient: "from-neon-blue to-neon-purple",
    delay: 0
  },
  {
    icon: TrophyIcon,
    title: "Gamified Journey",
    description: "Usage improvement with achievements",
    gradient: "from-neon-purple to-neon-pink",
    delay: 0.2
  },
  {
    icon: ChartBarIcon,
    title: "Team Analytics",
    description: "Leaderboards & insights (opt-in only)",
    gradient: "from-neon-green to-neon-blue",
    delay: 0.4
  }
]

const privacyCommitments = [
  {
    icon: ShieldCheckIcon,
    title: "No Sensitive Data Collection",
    description: "Your project files and personal information stay private",
    color: "neon-green"
  },
  {
    icon: ServerStackIcon,
    title: "Full Offline Analysis",
    description: "Core features work completely offline (advanced features may require connection)",
    color: "neon-blue"
  },
  {
    icon: EyeSlashIcon,
    title: "No Personal Information Stored",
    description: "We only analyze usage patterns, never personal or project data",
    color: "neon-purple"
  },
  {
    icon: LockClosedIcon,
    title: "Enterprise-Level Privacy",
    description: "Built with the highest privacy standards for professional use",
    color: "neon-pink"
  }
]

export default function TrustSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,136,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,95,255,0.15),transparent_50%)]" />

      {/* Floating security elements */}
      <div className="absolute top-16 left-16 w-12 h-12 border-2 border-neon-green/30 rounded-lg rotate-12 animate-float" />
      <div className="absolute top-32 right-24 w-8 h-8 bg-neon-blue/20 rounded-full animate-pulse" />
      <div className="absolute bottom-24 left-32 w-6 h-6 border border-neon-purple/40 rotate-45 animate-pulse delay-1000" />
      
      {/* Shield pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-24 h-24">
          <ShieldCheckIcon className="w-full h-full text-neon-green animate-pulse" />
        </div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20">
          <LockClosedIcon className="w-full h-full text-neon-blue animate-pulse delay-700" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Privacy-First Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div 
              variants={shieldVariants}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-2xl mb-8 relative"
            >
              <ShieldCheckIcon className="w-10 h-10 text-neon-green" />
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-neon-blue/10 rounded-2xl blur-xl animate-pulse-glow" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-foreground">We respect</span>
              <br />
              <span className="gradient-text">your privacy</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              BIMSpark is designed with enterprise-level privacy in mind. 
              Your sensitive data never leaves your machine—period.
            </p>
          </motion.div>

          {/* Privacy Commitments Grid */}
          <motion.div variants={itemVariants} className="mb-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyCommitments.map((commitment, index) => (
                <motion.div
                  key={commitment.title}
                  variants={itemVariants}
                  className="glass-effect rounded-xl p-6 hover:neon-glow transition-all duration-500 group relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${commitment.color}/20 to-${commitment.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-${commitment.color}/30 group-hover:to-${commitment.color}/20 transition-all duration-300`}>
                      <commitment.icon className={`w-6 h-6 text-${commitment.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {commitment.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>

                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`absolute bottom-2 right-2 w-8 h-8 bg-${commitment.color}/30 rounded-full blur-sm`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Built by Experts Banner */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="glass-effect rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-2xl flex items-center justify-center mr-4">
                    <CubeIcon className="w-8 h-8 text-neon-purple" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-foreground">Built by Revit power users</h3>
                    <p className="text-muted-foreground">for real workflows</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Created by professionals who understand the daily challenges of BIM work. 
                  We know what matters because we&apos;ve been in your shoes.
                </p>
              </div>

              {/* Animated Revit-style ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green opacity-50" />
            </div>
          </motion.div>

          {/* Roadmap Preview */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-neon-pink/20 to-neon-green/20 rounded-2xl mb-6">
                <GlobeAltIcon className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="gradient-text">Roadmap preview</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Exciting features coming to transform your BIM workflow
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {roadmapFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="glass-effect rounded-xl p-8 text-center group hover:neon-glow transition-all duration-500 relative overflow-hidden"
                  whileHover={{ y: -10, scale: 1.05 }}
                  custom={index}
                >
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient}/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:${feature.gradient}/30 transition-all duration-300`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <feature.icon className="w-8 h-8 text-neon-blue group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-3 text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="flex items-center justify-center text-neon-blue group-hover:text-neon-purple transition-colors duration-300">
                      <span className="font-medium mr-2">Coming soon</span>
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-3 h-3 bg-neon-${i % 2 === 0 ? 'blue' : 'purple'}/50 rounded-full`}
                        style={{
                          top: `${20 + i * 25}%`,
                          right: `${10 + i * 15}%`,
                        }}
                        animate={{
                          y: [0, -8, 0],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: feature.delay + i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-neon-green mr-2" />
                <span>No tracking scripts</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-neon-blue mr-2" />
                <span>Minimal data collection</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-neon-purple mr-2" />
                <span>Offline-first design</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-neon-pink mr-2" />
                <span>Enterprise-ready privacy</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}