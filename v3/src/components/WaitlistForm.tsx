'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { submitWaitlistEmail, validateEmail } from '@/lib/api';
import { FormState, ApiErrorType } from '@/types';

export default function WaitlistForm() {
  const [formState, setFormState] = useState<FormState>({
    data: { email: '' },
    errors: {},
    isSubmitting: false,
    isSubmitted: false,
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormState(prev => ({
      ...prev,
      data: { email },
      errors: { ...prev.errors, email: undefined },
    }));
  };

  const getErrorStyleByType = (errorType?: ApiErrorType) => {
    switch (errorType) {
      case 'DUPLICATE_ERROR':
        return 'bg-yellow-50 border border-yellow-200 text-yellow-800';
      case 'VALIDATION_ERROR':
        return 'bg-orange-50 border border-orange-200 text-orange-800';
      case 'RATE_LIMIT_ERROR':
        return 'bg-blue-50 border border-blue-200 text-blue-800';
      case 'SERVER_ERROR':
      case 'NETWORK_ERROR':
        return 'bg-red-50 border border-red-200 text-red-700';
      case 'CONFIG_ERROR':
        return 'bg-purple-50 border border-purple-200 text-purple-800';
      default:
        return 'bg-red-50 border border-red-200 text-red-700';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { data } = formState;
    
    // Reset errors
    setFormState(prev => ({ ...prev, errors: {} }));
    
    // Validate email
    const emailValidation = validateEmail(data.email.trim());
    if (!emailValidation.isValid) {
      setFormState(prev => ({
        ...prev,
        errors: { email: emailValidation.error }
      }));
      return;
    }

    // Submit form
    setFormState(prev => ({ ...prev, isSubmitting: true }));
    
    try {
      const result = await submitWaitlistEmail(data.email.trim());
      
      if (result.success) {
        setFormState(prev => ({
          ...prev,
          isSubmitting: false,
          isSubmitted: true,
          data: { email: '' },
        }));
      } else {
        // Handle specific error types with appropriate styling
        const errorMessage = result.error || 'Something went wrong';
        setFormState(prev => ({
          ...prev,
          isSubmitting: false,
          errors: { 
            general: errorMessage,
            errorType: result.errorType 
          },
        }));
      }
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        errors: { 
          general: 'Network error. Please check your connection and try again.',
          errorType: 'NETWORK_ERROR' as ApiErrorType
        },
      }));
    }
  };

  if (formState.isSubmitted) {
    return (
      <div className="max-w-md mx-auto text-center">
        <div className="bg-highlight-mint p-6 rounded-lg border border-primary-mint/20">
          <div className="w-12 h-12 bg-primary-mint rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">You're on the waitlist!</h3>
          <p className="text-text-secondary">
            We'll notify you when BIMSpark launches. Get ready to make BIM fun again!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={formState.data.email}
            onChange={handleEmailChange}
            error={formState.errors.email}
            disabled={formState.isSubmitting}
            required
            className="flex-1"
          />
          <Button
            type="submit"
            loading={formState.isSubmitting}
            disabled={formState.isSubmitting || !formState.data.email}
            className="whitespace-nowrap"
          >
            Join the Waitlist
          </Button>
        </div>
        
        {formState.errors.general && (
          <div className={`p-3 rounded-lg text-sm ${getErrorStyleByType(formState.errors.errorType as ApiErrorType)}`}>
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 mt-0.5">
                {formState.errors.errorType === 'DUPLICATE_ERROR' && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
                {(formState.errors.errorType === 'SERVER_ERROR' || formState.errors.errorType === 'NETWORK_ERROR') && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
                {formState.errors.errorType === 'RATE_LIMIT_ERROR' && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                )}
                {!formState.errors.errorType && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                {formState.errors.general}
              </div>
            </div>
          </div>
        )}
        
        <p className="text-sm text-text-secondary text-center">
          No spam, no sensitive data collected. Just updates on launch.
        </p>
      </form>
    </div>
  );
}