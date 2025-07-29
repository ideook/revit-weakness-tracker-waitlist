'use client'

import { WaitlistForm } from '@/components/ui/WaitlistForm'

export default function HomePage() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    waitlistSection?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <main className="bg-background-primary text-text-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-accent-primary bg-accent-primary/10 border border-accent-primary/20 rounded-full">
            Where BIM meets insight, speed, and fun
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Complete your BIM puzzle.
            </span>
          </h1>
          
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            It's not about using tools — it's about tools working for you.
          </p>
          
          <p className="text-lg text-text-muted italic mb-12">
            "BIM used to be boring. Not anymore."
          </p>
          
          <button 
            onClick={scrollToWaitlist}
            className="btn-primary mb-12 hover:scale-105 transition-transform duration-300"
          >
            Join the Waitlist
          </button>
          
          {/* Simple Puzzle Visualization */}
          <div className="mb-12">
            <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto mb-4">
              {[true, false, true, true, false, true, false, true, true, false, true, false].map((filled, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg border-2 ${
                    filled 
                      ? 'bg-gradient-heatmap border-accent-primary/50' 
                      : 'bg-background-secondary/30 border-border-default border-dashed'
                  }`}
                />
              ))}
            </div>
            <p className="text-text-muted text-sm">
              Discover the missing pieces in your workflow
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-border-default rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-accent-primary rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Three Ways to Transform Your BIM Workflow
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-glow p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-12 h-12 bg-accent-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                📊
              </div>
              <h3 className="text-xl font-semibold mb-4">Productivity Dashboard</h3>
              <p className="text-text-secondary">
                Complete your BIM puzzle with visual insights into your workflow patterns.
              </p>
            </div>
            
            <div className="card-glow p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-12 h-12 bg-accent-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                🔥
              </div>
              <h3 className="text-xl font-semibold mb-4">Command Heatmap</h3>
              <p className="text-text-secondary mb-6">
                Discover which tools you use most and find hidden productivity opportunities.
              </p>
              
              {/* Simple Heatmap */}
              <div className="grid grid-cols-8 gap-1 max-w-48 mx-auto mb-4">
                {[0.9, 0.7, 0.3, 0.8, 0.2, 0.6, 0.4, 0.9, 
                  0.5, 0.8, 0.9, 0.1, 0.7, 0.3, 0.8, 0.4,
                  0.2, 0.4, 0.6, 0.9, 0.3, 0.8, 0.1, 0.7,
                  0.8, 0.2, 0.7, 0.5, 0.9, 0.4, 0.6, 0.3].map((intensity, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-sm ${
                      intensity < 0.2 ? 'bg-background-secondary/20' :
                      intensity < 0.4 ? 'bg-accent-primary/20' :
                      intensity < 0.6 ? 'bg-accent-primary/40' :
                      intensity < 0.8 ? 'bg-accent-primary/60' :
                      'bg-accent-primary'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-3 text-xs text-text-muted">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-background-secondary/20 rounded-sm" />
                  <span>Low</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-accent-primary/40 rounded-sm" />
                  <span>Med</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-accent-primary rounded-sm" />
                  <span>High</span>
                </div>
              </div>
            </div>
            
            <div className="card-glow p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-12 h-12 bg-accent-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Recommendations</h3>
              <p className="text-text-secondary">
                Get personalized plugin suggestions based on your unique usage patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Stories Section */}
      <section className="py-20 px-4 bg-background-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Users Are Saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background-secondary p-8 rounded-2xl border border-border-default">
              <p className="text-lg font-medium mb-4">
                "I didn't realize I was only using a few tools."
              </p>
              <p className="text-text-secondary">
                The empty puzzle pieces helped me discover new workflows.
              </p>
            </div>
            
            <div className="bg-background-secondary p-8 rounded-2xl border border-border-default">
              <p className="text-lg font-medium mb-4">
                "When I saw my focus zone, I changed my entire morning routine."
              </p>
              <p className="text-text-secondary">
                Seeing my workflow helped me control it.
              </p>
            </div>
            
            <div className="bg-background-secondary p-8 rounded-2xl border border-border-default">
              <p className="text-lg font-medium mb-4">
                "I shared a plugin… and made money from it."
              </p>
              <p className="text-text-secondary">
                Turns out my little shortcut was exactly what others needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Ready to Transform Your BIM Workflow?
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-12">
            Join the waitlist and be among the first to experience BIM productivity like never before.
          </p>
          
          <div className="bg-background-secondary p-8 rounded-2xl border border-border-default">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-background-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Built for Trust & Privacy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                🛡️
              </div>
              <h3 className="text-lg font-semibold mb-2">No Sensitive Data</h3>
              <p className="text-sm text-text-secondary">
                No models, drawings, or file names are ever transmitted or stored.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                📶
              </div>
              <h3 className="text-lg font-semibold mb-2">Offline Analysis</h3>
              <p className="text-sm text-text-secondary">
                Full offline analysis supported for secure corporate environments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                🔒
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacy First</h3>
              <p className="text-sm text-text-secondary">
                Only email is collected for registration. No personal information required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}