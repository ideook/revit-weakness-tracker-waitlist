'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

interface WaitlistFormProps {
  className?: string
}

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  email: string
}

interface ApiResponse {
  success: boolean
  message?: string
}

export default function WaitlistForm({ className = '' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [lastSubmission, setLastSubmission] = useState<number>(0)

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Rate limiting - prevent spam submissions
  const isRateLimited = (): boolean => {
    const now = Date.now()
    const timeSinceLastSubmission = now - lastSubmission
    return timeSinceLastSubmission < 5000 // 5 second cooldown
  }

  const submitToWebhook = async (formData: FormData): Promise<ApiResponse> => {
    const webhookUrl = 'https://n8n.brdg.kr/webhook/51ab7dc0-54e7-4f88-bae9-d216f6641165'
    const username = 'ideook'
    const password = process.env.NEXT_PUBLIC_WEBHOOK_PASSWORD || 'placeholder_password'
    
    const credentials = btoa(`${username}:${password}`)
    
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`,
        },
        body: JSON.stringify({ email: formData.email }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return { success: true, message: data.message }
    } catch (error) {
      console.error('Webhook submission error:', error)
      return { 
        success: false, 
        message: 'Unable to join waitlist. Please try again later.' 
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Rate limiting check
    if (isRateLimited()) {
      setErrorMessage('Please wait before submitting again.')
      setState('error')
      return
    }

    // Validation
    if (!email.trim()) {
      setErrorMessage('Email address is required.')
      setState('error')
      return
    }

    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.')
      setState('error')
      return
    }

    setState('loading')
    setErrorMessage('')
    setLastSubmission(Date.now())

    try {
      const result = await submitToWebhook({ email })
      
      if (result.success) {
        setState('success')
        setEmail('') // Clear form on success
      } else {
        setState('error')
        setErrorMessage(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setState('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  const resetForm = () => {
    setState('idle')
    setErrorMessage('')
  }

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      <AnimatePresence mode="wait">
        {state === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
              className="glass-effect rounded-2xl p-8 neon-glow"
            >
              <CheckCircleIcon className="w-16 h-16 text-neon-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                You&apos;re on the list!
              </h3>
              <p className="text-muted-foreground mb-6">
                We&apos;ll notify you when BIMSpark is ready to transform your Revit workflow.
              </p>
              <Button
                variant="outline"
                onClick={resetForm}
                className="border-neon-green/50 text-neon-green hover:bg-neon-green/10"
              >
                Join Another Email
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="glass-effect rounded-2xl p-8 space-y-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold gradient-text mb-2">
                Join the Waitlist
              </h3>
              <p className="text-muted-foreground">
                Be the first to experience the future of Revit analytics
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border transition-all duration-200 focus:outline-none focus:ring-2 ${
                    state === 'error' && errorMessage.includes('email')
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-white/20 focus:border-neon-blue focus:ring-neon-blue/50'
                  } backdrop-blur-sm text-foreground placeholder-muted-foreground`}
                  disabled={state === 'loading'}
                />
              </div>

              <AnimatePresence>
                {state === 'error' && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm"
                  >
                    <ExclamationCircleIcon className="w-4 h-4 flex-shrink-0" />
                    {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                variant="neon"
                size="lg"
                disabled={state === 'loading'}
                className="w-full relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {state === 'loading' ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                      />
                      Joining Waitlist...
                    </motion.div>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Join the Waitlist
                    </motion.span>
                  )}
                </AnimatePresence>
                
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-green/20 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                We respect your privacy. No spam, unsubscribe anytime.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}