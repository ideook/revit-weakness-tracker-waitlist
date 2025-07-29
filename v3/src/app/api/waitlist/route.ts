import { NextRequest, NextResponse } from 'next/server';
import { WaitlistRequest, ApiResponse, ApiErrorType } from '@/types';

const API_ENDPOINT = 'https://n8n.brdg.kr/webhook/51ab7dc0-54e7-4f88-bae9-d216f6641165';
const API_USERNAME = 'ideook';

export async function POST(request: NextRequest) {
  try {
    // Get API password from environment
    const apiPassword = process.env.API_PASSWORD;
    
    if (!apiPassword) {
      console.error('API_PASSWORD environment variable is not set');
      return NextResponse.json({
        success: false,
        error: 'Configuration error. Please contact support.',
        errorType: 'CONFIG_ERROR' as ApiErrorType,
      } as ApiResponse, { status: 500 });
    }

    // Parse request body
    let body: WaitlistRequest;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json({
        success: false,
        error: 'Invalid request format.',
        errorType: 'VALIDATION_ERROR' as ApiErrorType,
      } as ApiResponse, { status: 400 });
    }

    // Validate email
    if (!body.email || typeof body.email !== 'string') {
      return NextResponse.json({
        success: false,
        error: 'Email is required.',
        errorType: 'VALIDATION_ERROR' as ApiErrorType,
      } as ApiResponse, { status: 400 });
    }

    const email = body.email.trim();
    
    // Basic email validation
    if (!email || email.length < 5 || !email.includes('@')) {
      return NextResponse.json({
        success: false,
        error: 'Please enter a valid email address.',
        errorType: 'VALIDATION_ERROR' as ApiErrorType,
      } as ApiResponse, { status: 400 });
    }

    // Create Basic Auth credentials
    const credentials = Buffer.from(`${API_USERNAME}:${apiPassword}`).toString('base64');
    
    // Make request to n8n webhook
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`,
      },
      body: JSON.stringify({ email }),
    });

    // Handle different HTTP status codes
    if (!response.ok) {
      let errorMessage: string;
      let errorType: ApiErrorType;
      
      switch (response.status) {
        case 400:
          errorMessage = 'Invalid email format. Please check your email address.';
          errorType = 'VALIDATION_ERROR';
          break;
        case 401:
          errorMessage = 'Authentication failed. Please try again later.';
          errorType = 'AUTH_ERROR';
          break;
        case 409:
          errorMessage = 'This email is already on the waitlist!';
          errorType = 'DUPLICATE_ERROR';
          break;
        case 422:
          errorMessage = 'Email format is not valid. Please enter a valid email address.';
          errorType = 'VALIDATION_ERROR';
          break;
        case 429:
          errorMessage = 'Too many requests. Please wait a moment and try again.';
          errorType = 'RATE_LIMIT_ERROR';
          break;
        case 500:
        case 502:
        case 503:
        case 504:
          errorMessage = 'Server is temporarily unavailable. Please try again in a few minutes.';
          errorType = 'SERVER_ERROR';
          break;
        default:
          errorMessage = `Request failed with status ${response.status}. Please try again later.`;
          errorType = 'UNKNOWN_ERROR';
      }
      
      return NextResponse.json({
        success: false,
        error: errorMessage,
        errorType,
        statusCode: response.status,
      } as ApiResponse, { status: response.status });
    }

    // Try to parse response data
    let responseData;
    try {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
    } catch (parseError) {
      console.warn('Failed to parse response data:', parseError);
      responseData = null;
    }
    
    return NextResponse.json({
      success: true,
      message: 'Successfully joined the waitlist! We\'ll notify you when BIMSpark launches.',
      data: responseData,
    } as ApiResponse);
    
  } catch (error) {
    console.error('API Error:', error);
    
    // Handle network errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return NextResponse.json({
        success: false,
        error: 'Network error. Please check your internet connection and try again.',
        errorType: 'NETWORK_ERROR' as ApiErrorType,
      } as ApiResponse, { status: 503 });
    }
    
    // Handle other errors
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again later.',
      errorType: 'UNKNOWN_ERROR' as ApiErrorType,
    } as ApiResponse, { status: 500 });
  }
}