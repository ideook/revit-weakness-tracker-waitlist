'use client'

import { useEffect, useCallback, useRef } from 'react'

// Debounce utility for performance optimization
export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T {
  const debounceTimer = useRef<NodeJS.Timeout>()

  const debouncedCallback = useCallback((...args: Parameters<T>) => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current)
    }
    
    debounceTimer.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay])

  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
    }
  }, [])

  return debouncedCallback as T
}

// Preload critical resources
export function usePreloadCriticalResources() {
  useEffect(() => {
    // Preload images that might be used
    const imagesToPreload: string[] = [
      // Add any critical images here
    ]

    imagesToPreload.forEach(src => {
      const img = new Image()
      img.src = src
    })

    // Prefetch DNS for external resources
    const linkEl = document.createElement('link')
    linkEl.rel = 'dns-prefetch'
    linkEl.href = 'https://n8n.brdg.kr'
    document.head.appendChild(linkEl)

    return () => {
      if (document.head.contains(linkEl)) {
        document.head.removeChild(linkEl)
      }
    }
  }, [])
}

// Optimize animations for performance
export function useReducedMotion() {
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return prefersReducedMotion
}

// Memory cleanup for components
export function useMemoryCleanup(cleanup: () => void) {
  useEffect(() => {
    return cleanup
  }, [cleanup])
}

