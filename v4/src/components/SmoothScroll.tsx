'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Enhanced smooth scrolling for internal links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const href = target.getAttribute('href')
      
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        
        if (element) {
          const headerOffset = 80 // Account for any fixed headers
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    // Add scroll performance optimizations
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Any scroll-based animations or effects can be added here
          ticking = false
        })
        ticking = true
      }
    }

    document.addEventListener('click', handleClick)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}