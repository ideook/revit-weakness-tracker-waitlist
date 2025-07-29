'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { WaitlistFormData } from '@/types'
import { submitWaitlistEmail, validateEmail } from '@/lib/api'

interface WaitlistFormProps {
  className?: string
}

export function WaitlistForm({ className = '' }: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>()

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const result = await submitWaitlistEmail(data)
      
      if (result.success) {
        setSubmitStatus('success')
        setMessage(result.message)
        reset()
      } else {
        setSubmitStatus('error')
        setMessage(result.message)
      }
    } catch {
      setSubmitStatus('error')
      setMessage('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-text-muted" />
          </div>
          
          <input
            {...register('email', {
              required: 'Email is required',
              validate: (value) => validateEmail(value) || 'Please enter a valid email address',
            })}
            type="email"
            placeholder="Enter your email address"
            className="w-full pl-12 pr-4 py-4 bg-background-secondary/50 backdrop-blur-sm border border-border-default rounded-lg text-text-primary placeholder-text-muted glow-border focus:outline-none transition-all duration-300"
            disabled={isSubmitting}
          />
          
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-400 flex items-center gap-1"
            >
              <AlertCircle className="h-4 w-4" />
              {errors.email.message}
            </motion.p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        >
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                Joining...
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Send className="h-5 w-5" />
                Join the Waitlist
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </form>

      <AnimatePresence>
        {submitStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-4 p-4 rounded-lg flex items-center gap-2 ${
              submitStatus === 'success'
                ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}
          >
            {submitStatus === 'success' ? (
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
            )}
            <p className="text-sm">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}