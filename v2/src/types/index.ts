export interface WaitlistFormData {
  email: string
}

export interface ApiResponse {
  success: boolean
  message: string
}

export interface UserStory {
  id: string
  quote: string
  insight: string
  author?: string
}

export interface FeatureCard {
  id: string
  title: string
  description: string
  icon: string
  visual?: React.ReactNode
}

export interface AnimationProps {
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}