export interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  joinedAt: Date;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}