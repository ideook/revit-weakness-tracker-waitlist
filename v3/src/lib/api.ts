import { WaitlistRequest, ApiResponse, ApiErrorType } from '@/types';

export async function submitWaitlistEmail(email: string): Promise<ApiResponse> {
  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email } as WaitlistRequest),
    });

    const result: ApiResponse = await response.json();
    
    // Return the result from our API route
    return result;
    
  } catch (error) {
    console.error('API Error:', error);
    
    // Handle network errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        error: 'Network error. Please check your internet connection and try again.',
        errorType: 'NETWORK_ERROR' as ApiErrorType,
      };
    }
    
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return {
        success: false,
        error: 'Invalid response from server. Please try again.',
        errorType: 'UNKNOWN_ERROR' as ApiErrorType,
      };
    }
    
    // Handle other errors
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again later.',
      errorType: 'UNKNOWN_ERROR' as ApiErrorType,
    };
  }
}

export function validateEmail(email: string): { isValid: boolean; error?: string } {
  // Check if email is provided
  if (!email || typeof email !== 'string') {
    return { isValid: false, error: 'Email is required' };
  }

  // Trim whitespace
  const trimmedEmail = email.trim();
  
  // Check minimum length
  if (trimmedEmail.length < 5) {
    return { isValid: false, error: 'Email address is too short' };
  }
  
  // Check maximum length (RFC 5321 limit)
  if (trimmedEmail.length > 254) {
    return { isValid: false, error: 'Email address is too long' };
  }

  // Basic structure check
  if (!trimmedEmail.includes('@')) {
    return { isValid: false, error: 'Please enter a valid email address with @' };
  }

  // More comprehensive email regex
  // This regex covers most common email formats while being practical
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if (!emailRegex.test(trimmedEmail)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  // Check for consecutive dots
  if (trimmedEmail.includes('..')) {
    return { isValid: false, error: 'Email address cannot contain consecutive dots' };
  }
  
  // Check local part length (before @)
  const [localPart, domainPart] = trimmedEmail.split('@');
  
  if (localPart.length > 64) {
    return { isValid: false, error: 'Email address local part is too long' };
  }
  
  if (domainPart && domainPart.length > 253) {
    return { isValid: false, error: 'Email domain is too long' };
  }
  
  // Check for valid domain structure
  if (!domainPart || !domainPart.includes('.') || domainPart.startsWith('.') || domainPart.endsWith('.')) {
    return { isValid: false, error: 'Please enter a valid email domain' };
  }

  return { isValid: true };
}