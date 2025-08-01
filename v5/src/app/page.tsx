"use client";

import { WaitlistForm } from "@/components/waitlist-form";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1
  }
};

// Puzzle piece animation component
function AnimatedPuzzlePiece({ index, delay = 0 }: { index: number; delay?: number }) {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  const getIntensity = () => {
    if (index === 5) return 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30';
    if (index === 9) return 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30';
    if (index === 2) return 'bg-gradient-to-r from-purple-400 to-purple-500 text-slate-950 shadow-lg shadow-purple-500/30';
    if (index % 3 === 0) return 'bg-slate-700/80 text-slate-300';
    return 'bg-slate-800/60 text-slate-500';
  };
  
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180, opacity: 0 }}
      animate={isActive ? { 
        scale: 1, 
        rotate: 0, 
        opacity: 1,
        transition: { 
          duration: 0.8, 
          ease: [0.4, 0, 0.2, 1],
          type: "spring",
          stiffness: 100
        }
      } : {}}
      whileHover={{ 
        scale: 1.05, 
        transition: { duration: 0.2 } 
      }}
      className={`h-8 rounded-lg flex items-center justify-center text-xs font-semibold cursor-pointer ${getIntensity()}`}
    >
      {index === 5 ? '92%' : index === 9 ? '78%' : index === 2 ? '85%' : ''}
    </motion.div>
  );
}

