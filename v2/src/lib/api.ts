import { WaitlistFormData, ApiResponse } from '@/types'

const API_ENDPOINT = 'https://n8n.brdg.kr/webhook/51ab7dc0-54e7-4f88-bae9-d216f6641165'
const API_USERNAME = 'ideook'
// Note: Password should be stored in environment variable in production
const API_PASSWORD = process.env.NEXT_PUBLIC_API_PASSWORD || ''

export async function submitWaitlistEmail(data: WaitlistFormData): Promise<ApiResponse> {
  try {
    const credentials = btoa(`${API_USERNAME}:${API_PASSWORD}`)
    
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`,
      },
      body: JSON.stringify({ email: data.email }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // Parse response if needed for future use
    await response.json()
    
    return {
      success: true,
      message: 'Successfully joined the waitlist! We\'ll be in touch soon.',
    }
  } catch (error) {
    console.error('Waitlist submission error:', error)
    
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    }
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}