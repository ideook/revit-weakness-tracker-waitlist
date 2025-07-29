'use client';

import { useEffect } from 'react';
import WaitlistForm from '@/components/WaitlistForm';
import Card from '@/components/ui/Card';
import { setupScrollAnimations } from '@/lib/utils';

export default function Home() {
  useEffect(() => {
    const observer = setupScrollAnimations();
    return () => observer.disconnect();
  }, []);
  return (
    <main className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <div className="animate-on-scroll">
            {/* Brand Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-highlight-blue rounded-full text-primary-blue font-medium text-sm mb-8">
              <div className="w-2 h-2 bg-primary-blue rounded-full mr-2 animate-pulse-bright"></div>
              BIMSpark - Where BIM meets insight, speed, and fun
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              BIM used to be{' '}
              <span className="text-text-secondary line-through decoration-2 decoration-text-secondary/40">boring</span>.{' '}
              <br className="hidden sm:block" />
              <span className="text-primary-blue bg-gradient-to-r from-primary-blue to-primary-mint bg-clip-text text-transparent">
                Not anymore.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-12 max-w-4xl mx-auto leading-loose-plus font-light">
              Finally, BIM projects that feel like solving a puzzle — 
              <span className="text-text-primary font-medium"> productive, insightful, and even fun.</span>
            </p>
            
            {/* Email Signup */}
            <div className="mb-8">
              <WaitlistForm />
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-text-secondary">
              <div className="flex items-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-mint mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="whitespace-nowrap">No sensitive data collected</span>
              </div>
              <div className="flex items-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-mint mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="whitespace-nowrap">Works in secure environments</span>
              </div>
              <div className="flex items-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-mint mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="whitespace-nowrap">No spam, just launch updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 md:py-32 bg-background-gray">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Three keys to unlock your
              <span className="block text-primary-blue bg-gradient-to-r from-primary-blue to-primary-mint bg-clip-text text-transparent">
                BIM potential
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-loose-plus">
              It's not about using tools — it's about tools working for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Productivity Metrics */}
            <Card className="animate-on-scroll group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-highlight-blue to-transparent opacity-50 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-blue/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary">Productivity Metrics</h3>
                <p className="text-text-secondary text-lg leading-relaxed-plus mb-4">
                  Visualize your command usage with interactive heatmaps and discover 
                  workflow patterns you never knew existed.
                </p>
                <div className="text-primary-blue font-medium flex items-center">
                  Command heatmaps & usage analytics
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Card>

            {/* Personalized Marketplace */}
            <Card className="animate-on-scroll group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-highlight-mint to-transparent opacity-50 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-mint to-primary-mint/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary">Personalized Marketplace</h3>
                <p className="text-text-secondary text-lg leading-relaxed-plus mb-4">
                  Get plugin recommendations based on your actual usage patterns. 
                  Find tools that fit your specific workflow, not generic suggestions.
                </p>
                <div className="text-primary-mint font-medium flex items-center">
                  Smart plugin recommendations
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Card>

            {/* Peer Insights */}
            <Card className="animate-on-scroll group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-highlight-blue to-transparent opacity-50 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-mint rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary">Peer Insights</h3>
                <p className="text-text-secondary text-lg leading-relaxed-plus mb-4">
                  Compare your productivity with peers anonymously and discover 
                  new ways to optimize your BIM workflows through community wisdom.
                </p>
                <div className="text-primary-blue font-medium flex items-center">
                  Anonymous peer comparison
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Teaser - Complete your BIM puzzle */}
      <section className="py-20 md:py-32 bg-background-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-highlight-blue/30 to-highlight-mint/30"></div>
        <div className="max-w-7xl mx-auto container-padding relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="animate-on-scroll">
              <div className="inline-flex items-center px-3 py-1 bg-primary-blue/10 rounded-full text-primary-blue font-medium text-sm mb-6">
                <div className="w-2 h-2 bg-primary-blue rounded-full mr-2"></div>
                Coming Soon
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Complete your
                <span className="block text-primary-blue bg-gradient-to-r from-primary-blue to-primary-mint bg-clip-text text-transparent">
                  BIM puzzle
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-loose-plus">
                It's not about using tools — it's about tools working for you. 
                See how your pieces fit together.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-1">Puzzle-style productivity dashboard</h3>
                    <p className="text-text-secondary">Each command becomes a piece, showing gaps in your workflow and opportunities for growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-mint rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-1">Personalized command heatmap</h3>
                    <p className="text-text-secondary">See your usage patterns in beautiful, interactive visualizations that reveal hidden insights.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-1">Plugin recommendations that fit</h3>
                    <p className="text-text-secondary">Discover tools that complement your actual working style, not generic recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Teaser */}
            <div className="animate-on-scroll">
              <div className="relative">
                {/* Puzzle Grid Mockup */}
                <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 relative">
                  <div className="grid grid-cols-4 gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {/* Row 1 */}
                    <div className="aspect-square bg-primary-blue rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-blue/80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">Copy</div>
                    </div>
                    <div className="aspect-square bg-primary-mint rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-mint to-primary-mint/80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">Move</div>
                    </div>
                    <div className="aspect-square bg-highlight-blue border-2 border-dashed border-primary-blue/30 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary-blue/20 rounded"></div>
                    </div>
                    <div className="aspect-square bg-primary-blue rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-blue/80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">Wall</div>
                    </div>
                    
                    {/* Row 2 */}
                    <div className="aspect-square bg-highlight-mint border-2 border-dashed border-primary-mint/30 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary-mint/20 rounded"></div>
                    </div>
                    <div className="aspect-square bg-primary-blue rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-blue/80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">Door</div>
                    </div>
                    <div className="aspect-square bg-primary-mint rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-mint to-primary-mint/80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">Text</div>
                    </div>
                    <div className="aspect-square bg-highlight-blue border-2 border-dashed border-primary-blue/30 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary-blue/20 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Row 3 */}
                    <div className="aspect-square bg-primary-mint rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-mint to-primary-mint/80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">Trim</div>
                    </div>
                    <div className="aspect-square bg-highlight-mint border-2 border-dashed border-primary-mint/30 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary-mint/20 rounded"></div>
                    </div>
                    <div className="aspect-square bg-primary-blue rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-blue/80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">View</div>
                    </div>
                    <div className="aspect-square bg-primary-mint rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-mint to-primary-mint/80"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">Dim</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-text-secondary mb-2">Your BIM Command Usage</div>
                    <div className="flex justify-center gap-4 text-xs">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-primary-blue rounded mr-2"></div>
                        <span className="text-text-secondary">High usage</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-primary-mint rounded mr-2"></div>
                        <span className="text-text-secondary">Medium usage</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 border-2 border-dashed border-gray-300 rounded mr-2"></div>
                        <span className="text-text-secondary">Opportunities</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-mint rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary-blue rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Stories */}
      <section className="py-20 md:py-32 bg-background-gray">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Real stories from
              <span className="block text-primary-blue bg-gradient-to-r from-primary-blue to-primary-mint bg-clip-text text-transparent">
                BIM professionals
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-loose-plus">
              Early users are already discovering new ways to work smarter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Testimonial 1 */}
            <Card className="animate-on-scroll group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-blue to-primary-mint"></div>
              <div className="relative pl-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed-plus text-text-primary">
                  "I didn't realize I was only using a few tools."
                </blockquote>
                
                <p className="text-lg text-text-secondary mb-6 leading-relaxed-plus">
                  The empty puzzle pieces helped me discover new workflows I never knew existed.
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-mint rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-text-primary">Architect</div>
                    <div className="text-sm text-text-secondary">Large Firm</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="animate-on-scroll group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-mint to-primary-blue"></div>
              <div className="relative pl-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-mint/10 to-primary-mint/5 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-mint" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed-plus text-text-primary">
                  "When I saw my focus zone, I changed my entire morning routine."
                </blockquote>
                
                <p className="text-lg text-text-secondary mb-6 leading-relaxed-plus">
                  Seeing my workflow patterns helped me take control and optimize my daily work habits.
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-mint to-primary-blue rounded-full flex items-center justify-center text-white font-semibold">
                    E
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-text-primary">Engineer</div>
                    <div className="text-sm text-text-secondary">MEP Consultant</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="animate-on-scroll group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-blue to-primary-mint"></div>
              <div className="relative pl-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue/10 to-primary-mint/5 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed-plus text-text-primary">
                  "I shared a plugin… and made money from it."
                </blockquote>
                
                <p className="text-lg text-text-secondary mb-6 leading-relaxed-plus">
                  Turns out my little workflow shortcut was exactly what others in the community needed.
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-mint rounded-full flex items-center justify-center text-white font-semibold">
                    B
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-text-primary">BIM Manager</div>
                    <div className="text-sm text-text-secondary">Construction Firm</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Privacy */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-highlight-blue to-highlight-mint relative overflow-hidden">
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="max-w-6xl mx-auto container-padding relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-text-primary">
              Built for
              <span className="block text-primary-blue bg-gradient-to-r from-primary-blue to-primary-mint bg-clip-text text-transparent">
                secure environments
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-loose-plus">
              Enterprise-grade privacy and security from day one
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Privacy First */}
            <div className="animate-on-scroll">
              <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-blue/80 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold mb-4 text-text-primary">Privacy First</h3>
                    <p className="text-lg text-text-secondary leading-relaxed-plus mb-6">
                      No sensitive project data is ever sent or stored. No models, 
                      drawings, or file names are transmitted. Your work stays private.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-primary-blue font-medium">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        No project files transmitted
                      </div>
                      <div className="flex items-center text-primary-blue font-medium">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Anonymous usage analytics only
                      </div>
                      <div className="flex items-center text-primary-blue font-medium">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        GDPR & SOC 2 compliant
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Ready */}
            <div className="animate-on-scroll">
              <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-mint to-primary-mint/80 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold mb-4 text-text-primary">Corporate Ready</h3>
                    <p className="text-lg text-text-secondary leading-relaxed-plus mb-6">
                      Full offline analysis supported. Works in secure company 
                      environments with no external data requirements or internet dependency.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-primary-mint font-medium">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Works completely offline
                      </div>
                      <div className="flex items-center text-primary-mint font-medium">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Firewall-friendly deployment
                      </div>
                      <div className="flex items-center text-primary-mint font-medium">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Enterprise support included
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                Ready to transform your BIM workflow?
              </h3>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed-plus">
                Join thousands of professionals who are making BIM productive, insightful, and fun again.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-text-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-primary-mint/10"></div>
        <div className="max-w-7xl mx-auto container-padding relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-mint rounded-2xl mb-6">
              <div className="text-2xl font-bold text-white">B</div>
            </div>
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              BIMSpark
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Where BIM meets insight, speed, and fun. Join the revolution making 
              BIM work productive, insightful, and even enjoyable.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-mint rounded-full mr-2"></div>
                <span className="whitespace-nowrap">Privacy First</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-blue rounded-full mr-2"></div>
                <span className="whitespace-nowrap">Enterprise Ready</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-mint rounded-full mr-2"></div>
                <span className="whitespace-nowrap">Community Driven</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}