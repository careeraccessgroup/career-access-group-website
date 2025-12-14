// Preload critical images for better performance
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

export const preloadImages = (imageSources) => {
  return Promise.all(imageSources.map(preloadImage))
}

// Critical images that should be preloaded
export const criticalImages = [
  '/0V0A1760.jpg', // Hero background
  '/logo.png'      // Logo
]

// Preload critical images on app start
export const preloadCriticalImages = () => {
  if (typeof window !== 'undefined') {
    preloadImages(criticalImages).catch(console.warn)
  }
}