// Heatmap cell component
function HeatmapCell({ index, delay = 0 }: { index: number; delay?: number }) {
  const getIntensity = () => {
    if (index === 4 || index === 12 || index === 18) return 'bg-emerald-500 shadow-lg shadow-emerald-500/40';
    if (index === 7 || index === 15 || index === 23) return 'bg-emerald-400 shadow-md shadow-emerald-400/30';
    if (index === 2 || index === 9 || index === 20 || index === 27) return 'bg-emerald-300 shadow-sm shadow-emerald-300/20';
    if (index % 3 === 0) return 'bg-slate-600';
    return 'bg-slate-700';
  };
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        transition: { 
          delay: delay * 0.03, 
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        }
      }}
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      className={`h-6 rounded transition-all duration-300 cursor-pointer hover:brightness-125 ${getIntensity()}`}
    />
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ['0%', '0%'] : ['0%', '50%']);
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true });
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rounded-lg"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.6, 1] 
          }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-24 h-24 border border-emerald-400 rounded-lg"
          animate={{ 
            rotate: [45, 45, 405, 45],
            y: [0, -20, 0, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.6, 1] 
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.6, 1] 
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-dashed border-purple-400 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Dashboard Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950/40 to-emerald-950/20">
          <div className="grid grid-cols-12 h-full opacity-30">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div 
                key={i} 
                className="border-r border-b border-slate-800/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: i * 0.005, duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Header */}
      <motion.header 
        ref={headerRef}
        className="container mx-auto px-4 py-6 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <span className="text-slate-950 font-bold text-lg">BS</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              BIMSpark
            </span>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-20">
            {/* Catchphrase */}
            <motion.div 
              className="mb-8" 
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium mb-6">
                🚀 Welcome to the Future of BIM
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.span 
                className="block text-slate-200 mb-2"
                variants={fadeInUp}
              >
                BIM used to be
              </motion.span>
              <motion.span 
                className="block text-slate-500 line-through mb-4"
                variants={fadeInUp}
              >
                boring.
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-cyan-300 via-emerald-300 to-purple-300 bg-clip-text text-transparent"
                variants={fadeInUp}
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: [0.4, 0, 0.6, 1] 
                }}
              >
                Not anymore.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              What if your BIM tools <span className="text-cyan-400 font-semibold">adapted to you?</span> 
              Track your productivity, discover hidden patterns, and turn your Revit workflow into 
              <span className="text-emerald-400 font-semibold"> an engaging puzzle to solve.</span>
            </motion.p>
            
            {/* Data Visualization Mockup */}
            <div className="relative mb-12">
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Command Heatmap Preview */}
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-600/30">
                    <h4 className="text-sm font-semibold text-cyan-300 mb-3">Command Heatmap</h4>
                    <div className="grid grid-cols-4 gap-1">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <motion.div 
                          key={i} 
                          className={`h-3 rounded-sm cursor-pointer hover:brightness-125 transition-all duration-200 ${
                            i % 3 === 0 ? 'bg-cyan-400' : 
                            i % 4 === 0 ? 'bg-emerald-400' : 
                            i % 5 === 0 ? 'bg-purple-400' : 'bg-slate-600'
                          }`}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          whileHover={{ 
                            scale: 1.2,
                            transition: { duration: 0.2 }
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Productivity Metrics */}
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-600/30">
                    <h4 className="text-sm font-semibold text-emerald-300 mb-3">Productivity Score</h4>
                    <div className="text-3xl font-bold text-emerald-400 mb-2">87%</div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '87%' }}
                        transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
                  </div>
                  
                  {/* Plugin Recommendations */}
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-600/30">
                    <h4 className="text-sm font-semibold text-purple-300 mb-3">Smart Plugins</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-xs text-slate-300">AutoDimension+</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-xs text-slate-300">SmartGrid Pro</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Core Value Propositions */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-4">
                    Know Your Patterns
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    You know Revit. But do you know how <em>you</em> use Revit? Discover your command patterns, productivity metrics, and hidden workflow insights.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-300 mb-4">
                    Smart Plugin Discovery
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Get personalized plugin recommendations based on your actual usage patterns. Stop wasting time—find tools that work for your specific workflow.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-purple-300 mb-4">
                    Make Work Feel Like Play
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Transform your BIM workflow into an engaging puzzle. Track progress, compete with peers, and turn productivity into a game you want to win.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Teaser Features Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  What if your BIM tools adapted to you?
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Get a sneak peek at the interactive features that will transform how you work with Revit
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Puzzle-style Dashboard Preview */}
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                      <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2m0 0V5a2 2 0 012-2h12a2 2 0 012 2v4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">Puzzle Dashboard</h3>
                    <p className="text-sm text-slate-400 mb-4">Your productivity as an interactive puzzle</p>
                  </div>
                  
                  {/* Interactive Dashboard Mock */}
                  <div className="relative bg-slate-900/60 rounded-xl p-4 border border-slate-700/50">
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <AnimatedPuzzlePiece key={i} index={i} delay={i * 200} />
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-cyan-400 font-semibold">Daily Score: 87%</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Command Heatmap Preview */}
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                      <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-emerald-300 mb-2">Command Heatmaps</h3>
                    <p className="text-sm text-slate-400 mb-4">Visualize your most-used commands</p>
                  </div>
                  
                  {/* Interactive Heatmap Mock */}
                  <div className="relative bg-slate-900/60 rounded-xl p-4 border border-slate-700/50">
                    <div className="grid grid-cols-6 gap-1 mb-4">
                      {Array.from({ length: 30 }).map((_, i) => (
                        <HeatmapCell key={i} index={i} delay={i} />
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-emerald-400 font-semibold">Wall Tool: 234 uses</span>
                      <span className="text-slate-400">This week</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plugin Discovery Preview */}
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                      <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-purple-300 mb-2">Smart Discovery</h3>
                    <p className="text-sm text-slate-400 mb-4">Plugins that match your workflow</p>
                  </div>
                  
                  {/* Interactive Plugin List Mock */}
                  <div className="relative bg-slate-900/60 rounded-xl p-4 border border-slate-700/50">
                    <div className="space-y-3">
                      {[
                        { name: 'AutoDimension+', match: '95%', color: 'purple' },
                        { name: 'SmartGrid Pro', match: '89%', color: 'cyan' },
                        { name: 'WallWizard', match: '82%', color: 'emerald' }
                      ].map((plugin, i) => (
                        <div 
                          key={i} 
                          className="flex items-center justify-between p-2 bg-slate-800/50 rounded-lg border border-slate-700/30 group-hover:border-purple-500/30 transition-all duration-300"
                          style={{
                            animationDelay: `${i * 200}ms`
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${
                              plugin.color === 'purple' ? 'bg-purple-400' :
                              plugin.color === 'cyan' ? 'bg-cyan-400' : 'bg-emerald-400'
                            } group-hover:animate-pulse`}></div>
                            <span className="text-sm font-medium text-slate-300">{plugin.name}</span>
                          </div>
                          <span className={`text-xs font-bold ${
                            plugin.color === 'purple' ? 'text-purple-400' :
                            plugin.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
                          }`}>{plugin.match}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-center">
                      <span className="text-xs text-slate-400">Based on your usage patterns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Case Showcases */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-200">
                Stories from the future of BIM
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Scroll through these scenarios and imagine your workflow transformed
              </p>
            </div>

            <div className="space-y-16 max-w-5xl mx-auto">
              {/* Use Case 1: Discover unused commands */}
              <div className="group">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-1">
                    <div className="bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-8 group-hover:border-cyan-400/40 transition-all duration-500">
                      <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                          Discovery
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-4">
                        "Discover what commands you never use."
                      </h3>
                      <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                        Sarah, a senior architect, discovered she was using only 23% of Revit's modeling tools. 
                        BIMSpark revealed powerful commands she'd never explored, boosting her productivity by 40%.
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-2 border-slate-900"></div>
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-slate-900"></div>
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-slate-900"></div>
                        </div>
                        <span className="text-sm text-slate-400">+2,847 architects already tracking</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:order-2">
                    <div className="relative">
                      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 group-hover:scale-105 transition-transform duration-500">
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-cyan-300 mb-3">Command Usage Analysis</h4>
                        </div>
                        <div className="space-y-3">
                          {[
                            { cmd: 'Wall', usage: 45, color: 'bg-cyan-500' },
                            { cmd: 'Door', usage: 28, color: 'bg-cyan-400' },
                            { cmd: 'Window', usage: 22, color: 'bg-cyan-300' },
                            { cmd: 'Curtain Wall', usage: 5, color: 'bg-slate-600', hidden: true },
                            { cmd: 'Railing', usage: 3, color: 'bg-slate-600', hidden: true },
                            { cmd: 'Roof', usage: 2, color: 'bg-slate-600', hidden: true }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <span className="text-sm text-slate-300 w-20">{item.cmd}</span>
                                <div className="flex-1 bg-slate-800 rounded-full h-2 w-32">
                                  <div 
                                    className={`h-2 rounded-full transition-all duration-1000 ${item.color} ${item.hidden ? 'opacity-50' : ''}`}
                                    style={{ 
                                      width: `${item.usage}%`,
                                      animationDelay: `${i * 200}ms`
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <span className={`text-xs font-medium ${item.hidden ? 'text-slate-500' : 'text-cyan-400'}`}>
                                {item.usage}%
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-700/50">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-yellow-400">77% of tools remain unexplored</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Case 2: Track what works */}
              <div className="group">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2">
                    <div className="bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 border border-emerald-500/20 rounded-2xl p-8 group-hover:border-emerald-400/40 transition-all duration-500">
                      <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
                          Optimization
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-emerald-300 mb-4">
                        "Stop wasting time. Track what works."
                      </h3>
                      <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                        Marcus identified his most efficient modeling sequences and eliminated 2.5 hours of 
                        redundant work per week. His team adopted his optimized workflow company-wide.
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <span className="text-sm text-emerald-400 font-semibold">+47% efficiency gain</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <div className="relative">
                      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 group-hover:scale-105 transition-transform duration-500">
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-emerald-300 mb-3">Weekly Productivity Trends</h4>
                        </div>
                        <div className="relative h-32 mb-4">
                          <svg className="w-full h-full" viewBox="0 0 300 120">
                            <defs>
                              <linearGradient id="productivityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                                <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                              </linearGradient>
                            </defs>
                            <polyline
                              points="20,100 60,80 100,85 140,60 180,45 220,40 260,25"
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="3"
                              className="group-hover:animate-pulse"
                            />
                            <polygon
                              points="20,100 60,80 100,85 140,60 180,45 220,40 260,25 260,100 20,100"
                              fill="url(#productivityGradient)"
                            />
                            {[20, 60, 100, 140, 180, 220, 260].map((x, i) => (
                              <circle
                                key={i}
                                cx={x}
                                cy={[100, 80, 85, 60, 45, 40, 25][i]}
                                r="4"
                                fill="#10b981"
                                className="group-hover:animate-bounce"
                                style={{ animationDelay: `${i * 100}ms` }}
                              />
                            ))}
                          </svg>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-emerald-400">2.5hrs</div>
                            <div className="text-xs text-slate-400">Saved/week</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-emerald-400">87%</div>
                            <div className="text-xs text-slate-400">Efficiency</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-emerald-400">+47%</div>
                            <div className="text-xs text-slate-400">Improvement</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Case 3: Share and save someone's day */}
              <div className="group">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-1">
                    <div className="bg-gradient-to-br from-purple-500/5 to-purple-600/5 border border-purple-500/20 rounded-2xl p-8 group-hover:border-purple-400/40 transition-all duration-500">
                      <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
                          Community
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-purple-300 mb-4">
                        "Share your plugin. Save someone's day."
                      </h3>
                      <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                        Elena shared her custom Revit plugin through BIMSpark. Within a month, 
                        it was downloaded 1,200+ times, helping architects worldwide solve similar challenges.
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="text-sm text-purple-400 font-semibold">1,247 lives improved</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:order-2">
                    <div className="relative">
                      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 group-hover:scale-105 transition-transform duration-500">
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-purple-300 mb-3">Plugin Impact Dashboard</h4>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-slate-950 font-bold text-sm">EP</span>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-200">AutoWall Align</div>
                                <div className="text-xs text-slate-400">by Elena P.</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-purple-400">1,247</div>
                              <div className="text-xs text-slate-400">downloads</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                              <div className="text-lg font-bold text-purple-400">4.9★</div>
                              <div className="text-xs text-slate-400">Rating</div>
                            </div>
                            <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                              <div className="text-lg font-bold text-purple-400">89</div>
                              <div className="text-xs text-slate-400">Reviews</div>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-lg">
                            <div className="text-xs text-purple-300 mb-1">Latest Review:</div>
                            <div className="text-xs text-slate-300 italic">
                              "This plugin saved me 3 hours on my hospital project. Elena, you're a lifesaver!"
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium mb-8">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Built by Revit power users
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                    Trusted by architects who get it
                  </span>
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  We're not just building software—we're architects and BIM specialists who live in Revit every day
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Credibility Element 1 */}
                <div className="group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-12 0H3m2 0h2M9 7h6m-6 4h6m-6 4h6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-3">15+ Years Combined</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Our team has delivered complex BIM projects across healthcare, commercial, and residential sectors
                    </p>
                  </div>
                </div>

                {/* Credibility Element 2 */}
                <div className="group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-emerald-300 mb-3">Custom Plugin Creators</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      We've built and published Revit plugins used by thousands of architects worldwide
                    </p>
                  </div>
                </div>

                {/* Credibility Element 3 */}
                <div className="group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-purple-300 mb-3">Performance Obsessed</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      We understand the frustration of slow workflows and have optimized processes for Fortune 500 firms
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-slate-700/50">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                      <div className="flex -space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-2 border-slate-900 flex items-center justify-center">
                          <span className="text-slate-950 font-bold text-sm">MK</span>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-slate-900 flex items-center justify-center">
                          <span className="text-slate-950 font-bold text-sm">SL</span>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-slate-900 flex items-center justify-center">
                          <span className="text-slate-950 font-bold text-sm">AJ</span>
                        </div>
                      </div>
                      <span className="text-sm text-slate-400">+2,847 architects</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      "Finally, someone who understands what it's like to spend 8 hours a day in Revit"
                    </p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-slate-300">Active development</span>
                      <span className="text-xs text-slate-500">•</span>
                      <span className="text-sm text-slate-400">Daily commits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Vision/Roadmap Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-8">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Future Vision
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  Where we're headed
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                BIMSpark is just the beginning. We're building an entire ecosystem to make BIM work more engaging, 
                collaborative, and rewarding than ever before.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Roadmap Item 1: Plugin Store */}
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                        <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                      <div className="inline-flex items-center px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-medium mb-4">
                        Coming Q2 2025
                      </div>
                      <h3 className="text-2xl font-bold text-cyan-300 mb-4">Plugin Marketplace</h3>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-slate-300 leading-relaxed">
                        A curated marketplace where architects can discover, purchase, and share custom Revit plugins 
                        based on their specific workflow patterns.
                      </p>
                      
                      {/* Feature highlights */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-slate-300">AI-powered plugin recommendations</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-slate-300">One-click installation & updates</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-slate-300">Revenue sharing for creators</span>
                        </div>
                      </div>
                    </div>

                    {/* Mock preview */}
                    <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700/50">
                      <div className="space-y-2">
                        {[
                          { name: 'SmartDimension Pro', price: '$49', rating: '4.9' },
                          { name: 'AutoWall Align', price: '$29', rating: '4.8' },
                          { name: 'GridMaster Plus', price: '$39', rating: '4.7' }
                        ].map((plugin, i) => (
                          <div key={i} className="flex items-center justify-between p-2 bg-slate-800/30 rounded text-xs">
                            <span className="text-slate-300">{plugin.name}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-cyan-400">{plugin.rating}★</span>
                              <span className="text-cyan-300 font-semibold">{plugin.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Roadmap Item 2: Gamification */}
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:scale-105">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                        <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="inline-flex items-center px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-medium mb-4">
                        Coming Q3 2025
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-300 mb-4">Revit Gamification</h3>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-slate-300 leading-relaxed">
                        Transform your daily Revit workflow into an engaging RPG-style experience with achievements, 
                        skill trees, and progression systems.
                      </p>
                      
                      {/* Feature highlights */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-slate-300">Achievement & badge systems</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-slate-300">Skill trees for different specialties</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-slate-300">Daily/weekly challenges</span>
                        </div>
                      </div>
                    </div>

                    {/* Mock preview */}
                    <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700/50">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-emerald-400 rounded flex items-center justify-center">
                              <span className="text-slate-950 text-xs font-bold">12</span>
                            </div>
                            <span className="text-xs text-slate-300">Modeling Master</span>
                          </div>
                          <div className="text-xs text-emerald-400">2,847 XP</div>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full" style={{width: '73%'}}></div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400">Wall Wizard unlocked!</span>
                          <span className="text-emerald-400">73% to next level</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Roadmap Item 3: Team Leaderboard */}
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:scale-105">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                        <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="inline-flex items-center px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-medium mb-4">
                        Coming Q4 2025
                      </div>
                      <h3 className="text-2xl font-bold text-purple-300 mb-4">Team Leaderboards</h3>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-slate-300 leading-relaxed">
                        Foster healthy competition and collaboration with team productivity leaderboards, 
                        skill sharing, and collective achievements.
                      </p>
                      
                      {/* Feature highlights */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-slate-300">Real-time team rankings</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-slate-300">Collaborative skill sharing</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-slate-300">Company-wide competitions</span>
                        </div>
                      </div>
                    </div>

                    {/* Mock preview */}
                    <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700/50">
                      <div className="space-y-2">
                        {[
                          { name: 'Sarah K.', score: '2,847', rank: 1, color: 'text-yellow-400' },
                          { name: 'Marcus L.', score: '2,634', rank: 2, color: 'text-slate-300' },
                          { name: 'Elena P.', score: '2,489', rank: 3, color: 'text-amber-600' }
                        ].map((player, i) => (
                          <div key={i} className="flex items-center justify-between p-2 bg-slate-800/30 rounded text-xs">
                            <div className="flex items-center space-x-2">
                              <span className={`font-bold ${player.color}`}>#{player.rank}</span>
                              <span className="text-slate-300">{player.name}</span>
                            </div>
                            <span className="text-purple-400 font-semibold">{player.score} pts</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roadmap Timeline */}
              <div className="mt-16 pt-8 border-t border-slate-700/50">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-slate-200 mb-2">Our Development Timeline</h3>
                  <p className="text-slate-400 text-sm">Transparent updates on our progress</p>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-500 to-purple-500"></div>
                  
                  <div className="space-y-8">
                    {[
                      { quarter: 'Q1 2025', title: 'BIMSpark Core Launch', status: 'active', color: 'cyan' },
                      { quarter: 'Q2 2025', title: 'Plugin Marketplace', status: 'upcoming', color: 'emerald' },
                      { quarter: 'Q3 2025', title: 'Gamification System', status: 'upcoming', color: 'yellow' },
                      { quarter: 'Q4 2025', title: 'Team Features', status: 'upcoming', color: 'purple' }
                    ].map((milestone, i) => (
                      <div key={i} className="relative flex items-center justify-center">
                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-950 ${
                          milestone.status === 'active' ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'
                        }`}></div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 max-w-xs mx-auto ml-8">
                          <div className="text-center">
                            <div className={`text-sm font-semibold mb-1 ${
                              milestone.color === 'cyan' ? 'text-cyan-400' :
                              milestone.color === 'emerald' ? 'text-emerald-400' :
                              milestone.color === 'yellow' ? 'text-yellow-400' : 'text-purple-400'
                            }`}>
                              {milestone.quarter}
                            </div>
                            <div className="text-slate-200 font-medium">{milestone.title}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Messages */}
          <div className="mb-16">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-lg text-slate-400 italic">
                "What if work felt like solving a puzzle?"
              </div>
              <div className="text-lg text-slate-400 italic">
                "Your BIM productivity is measurable—and improvable."
              </div>
              <div className="text-lg text-slate-400 italic">
                "A new way to track, share, and enjoy your Revit workflow."
              </div>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="max-w-lg mx-auto mb-12">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent mb-6">
                Ready to make BIM fun again?
              </h2>
              <WaitlistForm />
            </div>
          </div>

          {/* Coming Soon Badge */}
          <div className="mt-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium">
              <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mr-3 animate-pulse"></span>
              Coming Soon • Early 2025 • Built by Revit Power Users
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-20 relative z-10">
        <div className="text-center text-slate-500 text-sm">
          <p>&copy; 2025 BIMSpark. Where BIM meets data, productivity, and fun.</p>
        </div>
      </footer>
    </div>
  );
}
