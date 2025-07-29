import { type ClassValue, clsx } from 'clsx';

// Utility function to merge class names
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Scroll animation observer
export function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach((element) => observer.observe(element));

  return observer;
}

// Debounce function for input validation
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
}

// Format error messages
export function formatErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An unexpected error occurred';
}