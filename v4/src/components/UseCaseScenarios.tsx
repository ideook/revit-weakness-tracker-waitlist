'use client'

import { motion, type Variants } from "framer-motion"
import { useState } from "react"
import { 
  LightBulbIcon,
  ClockIcon,
  PuzzlePieceIcon,
  HeartIcon,
  CommandLineIcon,
  ChartBarIcon,
  SparklesIcon,
  ShareIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline"

// Scenario data based on PRD mini-stories
const scenarios = [
  {
    id: 1,
    title: "Discover Hidden Efficiency",
    subtitle: "Unused commands that can speed up your work",
    story: {
      character: "Sarah, BIM Coordinator",
      situation: "Struggling with repetitive modeling tasks",
      discovery: "BIMSpark reveals 5 time-saving commands she never knew existed",
      outcome: "Reduces modeling time by 3 hours per week"
    },
    icon: LightBulbIcon,
    gradient: "from-neon-blue to-neon-purple",
    steps: [
      { text: "BIMSpark analyzes your workflow patterns", progress: 100 },
      { text: "Identifies overlooked Revit commands", progress: 85 },
      { text: "Shows potential time savings", progress: 92 },
      { text: "Provides guided tutorials", progress: 78 }
    ],
    stats: {
      timeSaved: "3hrs/week",
      commandsFound: "5 new",
      efficiency: "+40%"
    }
  },
  {
    id: 2,
    title: "Peak Performance Hours", 
    subtitle: "Real insights into your most (and least) productive hours",
    story: {
      character: "Marcus, Senior Architect",
      situation: "Feeling burnt out, unsure when he's most productive",
      discovery: "Data shows he's 60% more efficient between 9-11 AM",
      outcome: "Restructures schedule, improves work-life balance"
    },
    icon: ClockIcon,
    gradient: "from-neon-green to-neon-blue",
    steps: [
      { text: "Tracks command usage throughout the day", progress: 100 },
      { text: "Identifies productivity patterns", progress: 88 },
      { text: "Reveals energy peaks and valleys", progress: 95 },
      { text: "Suggests optimal scheduling", progress: 82 }
    ],
    stats: {
      peakHours: "9-11 AM",
      productivity: "+60%",
      burnout: "-45%"
    }
  },
  {
    id: 3,
    title: "Community Gold Mine",
    subtitle: "Find plugins that others use—but you've never tried",
    story: {
      character: "Alex, Junior Designer",
      situation: "Overwhelmed by plugin options, afraid to try new tools",
      discovery: "Sees that similar profiles use 3 specific plugins with 95% satisfaction",
      outcome: "Adopts plugins, becomes team's go-to efficiency expert"
    },
    icon: PuzzlePieceIcon,
    gradient: "from-neon-purple to-neon-pink",
    steps: [
      { text: "Analyzes profiles similar to yours", progress: 100 },
      { text: "Identifies popular plugin combinations", progress: 91 },
      { text: "Shows user satisfaction ratings", progress: 96 },
      { text: "Provides safe trial recommendations", progress: 87 }
    ],
    stats: {
      plugins: "3 perfect",
      satisfaction: "95%",
      adoption: "Safe & Easy"
    }
  },
  {
    id: 4,
    title: "Pay It Forward",
    subtitle: "Share your plugin. Save someone's day",
    story: {
      character: "David, BIM Manager",
      situation: "Has amazing custom workflow, keeps it to himself",
      discovery: "BIMSpark shows 200+ people could benefit from his approach",
      outcome: "Shares knowledge, becomes community hero, builds reputation"
    },
    icon: HeartIcon,
    gradient: "from-neon-pink to-neon-green",
    steps: [
      { text: "Identifies your unique strengths", progress: 100 },
      { text: "Finds professionals who could benefit", progress: 93 },
      { text: "Facilitates knowledge sharing", progress: 89 },
      { text: "Builds your professional reputation", progress: 94 }
    ],
    stats: {
      impact: "200+ people",
      reputation: "+500%",
      community: "Hero Status"
    }
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

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export default function UseCaseScenarios() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null)
  const [playingStory, setPlayingStory] = useState<number | null>(null)

  const playStory = (scenarioId: number) => {
    setPlayingStory(scenarioId)
    // Reset after animation completes
    setTimeout(() => setPlayingStory(null), 4000)
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,217,255,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,0,107,0.1),transparent_50%)]" />
      
      {/* Floating story elements */}
      <div className="absolute top-20 left-20 opacity-20">
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <CommandLineIcon className="w-16 h-16 text-neon-blue/30" />
        </motion.div>
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <ChartBarIcon className="w-12 h-12 text-neon-purple/30" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.p 
              className="text-lg md:text-xl text-neon-green font-medium mb-4 tracking-wide"
              variants={itemVariants}
            >
              Real Stories. Real Results.
            </motion.p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
              <span className="gradient-text">Your BIM Journey</span>
              <br />
              <span className="text-foreground">Transformed</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover how BIMSpark turns everyday BIM professionals into workflow wizards. 
              These aren&apos;t just features—they&apos;re career-changing moments.
            </p>
          </motion.div>

          {/* Scenario Cards Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-8 mb-16"
          >
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.id}
                variants={cardVariants}
                whileHover="hover"
                className="glass-effect rounded-2xl p-8 cursor-pointer relative overflow-hidden group"
                onHoverStart={() => setActiveScenario(scenario.id)}
                onHoverEnd={() => setActiveScenario(null)}
                onClick={() => playStory(scenario.id)}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${scenario.gradient}/10 opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${scenario.gradient}/20 rounded-xl flex items-center justify-center group-hover:${scenario.gradient}/30 transition-all duration-300`}>
                        <scenario.icon className={`w-8 h-8 text-neon-blue group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{scenario.title}</h3>
                        <p className="text-muted-foreground text-sm">{scenario.subtitle}</p>
                      </div>
                    </div>
                    
                    {/* Play Story Button */}
                    <motion.button
                      className={`w-12 h-12 bg-gradient-to-r ${scenario.gradient}/20 hover:${scenario.gradient}/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        playStory(scenario.id)
                      }}
                    >
                      <PlayIcon className="w-6 h-6 text-neon-blue ml-0.5" />
                    </motion.button>
                  </div>

                  {/* Story Timeline */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-sm">
                      <div className="w-3 h-3 bg-neon-blue rounded-full mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Meet {scenario.story.character}</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <div className="w-3 h-3 bg-neon-purple rounded-full mr-3 flex-shrink-0 mt-1" />
                      <span className="text-foreground">{scenario.story.situation}</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <div className="w-3 h-3 bg-neon-green rounded-full mr-3 flex-shrink-0 mt-1" />
                      <span className="text-foreground font-medium">{scenario.story.discovery}</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-neon-pink mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neon-pink font-semibold">{scenario.story.outcome}</span>
                    </div>
                  </div>

                  {/* Progress Steps - Animated when story is playing */}
                  <div className="space-y-3 mb-6">
                    {scenario.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="relative">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-muted-foreground">{step.text}</span>
                          <span className="text-xs text-neon-green font-medium">{step.progress}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${scenario.gradient} rounded-full`}
                            initial={{ width: "0%" }}
                            animate={{ 
                              width: activeScenario === scenario.id || playingStory === scenario.id 
                                ? `${step.progress}%` 
                                : "0%" 
                            }}
                            transition={{ 
                              duration: playingStory === scenario.id ? 0.8 : 0.5,
                              delay: playingStory === scenario.id ? stepIndex * 0.3 : 0
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    {Object.entries(scenario.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-neon-green">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Animations */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {/* Floating particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-neon-blue/50 rounded-full"
                      style={{
                        top: `${20 + i * 25}%`,
                        right: `${10 + i * 5}%`,
                      }}
                      animate={activeScenario === scenario.id ? {
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* Story Playing Overlay */}
                {playingStory === scenario.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-background/90 to-secondary/90 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className={`w-16 h-16 border-4 border-transparent border-t-neon-blue rounded-full mx-auto mb-4`}
                      />
                      <p className="text-neon-blue font-medium">Experience in progress...</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Ready to Write Your Own Success Story?</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of BIM professionals who&apos;ve transformed their workflows with BIMSpark. 
                Your story could be next.
              </p>
              
              {/* Story Stats */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-blue mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Hidden Commands Found</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-green mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-pink mb-1">∞</div>
                  <div className="text-sm text-muted-foreground">Career Possibilities</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse" />
                  Real stories from real users
                </div>
                <ArrowRightIcon className="w-4 h-4 text-neon-blue" />
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-neon-purple rounded-full mr-2 animate-pulse delay-300" />
                  Your success story starts here
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}