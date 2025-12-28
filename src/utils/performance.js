// Performance monitoring for image loading
export const trackImagePerformance = (src, startTime) => {
  const loadTime = performance.now() - startTime
  
  // Only log in development
  if (import.meta.env.DEV) {
    console.log(`Image loaded: ${src} (${loadTime.toFixed(2)}ms)`)
  }
  
  // Track slow loading images
  if (loadTime > 2000) {
    console.warn(`Slow image load detected: ${src} took ${loadTime.toFixed(2)}ms`)
  }
}

// Measure Largest Contentful Paint for images
export const measureLCP = () => {
  if (typeof window === 'undefined') return
  
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      
      if (lastEntry && import.meta.env.DEV) {
        console.log('LCP:', lastEntry.startTime.toFixed(2) + 'ms', lastEntry.element)
      }
    })
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
  } catch (error) {
    console.warn('LCP measurement not supported')
  }
}

// Check if images are properly cached
export const checkImageCaching = (src) => {
  if (typeof window === 'undefined') return
  
  const img = new Image()
  const startTime = performance.now()
  
  img.onload = () => {
    const loadTime = performance.now() - startTime
    
    // If load time is very fast, likely cached
    if (loadTime < 50 && import.meta.env.DEV) {
      console.log(`✓ Image cached: ${src}`)
    }
  }
  
  img.src = src
}

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return
  
  measureLCP()
  
  // Monitor network connections
  if ('connection' in navigator) {
    const connection = navigator.connection
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      console.warn('Slow network detected. Consider showing low-quality images first.')
    }
  }
}