// API Types
export interface WaitlistRequest {
  email: string;
}

export type ApiErrorType = 
  | 'VALIDATION_ERROR'
  | 'AUTH_ERROR' 
  | 'DUPLICATE_ERROR'
  | 'RATE_LIMIT_ERROR'
  | 'SERVER_ERROR'
  | 'NETWORK_ERROR'
  | 'CONFIG_ERROR'
  | 'UNKNOWN_ERROR';

export interface ApiError {
  type: ApiErrorType;
  message: string;
  statusCode?: number;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  errorType?: ApiErrorType;
  statusCode?: number;
  data?: any;
}

// Component Types
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  error?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

// Form Types
export interface WaitlistFormData {
  email: string;
}

export interface FormErrors {
  email?: string;
  general?: string;
  errorType?: ApiErrorType;
}

export interface FormState {
  data: WaitlistFormData;
  errors: FormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
}