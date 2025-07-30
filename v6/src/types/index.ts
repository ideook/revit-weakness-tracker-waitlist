export interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  joinedAt: Date;
}

export interface WaitlistFormData {
  email: string;
  name?: string;
  company?: string;
  role?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export interface LegacyApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}