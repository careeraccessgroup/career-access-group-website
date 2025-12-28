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
  '/0V0A1604.jpg', // Hero background (actual image used)
  '/logo.svg',     // Logo
  '/0V0A1479.jpg', // Gallery first image
  '/0V0A1486.jpg'  // Gallery second image
]

// Preload critical images on app start
export const preloadCriticalImages = () => {
  if (typeof window !== 'undefined') {
    preloadImages(criticalImages).catch(console.warn)
  }
}