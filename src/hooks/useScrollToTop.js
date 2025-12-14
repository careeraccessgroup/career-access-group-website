import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    // Use requestAnimationFrame for better performance
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Use valid scroll behavior
      })
    }
    
    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(scrollToTop)
    }, 0)
    
    return () => clearTimeout(timeoutId)
  }, [pathname])
}
